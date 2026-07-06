# ReactBits 组件预览中心

这是一个本机预览网站，用来快速浏览 CollectUI ReactBits 的组件、区块和整站模板。

## 快速启动

最省事的方式：

```bash
reactbits-preview
```

启动后打开：

```text
http://127.0.0.1:3001
```

也可以双击项目里的这个文件启动：

```text
start-preview.command
```

或者进入项目目录手动启动：

```bash
cd /Users/liyadong/projects/reactbits-preview
npm run preview
```

停止预览网站：回到终端按 `Ctrl+C`。

## 更新组件

如果只是刷新已经安装过的组件索引：

```bash
npm run sync:reactbits
npm run generate:previews
```

如果要重新安装或补齐全部组件，需要传入 ReactBits 授权 key：

```bash
REACTBITS_LICENSE_KEY=your_key npm run sync:reactbits:install
npm run generate:previews
```

不要把真实授权 key 写进代码或提交到 GitHub。

## 预览整站模板

整站模板不是普通组件，它本身是一个完整 Next 应用，所以需要单独启动：

```bash
npm run template:dev -- ai-saas
```

模板端口从 `4100` 开始，例如：

```text
http://127.0.0.1:4100
```

下载下来的模板会放在 `templates/`，这个目录不会提交到 GitHub。

## GitHub

这个仓库建议保持私有。ReactBits Pro 组件源码在项目里，公开仓库或公开 Pages 都可能暴露付费源码。

## 在线预览网站

GitHub Pages 地址：

```text
https://guasi18587278913.github.io/reactbits-preview/
```

每次推送到 `main` 分支后，GitHub Actions 会自动重新构建并发布网站。
