"use client";

import type { ComponentType } from "react";

const imageA =
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80";
const imageB =
  "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80";
const imageC =
  "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?auto=format&fit=crop&w=1200&q=80";
const imageD =
  "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1200&q=80";

const images = [imageA, imageB, imageC, imageD];

const graphData = [
  { label: "周一", value: 22 },
  { label: "周二", value: 42 },
  { label: "周三", value: 35 },
  { label: "周四", value: 64 },
  { label: "周五", value: 58 },
  { label: "周六", value: 76 },
  { label: "周日", value: 91 },
];

const listItems = [
  { id: "1", title: "首屏方案", description: "高对比度开场区域", icon: "首" },
  { id: "2", title: "动效层", description: "互动产品展示", icon: "动" },
  { id: "3", title: "转化模块", description: "按钮和信任背书", icon: "转" },
  { id: "4", title: "模板适配", description: "适合 SaaS、机构、金融", icon: "模" },
];

const gridItems = [
  { id: "1", title: "发布", image: imageA },
  { id: "2", title: "工作室", image: imageB },
  { id: "3", title: "系统", image: imageC },
  { id: "4", title: "信号", image: imageD },
  { id: "5", title: "市场", image: imageA },
  { id: "6", title: "运营", image: imageB },
];

const cards = [
  { id: "1", title: "识别", description: "品牌信号", image: imageA },
  { id: "2", title: "动效", description: "互动提示", image: imageB },
  { id: "3", title: "层次", description: "空间层级", image: imageC },
  { id: "4", title: "证明", description: "信任模块", image: imageD },
];

function propsFor(name: string): Record<string, unknown> {
  switch (name) {
    case "3d-letter-swap":
      return { children: "ReactBits" };
    case "3d-text-reveal":
      return { items: ["挑选", "预览", "安装", "上线"] };
    case "animated-list":
      return { items: listItems, height: 360, autoAddDelay: 1400 };
    case "blur-highlight":
      return { children: "先看清动效，再决定要不要安装。" };
    case "comparison-slider":
      return { beforeImage: imageA, afterImage: imageB, showLabels: true, autoAnimate: true };
    case "depth-card":
      return { title: "层次卡片", description: "把鼠标移到卡片表面试试看。", image: imageC };
    case "draggable-grid":
      return { items: gridItems, columns: 3, containerMode: "absolute", scale: 0.82 };
    case "glitch-text":
      return { text: "ReactBits" };
    case "hover-preview":
      return {
        content: "悬停 {0}、{1} 或 {2}，预览不同视觉状态。",
        targets: [
          { text: "首屏", imageUrl: imageA },
          { text: "动效", imageUrl: imageB },
          { text: "模板", imageUrl: imageC },
        ],
      };
    case "liquid-swap":
      return { images, autoCycle: true, className: "h-full w-full" };
    case "parallax-cards":
      return { images, cardCount: 4 };
    case "parallax-carousel":
      return { images, autoplaySpeed: 22, loop: true };
    case "pixel-reveal":
      return { imageSrc: imageD, autoTrigger: true, triggerOnce: false };
    case "pixelate-hover":
      return { image: imageC };
    case "preloader":
      return { loading: true, position: "absolute", duration: 2200, loadingText: "预览中" };
    case "rotating-cards":
      return { cards, radius: 220, cardWidth: 140, cardHeight: 170 };
    case "shader-reveal":
      return { frontImage: imageA, backImage: imageB };
    case "simple-graph":
      return { data: graphData, width: "100%", height: 320, showGrid: true, gradientFade: true };
    case "staggered-text":
      return { text: "ReactBits 组件预览中心" };
    case "text-path":
      return {
        text: "ReactBits 组件预览中心",
        path: "M 120,120 m -82,0 a 82,82 0 1,1 164,0 a 82,82 0 1,1 -164,0",
      };
    default:
      return { className: "h-full w-full" };
  }
}

export function StarterPreviewFrame({
  name,
  Component,
}: {
  name: string;
  Component: ComponentType<Record<string, unknown>>;
}) {
  const props = propsFor(name);

  return (
    <div className="relative flex min-h-[420px] w-full items-center justify-center overflow-hidden rounded-[6px] bg-[#101114] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(77,124,254,0.18),transparent_34%),radial-gradient(circle_at_82%_70%,rgba(255,102,0,0.12),transparent_30%)]" />
      <div className="relative h-full min-h-[420px] w-full">
        <Component {...props} />
      </div>
    </div>
  );
}
