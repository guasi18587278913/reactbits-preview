import type { NextConfig } from "next";

const repoName = "reactbits-preview";
const isGitHubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  env: {
    NEXT_PUBLIC_BASE_PATH: isGitHubPages ? `/${repoName}` : "",
  },
  ...(isGitHubPages
    ? {
        output: "export" as const,
        basePath: `/${repoName}`,
        assetPrefix: `/${repoName}`,
        images: {
          unoptimized: true,
        },
        trailingSlash: true,
      }
    : {}),
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
