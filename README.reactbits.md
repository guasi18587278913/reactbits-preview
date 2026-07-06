# ReactBits 组件预览中心

这是一个本机组件预览工具，用来快速浏览 CollectUI ReactBits 的付费组件、动效组件和整站模板。

## 启动预览中心

最省事的方式：

```bash
reactbits-preview
```

也可以双击项目里的 `start-preview.command`。

或者在项目目录手动启动：

```bash
npm run preview
```

默认打开：

```text
http://127.0.0.1:3001
```

## 更新组件索引

```bash
npm run sync:reactbits
npm run generate:previews
```

## 安装或刷新全部组件

```bash
REACTBITS_LICENSE_KEY=your_key npm run sync:reactbits:install
npm run generate:previews
```

## 预览整站模板

整站模板是完整的 Next 应用，需要单独启动。模板端口从 `4100` 开始：

```bash
npm run template:dev -- ai-saas
```

下载下来的模板会放在 `templates/`，这个目录不会提交到 GitHub。

## GitHub 部署说明

这个项目建议只推送到私有仓库。ReactBits Pro 组件源码在项目里，公开 GitHub Pages 会暴露付费源码。
