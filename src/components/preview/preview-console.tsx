"use client";

import {
  Code2,
  Component,
  GalleryHorizontalEnd,
  Moon,
  PanelLeftClose,
  Search,
  Smartphone,
  Sparkles,
  Star,
} from "lucide-react";
import { useMemo, useState } from "react";
import index from "@/data/reactbits-index.json";
import { previewRegistry } from "@/generated/preview-registry";
import { CopyButton } from "@/components/preview/copy-button";
import { PreviewErrorBoundary } from "@/components/preview/preview-error-boundary";

type Source = "all" | "pro" | "starter" | "template";
type Viewport = "desktop" | "mobile";
type ListedItem = {
  id: string;
  source: "pro" | "starter" | "template";
  name: string;
  title: string;
  category: string;
  installName?: string;
  command: string;
};

const registryById = new Map(previewRegistry.map((item) => [item.id, item]));
const templateItems = index.items.filter((item) => item.source === "template") as ListedItem[];
const sourceLabels: Record<Source, string> = {
  all: "全部",
  pro: "付费组件",
  starter: "动效组件",
  template: "整站模板",
};
const sourceTabs: Array<[Source, string]> = [
  ["pro", "付费"],
  ["starter", "动效"],
  ["template", "整站"],
  ["all", "全部"],
];
const viewportLabels: Record<Viewport, string> = {
  desktop: "桌面",
  mobile: "手机",
};
const categoryLabels: Record<string, string> = {
  "404": "错误页",
  about: "关于",
  auth: "登录",
  blog: "博客",
  comparison: "对比",
  contact: "联系",
  cta: "行动按钮",
  download: "下载",
  ecommerce: "电商",
  faq: "问答",
  features: "功能",
  footer: "页脚",
  hero: "首屏",
  "how-it-works": "使用流程",
  navigation: "导航",
  pricing: "价格",
  profile: "个人资料",
  showcase: "展示",
  "social-proof": "信任背书",
  stats: "数据",
  template: "整站模板",
  tw: "动效组件",
  waitlist: "候补名单",
};

function firstComponent() {
  return previewRegistry.find((item) => item.name === "hero-17") ?? previewRegistry[0];
}

function categoryLabel(source: Source, category: string) {
  if (source === "starter") return "动效组件";
  if (source === "template") return "整站模板";
  return categoryLabels[category] ?? category;
}

export function PreviewConsole() {
  const [source, setSource] = useState<Source>("pro");
  const [category, setCategory] = useState("hero");
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState(firstComponent()?.id ?? "");
  const [viewport, setViewport] = useState<Viewport>("desktop");
  const [compact, setCompact] = useState(false);
  const [favorites, setFavorites] = useState<string[]>([]);

  const allItems = useMemo<ListedItem[]>(
    () => [
      ...previewRegistry.map((item) => ({ ...item })),
      ...templateItems.map((item) => ({
        ...item,
        source: "template" as const,
        installName: item.name,
      })),
    ],
    [],
  );

  const categories = useMemo(() => {
    const map = new Map<string, number>();
    for (const item of allItems) {
      if (source !== "all" && item.source !== source) continue;
      map.set(item.category, (map.get(item.category) ?? 0) + 1);
    }
    return Array.from(map.entries()).sort((a, b) =>
      a[0].localeCompare(b[0], undefined, { numeric: true }),
    );
  }, [allItems, source]);

  const visibleItems = useMemo(() => {
    const text = query.trim().toLowerCase();
    return allItems.filter((item) => {
      if (source !== "all" && item.source !== source) return false;
      if (category !== "all" && item.category !== category) return false;
      if (!text) return true;
      return `${item.name} ${item.title} ${item.category} ${item.source}`
        .toLowerCase()
        .includes(text);
    });
  }, [allItems, category, query, source]);

  const selected =
    visibleItems.find((item) => item.id === selectedId) ??
    visibleItems[0] ??
    allItems.find((item) => item.id === selectedId) ??
    firstComponent();
  const selectedPreview =
    selected?.source === "template" ? null : registryById.get(selected?.id ?? "");

  function setSourceSafe(next: Source) {
    setSource(next);
    setCategory(next === "pro" ? "hero" : next === "starter" ? "tw" : "all");
  }

  function toggleFavorite(id: string) {
    setFavorites((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id],
    );
  }

  return (
    <main className="min-h-screen bg-[#0f100e] text-[#f5f1e8]">
      <div className="grid min-h-screen grid-cols-1 lg:grid-cols-[320px_minmax(0,1fr)]">
        <aside
          className={`${compact ? "lg:hidden" : ""} border-b border-[#282721] bg-[#151611] lg:border-b-0 lg:border-r`}
        >
          <div className="sticky top-0 z-20 border-b border-[#282721] bg-[#151611]/95 p-4 backdrop-blur">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs uppercase tracking-[0.28em] text-[#f2762e]">
                  ReactBits
                </div>
                <h1 className="mt-1 text-2xl font-semibold tracking-tight">
                  组件预览中心
                </h1>
              </div>
              <button
                type="button"
                onClick={() => setCompact(true)}
                className="hidden rounded-[6px] border border-[#36352d] p-2 text-[#c8c1ad] hover:bg-[#202018] lg:inline-flex"
                aria-label="收起侧栏"
              >
                <PanelLeftClose className="size-4" />
              </button>
            </div>

            <div className="mt-4 grid grid-cols-4 gap-1 rounded-[6px] border border-[#2d2c25] bg-[#10110d] p-1">
              {sourceTabs.map(([value, label]) => (
                <button
                  key={value}
                  type="button"
                  onClick={() => setSourceSafe(value as Source)}
                  className={`rounded-[4px] px-2 py-2 text-xs font-medium transition ${
                    source === value
                      ? "bg-[#f2762e] text-[#171008]"
                      : "text-[#b8b09c] hover:bg-[#23231b]"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>

            <label className="mt-4 flex h-10 items-center gap-2 rounded-[6px] border border-[#302f28] bg-[#0f100d] px-3 text-sm text-[#b8b09c]">
              <Search className="size-4" />
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="搜索组件名或分类"
                className="min-w-0 flex-1 bg-transparent text-[#f5f1e8] outline-none placeholder:text-[#6f6a5c]"
              />
            </label>
          </div>

          <div className="grid grid-cols-[120px_minmax(0,1fr)] lg:h-[calc(100vh-177px)]">
            <nav className="overflow-auto border-r border-[#282721] p-2">
              <button
                type="button"
                onClick={() => setCategory("all")}
                className={`mb-1 flex w-full items-center justify-between rounded-[5px] px-2 py-2 text-left text-xs ${
                  category === "all"
                    ? "bg-[#24231b] text-[#fff6de]"
                    : "text-[#a9a18c] hover:bg-[#1d1d16]"
                }`}
              >
                <span>全部</span>
                <span>
                  {allItems.filter((item) => source === "all" || item.source === source).length}
                </span>
              </button>
              {categories.map(([name, count]) => (
                <button
                  key={name}
                  type="button"
                  onClick={() => setCategory(name)}
                  className={`mb-1 flex w-full items-center justify-between rounded-[5px] px-2 py-2 text-left text-xs ${
                    category === name
                      ? "bg-[#24231b] text-[#fff6de]"
                      : "text-[#a9a18c] hover:bg-[#1d1d16]"
                  }`}
                  title={name}
                >
                  <span className="truncate">{categoryLabel(source, name)}</span>
                  <span>{count}</span>
                </button>
              ))}
            </nav>

            <section className="overflow-auto p-2">
              <div className="mb-2 px-2 text-xs text-[#736f62]">
                共 {visibleItems.length} 个
              </div>
              {visibleItems.map((item) => (
                <div
                  key={item.id}
                  className={`mb-2 flex w-full items-start justify-between gap-3 rounded-[6px] border p-3 transition ${
                    selected?.id === item.id
                      ? "border-[#f2762e]/70 bg-[#271b13]"
                      : "border-[#2e2d25] bg-[#141510] hover:border-[#4a4638] hover:bg-[#1a1b14]"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setSelectedId(item.id)}
                    className="min-w-0 flex-1 text-left"
                  >
                    <div className="min-w-0">
                      <div className="truncate text-sm font-medium">{item.name}</div>
                      <div className="mt-1 text-xs text-[#89836f]">
                        {sourceLabels[item.source]} / {categoryLabels[item.category] ?? item.category}
                      </div>
                    </div>
                  </button>
                  <button
                    type="button"
                    onClick={() => toggleFavorite(item.id)}
                    className="rounded p-1 text-[#8c846f] hover:text-[#f7c56b]"
                    aria-label="收藏"
                  >
                    <Star
                      className={`size-4 ${favorites.includes(item.id) ? "fill-[#f7c56b] text-[#f7c56b]" : ""}`}
                    />
                  </button>
                </div>
              ))}
            </section>
          </div>
        </aside>

        <section className="min-w-0">
          <header className="sticky top-0 z-10 flex flex-wrap items-center justify-between gap-3 border-b border-[#282721] bg-[#0f100e]/92 px-4 py-3 backdrop-blur md:px-6">
            <div className="flex min-w-0 items-center gap-3">
              {compact ? (
                <button
                  type="button"
                  onClick={() => setCompact(false)}
                  className="rounded-[6px] border border-[#343229] p-2 text-[#c8c1ad] hover:bg-[#202018]"
                  aria-label="展开侧栏"
                >
                  <GalleryHorizontalEnd className="size-4" />
                </button>
              ) : null}
              <div className="min-w-0">
                <div className="flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-[#807967]">
                  {selected?.source === "pro" ? <Component className="size-3.5" /> : null}
                  {selected?.source === "starter" ? <Sparkles className="size-3.5" /> : null}
                  {selected?.source === "template" ? <Code2 className="size-3.5" /> : null}
                  {selected?.source ? sourceLabels[selected.source] : ""}
                </div>
                <h2 className="truncate text-xl font-semibold">{selected?.name}</h2>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setViewport(viewport === "desktop" ? "mobile" : "desktop")}
                className="inline-flex h-9 items-center gap-2 rounded-[6px] border border-[#343229] bg-[#151611] px-3 text-xs text-[#ded6bd] hover:bg-[#202018]"
              >
                <Smartphone className="size-3.5" />
                {viewportLabels[viewport]}
              </button>
              <button
                type="button"
                className="inline-flex h-9 items-center gap-2 rounded-[6px] border border-[#343229] bg-[#151611] px-3 text-xs text-[#ded6bd]"
              >
                <Moon className="size-3.5" />
                深色
              </button>
              {selected?.command ? <CopyButton value={selected.command} label="复制命令" /> : null}
            </div>
          </header>

          <div className="grid gap-4 p-4 md:p-6 xl:grid-cols-[minmax(0,1fr)_320px]">
            <div className="min-w-0 rounded-[8px] border border-[#2f2e26] bg-[#171811] p-2 shadow-2xl shadow-black/30">
              <div className="mb-2 flex items-center justify-between px-2 py-1 text-xs text-[#7f7968]">
                <span>实时预览</span>
                <span>{viewport === "mobile" ? "390px" : "自适应"}</span>
              </div>
              <div
                className={`mx-auto overflow-hidden rounded-[6px] border border-[#27261f] bg-white text-black ${
                  viewport === "mobile" ? "max-w-[390px]" : "w-full"
                }`}
              >
                {selected?.source === "template" ? (
                  <div className="flex min-h-[620px] items-center justify-center bg-[#111] p-8 text-center text-white">
                    <div>
                      <div className="text-3xl font-semibold">{selected.title}</div>
                      <p className="mx-auto mt-3 max-w-md text-sm text-zinc-400">
                        整站模板需要作为单独的 Next 应用运行。复制右侧启动命令后，在本机打开对应模板地址。
                      </p>
                    </div>
                  </div>
                ) : selectedPreview ? (
                  <PreviewErrorBoundary name={selectedPreview.name}>
                    <selectedPreview.Component />
                  </PreviewErrorBoundary>
                ) : null}
              </div>
            </div>

            <aside className="rounded-[8px] border border-[#2f2e26] bg-[#151611] p-4">
              <div className="text-xs uppercase tracking-[0.22em] text-[#807967]">安装命令</div>
              <code className="mt-3 block rounded-[6px] border border-[#2d2b22] bg-[#0c0d0a] p-3 text-xs leading-6 text-[#f5d2a3]">
                {selected?.command}
              </code>
              {selected?.command ? (
                <div className="mt-3">
                  <CopyButton value={selected.command} label="复制安装命令" />
                </div>
              ) : null}

              <div className="mt-6 grid grid-cols-2 gap-2 text-sm">
                <div className="rounded-[6px] border border-[#2d2b22] bg-[#11120d] p-3">
                  <div className="text-[#77705f]">分类</div>
                  <div className="mt-1 font-medium">
                    {selected?.category ? categoryLabels[selected.category] ?? selected.category : ""}
                  </div>
                </div>
                <div className="rounded-[6px] border border-[#2d2b22] bg-[#11120d] p-3">
                  <div className="text-[#77705f]">来源</div>
                  <div className="mt-1 font-medium">
                    {selected?.source ? sourceLabels[selected.source] : ""}
                  </div>
                </div>
              </div>

              <div className="mt-6 text-xs leading-6 text-[#9d9683]">
                左侧选择组件，在这里预览效果；满意后复制安装命令，粘贴到你的目标项目里。
              </div>
            </aside>
          </div>
        </section>
      </div>
    </main>
  );
}
