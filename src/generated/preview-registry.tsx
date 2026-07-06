"use client";

import dynamic from "next/dynamic";
import type { ComponentType } from "react";
import { StarterPreviewFrame } from "@/components/preview/starter-preview-frame";

export type PreviewComponent = ComponentType<Record<string, never>>;
export type PreviewMeta = {
  id: string;
  source: "pro" | "starter";
  name: string;
  title: string;
  category: string;
  installName: string;
  command: string;
  Component: PreviewComponent;
};

const fallback = <div className="flex min-h-[360px] items-center justify-center text-sm text-zinc-500">正在加载预览...</div>;

const Preview_pro_404_1 = dynamic(() => import("@/components/blocks/404-1").then((mod) => mod.default), { loading: () => fallback });
const Preview_pro_404_2 = dynamic(() => import("@/components/blocks/404-2").then((mod) => mod.default), { loading: () => fallback });
const Preview_pro_404_3 = dynamic(() => import("@/components/blocks/404-3").then((mod) => mod.default), { loading: () => fallback });
const Preview_pro_404_4 = dynamic(() => import("@/components/blocks/404-4").then((mod) => mod.default), { loading: () => fallback });
const Preview_pro_404_5 = dynamic(() => import("@/components/blocks/404-5").then((mod) => mod.default), { loading: () => fallback });
const Preview_pro_about_1 = dynamic(() => import("@/components/blocks/about-1").then((mod) => mod.default), { loading: () => fallback });
const Preview_pro_about_2 = dynamic(() => import("@/components/blocks/about-2").then((mod) => mod.default), { loading: () => fallback });
const Preview_pro_about_3 = dynamic(() => import("@/components/blocks/about-3").then((mod) => mod.default), { loading: () => fallback });
const Preview_pro_about_4 = dynamic(() => import("@/components/blocks/about-4").then((mod) => mod.default), { loading: () => fallback });
const Preview_pro_about_5 = dynamic(() => import("@/components/blocks/about-5").then((mod) => mod.default), { loading: () => fallback });
const Preview_pro_about_6 = dynamic(() => import("@/components/blocks/about-6").then((mod) => mod.default), { loading: () => fallback });
const Preview_pro_about_7 = dynamic(() => import("@/components/blocks/about-7").then((mod) => mod.default), { loading: () => fallback });
const Preview_pro_about_8 = dynamic(() => import("@/components/blocks/about-8").then((mod) => mod.default), { loading: () => fallback });
const Preview_pro_auth_1 = dynamic(() => import("@/components/blocks/auth-1").then((mod) => mod.default), { loading: () => fallback });
const Preview_pro_auth_2 = dynamic(() => import("@/components/blocks/auth-2").then((mod) => mod.default), { loading: () => fallback });
const Preview_pro_auth_3 = dynamic(() => import("@/components/blocks/auth-3").then((mod) => mod.default), { loading: () => fallback });
const Preview_pro_blog_1 = dynamic(() => import("@/components/blocks/blog-1").then((mod) => mod.Blog1), { loading: () => fallback });
const Preview_pro_blog_2 = dynamic(() => import("@/components/blocks/blog-2").then((mod) => mod.Blog2), { loading: () => fallback });
const Preview_pro_blog_3 = dynamic(() => import("@/components/blocks/blog-3").then((mod) => mod.Blog3), { loading: () => fallback });
const Preview_pro_blog_4 = dynamic(() => import("@/components/blocks/blog-4").then((mod) => mod.Blog4), { loading: () => fallback });
const Preview_pro_blog_5 = dynamic(() => import("@/components/blocks/blog-5").then((mod) => mod.Blog5), { loading: () => fallback });
const Preview_pro_blog_6 = dynamic(() => import("@/components/blocks/blog-6").then((mod) => mod.default), { loading: () => fallback });
const Preview_pro_blog_7 = dynamic(() => import("@/components/blocks/blog-7").then((mod) => mod.default), { loading: () => fallback });
const Preview_pro_comparison_1 = dynamic(() => import("@/components/blocks/comparison-1").then((mod) => mod.default), { loading: () => fallback });
const Preview_pro_comparison_2 = dynamic(() => import("@/components/blocks/comparison-2").then((mod) => mod.default), { loading: () => fallback });
const Preview_pro_comparison_3 = dynamic(() => import("@/components/blocks/comparison-3").then((mod) => mod.default), { loading: () => fallback });
const Preview_pro_comparison_4 = dynamic(() => import("@/components/blocks/comparison-4").then((mod) => mod.default), { loading: () => fallback });
const Preview_pro_contact_1 = dynamic(() => import("@/components/blocks/contact-1").then((mod) => mod.default), { loading: () => fallback });
const Preview_pro_contact_2 = dynamic(() => import("@/components/blocks/contact-2").then((mod) => mod.default), { loading: () => fallback });
const Preview_pro_contact_3 = dynamic(() => import("@/components/blocks/contact-3").then((mod) => mod.default), { loading: () => fallback });
const Preview_pro_contact_4 = dynamic(() => import("@/components/blocks/contact-4").then((mod) => mod.default), { loading: () => fallback });
const Preview_pro_contact_5 = dynamic(() => import("@/components/blocks/contact-5").then((mod) => mod.default), { loading: () => fallback });
const Preview_pro_contact_6 = dynamic(() => import("@/components/blocks/contact-6").then((mod) => mod.default), { loading: () => fallback });
const Preview_pro_contact_7 = dynamic(() => import("@/components/blocks/contact-7").then((mod) => mod.default), { loading: () => fallback });
const Preview_pro_contact_8 = dynamic(() => import("@/components/blocks/contact-8").then((mod) => mod.default), { loading: () => fallback });
const Preview_pro_cta_1 = dynamic(() => import("@/components/blocks/cta-1").then((mod) => mod.default), { loading: () => fallback });
const Preview_pro_cta_2 = dynamic(() => import("@/components/blocks/cta-2").then((mod) => mod.default), { loading: () => fallback });
const Preview_pro_cta_3 = dynamic(() => import("@/components/blocks/cta-3").then((mod) => mod.default), { loading: () => fallback });
const Preview_pro_cta_4 = dynamic(() => import("@/components/blocks/cta-4").then((mod) => mod.default), { loading: () => fallback });
const Preview_pro_cta_5 = dynamic(() => import("@/components/blocks/cta-5").then((mod) => mod.default), { loading: () => fallback });
const Preview_pro_cta_6 = dynamic(() => import("@/components/blocks/cta-6").then((mod) => mod.default), { loading: () => fallback });
const Preview_pro_cta_7 = dynamic(() => import("@/components/blocks/cta-7").then((mod) => mod.default), { loading: () => fallback });
const Preview_pro_cta_8 = dynamic(() => import("@/components/blocks/cta-8").then((mod) => mod.default), { loading: () => fallback });
const Preview_pro_cta_9 = dynamic(() => import("@/components/blocks/cta-9").then((mod) => mod.default), { loading: () => fallback });
const Preview_pro_cta_10 = dynamic(() => import("@/components/blocks/cta-10").then((mod) => mod.default), { loading: () => fallback });
const Preview_pro_download_1 = dynamic(() => import("@/components/blocks/download-1").then((mod) => mod.Download1), { loading: () => fallback });
const Preview_pro_download_2 = dynamic(() => import("@/components/blocks/download-2").then((mod) => mod.Download2), { loading: () => fallback });
const Preview_pro_download_3 = dynamic(() => import("@/components/blocks/download-3").then((mod) => mod.Download3), { loading: () => fallback });
const Preview_pro_download_4 = dynamic(() => import("@/components/blocks/download-4").then((mod) => mod.default), { loading: () => fallback });
const Preview_pro_download_5 = dynamic(() => import("@/components/blocks/download-5").then((mod) => mod.default), { loading: () => fallback });
const Preview_pro_ecommerce_1 = dynamic(() => import("@/components/blocks/ecommerce-1").then((mod) => mod.default), { loading: () => fallback });
const Preview_pro_ecommerce_2 = dynamic(() => import("@/components/blocks/ecommerce-2").then((mod) => mod.default), { loading: () => fallback });
const Preview_pro_ecommerce_3 = dynamic(() => import("@/components/blocks/ecommerce-3").then((mod) => mod.default), { loading: () => fallback });
const Preview_pro_ecommerce_4 = dynamic(() => import("@/components/blocks/ecommerce-4").then((mod) => mod.default), { loading: () => fallback });
const Preview_pro_ecommerce_5 = dynamic(() => import("@/components/blocks/ecommerce-5").then((mod) => mod.default), { loading: () => fallback });
const Preview_pro_ecommerce_6 = dynamic(() => import("@/components/blocks/ecommerce-6").then((mod) => mod.default), { loading: () => fallback });
const Preview_pro_ecommerce_7 = dynamic(() => import("@/components/blocks/ecommerce-7").then((mod) => mod.default), { loading: () => fallback });
const Preview_pro_faq_1 = dynamic(() => import("@/components/blocks/faq-1").then((mod) => mod.default), { loading: () => fallback });
const Preview_pro_faq_2 = dynamic(() => import("@/components/blocks/faq-2").then((mod) => mod.default), { loading: () => fallback });
const Preview_pro_faq_3 = dynamic(() => import("@/components/blocks/faq-3").then((mod) => mod.default), { loading: () => fallback });
const Preview_pro_faq_4 = dynamic(() => import("@/components/blocks/faq-4").then((mod) => mod.default), { loading: () => fallback });
const Preview_pro_faq_5 = dynamic(() => import("@/components/blocks/faq-5").then((mod) => mod.default), { loading: () => fallback });
const Preview_pro_features_1 = dynamic(() => import("@/components/blocks/features-1").then((mod) => mod.Features1), { loading: () => fallback });
const Preview_pro_features_2 = dynamic(() => import("@/components/blocks/features-2").then((mod) => mod.Features2), { loading: () => fallback });
const Preview_pro_features_3 = dynamic(() => import("@/components/blocks/features-3").then((mod) => mod.Features3), { loading: () => fallback });
const Preview_pro_features_4 = dynamic(() => import("@/components/blocks/features-4").then((mod) => mod.Features4), { loading: () => fallback });
const Preview_pro_features_5 = dynamic(() => import("@/components/blocks/features-5").then((mod) => mod.Features5), { loading: () => fallback });
const Preview_pro_features_6 = dynamic(() => import("@/components/blocks/features-6").then((mod) => mod.default), { loading: () => fallback });
const Preview_pro_features_7 = dynamic(() => import("@/components/blocks/features-7").then((mod) => mod.default), { loading: () => fallback });
const Preview_pro_features_8 = dynamic(() => import("@/components/blocks/features-8").then((mod) => mod.default), { loading: () => fallback });
const Preview_pro_features_9 = dynamic(() => import("@/components/blocks/features-9").then((mod) => mod.default), { loading: () => fallback });
const Preview_pro_footer_1 = dynamic(() => import("@/components/blocks/footer-1").then((mod) => mod.default), { loading: () => fallback });
const Preview_pro_footer_2 = dynamic(() => import("@/components/blocks/footer-2").then((mod) => mod.default), { loading: () => fallback });
const Preview_pro_footer_3 = dynamic(() => import("@/components/blocks/footer-3").then((mod) => mod.default), { loading: () => fallback });
const Preview_pro_footer_4 = dynamic(() => import("@/components/blocks/footer-4").then((mod) => mod.default), { loading: () => fallback });
const Preview_pro_footer_5 = dynamic(() => import("@/components/blocks/footer-5").then((mod) => mod.Footer5), { loading: () => fallback });
const Preview_pro_footer_6 = dynamic(() => import("@/components/blocks/footer-6").then((mod) => mod.Footer6), { loading: () => fallback });
const Preview_pro_footer_7 = dynamic(() => import("@/components/blocks/footer-7").then((mod) => mod.default), { loading: () => fallback });
const Preview_pro_footer_8 = dynamic(() => import("@/components/blocks/footer-8").then((mod) => mod.default), { loading: () => fallback });
const Preview_pro_hero_1 = dynamic(() => import("@/components/blocks/hero-1").then((mod) => mod.Hero1), { loading: () => fallback });
const Preview_pro_hero_2 = dynamic(() => import("@/components/blocks/hero-2").then((mod) => mod.Hero2), { loading: () => fallback });
const Preview_pro_hero_3 = dynamic(() => import("@/components/blocks/hero-3").then((mod) => mod.Hero3), { loading: () => fallback });
const Preview_pro_hero_4 = dynamic(() => import("@/components/blocks/hero-4").then((mod) => mod.Hero4), { loading: () => fallback });
const Preview_pro_hero_5 = dynamic(() => import("@/components/blocks/hero-5").then((mod) => mod.Hero5), { loading: () => fallback });
const Preview_pro_hero_6 = dynamic(() => import("@/components/blocks/hero-6").then((mod) => mod.Hero6), { loading: () => fallback });
const Preview_pro_hero_7 = dynamic(() => import("@/components/blocks/hero-7").then((mod) => mod.Hero7), { loading: () => fallback });
const Preview_pro_hero_8 = dynamic(() => import("@/components/blocks/hero-8").then((mod) => mod.Hero8), { loading: () => fallback });
const Preview_pro_hero_9 = dynamic(() => import("@/components/blocks/hero-9").then((mod) => mod.Hero9), { loading: () => fallback });
const Preview_pro_hero_10 = dynamic(() => import("@/components/blocks/hero-10").then((mod) => mod.Hero10), { loading: () => fallback });
const Preview_pro_hero_11 = dynamic(() => import("@/components/blocks/hero-11").then((mod) => mod.Hero11), { loading: () => fallback });
const Preview_pro_hero_12 = dynamic(() => import("@/components/blocks/hero-12").then((mod) => mod.Hero12), { loading: () => fallback });
const Preview_pro_hero_13 = dynamic(() => import("@/components/blocks/hero-13").then((mod) => mod.Hero13), { loading: () => fallback });
const Preview_pro_hero_14 = dynamic(() => import("@/components/blocks/hero-14").then((mod) => mod.Hero14), { loading: () => fallback });
const Preview_pro_hero_15 = dynamic(() => import("@/components/blocks/hero-15").then((mod) => mod.Hero15), { loading: () => fallback });
const Preview_pro_hero_16 = dynamic(() => import("@/components/blocks/hero-16").then((mod) => mod.Hero16), { loading: () => fallback });
const Preview_pro_hero_17 = dynamic(() => import("@/components/blocks/hero-17").then((mod) => mod.Hero17), { loading: () => fallback });
const Preview_pro_how_it_works_1 = dynamic(() => import("@/components/blocks/how-it-works-1").then((mod) => mod.HowItWorks1), { loading: () => fallback });
const Preview_pro_how_it_works_2 = dynamic(() => import("@/components/blocks/how-it-works-2").then((mod) => mod.HowItWorks2), { loading: () => fallback });
const Preview_pro_how_it_works_3 = dynamic(() => import("@/components/blocks/how-it-works-3").then((mod) => mod.HowItWorks3), { loading: () => fallback });
const Preview_pro_how_it_works_4 = dynamic(() => import("@/components/blocks/how-it-works-4").then((mod) => mod.default), { loading: () => fallback });
const Preview_pro_how_it_works_5 = dynamic(() => import("@/components/blocks/how-it-works-5").then((mod) => mod.default), { loading: () => fallback });
const Preview_pro_how_it_works_6 = dynamic(() => import("@/components/blocks/how-it-works-6").then((mod) => mod.default), { loading: () => fallback });
const Preview_pro_navigation_1 = dynamic(() => import("@/components/blocks/navigation-1").then((mod) => mod.default), { loading: () => fallback });
const Preview_pro_navigation_2 = dynamic(() => import("@/components/blocks/navigation-2").then((mod) => mod.default), { loading: () => fallback });
const Preview_pro_navigation_3 = dynamic(() => import("@/components/blocks/navigation-3").then((mod) => mod.default), { loading: () => fallback });
const Preview_pro_navigation_4 = dynamic(() => import("@/components/blocks/navigation-4").then((mod) => mod.default), { loading: () => fallback });
const Preview_pro_navigation_5 = dynamic(() => import("@/components/blocks/navigation-5").then((mod) => mod.default), { loading: () => fallback });
const Preview_pro_navigation_6 = dynamic(() => import("@/components/blocks/navigation-6").then((mod) => mod.Navigation6), { loading: () => fallback });
const Preview_pro_navigation_7 = dynamic(() => import("@/components/blocks/navigation-7").then((mod) => mod.Navigation7), { loading: () => fallback });
const Preview_pro_navigation_8 = dynamic(() => import("@/components/blocks/navigation-8").then((mod) => mod.Navigation8), { loading: () => fallback });
const Preview_pro_navigation_9 = dynamic(() => import("@/components/blocks/navigation-9").then((mod) => mod.default), { loading: () => fallback });
const Preview_pro_navigation_10 = dynamic(() => import("@/components/blocks/navigation-10").then((mod) => mod.default), { loading: () => fallback });
const Preview_pro_navigation_11 = dynamic(() => import("@/components/blocks/navigation-11").then((mod) => mod.default), { loading: () => fallback });
const Preview_pro_pricing_1 = dynamic(() => import("@/components/blocks/pricing-1").then((mod) => mod.default), { loading: () => fallback });
const Preview_pro_pricing_2 = dynamic(() => import("@/components/blocks/pricing-2").then((mod) => mod.default), { loading: () => fallback });
const Preview_pro_pricing_3 = dynamic(() => import("@/components/blocks/pricing-3").then((mod) => mod.default), { loading: () => fallback });
const Preview_pro_pricing_4 = dynamic(() => import("@/components/blocks/pricing-4").then((mod) => mod.default), { loading: () => fallback });
const Preview_pro_pricing_5 = dynamic(() => import("@/components/blocks/pricing-5").then((mod) => mod.Pricing5), { loading: () => fallback });
const Preview_pro_pricing_6 = dynamic(() => import("@/components/blocks/pricing-6").then((mod) => mod.Pricing6), { loading: () => fallback });
const Preview_pro_pricing_7 = dynamic(() => import("@/components/blocks/pricing-7").then((mod) => mod.default), { loading: () => fallback });
const Preview_pro_pricing_8 = dynamic(() => import("@/components/blocks/pricing-8").then((mod) => mod.default), { loading: () => fallback });
const Preview_pro_pricing_9 = dynamic(() => import("@/components/blocks/pricing-9").then((mod) => mod.default), { loading: () => fallback });
const Preview_pro_pricing_10 = dynamic(() => import("@/components/blocks/pricing-10").then((mod) => mod.default), { loading: () => fallback });
const Preview_pro_pricing_11 = dynamic(() => import("@/components/blocks/pricing-11").then((mod) => mod.default), { loading: () => fallback });
const Preview_pro_profile_1 = dynamic(() => import("@/components/blocks/profile-1").then((mod) => mod.default), { loading: () => fallback });
const Preview_pro_profile_2 = dynamic(() => import("@/components/blocks/profile-2").then((mod) => mod.default), { loading: () => fallback });
const Preview_pro_profile_3 = dynamic(() => import("@/components/blocks/profile-3").then((mod) => mod.default), { loading: () => fallback });
const Preview_pro_showcase_1 = dynamic(() => import("@/components/blocks/showcase-1").then((mod) => mod.Showcase1), { loading: () => fallback });
const Preview_pro_showcase_2 = dynamic(() => import("@/components/blocks/showcase-2").then((mod) => mod.Showcase2), { loading: () => fallback });
const Preview_pro_showcase_3 = dynamic(() => import("@/components/blocks/showcase-3").then((mod) => mod.Showcase3), { loading: () => fallback });
const Preview_pro_showcase_4 = dynamic(() => import("@/components/blocks/showcase-4").then((mod) => mod.default), { loading: () => fallback });
const Preview_pro_showcase_5 = dynamic(() => import("@/components/blocks/showcase-5").then((mod) => mod.default), { loading: () => fallback });
const Preview_pro_social_proof_1 = dynamic(() => import("@/components/blocks/social-proof-1").then((mod) => mod.default), { loading: () => fallback });
const Preview_pro_social_proof_2 = dynamic(() => import("@/components/blocks/social-proof-2").then((mod) => mod.default), { loading: () => fallback });
const Preview_pro_social_proof_3 = dynamic(() => import("@/components/blocks/social-proof-3").then((mod) => mod.default), { loading: () => fallback });
const Preview_pro_social_proof_4 = dynamic(() => import("@/components/blocks/social-proof-4").then((mod) => mod.default), { loading: () => fallback });
const Preview_pro_social_proof_5 = dynamic(() => import("@/components/blocks/social-proof-5").then((mod) => mod.default), { loading: () => fallback });
const Preview_pro_social_proof_6 = dynamic(() => import("@/components/blocks/social-proof-6").then((mod) => mod.default), { loading: () => fallback });
const Preview_pro_social_proof_7 = dynamic(() => import("@/components/blocks/social-proof-7").then((mod) => mod.SocialProof7), { loading: () => fallback });
const Preview_pro_social_proof_8 = dynamic(() => import("@/components/blocks/social-proof-8").then((mod) => mod.SocialProof8), { loading: () => fallback });
const Preview_pro_social_proof_9 = dynamic(() => import("@/components/blocks/social-proof-9").then((mod) => mod.SocialProof9), { loading: () => fallback });
const Preview_pro_social_proof_10 = dynamic(() => import("@/components/blocks/social-proof-10").then((mod) => mod.default), { loading: () => fallback });
const Preview_pro_social_proof_11 = dynamic(() => import("@/components/blocks/social-proof-11").then((mod) => mod.default), { loading: () => fallback });
const Preview_pro_social_proof_12 = dynamic(() => import("@/components/blocks/social-proof-12").then((mod) => mod.default), { loading: () => fallback });
const Preview_pro_stats_1 = dynamic(() => import("@/components/blocks/stats-1").then((mod) => mod.default), { loading: () => fallback });
const Preview_pro_stats_2 = dynamic(() => import("@/components/blocks/stats-2").then((mod) => mod.default), { loading: () => fallback });
const Preview_pro_stats_3 = dynamic(() => import("@/components/blocks/stats-3").then((mod) => mod.default), { loading: () => fallback });
const Preview_pro_stats_4 = dynamic(() => import("@/components/blocks/stats-4").then((mod) => mod.default), { loading: () => fallback });
const Preview_pro_stats_5 = dynamic(() => import("@/components/blocks/stats-5").then((mod) => mod.default), { loading: () => fallback });
const Preview_pro_stats_6 = dynamic(() => import("@/components/blocks/stats-6").then((mod) => mod.default), { loading: () => fallback });
const Preview_pro_stats_7 = dynamic(() => import("@/components/blocks/stats-7").then((mod) => mod.default), { loading: () => fallback });
const Preview_pro_stats_8 = dynamic(() => import("@/components/blocks/stats-8").then((mod) => mod.default), { loading: () => fallback });
const Preview_pro_stats_9 = dynamic(() => import("@/components/blocks/stats-9").then((mod) => mod.default), { loading: () => fallback });
const Preview_pro_stats_10 = dynamic(() => import("@/components/blocks/stats-10").then((mod) => mod.default), { loading: () => fallback });
const Preview_pro_stats_11 = dynamic(() => import("@/components/blocks/stats-11").then((mod) => mod.default), { loading: () => fallback });
const Preview_pro_waitlist_1 = dynamic(() => import("@/components/blocks/waitlist-1").then((mod) => mod.default), { loading: () => fallback });
const Preview_pro_waitlist_2 = dynamic(() => import("@/components/blocks/waitlist-2").then((mod) => mod.default), { loading: () => fallback });
const Preview_pro_waitlist_3 = dynamic(() => import("@/components/blocks/waitlist-3").then((mod) => mod.default), { loading: () => fallback });
const Preview_starter_3d_letter_swapInner = dynamic(() => import("@/components/react-bits/3d-letter-swap").then((mod) => mod.default), { ssr: false, loading: () => fallback });
const Preview_starter_3d_letter_swap: PreviewComponent = () => <StarterPreviewFrame name="3d-letter-swap" Component={Preview_starter_3d_letter_swapInner as unknown as ComponentType<Record<string, unknown>>} />;
const Preview_starter_3d_text_revealInner = dynamic(() => import("@/components/react-bits/3d-text-reveal").then((mod) => mod.default), { ssr: false, loading: () => fallback });
const Preview_starter_3d_text_reveal: PreviewComponent = () => <StarterPreviewFrame name="3d-text-reveal" Component={Preview_starter_3d_text_revealInner as unknown as ComponentType<Record<string, unknown>>} />;
const Preview_starter_agentic_ballInner = dynamic(() => import("@/components/react-bits/agentic-ball").then((mod) => mod.default), { ssr: false, loading: () => fallback });
const Preview_starter_agentic_ball: PreviewComponent = () => <StarterPreviewFrame name="agentic-ball" Component={Preview_starter_agentic_ballInner as unknown as ComponentType<Record<string, unknown>>} />;
const Preview_starter_ai_blobInner = dynamic(() => import("@/components/react-bits/ai-blob").then((mod) => mod.default), { ssr: false, loading: () => fallback });
const Preview_starter_ai_blob: PreviewComponent = () => <StarterPreviewFrame name="ai-blob" Component={Preview_starter_ai_blobInner as unknown as ComponentType<Record<string, unknown>>} />;
const Preview_starter_animated_listInner = dynamic(() => import("@/components/react-bits/animated-list").then((mod) => mod.default), { ssr: false, loading: () => fallback });
const Preview_starter_animated_list: PreviewComponent = () => <StarterPreviewFrame name="animated-list" Component={Preview_starter_animated_listInner as unknown as ComponentType<Record<string, unknown>>} />;
const Preview_starter_ascii_cursorInner = dynamic(() => import("@/components/react-bits/ascii-cursor").then((mod) => mod.default), { ssr: false, loading: () => fallback });
const Preview_starter_ascii_cursor: PreviewComponent = () => <StarterPreviewFrame name="ascii-cursor" Component={Preview_starter_ascii_cursorInner as unknown as ComponentType<Record<string, unknown>>} />;
const Preview_starter_ascii_tilesInner = dynamic(() => import("@/components/react-bits/ascii-tiles").then((mod) => mod.default), { ssr: false, loading: () => fallback });
const Preview_starter_ascii_tiles: PreviewComponent = () => <StarterPreviewFrame name="ascii-tiles" Component={Preview_starter_ascii_tilesInner as unknown as ComponentType<Record<string, unknown>>} />;
const Preview_starter_ascii_wavesInner = dynamic(() => import("@/components/react-bits/ascii-waves").then((mod) => mod.default), { ssr: false, loading: () => fallback });
const Preview_starter_ascii_waves: PreviewComponent = () => <StarterPreviewFrame name="ascii-waves" Component={Preview_starter_ascii_wavesInner as unknown as ComponentType<Record<string, unknown>>} />;
const Preview_starter_aurora_blurInner = dynamic(() => import("@/components/react-bits/aurora-blur").then((mod) => mod.default), { ssr: false, loading: () => fallback });
const Preview_starter_aurora_blur: PreviewComponent = () => <StarterPreviewFrame name="aurora-blur" Component={Preview_starter_aurora_blurInner as unknown as ComponentType<Record<string, unknown>>} />;
const Preview_starter_black_holeInner = dynamic(() => import("@/components/react-bits/black-hole").then((mod) => mod.default), { ssr: false, loading: () => fallback });
const Preview_starter_black_hole: PreviewComponent = () => <StarterPreviewFrame name="black-hole" Component={Preview_starter_black_holeInner as unknown as ComponentType<Record<string, unknown>>} />;
const Preview_starter_blinking_squaresInner = dynamic(() => import("@/components/react-bits/blinking-squares").then((mod) => mod.default), { ssr: false, loading: () => fallback });
const Preview_starter_blinking_squares: PreviewComponent = () => <StarterPreviewFrame name="blinking-squares" Component={Preview_starter_blinking_squaresInner as unknown as ComponentType<Record<string, unknown>>} />;
const Preview_starter_blur_highlightInner = dynamic(() => import("@/components/react-bits/blur-highlight").then((mod) => mod.default), { ssr: false, loading: () => fallback });
const Preview_starter_blur_highlight: PreviewComponent = () => <StarterPreviewFrame name="blur-highlight" Component={Preview_starter_blur_highlightInner as unknown as ComponentType<Record<string, unknown>>} />;
const Preview_starter_blurred_raysInner = dynamic(() => import("@/components/react-bits/blurred-rays").then((mod) => mod.default), { ssr: false, loading: () => fallback });
const Preview_starter_blurred_rays: PreviewComponent = () => <StarterPreviewFrame name="blurred-rays" Component={Preview_starter_blurred_raysInner as unknown as ComponentType<Record<string, unknown>>} />;
const Preview_starter_center_flowInner = dynamic(() => import("@/components/react-bits/center-flow").then((mod) => mod.default), { ssr: false, loading: () => fallback });
const Preview_starter_center_flow: PreviewComponent = () => <StarterPreviewFrame name="center-flow" Component={Preview_starter_center_flowInner as unknown as ComponentType<Record<string, unknown>>} />;
const Preview_starter_chroma_blindsInner = dynamic(() => import("@/components/react-bits/chroma-blinds").then((mod) => mod.default), { ssr: false, loading: () => fallback });
const Preview_starter_chroma_blinds: PreviewComponent = () => <StarterPreviewFrame name="chroma-blinds" Component={Preview_starter_chroma_blindsInner as unknown as ComponentType<Record<string, unknown>>} />;
const Preview_starter_chroma_cardInner = dynamic(() => import("@/components/react-bits/chroma-card").then((mod) => mod.default), { ssr: false, loading: () => fallback });
const Preview_starter_chroma_card: PreviewComponent = () => <StarterPreviewFrame name="chroma-card" Component={Preview_starter_chroma_cardInner as unknown as ComponentType<Record<string, unknown>>} />;
const Preview_starter_chroma_wavesInner = dynamic(() => import("@/components/react-bits/chroma-waves").then((mod) => mod.default), { ssr: false, loading: () => fallback });
const Preview_starter_chroma_waves: PreviewComponent = () => <StarterPreviewFrame name="chroma-waves" Component={Preview_starter_chroma_wavesInner as unknown as ComponentType<Record<string, unknown>>} />;
const Preview_starter_circle_galleryInner = dynamic(() => import("@/components/react-bits/circle-gallery").then((mod) => mod.default), { ssr: false, loading: () => fallback });
const Preview_starter_circle_gallery: PreviewComponent = () => <StarterPreviewFrame name="circle-gallery" Component={Preview_starter_circle_galleryInner as unknown as ComponentType<Record<string, unknown>>} />;
const Preview_starter_circle_stackInner = dynamic(() => import("@/components/react-bits/circle-stack").then((mod) => mod.default), { ssr: false, loading: () => fallback });
const Preview_starter_circle_stack: PreviewComponent = () => <StarterPreviewFrame name="circle-stack" Component={Preview_starter_circle_stackInner as unknown as ComponentType<Record<string, unknown>>} />;
const Preview_starter_circlesInner = dynamic(() => import("@/components/react-bits/circles").then((mod) => mod.default), { ssr: false, loading: () => fallback });
const Preview_starter_circles: PreviewComponent = () => <StarterPreviewFrame name="circles" Component={Preview_starter_circlesInner as unknown as ComponentType<Record<string, unknown>>} />;
const Preview_starter_click_stackInner = dynamic(() => import("@/components/react-bits/click-stack").then((mod) => mod.default), { ssr: false, loading: () => fallback });
const Preview_starter_click_stack: PreviewComponent = () => <StarterPreviewFrame name="click-stack" Component={Preview_starter_click_stackInner as unknown as ComponentType<Record<string, unknown>>} />;
const Preview_starter_color_loopsInner = dynamic(() => import("@/components/react-bits/color-loops").then((mod) => mod.default), { ssr: false, loading: () => fallback });
const Preview_starter_color_loops: PreviewComponent = () => <StarterPreviewFrame name="color-loops" Component={Preview_starter_color_loopsInner as unknown as ComponentType<Record<string, unknown>>} />;
const Preview_starter_comparison_sliderInner = dynamic(() => import("@/components/react-bits/comparison-slider").then((mod) => mod.default), { ssr: false, loading: () => fallback });
const Preview_starter_comparison_slider: PreviewComponent = () => <StarterPreviewFrame name="comparison-slider" Component={Preview_starter_comparison_sliderInner as unknown as ComponentType<Record<string, unknown>>} />;
const Preview_starter_credit_cardInner = dynamic(() => import("@/components/react-bits/credit-card").then((mod) => mod.default), { ssr: false, loading: () => fallback });
const Preview_starter_credit_card: PreviewComponent = () => <StarterPreviewFrame name="credit-card" Component={Preview_starter_credit_cardInner as unknown as ComponentType<Record<string, unknown>>} />;
const Preview_starter_cursor_waveInner = dynamic(() => import("@/components/react-bits/cursor-wave").then((mod) => mod.default), { ssr: false, loading: () => fallback });
const Preview_starter_cursor_wave: PreviewComponent = () => <StarterPreviewFrame name="cursor-wave" Component={Preview_starter_cursor_waveInner as unknown as ComponentType<Record<string, unknown>>} />;
const Preview_starter_custom_cursorInner = dynamic(() => import("@/components/react-bits/custom-cursor").then((mod) => mod.default), { ssr: false, loading: () => fallback });
const Preview_starter_custom_cursor: PreviewComponent = () => <StarterPreviewFrame name="custom-cursor" Component={Preview_starter_custom_cursorInner as unknown as ComponentType<Record<string, unknown>>} />;
const Preview_starter_depth_cardInner = dynamic(() => import("@/components/react-bits/depth-card").then((mod) => mod.default), { ssr: false, loading: () => fallback });
const Preview_starter_depth_card: PreviewComponent = () => <StarterPreviewFrame name="depth-card" Component={Preview_starter_depth_cardInner as unknown as ComponentType<Record<string, unknown>>} />;
const Preview_starter_deviceInner = dynamic(() => import("@/components/react-bits/device").then((mod) => mod.default), { ssr: false, loading: () => fallback });
const Preview_starter_device: PreviewComponent = () => <StarterPreviewFrame name="device" Component={Preview_starter_deviceInner as unknown as ComponentType<Record<string, unknown>>} />;
const Preview_starter_dither_cursorInner = dynamic(() => import("@/components/react-bits/dither-cursor").then((mod) => mod.default), { ssr: false, loading: () => fallback });
const Preview_starter_dither_cursor: PreviewComponent = () => <StarterPreviewFrame name="dither-cursor" Component={Preview_starter_dither_cursorInner as unknown as ComponentType<Record<string, unknown>>} />;
const Preview_starter_dither_waveInner = dynamic(() => import("@/components/react-bits/dither-wave").then((mod) => mod.default), { ssr: false, loading: () => fallback });
const Preview_starter_dither_wave: PreviewComponent = () => <StarterPreviewFrame name="dither-wave" Component={Preview_starter_dither_waveInner as unknown as ComponentType<Record<string, unknown>>} />;
const Preview_starter_dot_shiftInner = dynamic(() => import("@/components/react-bits/dot-shift").then((mod) => mod.default), { ssr: false, loading: () => fallback });
const Preview_starter_dot_shift: PreviewComponent = () => <StarterPreviewFrame name="dot-shift" Component={Preview_starter_dot_shiftInner as unknown as ComponentType<Record<string, unknown>>} />;
const Preview_starter_draggable_gridInner = dynamic(() => import("@/components/react-bits/draggable-grid").then((mod) => mod.default), { ssr: false, loading: () => fallback });
const Preview_starter_draggable_grid: PreviewComponent = () => <StarterPreviewFrame name="draggable-grid" Component={Preview_starter_draggable_gridInner as unknown as ComponentType<Record<string, unknown>>} />;
const Preview_starter_falling_raysInner = dynamic(() => import("@/components/react-bits/falling-rays").then((mod) => mod.default), { ssr: false, loading: () => fallback });
const Preview_starter_falling_rays: PreviewComponent = () => <StarterPreviewFrame name="falling-rays" Component={Preview_starter_falling_raysInner as unknown as ComponentType<Record<string, unknown>>} />;
const Preview_starter_flame_pathsInner = dynamic(() => import("@/components/react-bits/flame-paths").then((mod) => mod.default), { ssr: false, loading: () => fallback });
const Preview_starter_flame_paths: PreviewComponent = () => <StarterPreviewFrame name="flame-paths" Component={Preview_starter_flame_pathsInner as unknown as ComponentType<Record<string, unknown>>} />;
const Preview_starter_flickerInner = dynamic(() => import("@/components/react-bits/flicker").then((mod) => mod.default), { ssr: false, loading: () => fallback });
const Preview_starter_flicker: PreviewComponent = () => <StarterPreviewFrame name="flicker" Component={Preview_starter_flickerInner as unknown as ComponentType<Record<string, unknown>>} />;
const Preview_starter_fog_sphereInner = dynamic(() => import("@/components/react-bits/fog-sphere").then((mod) => mod.default), { ssr: false, loading: () => fallback });
const Preview_starter_fog_sphere: PreviewComponent = () => <StarterPreviewFrame name="fog-sphere" Component={Preview_starter_fog_sphereInner as unknown as ComponentType<Record<string, unknown>>} />;
const Preview_starter_frame_borderInner = dynamic(() => import("@/components/react-bits/frame-border").then((mod) => mod.default), { ssr: false, loading: () => fallback });
const Preview_starter_frame_border: PreviewComponent = () => <StarterPreviewFrame name="frame-border" Component={Preview_starter_frame_borderInner as unknown as ComponentType<Record<string, unknown>>} />;
const Preview_starter_glass_cursorInner = dynamic(() => import("@/components/react-bits/glass-cursor").then((mod) => mod.default), { ssr: false, loading: () => fallback });
const Preview_starter_glass_cursor: PreviewComponent = () => <StarterPreviewFrame name="glass-cursor" Component={Preview_starter_glass_cursorInner as unknown as ComponentType<Record<string, unknown>>} />;
const Preview_starter_glass_flowInner = dynamic(() => import("@/components/react-bits/glass-flow").then((mod) => mod.default), { ssr: false, loading: () => fallback });
const Preview_starter_glass_flow: PreviewComponent = () => <StarterPreviewFrame name="glass-flow" Component={Preview_starter_glass_flowInner as unknown as ComponentType<Record<string, unknown>>} />;
const Preview_starter_glass_tilesInner = dynamic(() => import("@/components/react-bits/glass-tiles").then((mod) => mod.default), { ssr: false, loading: () => fallback });
const Preview_starter_glass_tiles: PreviewComponent = () => <StarterPreviewFrame name="glass-tiles" Component={Preview_starter_glass_tilesInner as unknown as ComponentType<Record<string, unknown>>} />;
const Preview_starter_glitch_textInner = dynamic(() => import("@/components/react-bits/glitch-text").then((mod) => mod.default), { ssr: false, loading: () => fallback });
const Preview_starter_glitch_text: PreviewComponent = () => <StarterPreviewFrame name="glitch-text" Component={Preview_starter_glitch_textInner as unknown as ComponentType<Record<string, unknown>>} />;
const Preview_starter_glitter_warpInner = dynamic(() => import("@/components/react-bits/glitter-warp").then((mod) => mod.default), { ssr: false, loading: () => fallback });
const Preview_starter_glitter_warp: PreviewComponent = () => <StarterPreviewFrame name="glitter-warp" Component={Preview_starter_glitter_warpInner as unknown as ComponentType<Record<string, unknown>>} />;
const Preview_starter_globeInner = dynamic(() => import("@/components/react-bits/globe").then((mod) => mod.default), { ssr: false, loading: () => fallback });
const Preview_starter_globe: PreviewComponent = () => <StarterPreviewFrame name="globe" Component={Preview_starter_globeInner as unknown as ComponentType<Record<string, unknown>>} />;
const Preview_starter_gradient_barsInner = dynamic(() => import("@/components/react-bits/gradient-bars").then((mod) => mod.default), { ssr: false, loading: () => fallback });
const Preview_starter_gradient_bars: PreviewComponent = () => <StarterPreviewFrame name="gradient-bars" Component={Preview_starter_gradient_barsInner as unknown as ComponentType<Record<string, unknown>>} />;
const Preview_starter_gradient_blobInner = dynamic(() => import("@/components/react-bits/gradient-blob").then((mod) => mod.default), { ssr: false, loading: () => fallback });
const Preview_starter_gradient_blob: PreviewComponent = () => <StarterPreviewFrame name="gradient-blob" Component={Preview_starter_gradient_blobInner as unknown as ComponentType<Record<string, unknown>>} />;
const Preview_starter_gradient_carouselInner = dynamic(() => import("@/components/react-bits/gradient-carousel").then((mod) => mod.default), { ssr: false, loading: () => fallback });
const Preview_starter_gradient_carousel: PreviewComponent = () => <StarterPreviewFrame name="gradient-carousel" Component={Preview_starter_gradient_carouselInner as unknown as ComponentType<Record<string, unknown>>} />;
const Preview_starter_grain_waveInner = dynamic(() => import("@/components/react-bits/grain-wave").then((mod) => mod.default), { ssr: false, loading: () => fallback });
const Preview_starter_grain_wave: PreviewComponent = () => <StarterPreviewFrame name="grain-wave" Component={Preview_starter_grain_waveInner as unknown as ComponentType<Record<string, unknown>>} />;
const Preview_starter_halftone_vortexInner = dynamic(() => import("@/components/react-bits/halftone-vortex").then((mod) => mod.default), { ssr: false, loading: () => fallback });
const Preview_starter_halftone_vortex: PreviewComponent = () => <StarterPreviewFrame name="halftone-vortex" Component={Preview_starter_halftone_vortexInner as unknown as ComponentType<Record<string, unknown>>} />;
const Preview_starter_halftone_waveInner = dynamic(() => import("@/components/react-bits/halftone-wave").then((mod) => mod.default), { ssr: false, loading: () => fallback });
const Preview_starter_halftone_wave: PreviewComponent = () => <StarterPreviewFrame name="halftone-wave" Component={Preview_starter_halftone_waveInner as unknown as ComponentType<Record<string, unknown>>} />;
const Preview_starter_hover_previewInner = dynamic(() => import("@/components/react-bits/hover-preview").then((mod) => mod.default), { ssr: false, loading: () => fallback });
const Preview_starter_hover_preview: PreviewComponent = () => <StarterPreviewFrame name="hover-preview" Component={Preview_starter_hover_previewInner as unknown as ComponentType<Record<string, unknown>>} />;
const Preview_starter_infinite_galleryInner = dynamic(() => import("@/components/react-bits/infinite-gallery").then((mod) => mod.default), { ssr: false, loading: () => fallback });
const Preview_starter_infinite_gallery: PreviewComponent = () => <StarterPreviewFrame name="infinite-gallery" Component={Preview_starter_infinite_galleryInner as unknown as ComponentType<Record<string, unknown>>} />;
const Preview_starter_light_dropletsInner = dynamic(() => import("@/components/react-bits/light-droplets").then((mod) => mod.default), { ssr: false, loading: () => fallback });
const Preview_starter_light_droplets: PreviewComponent = () => <StarterPreviewFrame name="light-droplets" Component={Preview_starter_light_dropletsInner as unknown as ComponentType<Record<string, unknown>>} />;
const Preview_starter_lightspeedInner = dynamic(() => import("@/components/react-bits/lightspeed").then((mod) => mod.default), { ssr: false, loading: () => fallback });
const Preview_starter_lightspeed: PreviewComponent = () => <StarterPreviewFrame name="lightspeed" Component={Preview_starter_lightspeedInner as unknown as ComponentType<Record<string, unknown>>} />;
const Preview_starter_liquid_asciiInner = dynamic(() => import("@/components/react-bits/liquid-ascii").then((mod) => mod.default), { ssr: false, loading: () => fallback });
const Preview_starter_liquid_ascii: PreviewComponent = () => <StarterPreviewFrame name="liquid-ascii" Component={Preview_starter_liquid_asciiInner as unknown as ComponentType<Record<string, unknown>>} />;
const Preview_starter_liquid_barsInner = dynamic(() => import("@/components/react-bits/liquid-bars").then((mod) => mod.default), { ssr: false, loading: () => fallback });
const Preview_starter_liquid_bars: PreviewComponent = () => <StarterPreviewFrame name="liquid-bars" Component={Preview_starter_liquid_barsInner as unknown as ComponentType<Record<string, unknown>>} />;
const Preview_starter_liquid_linesInner = dynamic(() => import("@/components/react-bits/liquid-lines").then((mod) => mod.default), { ssr: false, loading: () => fallback });
const Preview_starter_liquid_lines: PreviewComponent = () => <StarterPreviewFrame name="liquid-lines" Component={Preview_starter_liquid_linesInner as unknown as ComponentType<Record<string, unknown>>} />;
const Preview_starter_liquid_swapInner = dynamic(() => import("@/components/react-bits/liquid-swap").then((mod) => mod.default), { ssr: false, loading: () => fallback });
const Preview_starter_liquid_swap: PreviewComponent = () => <StarterPreviewFrame name="liquid-swap" Component={Preview_starter_liquid_swapInner as unknown as ComponentType<Record<string, unknown>>} />;
const Preview_starter_magic_transformInner = dynamic(() => import("@/components/react-bits/magic-transform").then((mod) => mod.default), { ssr: false, loading: () => fallback });
const Preview_starter_magic_transform: PreviewComponent = () => <StarterPreviewFrame name="magic-transform" Component={Preview_starter_magic_transformInner as unknown as ComponentType<Record<string, unknown>>} />;
const Preview_starter_metallic_swirlInner = dynamic(() => import("@/components/react-bits/metallic-swirl").then((mod) => mod.default), { ssr: false, loading: () => fallback });
const Preview_starter_metallic_swirl: PreviewComponent = () => <StarterPreviewFrame name="metallic-swirl" Component={Preview_starter_metallic_swirlInner as unknown as ComponentType<Record<string, unknown>>} />;
const Preview_starter_modal_cardsInner = dynamic(() => import("@/components/react-bits/modal-cards").then((mod) => mod.default), { ssr: false, loading: () => fallback });
const Preview_starter_modal_cards: PreviewComponent = () => <StarterPreviewFrame name="modal-cards" Component={Preview_starter_modal_cardsInner as unknown as ComponentType<Record<string, unknown>>} />;
const Preview_starter_mosaicInner = dynamic(() => import("@/components/react-bits/mosaic").then((mod) => mod.default), { ssr: false, loading: () => fallback });
const Preview_starter_mosaic: PreviewComponent = () => <StarterPreviewFrame name="mosaic" Component={Preview_starter_mosaicInner as unknown as ComponentType<Record<string, unknown>>} />;
const Preview_starter_neon_revealInner = dynamic(() => import("@/components/react-bits/neon-reveal").then((mod) => mod.default), { ssr: false, loading: () => fallback });
const Preview_starter_neon_reveal: PreviewComponent = () => <StarterPreviewFrame name="neon-reveal" Component={Preview_starter_neon_revealInner as unknown as ComponentType<Record<string, unknown>>} />;
const Preview_starter_parallax_cardsInner = dynamic(() => import("@/components/react-bits/parallax-cards").then((mod) => mod.default), { ssr: false, loading: () => fallback });
const Preview_starter_parallax_cards: PreviewComponent = () => <StarterPreviewFrame name="parallax-cards" Component={Preview_starter_parallax_cardsInner as unknown as ComponentType<Record<string, unknown>>} />;
const Preview_starter_parallax_carouselInner = dynamic(() => import("@/components/react-bits/parallax-carousel").then((mod) => mod.default), { ssr: false, loading: () => fallback });
const Preview_starter_parallax_carousel: PreviewComponent = () => <StarterPreviewFrame name="parallax-carousel" Component={Preview_starter_parallax_carouselInner as unknown as ComponentType<Record<string, unknown>>} />;
const Preview_starter_parallax_pillsInner = dynamic(() => import("@/components/react-bits/parallax-pills").then((mod) => mod.default), { ssr: false, loading: () => fallback });
const Preview_starter_parallax_pills: PreviewComponent = () => <StarterPreviewFrame name="parallax-pills" Component={Preview_starter_parallax_pillsInner as unknown as ComponentType<Record<string, unknown>>} />;
const Preview_starter_particle_textInner = dynamic(() => import("@/components/react-bits/particle-text").then((mod) => mod.default), { ssr: false, loading: () => fallback });
const Preview_starter_particle_text: PreviewComponent = () => <StarterPreviewFrame name="particle-text" Component={Preview_starter_particle_textInner as unknown as ComponentType<Record<string, unknown>>} />;
const Preview_starter_perspective_gridInner = dynamic(() => import("@/components/react-bits/perspective-grid").then((mod) => mod.default), { ssr: false, loading: () => fallback });
const Preview_starter_perspective_grid: PreviewComponent = () => <StarterPreviewFrame name="perspective-grid" Component={Preview_starter_perspective_gridInner as unknown as ComponentType<Record<string, unknown>>} />;
const Preview_starter_pixel_revealInner = dynamic(() => import("@/components/react-bits/pixel-reveal").then((mod) => mod.default), { ssr: false, loading: () => fallback });
const Preview_starter_pixel_reveal: PreviewComponent = () => <StarterPreviewFrame name="pixel-reveal" Component={Preview_starter_pixel_revealInner as unknown as ComponentType<Record<string, unknown>>} />;
const Preview_starter_pixelate_hoverInner = dynamic(() => import("@/components/react-bits/pixelate-hover").then((mod) => mod.default), { ssr: false, loading: () => fallback });
const Preview_starter_pixelate_hover: PreviewComponent = () => <StarterPreviewFrame name="pixelate-hover" Component={Preview_starter_pixelate_hoverInner as unknown as ComponentType<Record<string, unknown>>} />;
const Preview_starter_portalInner = dynamic(() => import("@/components/react-bits/portal").then((mod) => mod.default), { ssr: false, loading: () => fallback });
const Preview_starter_portal: PreviewComponent = () => <StarterPreviewFrame name="portal" Component={Preview_starter_portalInner as unknown as ComponentType<Record<string, unknown>>} />;
const Preview_starter_preloaderInner = dynamic(() => import("@/components/react-bits/preloader").then((mod) => mod.default), { ssr: false, loading: () => fallback });
const Preview_starter_preloader: PreviewComponent = () => <StarterPreviewFrame name="preloader" Component={Preview_starter_preloaderInner as unknown as ComponentType<Record<string, unknown>>} />;
const Preview_starter_radial_liquidInner = dynamic(() => import("@/components/react-bits/radial-liquid").then((mod) => mod.default), { ssr: false, loading: () => fallback });
const Preview_starter_radial_liquid: PreviewComponent = () => <StarterPreviewFrame name="radial-liquid" Component={Preview_starter_radial_liquidInner as unknown as ComponentType<Record<string, unknown>>} />;
const Preview_starter_retro_linesInner = dynamic(() => import("@/components/react-bits/retro-lines").then((mod) => mod.default), { ssr: false, loading: () => fallback });
const Preview_starter_retro_lines: PreviewComponent = () => <StarterPreviewFrame name="retro-lines" Component={Preview_starter_retro_linesInner as unknown as ComponentType<Record<string, unknown>>} />;
const Preview_starter_rising_linesInner = dynamic(() => import("@/components/react-bits/rising-lines").then((mod) => mod.default), { ssr: false, loading: () => fallback });
const Preview_starter_rising_lines: PreviewComponent = () => <StarterPreviewFrame name="rising-lines" Component={Preview_starter_rising_linesInner as unknown as ComponentType<Record<string, unknown>>} />;
const Preview_starter_rotating_cardsInner = dynamic(() => import("@/components/react-bits/rotating-cards").then((mod) => mod.default), { ssr: false, loading: () => fallback });
const Preview_starter_rotating_cards: PreviewComponent = () => <StarterPreviewFrame name="rotating-cards" Component={Preview_starter_rotating_cardsInner as unknown as ComponentType<Record<string, unknown>>} />;
const Preview_starter_rotating_starsInner = dynamic(() => import("@/components/react-bits/rotating-stars").then((mod) => mod.default), { ssr: false, loading: () => fallback });
const Preview_starter_rotating_stars: PreviewComponent = () => <StarterPreviewFrame name="rotating-stars" Component={Preview_starter_rotating_starsInner as unknown as ComponentType<Record<string, unknown>>} />;
const Preview_starter_rubber_fluidInner = dynamic(() => import("@/components/react-bits/rubber-fluid").then((mod) => mod.default), { ssr: false, loading: () => fallback });
const Preview_starter_rubber_fluid: PreviewComponent = () => <StarterPreviewFrame name="rubber-fluid" Component={Preview_starter_rubber_fluidInner as unknown as ComponentType<Record<string, unknown>>} />;
const Preview_starter_shader_cardInner = dynamic(() => import("@/components/react-bits/shader-card").then((mod) => mod.default), { ssr: false, loading: () => fallback });
const Preview_starter_shader_card: PreviewComponent = () => <StarterPreviewFrame name="shader-card" Component={Preview_starter_shader_cardInner as unknown as ComponentType<Record<string, unknown>>} />;
const Preview_starter_shader_revealInner = dynamic(() => import("@/components/react-bits/shader-reveal").then((mod) => mod.default), { ssr: false, loading: () => fallback });
const Preview_starter_shader_reveal: PreviewComponent = () => <StarterPreviewFrame name="shader-reveal" Component={Preview_starter_shader_revealInner as unknown as ComponentType<Record<string, unknown>>} />;
const Preview_starter_shader_wavesInner = dynamic(() => import("@/components/react-bits/shader-waves").then((mod) => mod.default), { ssr: false, loading: () => fallback });
const Preview_starter_shader_waves: PreviewComponent = () => <StarterPreviewFrame name="shader-waves" Component={Preview_starter_shader_wavesInner as unknown as ComponentType<Record<string, unknown>>} />;
const Preview_starter_shadow_barsInner = dynamic(() => import("@/components/react-bits/shadow-bars").then((mod) => mod.default), { ssr: false, loading: () => fallback });
const Preview_starter_shadow_bars: PreviewComponent = () => <StarterPreviewFrame name="shadow-bars" Component={Preview_starter_shadow_barsInner as unknown as ComponentType<Record<string, unknown>>} />;
const Preview_starter_silk_wavesInner = dynamic(() => import("@/components/react-bits/silk-waves").then((mod) => mod.default), { ssr: false, loading: () => fallback });
const Preview_starter_silk_waves: PreviewComponent = () => <StarterPreviewFrame name="silk-waves" Component={Preview_starter_silk_wavesInner as unknown as ComponentType<Record<string, unknown>>} />;
const Preview_starter_simple_graphInner = dynamic(() => import("@/components/react-bits/simple-graph").then((mod) => mod.default), { ssr: false, loading: () => fallback });
const Preview_starter_simple_graph: PreviewComponent = () => <StarterPreviewFrame name="simple-graph" Component={Preview_starter_simple_graphInner as unknown as ComponentType<Record<string, unknown>>} />;
const Preview_starter_simple_swirlInner = dynamic(() => import("@/components/react-bits/simple-swirl").then((mod) => mod.default), { ssr: false, loading: () => fallback });
const Preview_starter_simple_swirl: PreviewComponent = () => <StarterPreviewFrame name="simple-swirl" Component={Preview_starter_simple_swirlInner as unknown as ComponentType<Record<string, unknown>>} />;
const Preview_starter_smooth_cursorInner = dynamic(() => import("@/components/react-bits/smooth-cursor").then((mod) => mod.default), { ssr: false, loading: () => fallback });
const Preview_starter_smooth_cursor: PreviewComponent = () => <StarterPreviewFrame name="smooth-cursor" Component={Preview_starter_smooth_cursorInner as unknown as ComponentType<Record<string, unknown>>} />;
const Preview_starter_square_matrixInner = dynamic(() => import("@/components/react-bits/square-matrix").then((mod) => mod.default), { ssr: false, loading: () => fallback });
const Preview_starter_square_matrix: PreviewComponent = () => <StarterPreviewFrame name="square-matrix" Component={Preview_starter_square_matrixInner as unknown as ComponentType<Record<string, unknown>>} />;
const Preview_starter_squircle_shiftInner = dynamic(() => import("@/components/react-bits/squircle-shift").then((mod) => mod.default), { ssr: false, loading: () => fallback });
const Preview_starter_squircle_shift: PreviewComponent = () => <StarterPreviewFrame name="squircle-shift" Component={Preview_starter_squircle_shiftInner as unknown as ComponentType<Record<string, unknown>>} />;
const Preview_starter_staggered_textInner = dynamic(() => import("@/components/react-bits/staggered-text").then((mod) => mod.default), { ssr: false, loading: () => fallback });
const Preview_starter_staggered_text: PreviewComponent = () => <StarterPreviewFrame name="staggered-text" Component={Preview_starter_staggered_textInner as unknown as ComponentType<Record<string, unknown>>} />;
const Preview_starter_star_burstInner = dynamic(() => import("@/components/react-bits/star-burst").then((mod) => mod.default), { ssr: false, loading: () => fallback });
const Preview_starter_star_burst: PreviewComponent = () => <StarterPreviewFrame name="star-burst" Component={Preview_starter_star_burstInner as unknown as ComponentType<Record<string, unknown>>} />;
const Preview_starter_star_swipeInner = dynamic(() => import("@/components/react-bits/star-swipe").then((mod) => mod.default), { ssr: false, loading: () => fallback });
const Preview_starter_star_swipe: PreviewComponent = () => <StarterPreviewFrame name="star-swipe" Component={Preview_starter_star_swipeInner as unknown as ComponentType<Record<string, unknown>>} />;
const Preview_starter_swirl_blendInner = dynamic(() => import("@/components/react-bits/swirl-blend").then((mod) => mod.default), { ssr: false, loading: () => fallback });
const Preview_starter_swirl_blend: PreviewComponent = () => <StarterPreviewFrame name="swirl-blend" Component={Preview_starter_swirl_blendInner as unknown as ComponentType<Record<string, unknown>>} />;
const Preview_starter_synaptic_shiftInner = dynamic(() => import("@/components/react-bits/synaptic-shift").then((mod) => mod.default), { ssr: false, loading: () => fallback });
const Preview_starter_synaptic_shift: PreviewComponent = () => <StarterPreviewFrame name="synaptic-shift" Component={Preview_starter_synaptic_shiftInner as unknown as ComponentType<Record<string, unknown>>} />;
const Preview_starter_text_cubeInner = dynamic(() => import("@/components/react-bits/text-cube").then((mod) => mod.default), { ssr: false, loading: () => fallback });
const Preview_starter_text_cube: PreviewComponent = () => <StarterPreviewFrame name="text-cube" Component={Preview_starter_text_cubeInner as unknown as ComponentType<Record<string, unknown>>} />;
const Preview_starter_text_pathInner = dynamic(() => import("@/components/react-bits/text-path").then((mod) => mod.default), { ssr: false, loading: () => fallback });
const Preview_starter_text_path: PreviewComponent = () => <StarterPreviewFrame name="text-path" Component={Preview_starter_text_pathInner as unknown as ComponentType<Record<string, unknown>>} />;
const Preview_starter_text_scatterInner = dynamic(() => import("@/components/react-bits/text-scatter").then((mod) => mod.default), { ssr: false, loading: () => fallback });
const Preview_starter_text_scatter: PreviewComponent = () => <StarterPreviewFrame name="text-scatter" Component={Preview_starter_text_scatterInner as unknown as ComponentType<Record<string, unknown>>} />;
const Preview_starter_twilight_linesInner = dynamic(() => import("@/components/react-bits/twilight-lines").then((mod) => mod.default), { ssr: false, loading: () => fallback });
const Preview_starter_twilight_lines: PreviewComponent = () => <StarterPreviewFrame name="twilight-lines" Component={Preview_starter_twilight_linesInner as unknown as ComponentType<Record<string, unknown>>} />;
const Preview_starter_user_cursorInner = dynamic(() => import("@/components/react-bits/user-cursor").then((mod) => mod.default), { ssr: false, loading: () => fallback });
const Preview_starter_user_cursor: PreviewComponent = () => <StarterPreviewFrame name="user-cursor" Component={Preview_starter_user_cursorInner as unknown as ComponentType<Record<string, unknown>>} />;
const Preview_starter_vortexInner = dynamic(() => import("@/components/react-bits/vortex").then((mod) => mod.default), { ssr: false, loading: () => fallback });
const Preview_starter_vortex: PreviewComponent = () => <StarterPreviewFrame name="vortex" Component={Preview_starter_vortexInner as unknown as ComponentType<Record<string, unknown>>} />;
const Preview_starter_warp_twisterInner = dynamic(() => import("@/components/react-bits/warp-twister").then((mod) => mod.default), { ssr: false, loading: () => fallback });
const Preview_starter_warp_twister: PreviewComponent = () => <StarterPreviewFrame name="warp-twister" Component={Preview_starter_warp_twisterInner as unknown as ComponentType<Record<string, unknown>>} />;
const Preview_starter_warped_cardInner = dynamic(() => import("@/components/react-bits/warped-card").then((mod) => mod.default), { ssr: false, loading: () => fallback });
const Preview_starter_warped_card: PreviewComponent = () => <StarterPreviewFrame name="warped-card" Component={Preview_starter_warped_cardInner as unknown as ComponentType<Record<string, unknown>>} />;
const Preview_starter_watercolorInner = dynamic(() => import("@/components/react-bits/watercolor").then((mod) => mod.default), { ssr: false, loading: () => fallback });
const Preview_starter_watercolor: PreviewComponent = () => <StarterPreviewFrame name="watercolor" Component={Preview_starter_watercolorInner as unknown as ComponentType<Record<string, unknown>>} />;

export const previewRegistry: PreviewMeta[] = [
  {
    id: "pro:404-1",
    source: "pro",
    name: "404-1",
    title: "404 1",
    category: "404",
    installName: "@reactbits-pro/404-1",
    command: "npx shadcn@latest add @reactbits-pro/404-1",
    Component: Preview_pro_404_1 as unknown as PreviewComponent,
  },
  {
    id: "pro:404-2",
    source: "pro",
    name: "404-2",
    title: "404 2",
    category: "404",
    installName: "@reactbits-pro/404-2",
    command: "npx shadcn@latest add @reactbits-pro/404-2",
    Component: Preview_pro_404_2 as unknown as PreviewComponent,
  },
  {
    id: "pro:404-3",
    source: "pro",
    name: "404-3",
    title: "404 3",
    category: "404",
    installName: "@reactbits-pro/404-3",
    command: "npx shadcn@latest add @reactbits-pro/404-3",
    Component: Preview_pro_404_3 as unknown as PreviewComponent,
  },
  {
    id: "pro:404-4",
    source: "pro",
    name: "404-4",
    title: "404 4",
    category: "404",
    installName: "@reactbits-pro/404-4",
    command: "npx shadcn@latest add @reactbits-pro/404-4",
    Component: Preview_pro_404_4 as unknown as PreviewComponent,
  },
  {
    id: "pro:404-5",
    source: "pro",
    name: "404-5",
    title: "404 5",
    category: "404",
    installName: "@reactbits-pro/404-5",
    command: "npx shadcn@latest add @reactbits-pro/404-5",
    Component: Preview_pro_404_5 as unknown as PreviewComponent,
  },
  {
    id: "pro:about-1",
    source: "pro",
    name: "about-1",
    title: "About 1",
    category: "about",
    installName: "@reactbits-pro/about-1",
    command: "npx shadcn@latest add @reactbits-pro/about-1",
    Component: Preview_pro_about_1 as unknown as PreviewComponent,
  },
  {
    id: "pro:about-2",
    source: "pro",
    name: "about-2",
    title: "About 2",
    category: "about",
    installName: "@reactbits-pro/about-2",
    command: "npx shadcn@latest add @reactbits-pro/about-2",
    Component: Preview_pro_about_2 as unknown as PreviewComponent,
  },
  {
    id: "pro:about-3",
    source: "pro",
    name: "about-3",
    title: "About 3",
    category: "about",
    installName: "@reactbits-pro/about-3",
    command: "npx shadcn@latest add @reactbits-pro/about-3",
    Component: Preview_pro_about_3 as unknown as PreviewComponent,
  },
  {
    id: "pro:about-4",
    source: "pro",
    name: "about-4",
    title: "About 4",
    category: "about",
    installName: "@reactbits-pro/about-4",
    command: "npx shadcn@latest add @reactbits-pro/about-4",
    Component: Preview_pro_about_4 as unknown as PreviewComponent,
  },
  {
    id: "pro:about-5",
    source: "pro",
    name: "about-5",
    title: "About 5",
    category: "about",
    installName: "@reactbits-pro/about-5",
    command: "npx shadcn@latest add @reactbits-pro/about-5",
    Component: Preview_pro_about_5 as unknown as PreviewComponent,
  },
  {
    id: "pro:about-6",
    source: "pro",
    name: "about-6",
    title: "About 6",
    category: "about",
    installName: "@reactbits-pro/about-6",
    command: "npx shadcn@latest add @reactbits-pro/about-6",
    Component: Preview_pro_about_6 as unknown as PreviewComponent,
  },
  {
    id: "pro:about-7",
    source: "pro",
    name: "about-7",
    title: "About 7",
    category: "about",
    installName: "@reactbits-pro/about-7",
    command: "npx shadcn@latest add @reactbits-pro/about-7",
    Component: Preview_pro_about_7 as unknown as PreviewComponent,
  },
  {
    id: "pro:about-8",
    source: "pro",
    name: "about-8",
    title: "About 8",
    category: "about",
    installName: "@reactbits-pro/about-8",
    command: "npx shadcn@latest add @reactbits-pro/about-8",
    Component: Preview_pro_about_8 as unknown as PreviewComponent,
  },
  {
    id: "pro:auth-1",
    source: "pro",
    name: "auth-1",
    title: "Auth 1",
    category: "auth",
    installName: "@reactbits-pro/auth-1",
    command: "npx shadcn@latest add @reactbits-pro/auth-1",
    Component: Preview_pro_auth_1 as unknown as PreviewComponent,
  },
  {
    id: "pro:auth-2",
    source: "pro",
    name: "auth-2",
    title: "Auth 2",
    category: "auth",
    installName: "@reactbits-pro/auth-2",
    command: "npx shadcn@latest add @reactbits-pro/auth-2",
    Component: Preview_pro_auth_2 as unknown as PreviewComponent,
  },
  {
    id: "pro:auth-3",
    source: "pro",
    name: "auth-3",
    title: "Auth 3",
    category: "auth",
    installName: "@reactbits-pro/auth-3",
    command: "npx shadcn@latest add @reactbits-pro/auth-3",
    Component: Preview_pro_auth_3 as unknown as PreviewComponent,
  },
  {
    id: "pro:blog-1",
    source: "pro",
    name: "blog-1",
    title: "Blog 1",
    category: "blog",
    installName: "@reactbits-pro/blog-1",
    command: "npx shadcn@latest add @reactbits-pro/blog-1",
    Component: Preview_pro_blog_1 as unknown as PreviewComponent,
  },
  {
    id: "pro:blog-2",
    source: "pro",
    name: "blog-2",
    title: "Blog 2",
    category: "blog",
    installName: "@reactbits-pro/blog-2",
    command: "npx shadcn@latest add @reactbits-pro/blog-2",
    Component: Preview_pro_blog_2 as unknown as PreviewComponent,
  },
  {
    id: "pro:blog-3",
    source: "pro",
    name: "blog-3",
    title: "Blog 3",
    category: "blog",
    installName: "@reactbits-pro/blog-3",
    command: "npx shadcn@latest add @reactbits-pro/blog-3",
    Component: Preview_pro_blog_3 as unknown as PreviewComponent,
  },
  {
    id: "pro:blog-4",
    source: "pro",
    name: "blog-4",
    title: "Blog 4",
    category: "blog",
    installName: "@reactbits-pro/blog-4",
    command: "npx shadcn@latest add @reactbits-pro/blog-4",
    Component: Preview_pro_blog_4 as unknown as PreviewComponent,
  },
  {
    id: "pro:blog-5",
    source: "pro",
    name: "blog-5",
    title: "Blog 5",
    category: "blog",
    installName: "@reactbits-pro/blog-5",
    command: "npx shadcn@latest add @reactbits-pro/blog-5",
    Component: Preview_pro_blog_5 as unknown as PreviewComponent,
  },
  {
    id: "pro:blog-6",
    source: "pro",
    name: "blog-6",
    title: "Blog 6",
    category: "blog",
    installName: "@reactbits-pro/blog-6",
    command: "npx shadcn@latest add @reactbits-pro/blog-6",
    Component: Preview_pro_blog_6 as unknown as PreviewComponent,
  },
  {
    id: "pro:blog-7",
    source: "pro",
    name: "blog-7",
    title: "Blog 7",
    category: "blog",
    installName: "@reactbits-pro/blog-7",
    command: "npx shadcn@latest add @reactbits-pro/blog-7",
    Component: Preview_pro_blog_7 as unknown as PreviewComponent,
  },
  {
    id: "pro:comparison-1",
    source: "pro",
    name: "comparison-1",
    title: "Comparison 1",
    category: "comparison",
    installName: "@reactbits-pro/comparison-1",
    command: "npx shadcn@latest add @reactbits-pro/comparison-1",
    Component: Preview_pro_comparison_1 as unknown as PreviewComponent,
  },
  {
    id: "pro:comparison-2",
    source: "pro",
    name: "comparison-2",
    title: "Comparison 2",
    category: "comparison",
    installName: "@reactbits-pro/comparison-2",
    command: "npx shadcn@latest add @reactbits-pro/comparison-2",
    Component: Preview_pro_comparison_2 as unknown as PreviewComponent,
  },
  {
    id: "pro:comparison-3",
    source: "pro",
    name: "comparison-3",
    title: "Comparison 3",
    category: "comparison",
    installName: "@reactbits-pro/comparison-3",
    command: "npx shadcn@latest add @reactbits-pro/comparison-3",
    Component: Preview_pro_comparison_3 as unknown as PreviewComponent,
  },
  {
    id: "pro:comparison-4",
    source: "pro",
    name: "comparison-4",
    title: "Comparison 4",
    category: "comparison",
    installName: "@reactbits-pro/comparison-4",
    command: "npx shadcn@latest add @reactbits-pro/comparison-4",
    Component: Preview_pro_comparison_4 as unknown as PreviewComponent,
  },
  {
    id: "pro:contact-1",
    source: "pro",
    name: "contact-1",
    title: "Contact 1",
    category: "contact",
    installName: "@reactbits-pro/contact-1",
    command: "npx shadcn@latest add @reactbits-pro/contact-1",
    Component: Preview_pro_contact_1 as unknown as PreviewComponent,
  },
  {
    id: "pro:contact-2",
    source: "pro",
    name: "contact-2",
    title: "Contact 2",
    category: "contact",
    installName: "@reactbits-pro/contact-2",
    command: "npx shadcn@latest add @reactbits-pro/contact-2",
    Component: Preview_pro_contact_2 as unknown as PreviewComponent,
  },
  {
    id: "pro:contact-3",
    source: "pro",
    name: "contact-3",
    title: "Contact 3",
    category: "contact",
    installName: "@reactbits-pro/contact-3",
    command: "npx shadcn@latest add @reactbits-pro/contact-3",
    Component: Preview_pro_contact_3 as unknown as PreviewComponent,
  },
  {
    id: "pro:contact-4",
    source: "pro",
    name: "contact-4",
    title: "Contact 4",
    category: "contact",
    installName: "@reactbits-pro/contact-4",
    command: "npx shadcn@latest add @reactbits-pro/contact-4",
    Component: Preview_pro_contact_4 as unknown as PreviewComponent,
  },
  {
    id: "pro:contact-5",
    source: "pro",
    name: "contact-5",
    title: "Contact 5",
    category: "contact",
    installName: "@reactbits-pro/contact-5",
    command: "npx shadcn@latest add @reactbits-pro/contact-5",
    Component: Preview_pro_contact_5 as unknown as PreviewComponent,
  },
  {
    id: "pro:contact-6",
    source: "pro",
    name: "contact-6",
    title: "Contact 6",
    category: "contact",
    installName: "@reactbits-pro/contact-6",
    command: "npx shadcn@latest add @reactbits-pro/contact-6",
    Component: Preview_pro_contact_6 as unknown as PreviewComponent,
  },
  {
    id: "pro:contact-7",
    source: "pro",
    name: "contact-7",
    title: "Contact 7",
    category: "contact",
    installName: "@reactbits-pro/contact-7",
    command: "npx shadcn@latest add @reactbits-pro/contact-7",
    Component: Preview_pro_contact_7 as unknown as PreviewComponent,
  },
  {
    id: "pro:contact-8",
    source: "pro",
    name: "contact-8",
    title: "Contact 8",
    category: "contact",
    installName: "@reactbits-pro/contact-8",
    command: "npx shadcn@latest add @reactbits-pro/contact-8",
    Component: Preview_pro_contact_8 as unknown as PreviewComponent,
  },
  {
    id: "pro:cta-1",
    source: "pro",
    name: "cta-1",
    title: "Cta 1",
    category: "cta",
    installName: "@reactbits-pro/cta-1",
    command: "npx shadcn@latest add @reactbits-pro/cta-1",
    Component: Preview_pro_cta_1 as unknown as PreviewComponent,
  },
  {
    id: "pro:cta-2",
    source: "pro",
    name: "cta-2",
    title: "Cta 2",
    category: "cta",
    installName: "@reactbits-pro/cta-2",
    command: "npx shadcn@latest add @reactbits-pro/cta-2",
    Component: Preview_pro_cta_2 as unknown as PreviewComponent,
  },
  {
    id: "pro:cta-3",
    source: "pro",
    name: "cta-3",
    title: "Cta 3",
    category: "cta",
    installName: "@reactbits-pro/cta-3",
    command: "npx shadcn@latest add @reactbits-pro/cta-3",
    Component: Preview_pro_cta_3 as unknown as PreviewComponent,
  },
  {
    id: "pro:cta-4",
    source: "pro",
    name: "cta-4",
    title: "Cta 4",
    category: "cta",
    installName: "@reactbits-pro/cta-4",
    command: "npx shadcn@latest add @reactbits-pro/cta-4",
    Component: Preview_pro_cta_4 as unknown as PreviewComponent,
  },
  {
    id: "pro:cta-5",
    source: "pro",
    name: "cta-5",
    title: "Cta 5",
    category: "cta",
    installName: "@reactbits-pro/cta-5",
    command: "npx shadcn@latest add @reactbits-pro/cta-5",
    Component: Preview_pro_cta_5 as unknown as PreviewComponent,
  },
  {
    id: "pro:cta-6",
    source: "pro",
    name: "cta-6",
    title: "Cta 6",
    category: "cta",
    installName: "@reactbits-pro/cta-6",
    command: "npx shadcn@latest add @reactbits-pro/cta-6",
    Component: Preview_pro_cta_6 as unknown as PreviewComponent,
  },
  {
    id: "pro:cta-7",
    source: "pro",
    name: "cta-7",
    title: "Cta 7",
    category: "cta",
    installName: "@reactbits-pro/cta-7",
    command: "npx shadcn@latest add @reactbits-pro/cta-7",
    Component: Preview_pro_cta_7 as unknown as PreviewComponent,
  },
  {
    id: "pro:cta-8",
    source: "pro",
    name: "cta-8",
    title: "Cta 8",
    category: "cta",
    installName: "@reactbits-pro/cta-8",
    command: "npx shadcn@latest add @reactbits-pro/cta-8",
    Component: Preview_pro_cta_8 as unknown as PreviewComponent,
  },
  {
    id: "pro:cta-9",
    source: "pro",
    name: "cta-9",
    title: "Cta 9",
    category: "cta",
    installName: "@reactbits-pro/cta-9",
    command: "npx shadcn@latest add @reactbits-pro/cta-9",
    Component: Preview_pro_cta_9 as unknown as PreviewComponent,
  },
  {
    id: "pro:cta-10",
    source: "pro",
    name: "cta-10",
    title: "Cta 10",
    category: "cta",
    installName: "@reactbits-pro/cta-10",
    command: "npx shadcn@latest add @reactbits-pro/cta-10",
    Component: Preview_pro_cta_10 as unknown as PreviewComponent,
  },
  {
    id: "pro:download-1",
    source: "pro",
    name: "download-1",
    title: "Download 1",
    category: "download",
    installName: "@reactbits-pro/download-1",
    command: "npx shadcn@latest add @reactbits-pro/download-1",
    Component: Preview_pro_download_1 as unknown as PreviewComponent,
  },
  {
    id: "pro:download-2",
    source: "pro",
    name: "download-2",
    title: "Download 2",
    category: "download",
    installName: "@reactbits-pro/download-2",
    command: "npx shadcn@latest add @reactbits-pro/download-2",
    Component: Preview_pro_download_2 as unknown as PreviewComponent,
  },
  {
    id: "pro:download-3",
    source: "pro",
    name: "download-3",
    title: "Download 3",
    category: "download",
    installName: "@reactbits-pro/download-3",
    command: "npx shadcn@latest add @reactbits-pro/download-3",
    Component: Preview_pro_download_3 as unknown as PreviewComponent,
  },
  {
    id: "pro:download-4",
    source: "pro",
    name: "download-4",
    title: "Download 4",
    category: "download",
    installName: "@reactbits-pro/download-4",
    command: "npx shadcn@latest add @reactbits-pro/download-4",
    Component: Preview_pro_download_4 as unknown as PreviewComponent,
  },
  {
    id: "pro:download-5",
    source: "pro",
    name: "download-5",
    title: "Download 5",
    category: "download",
    installName: "@reactbits-pro/download-5",
    command: "npx shadcn@latest add @reactbits-pro/download-5",
    Component: Preview_pro_download_5 as unknown as PreviewComponent,
  },
  {
    id: "pro:ecommerce-1",
    source: "pro",
    name: "ecommerce-1",
    title: "Ecommerce 1",
    category: "ecommerce",
    installName: "@reactbits-pro/ecommerce-1",
    command: "npx shadcn@latest add @reactbits-pro/ecommerce-1",
    Component: Preview_pro_ecommerce_1 as unknown as PreviewComponent,
  },
  {
    id: "pro:ecommerce-2",
    source: "pro",
    name: "ecommerce-2",
    title: "Ecommerce 2",
    category: "ecommerce",
    installName: "@reactbits-pro/ecommerce-2",
    command: "npx shadcn@latest add @reactbits-pro/ecommerce-2",
    Component: Preview_pro_ecommerce_2 as unknown as PreviewComponent,
  },
  {
    id: "pro:ecommerce-3",
    source: "pro",
    name: "ecommerce-3",
    title: "Ecommerce 3",
    category: "ecommerce",
    installName: "@reactbits-pro/ecommerce-3",
    command: "npx shadcn@latest add @reactbits-pro/ecommerce-3",
    Component: Preview_pro_ecommerce_3 as unknown as PreviewComponent,
  },
  {
    id: "pro:ecommerce-4",
    source: "pro",
    name: "ecommerce-4",
    title: "Ecommerce 4",
    category: "ecommerce",
    installName: "@reactbits-pro/ecommerce-4",
    command: "npx shadcn@latest add @reactbits-pro/ecommerce-4",
    Component: Preview_pro_ecommerce_4 as unknown as PreviewComponent,
  },
  {
    id: "pro:ecommerce-5",
    source: "pro",
    name: "ecommerce-5",
    title: "Ecommerce 5",
    category: "ecommerce",
    installName: "@reactbits-pro/ecommerce-5",
    command: "npx shadcn@latest add @reactbits-pro/ecommerce-5",
    Component: Preview_pro_ecommerce_5 as unknown as PreviewComponent,
  },
  {
    id: "pro:ecommerce-6",
    source: "pro",
    name: "ecommerce-6",
    title: "Ecommerce 6",
    category: "ecommerce",
    installName: "@reactbits-pro/ecommerce-6",
    command: "npx shadcn@latest add @reactbits-pro/ecommerce-6",
    Component: Preview_pro_ecommerce_6 as unknown as PreviewComponent,
  },
  {
    id: "pro:ecommerce-7",
    source: "pro",
    name: "ecommerce-7",
    title: "Ecommerce 7",
    category: "ecommerce",
    installName: "@reactbits-pro/ecommerce-7",
    command: "npx shadcn@latest add @reactbits-pro/ecommerce-7",
    Component: Preview_pro_ecommerce_7 as unknown as PreviewComponent,
  },
  {
    id: "pro:faq-1",
    source: "pro",
    name: "faq-1",
    title: "Faq 1",
    category: "faq",
    installName: "@reactbits-pro/faq-1",
    command: "npx shadcn@latest add @reactbits-pro/faq-1",
    Component: Preview_pro_faq_1 as unknown as PreviewComponent,
  },
  {
    id: "pro:faq-2",
    source: "pro",
    name: "faq-2",
    title: "Faq 2",
    category: "faq",
    installName: "@reactbits-pro/faq-2",
    command: "npx shadcn@latest add @reactbits-pro/faq-2",
    Component: Preview_pro_faq_2 as unknown as PreviewComponent,
  },
  {
    id: "pro:faq-3",
    source: "pro",
    name: "faq-3",
    title: "Faq 3",
    category: "faq",
    installName: "@reactbits-pro/faq-3",
    command: "npx shadcn@latest add @reactbits-pro/faq-3",
    Component: Preview_pro_faq_3 as unknown as PreviewComponent,
  },
  {
    id: "pro:faq-4",
    source: "pro",
    name: "faq-4",
    title: "Faq 4",
    category: "faq",
    installName: "@reactbits-pro/faq-4",
    command: "npx shadcn@latest add @reactbits-pro/faq-4",
    Component: Preview_pro_faq_4 as unknown as PreviewComponent,
  },
  {
    id: "pro:faq-5",
    source: "pro",
    name: "faq-5",
    title: "Faq 5",
    category: "faq",
    installName: "@reactbits-pro/faq-5",
    command: "npx shadcn@latest add @reactbits-pro/faq-5",
    Component: Preview_pro_faq_5 as unknown as PreviewComponent,
  },
  {
    id: "pro:features-1",
    source: "pro",
    name: "features-1",
    title: "Features 1",
    category: "features",
    installName: "@reactbits-pro/features-1",
    command: "npx shadcn@latest add @reactbits-pro/features-1",
    Component: Preview_pro_features_1 as unknown as PreviewComponent,
  },
  {
    id: "pro:features-2",
    source: "pro",
    name: "features-2",
    title: "Features 2",
    category: "features",
    installName: "@reactbits-pro/features-2",
    command: "npx shadcn@latest add @reactbits-pro/features-2",
    Component: Preview_pro_features_2 as unknown as PreviewComponent,
  },
  {
    id: "pro:features-3",
    source: "pro",
    name: "features-3",
    title: "Features 3",
    category: "features",
    installName: "@reactbits-pro/features-3",
    command: "npx shadcn@latest add @reactbits-pro/features-3",
    Component: Preview_pro_features_3 as unknown as PreviewComponent,
  },
  {
    id: "pro:features-4",
    source: "pro",
    name: "features-4",
    title: "Features 4",
    category: "features",
    installName: "@reactbits-pro/features-4",
    command: "npx shadcn@latest add @reactbits-pro/features-4",
    Component: Preview_pro_features_4 as unknown as PreviewComponent,
  },
  {
    id: "pro:features-5",
    source: "pro",
    name: "features-5",
    title: "Features 5",
    category: "features",
    installName: "@reactbits-pro/features-5",
    command: "npx shadcn@latest add @reactbits-pro/features-5",
    Component: Preview_pro_features_5 as unknown as PreviewComponent,
  },
  {
    id: "pro:features-6",
    source: "pro",
    name: "features-6",
    title: "Features 6",
    category: "features",
    installName: "@reactbits-pro/features-6",
    command: "npx shadcn@latest add @reactbits-pro/features-6",
    Component: Preview_pro_features_6 as unknown as PreviewComponent,
  },
  {
    id: "pro:features-7",
    source: "pro",
    name: "features-7",
    title: "Features 7",
    category: "features",
    installName: "@reactbits-pro/features-7",
    command: "npx shadcn@latest add @reactbits-pro/features-7",
    Component: Preview_pro_features_7 as unknown as PreviewComponent,
  },
  {
    id: "pro:features-8",
    source: "pro",
    name: "features-8",
    title: "Features 8",
    category: "features",
    installName: "@reactbits-pro/features-8",
    command: "npx shadcn@latest add @reactbits-pro/features-8",
    Component: Preview_pro_features_8 as unknown as PreviewComponent,
  },
  {
    id: "pro:features-9",
    source: "pro",
    name: "features-9",
    title: "Features 9",
    category: "features",
    installName: "@reactbits-pro/features-9",
    command: "npx shadcn@latest add @reactbits-pro/features-9",
    Component: Preview_pro_features_9 as unknown as PreviewComponent,
  },
  {
    id: "pro:footer-1",
    source: "pro",
    name: "footer-1",
    title: "Footer 1",
    category: "footer",
    installName: "@reactbits-pro/footer-1",
    command: "npx shadcn@latest add @reactbits-pro/footer-1",
    Component: Preview_pro_footer_1 as unknown as PreviewComponent,
  },
  {
    id: "pro:footer-2",
    source: "pro",
    name: "footer-2",
    title: "Footer 2",
    category: "footer",
    installName: "@reactbits-pro/footer-2",
    command: "npx shadcn@latest add @reactbits-pro/footer-2",
    Component: Preview_pro_footer_2 as unknown as PreviewComponent,
  },
  {
    id: "pro:footer-3",
    source: "pro",
    name: "footer-3",
    title: "Footer 3",
    category: "footer",
    installName: "@reactbits-pro/footer-3",
    command: "npx shadcn@latest add @reactbits-pro/footer-3",
    Component: Preview_pro_footer_3 as unknown as PreviewComponent,
  },
  {
    id: "pro:footer-4",
    source: "pro",
    name: "footer-4",
    title: "Footer 4",
    category: "footer",
    installName: "@reactbits-pro/footer-4",
    command: "npx shadcn@latest add @reactbits-pro/footer-4",
    Component: Preview_pro_footer_4 as unknown as PreviewComponent,
  },
  {
    id: "pro:footer-5",
    source: "pro",
    name: "footer-5",
    title: "Footer 5",
    category: "footer",
    installName: "@reactbits-pro/footer-5",
    command: "npx shadcn@latest add @reactbits-pro/footer-5",
    Component: Preview_pro_footer_5 as unknown as PreviewComponent,
  },
  {
    id: "pro:footer-6",
    source: "pro",
    name: "footer-6",
    title: "Footer 6",
    category: "footer",
    installName: "@reactbits-pro/footer-6",
    command: "npx shadcn@latest add @reactbits-pro/footer-6",
    Component: Preview_pro_footer_6 as unknown as PreviewComponent,
  },
  {
    id: "pro:footer-7",
    source: "pro",
    name: "footer-7",
    title: "Footer 7",
    category: "footer",
    installName: "@reactbits-pro/footer-7",
    command: "npx shadcn@latest add @reactbits-pro/footer-7",
    Component: Preview_pro_footer_7 as unknown as PreviewComponent,
  },
  {
    id: "pro:footer-8",
    source: "pro",
    name: "footer-8",
    title: "Footer 8",
    category: "footer",
    installName: "@reactbits-pro/footer-8",
    command: "npx shadcn@latest add @reactbits-pro/footer-8",
    Component: Preview_pro_footer_8 as unknown as PreviewComponent,
  },
  {
    id: "pro:hero-1",
    source: "pro",
    name: "hero-1",
    title: "Hero 1",
    category: "hero",
    installName: "@reactbits-pro/hero-1",
    command: "npx shadcn@latest add @reactbits-pro/hero-1",
    Component: Preview_pro_hero_1 as unknown as PreviewComponent,
  },
  {
    id: "pro:hero-2",
    source: "pro",
    name: "hero-2",
    title: "Hero 2",
    category: "hero",
    installName: "@reactbits-pro/hero-2",
    command: "npx shadcn@latest add @reactbits-pro/hero-2",
    Component: Preview_pro_hero_2 as unknown as PreviewComponent,
  },
  {
    id: "pro:hero-3",
    source: "pro",
    name: "hero-3",
    title: "Hero 3",
    category: "hero",
    installName: "@reactbits-pro/hero-3",
    command: "npx shadcn@latest add @reactbits-pro/hero-3",
    Component: Preview_pro_hero_3 as unknown as PreviewComponent,
  },
  {
    id: "pro:hero-4",
    source: "pro",
    name: "hero-4",
    title: "Hero 4",
    category: "hero",
    installName: "@reactbits-pro/hero-4",
    command: "npx shadcn@latest add @reactbits-pro/hero-4",
    Component: Preview_pro_hero_4 as unknown as PreviewComponent,
  },
  {
    id: "pro:hero-5",
    source: "pro",
    name: "hero-5",
    title: "Hero 5",
    category: "hero",
    installName: "@reactbits-pro/hero-5",
    command: "npx shadcn@latest add @reactbits-pro/hero-5",
    Component: Preview_pro_hero_5 as unknown as PreviewComponent,
  },
  {
    id: "pro:hero-6",
    source: "pro",
    name: "hero-6",
    title: "Hero 6",
    category: "hero",
    installName: "@reactbits-pro/hero-6",
    command: "npx shadcn@latest add @reactbits-pro/hero-6",
    Component: Preview_pro_hero_6 as unknown as PreviewComponent,
  },
  {
    id: "pro:hero-7",
    source: "pro",
    name: "hero-7",
    title: "Hero 7",
    category: "hero",
    installName: "@reactbits-pro/hero-7",
    command: "npx shadcn@latest add @reactbits-pro/hero-7",
    Component: Preview_pro_hero_7 as unknown as PreviewComponent,
  },
  {
    id: "pro:hero-8",
    source: "pro",
    name: "hero-8",
    title: "Hero 8",
    category: "hero",
    installName: "@reactbits-pro/hero-8",
    command: "npx shadcn@latest add @reactbits-pro/hero-8",
    Component: Preview_pro_hero_8 as unknown as PreviewComponent,
  },
  {
    id: "pro:hero-9",
    source: "pro",
    name: "hero-9",
    title: "Hero 9",
    category: "hero",
    installName: "@reactbits-pro/hero-9",
    command: "npx shadcn@latest add @reactbits-pro/hero-9",
    Component: Preview_pro_hero_9 as unknown as PreviewComponent,
  },
  {
    id: "pro:hero-10",
    source: "pro",
    name: "hero-10",
    title: "Hero 10",
    category: "hero",
    installName: "@reactbits-pro/hero-10",
    command: "npx shadcn@latest add @reactbits-pro/hero-10",
    Component: Preview_pro_hero_10 as unknown as PreviewComponent,
  },
  {
    id: "pro:hero-11",
    source: "pro",
    name: "hero-11",
    title: "Hero 11",
    category: "hero",
    installName: "@reactbits-pro/hero-11",
    command: "npx shadcn@latest add @reactbits-pro/hero-11",
    Component: Preview_pro_hero_11 as unknown as PreviewComponent,
  },
  {
    id: "pro:hero-12",
    source: "pro",
    name: "hero-12",
    title: "Hero 12",
    category: "hero",
    installName: "@reactbits-pro/hero-12",
    command: "npx shadcn@latest add @reactbits-pro/hero-12",
    Component: Preview_pro_hero_12 as unknown as PreviewComponent,
  },
  {
    id: "pro:hero-13",
    source: "pro",
    name: "hero-13",
    title: "Hero 13",
    category: "hero",
    installName: "@reactbits-pro/hero-13",
    command: "npx shadcn@latest add @reactbits-pro/hero-13",
    Component: Preview_pro_hero_13 as unknown as PreviewComponent,
  },
  {
    id: "pro:hero-14",
    source: "pro",
    name: "hero-14",
    title: "Hero 14",
    category: "hero",
    installName: "@reactbits-pro/hero-14",
    command: "npx shadcn@latest add @reactbits-pro/hero-14",
    Component: Preview_pro_hero_14 as unknown as PreviewComponent,
  },
  {
    id: "pro:hero-15",
    source: "pro",
    name: "hero-15",
    title: "Hero 15",
    category: "hero",
    installName: "@reactbits-pro/hero-15",
    command: "npx shadcn@latest add @reactbits-pro/hero-15",
    Component: Preview_pro_hero_15 as unknown as PreviewComponent,
  },
  {
    id: "pro:hero-16",
    source: "pro",
    name: "hero-16",
    title: "Hero 16",
    category: "hero",
    installName: "@reactbits-pro/hero-16",
    command: "npx shadcn@latest add @reactbits-pro/hero-16",
    Component: Preview_pro_hero_16 as unknown as PreviewComponent,
  },
  {
    id: "pro:hero-17",
    source: "pro",
    name: "hero-17",
    title: "Hero 17",
    category: "hero",
    installName: "@reactbits-pro/hero-17",
    command: "npx shadcn@latest add @reactbits-pro/hero-17",
    Component: Preview_pro_hero_17 as unknown as PreviewComponent,
  },
  {
    id: "pro:how-it-works-1",
    source: "pro",
    name: "how-it-works-1",
    title: "How It Works 1",
    category: "how-it-works",
    installName: "@reactbits-pro/how-it-works-1",
    command: "npx shadcn@latest add @reactbits-pro/how-it-works-1",
    Component: Preview_pro_how_it_works_1 as unknown as PreviewComponent,
  },
  {
    id: "pro:how-it-works-2",
    source: "pro",
    name: "how-it-works-2",
    title: "How It Works 2",
    category: "how-it-works",
    installName: "@reactbits-pro/how-it-works-2",
    command: "npx shadcn@latest add @reactbits-pro/how-it-works-2",
    Component: Preview_pro_how_it_works_2 as unknown as PreviewComponent,
  },
  {
    id: "pro:how-it-works-3",
    source: "pro",
    name: "how-it-works-3",
    title: "How It Works 3",
    category: "how-it-works",
    installName: "@reactbits-pro/how-it-works-3",
    command: "npx shadcn@latest add @reactbits-pro/how-it-works-3",
    Component: Preview_pro_how_it_works_3 as unknown as PreviewComponent,
  },
  {
    id: "pro:how-it-works-4",
    source: "pro",
    name: "how-it-works-4",
    title: "How It Works 4",
    category: "how-it-works",
    installName: "@reactbits-pro/how-it-works-4",
    command: "npx shadcn@latest add @reactbits-pro/how-it-works-4",
    Component: Preview_pro_how_it_works_4 as unknown as PreviewComponent,
  },
  {
    id: "pro:how-it-works-5",
    source: "pro",
    name: "how-it-works-5",
    title: "How It Works 5",
    category: "how-it-works",
    installName: "@reactbits-pro/how-it-works-5",
    command: "npx shadcn@latest add @reactbits-pro/how-it-works-5",
    Component: Preview_pro_how_it_works_5 as unknown as PreviewComponent,
  },
  {
    id: "pro:how-it-works-6",
    source: "pro",
    name: "how-it-works-6",
    title: "How It Works 6",
    category: "how-it-works",
    installName: "@reactbits-pro/how-it-works-6",
    command: "npx shadcn@latest add @reactbits-pro/how-it-works-6",
    Component: Preview_pro_how_it_works_6 as unknown as PreviewComponent,
  },
  {
    id: "pro:navigation-1",
    source: "pro",
    name: "navigation-1",
    title: "Navigation 1",
    category: "navigation",
    installName: "@reactbits-pro/navigation-1",
    command: "npx shadcn@latest add @reactbits-pro/navigation-1",
    Component: Preview_pro_navigation_1 as unknown as PreviewComponent,
  },
  {
    id: "pro:navigation-2",
    source: "pro",
    name: "navigation-2",
    title: "Navigation 2",
    category: "navigation",
    installName: "@reactbits-pro/navigation-2",
    command: "npx shadcn@latest add @reactbits-pro/navigation-2",
    Component: Preview_pro_navigation_2 as unknown as PreviewComponent,
  },
  {
    id: "pro:navigation-3",
    source: "pro",
    name: "navigation-3",
    title: "Navigation 3",
    category: "navigation",
    installName: "@reactbits-pro/navigation-3",
    command: "npx shadcn@latest add @reactbits-pro/navigation-3",
    Component: Preview_pro_navigation_3 as unknown as PreviewComponent,
  },
  {
    id: "pro:navigation-4",
    source: "pro",
    name: "navigation-4",
    title: "Navigation 4",
    category: "navigation",
    installName: "@reactbits-pro/navigation-4",
    command: "npx shadcn@latest add @reactbits-pro/navigation-4",
    Component: Preview_pro_navigation_4 as unknown as PreviewComponent,
  },
  {
    id: "pro:navigation-5",
    source: "pro",
    name: "navigation-5",
    title: "Navigation 5",
    category: "navigation",
    installName: "@reactbits-pro/navigation-5",
    command: "npx shadcn@latest add @reactbits-pro/navigation-5",
    Component: Preview_pro_navigation_5 as unknown as PreviewComponent,
  },
  {
    id: "pro:navigation-6",
    source: "pro",
    name: "navigation-6",
    title: "Navigation 6",
    category: "navigation",
    installName: "@reactbits-pro/navigation-6",
    command: "npx shadcn@latest add @reactbits-pro/navigation-6",
    Component: Preview_pro_navigation_6 as unknown as PreviewComponent,
  },
  {
    id: "pro:navigation-7",
    source: "pro",
    name: "navigation-7",
    title: "Navigation 7",
    category: "navigation",
    installName: "@reactbits-pro/navigation-7",
    command: "npx shadcn@latest add @reactbits-pro/navigation-7",
    Component: Preview_pro_navigation_7 as unknown as PreviewComponent,
  },
  {
    id: "pro:navigation-8",
    source: "pro",
    name: "navigation-8",
    title: "Navigation 8",
    category: "navigation",
    installName: "@reactbits-pro/navigation-8",
    command: "npx shadcn@latest add @reactbits-pro/navigation-8",
    Component: Preview_pro_navigation_8 as unknown as PreviewComponent,
  },
  {
    id: "pro:navigation-9",
    source: "pro",
    name: "navigation-9",
    title: "Navigation 9",
    category: "navigation",
    installName: "@reactbits-pro/navigation-9",
    command: "npx shadcn@latest add @reactbits-pro/navigation-9",
    Component: Preview_pro_navigation_9 as unknown as PreviewComponent,
  },
  {
    id: "pro:navigation-10",
    source: "pro",
    name: "navigation-10",
    title: "Navigation 10",
    category: "navigation",
    installName: "@reactbits-pro/navigation-10",
    command: "npx shadcn@latest add @reactbits-pro/navigation-10",
    Component: Preview_pro_navigation_10 as unknown as PreviewComponent,
  },
  {
    id: "pro:navigation-11",
    source: "pro",
    name: "navigation-11",
    title: "Navigation 11",
    category: "navigation",
    installName: "@reactbits-pro/navigation-11",
    command: "npx shadcn@latest add @reactbits-pro/navigation-11",
    Component: Preview_pro_navigation_11 as unknown as PreviewComponent,
  },
  {
    id: "pro:pricing-1",
    source: "pro",
    name: "pricing-1",
    title: "Pricing 1",
    category: "pricing",
    installName: "@reactbits-pro/pricing-1",
    command: "npx shadcn@latest add @reactbits-pro/pricing-1",
    Component: Preview_pro_pricing_1 as unknown as PreviewComponent,
  },
  {
    id: "pro:pricing-2",
    source: "pro",
    name: "pricing-2",
    title: "Pricing 2",
    category: "pricing",
    installName: "@reactbits-pro/pricing-2",
    command: "npx shadcn@latest add @reactbits-pro/pricing-2",
    Component: Preview_pro_pricing_2 as unknown as PreviewComponent,
  },
  {
    id: "pro:pricing-3",
    source: "pro",
    name: "pricing-3",
    title: "Pricing 3",
    category: "pricing",
    installName: "@reactbits-pro/pricing-3",
    command: "npx shadcn@latest add @reactbits-pro/pricing-3",
    Component: Preview_pro_pricing_3 as unknown as PreviewComponent,
  },
  {
    id: "pro:pricing-4",
    source: "pro",
    name: "pricing-4",
    title: "Pricing 4",
    category: "pricing",
    installName: "@reactbits-pro/pricing-4",
    command: "npx shadcn@latest add @reactbits-pro/pricing-4",
    Component: Preview_pro_pricing_4 as unknown as PreviewComponent,
  },
  {
    id: "pro:pricing-5",
    source: "pro",
    name: "pricing-5",
    title: "Pricing 5",
    category: "pricing",
    installName: "@reactbits-pro/pricing-5",
    command: "npx shadcn@latest add @reactbits-pro/pricing-5",
    Component: Preview_pro_pricing_5 as unknown as PreviewComponent,
  },
  {
    id: "pro:pricing-6",
    source: "pro",
    name: "pricing-6",
    title: "Pricing 6",
    category: "pricing",
    installName: "@reactbits-pro/pricing-6",
    command: "npx shadcn@latest add @reactbits-pro/pricing-6",
    Component: Preview_pro_pricing_6 as unknown as PreviewComponent,
  },
  {
    id: "pro:pricing-7",
    source: "pro",
    name: "pricing-7",
    title: "Pricing 7",
    category: "pricing",
    installName: "@reactbits-pro/pricing-7",
    command: "npx shadcn@latest add @reactbits-pro/pricing-7",
    Component: Preview_pro_pricing_7 as unknown as PreviewComponent,
  },
  {
    id: "pro:pricing-8",
    source: "pro",
    name: "pricing-8",
    title: "Pricing 8",
    category: "pricing",
    installName: "@reactbits-pro/pricing-8",
    command: "npx shadcn@latest add @reactbits-pro/pricing-8",
    Component: Preview_pro_pricing_8 as unknown as PreviewComponent,
  },
  {
    id: "pro:pricing-9",
    source: "pro",
    name: "pricing-9",
    title: "Pricing 9",
    category: "pricing",
    installName: "@reactbits-pro/pricing-9",
    command: "npx shadcn@latest add @reactbits-pro/pricing-9",
    Component: Preview_pro_pricing_9 as unknown as PreviewComponent,
  },
  {
    id: "pro:pricing-10",
    source: "pro",
    name: "pricing-10",
    title: "Pricing 10",
    category: "pricing",
    installName: "@reactbits-pro/pricing-10",
    command: "npx shadcn@latest add @reactbits-pro/pricing-10",
    Component: Preview_pro_pricing_10 as unknown as PreviewComponent,
  },
  {
    id: "pro:pricing-11",
    source: "pro",
    name: "pricing-11",
    title: "Pricing 11",
    category: "pricing",
    installName: "@reactbits-pro/pricing-11",
    command: "npx shadcn@latest add @reactbits-pro/pricing-11",
    Component: Preview_pro_pricing_11 as unknown as PreviewComponent,
  },
  {
    id: "pro:profile-1",
    source: "pro",
    name: "profile-1",
    title: "Profile 1",
    category: "profile",
    installName: "@reactbits-pro/profile-1",
    command: "npx shadcn@latest add @reactbits-pro/profile-1",
    Component: Preview_pro_profile_1 as unknown as PreviewComponent,
  },
  {
    id: "pro:profile-2",
    source: "pro",
    name: "profile-2",
    title: "Profile 2",
    category: "profile",
    installName: "@reactbits-pro/profile-2",
    command: "npx shadcn@latest add @reactbits-pro/profile-2",
    Component: Preview_pro_profile_2 as unknown as PreviewComponent,
  },
  {
    id: "pro:profile-3",
    source: "pro",
    name: "profile-3",
    title: "Profile 3",
    category: "profile",
    installName: "@reactbits-pro/profile-3",
    command: "npx shadcn@latest add @reactbits-pro/profile-3",
    Component: Preview_pro_profile_3 as unknown as PreviewComponent,
  },
  {
    id: "pro:showcase-1",
    source: "pro",
    name: "showcase-1",
    title: "Showcase 1",
    category: "showcase",
    installName: "@reactbits-pro/showcase-1",
    command: "npx shadcn@latest add @reactbits-pro/showcase-1",
    Component: Preview_pro_showcase_1 as unknown as PreviewComponent,
  },
  {
    id: "pro:showcase-2",
    source: "pro",
    name: "showcase-2",
    title: "Showcase 2",
    category: "showcase",
    installName: "@reactbits-pro/showcase-2",
    command: "npx shadcn@latest add @reactbits-pro/showcase-2",
    Component: Preview_pro_showcase_2 as unknown as PreviewComponent,
  },
  {
    id: "pro:showcase-3",
    source: "pro",
    name: "showcase-3",
    title: "Showcase 3",
    category: "showcase",
    installName: "@reactbits-pro/showcase-3",
    command: "npx shadcn@latest add @reactbits-pro/showcase-3",
    Component: Preview_pro_showcase_3 as unknown as PreviewComponent,
  },
  {
    id: "pro:showcase-4",
    source: "pro",
    name: "showcase-4",
    title: "Showcase 4",
    category: "showcase",
    installName: "@reactbits-pro/showcase-4",
    command: "npx shadcn@latest add @reactbits-pro/showcase-4",
    Component: Preview_pro_showcase_4 as unknown as PreviewComponent,
  },
  {
    id: "pro:showcase-5",
    source: "pro",
    name: "showcase-5",
    title: "Showcase 5",
    category: "showcase",
    installName: "@reactbits-pro/showcase-5",
    command: "npx shadcn@latest add @reactbits-pro/showcase-5",
    Component: Preview_pro_showcase_5 as unknown as PreviewComponent,
  },
  {
    id: "pro:social-proof-1",
    source: "pro",
    name: "social-proof-1",
    title: "Social Proof 1",
    category: "social-proof",
    installName: "@reactbits-pro/social-proof-1",
    command: "npx shadcn@latest add @reactbits-pro/social-proof-1",
    Component: Preview_pro_social_proof_1 as unknown as PreviewComponent,
  },
  {
    id: "pro:social-proof-2",
    source: "pro",
    name: "social-proof-2",
    title: "Social Proof 2",
    category: "social-proof",
    installName: "@reactbits-pro/social-proof-2",
    command: "npx shadcn@latest add @reactbits-pro/social-proof-2",
    Component: Preview_pro_social_proof_2 as unknown as PreviewComponent,
  },
  {
    id: "pro:social-proof-3",
    source: "pro",
    name: "social-proof-3",
    title: "Social Proof 3",
    category: "social-proof",
    installName: "@reactbits-pro/social-proof-3",
    command: "npx shadcn@latest add @reactbits-pro/social-proof-3",
    Component: Preview_pro_social_proof_3 as unknown as PreviewComponent,
  },
  {
    id: "pro:social-proof-4",
    source: "pro",
    name: "social-proof-4",
    title: "Social Proof 4",
    category: "social-proof",
    installName: "@reactbits-pro/social-proof-4",
    command: "npx shadcn@latest add @reactbits-pro/social-proof-4",
    Component: Preview_pro_social_proof_4 as unknown as PreviewComponent,
  },
  {
    id: "pro:social-proof-5",
    source: "pro",
    name: "social-proof-5",
    title: "Social Proof 5",
    category: "social-proof",
    installName: "@reactbits-pro/social-proof-5",
    command: "npx shadcn@latest add @reactbits-pro/social-proof-5",
    Component: Preview_pro_social_proof_5 as unknown as PreviewComponent,
  },
  {
    id: "pro:social-proof-6",
    source: "pro",
    name: "social-proof-6",
    title: "Social Proof 6",
    category: "social-proof",
    installName: "@reactbits-pro/social-proof-6",
    command: "npx shadcn@latest add @reactbits-pro/social-proof-6",
    Component: Preview_pro_social_proof_6 as unknown as PreviewComponent,
  },
  {
    id: "pro:social-proof-7",
    source: "pro",
    name: "social-proof-7",
    title: "Social Proof 7",
    category: "social-proof",
    installName: "@reactbits-pro/social-proof-7",
    command: "npx shadcn@latest add @reactbits-pro/social-proof-7",
    Component: Preview_pro_social_proof_7 as unknown as PreviewComponent,
  },
  {
    id: "pro:social-proof-8",
    source: "pro",
    name: "social-proof-8",
    title: "Social Proof 8",
    category: "social-proof",
    installName: "@reactbits-pro/social-proof-8",
    command: "npx shadcn@latest add @reactbits-pro/social-proof-8",
    Component: Preview_pro_social_proof_8 as unknown as PreviewComponent,
  },
  {
    id: "pro:social-proof-9",
    source: "pro",
    name: "social-proof-9",
    title: "Social Proof 9",
    category: "social-proof",
    installName: "@reactbits-pro/social-proof-9",
    command: "npx shadcn@latest add @reactbits-pro/social-proof-9",
    Component: Preview_pro_social_proof_9 as unknown as PreviewComponent,
  },
  {
    id: "pro:social-proof-10",
    source: "pro",
    name: "social-proof-10",
    title: "Social Proof 10",
    category: "social-proof",
    installName: "@reactbits-pro/social-proof-10",
    command: "npx shadcn@latest add @reactbits-pro/social-proof-10",
    Component: Preview_pro_social_proof_10 as unknown as PreviewComponent,
  },
  {
    id: "pro:social-proof-11",
    source: "pro",
    name: "social-proof-11",
    title: "Social Proof 11",
    category: "social-proof",
    installName: "@reactbits-pro/social-proof-11",
    command: "npx shadcn@latest add @reactbits-pro/social-proof-11",
    Component: Preview_pro_social_proof_11 as unknown as PreviewComponent,
  },
  {
    id: "pro:social-proof-12",
    source: "pro",
    name: "social-proof-12",
    title: "Social Proof 12",
    category: "social-proof",
    installName: "@reactbits-pro/social-proof-12",
    command: "npx shadcn@latest add @reactbits-pro/social-proof-12",
    Component: Preview_pro_social_proof_12 as unknown as PreviewComponent,
  },
  {
    id: "pro:stats-1",
    source: "pro",
    name: "stats-1",
    title: "Stats 1",
    category: "stats",
    installName: "@reactbits-pro/stats-1",
    command: "npx shadcn@latest add @reactbits-pro/stats-1",
    Component: Preview_pro_stats_1 as unknown as PreviewComponent,
  },
  {
    id: "pro:stats-2",
    source: "pro",
    name: "stats-2",
    title: "Stats 2",
    category: "stats",
    installName: "@reactbits-pro/stats-2",
    command: "npx shadcn@latest add @reactbits-pro/stats-2",
    Component: Preview_pro_stats_2 as unknown as PreviewComponent,
  },
  {
    id: "pro:stats-3",
    source: "pro",
    name: "stats-3",
    title: "Stats 3",
    category: "stats",
    installName: "@reactbits-pro/stats-3",
    command: "npx shadcn@latest add @reactbits-pro/stats-3",
    Component: Preview_pro_stats_3 as unknown as PreviewComponent,
  },
  {
    id: "pro:stats-4",
    source: "pro",
    name: "stats-4",
    title: "Stats 4",
    category: "stats",
    installName: "@reactbits-pro/stats-4",
    command: "npx shadcn@latest add @reactbits-pro/stats-4",
    Component: Preview_pro_stats_4 as unknown as PreviewComponent,
  },
  {
    id: "pro:stats-5",
    source: "pro",
    name: "stats-5",
    title: "Stats 5",
    category: "stats",
    installName: "@reactbits-pro/stats-5",
    command: "npx shadcn@latest add @reactbits-pro/stats-5",
    Component: Preview_pro_stats_5 as unknown as PreviewComponent,
  },
  {
    id: "pro:stats-6",
    source: "pro",
    name: "stats-6",
    title: "Stats 6",
    category: "stats",
    installName: "@reactbits-pro/stats-6",
    command: "npx shadcn@latest add @reactbits-pro/stats-6",
    Component: Preview_pro_stats_6 as unknown as PreviewComponent,
  },
  {
    id: "pro:stats-7",
    source: "pro",
    name: "stats-7",
    title: "Stats 7",
    category: "stats",
    installName: "@reactbits-pro/stats-7",
    command: "npx shadcn@latest add @reactbits-pro/stats-7",
    Component: Preview_pro_stats_7 as unknown as PreviewComponent,
  },
  {
    id: "pro:stats-8",
    source: "pro",
    name: "stats-8",
    title: "Stats 8",
    category: "stats",
    installName: "@reactbits-pro/stats-8",
    command: "npx shadcn@latest add @reactbits-pro/stats-8",
    Component: Preview_pro_stats_8 as unknown as PreviewComponent,
  },
  {
    id: "pro:stats-9",
    source: "pro",
    name: "stats-9",
    title: "Stats 9",
    category: "stats",
    installName: "@reactbits-pro/stats-9",
    command: "npx shadcn@latest add @reactbits-pro/stats-9",
    Component: Preview_pro_stats_9 as unknown as PreviewComponent,
  },
  {
    id: "pro:stats-10",
    source: "pro",
    name: "stats-10",
    title: "Stats 10",
    category: "stats",
    installName: "@reactbits-pro/stats-10",
    command: "npx shadcn@latest add @reactbits-pro/stats-10",
    Component: Preview_pro_stats_10 as unknown as PreviewComponent,
  },
  {
    id: "pro:stats-11",
    source: "pro",
    name: "stats-11",
    title: "Stats 11",
    category: "stats",
    installName: "@reactbits-pro/stats-11",
    command: "npx shadcn@latest add @reactbits-pro/stats-11",
    Component: Preview_pro_stats_11 as unknown as PreviewComponent,
  },
  {
    id: "pro:waitlist-1",
    source: "pro",
    name: "waitlist-1",
    title: "Waitlist 1",
    category: "waitlist",
    installName: "@reactbits-pro/waitlist-1",
    command: "npx shadcn@latest add @reactbits-pro/waitlist-1",
    Component: Preview_pro_waitlist_1 as unknown as PreviewComponent,
  },
  {
    id: "pro:waitlist-2",
    source: "pro",
    name: "waitlist-2",
    title: "Waitlist 2",
    category: "waitlist",
    installName: "@reactbits-pro/waitlist-2",
    command: "npx shadcn@latest add @reactbits-pro/waitlist-2",
    Component: Preview_pro_waitlist_2 as unknown as PreviewComponent,
  },
  {
    id: "pro:waitlist-3",
    source: "pro",
    name: "waitlist-3",
    title: "Waitlist 3",
    category: "waitlist",
    installName: "@reactbits-pro/waitlist-3",
    command: "npx shadcn@latest add @reactbits-pro/waitlist-3",
    Component: Preview_pro_waitlist_3 as unknown as PreviewComponent,
  },
  {
    id: "starter:3d-letter-swap",
    source: "starter",
    name: "3d-letter-swap",
    title: "3d Letter Swap",
    category: "tw",
    installName: "@reactbits-starter/3d-letter-swap-tw",
    command: "npx shadcn@latest add @reactbits-starter/3d-letter-swap-tw",
    Component: Preview_starter_3d_letter_swap as unknown as PreviewComponent,
  },
  {
    id: "starter:3d-text-reveal",
    source: "starter",
    name: "3d-text-reveal",
    title: "3d Text Reveal",
    category: "tw",
    installName: "@reactbits-starter/3d-text-reveal-tw",
    command: "npx shadcn@latest add @reactbits-starter/3d-text-reveal-tw",
    Component: Preview_starter_3d_text_reveal as unknown as PreviewComponent,
  },
  {
    id: "starter:agentic-ball",
    source: "starter",
    name: "agentic-ball",
    title: "Agentic Ball",
    category: "tw",
    installName: "@reactbits-starter/agentic-ball-tw",
    command: "npx shadcn@latest add @reactbits-starter/agentic-ball-tw",
    Component: Preview_starter_agentic_ball as unknown as PreviewComponent,
  },
  {
    id: "starter:ai-blob",
    source: "starter",
    name: "ai-blob",
    title: "Ai Blob",
    category: "tw",
    installName: "@reactbits-starter/ai-blob-tw",
    command: "npx shadcn@latest add @reactbits-starter/ai-blob-tw",
    Component: Preview_starter_ai_blob as unknown as PreviewComponent,
  },
  {
    id: "starter:animated-list",
    source: "starter",
    name: "animated-list",
    title: "Animated List",
    category: "tw",
    installName: "@reactbits-starter/animated-list-tw",
    command: "npx shadcn@latest add @reactbits-starter/animated-list-tw",
    Component: Preview_starter_animated_list as unknown as PreviewComponent,
  },
  {
    id: "starter:ascii-cursor",
    source: "starter",
    name: "ascii-cursor",
    title: "Ascii Cursor",
    category: "tw",
    installName: "@reactbits-starter/ascii-cursor-tw",
    command: "npx shadcn@latest add @reactbits-starter/ascii-cursor-tw",
    Component: Preview_starter_ascii_cursor as unknown as PreviewComponent,
  },
  {
    id: "starter:ascii-tiles",
    source: "starter",
    name: "ascii-tiles",
    title: "Ascii Tiles",
    category: "tw",
    installName: "@reactbits-starter/ascii-tiles-tw",
    command: "npx shadcn@latest add @reactbits-starter/ascii-tiles-tw",
    Component: Preview_starter_ascii_tiles as unknown as PreviewComponent,
  },
  {
    id: "starter:ascii-waves",
    source: "starter",
    name: "ascii-waves",
    title: "Ascii Waves",
    category: "tw",
    installName: "@reactbits-starter/ascii-waves-tw",
    command: "npx shadcn@latest add @reactbits-starter/ascii-waves-tw",
    Component: Preview_starter_ascii_waves as unknown as PreviewComponent,
  },
  {
    id: "starter:aurora-blur",
    source: "starter",
    name: "aurora-blur",
    title: "Aurora Blur",
    category: "tw",
    installName: "@reactbits-starter/aurora-blur-tw",
    command: "npx shadcn@latest add @reactbits-starter/aurora-blur-tw",
    Component: Preview_starter_aurora_blur as unknown as PreviewComponent,
  },
  {
    id: "starter:black-hole",
    source: "starter",
    name: "black-hole",
    title: "Black Hole",
    category: "tw",
    installName: "@reactbits-starter/black-hole-tw",
    command: "npx shadcn@latest add @reactbits-starter/black-hole-tw",
    Component: Preview_starter_black_hole as unknown as PreviewComponent,
  },
  {
    id: "starter:blinking-squares",
    source: "starter",
    name: "blinking-squares",
    title: "Blinking Squares",
    category: "tw",
    installName: "@reactbits-starter/blinking-squares-tw",
    command: "npx shadcn@latest add @reactbits-starter/blinking-squares-tw",
    Component: Preview_starter_blinking_squares as unknown as PreviewComponent,
  },
  {
    id: "starter:blur-highlight",
    source: "starter",
    name: "blur-highlight",
    title: "Blur Highlight",
    category: "tw",
    installName: "@reactbits-starter/blur-highlight-tw",
    command: "npx shadcn@latest add @reactbits-starter/blur-highlight-tw",
    Component: Preview_starter_blur_highlight as unknown as PreviewComponent,
  },
  {
    id: "starter:blurred-rays",
    source: "starter",
    name: "blurred-rays",
    title: "Blurred Rays",
    category: "tw",
    installName: "@reactbits-starter/blurred-rays-tw",
    command: "npx shadcn@latest add @reactbits-starter/blurred-rays-tw",
    Component: Preview_starter_blurred_rays as unknown as PreviewComponent,
  },
  {
    id: "starter:center-flow",
    source: "starter",
    name: "center-flow",
    title: "Center Flow",
    category: "tw",
    installName: "@reactbits-starter/center-flow-tw",
    command: "npx shadcn@latest add @reactbits-starter/center-flow-tw",
    Component: Preview_starter_center_flow as unknown as PreviewComponent,
  },
  {
    id: "starter:chroma-blinds",
    source: "starter",
    name: "chroma-blinds",
    title: "Chroma Blinds",
    category: "tw",
    installName: "@reactbits-starter/chroma-blinds-tw",
    command: "npx shadcn@latest add @reactbits-starter/chroma-blinds-tw",
    Component: Preview_starter_chroma_blinds as unknown as PreviewComponent,
  },
  {
    id: "starter:chroma-card",
    source: "starter",
    name: "chroma-card",
    title: "Chroma Card",
    category: "tw",
    installName: "@reactbits-starter/chroma-card-tw",
    command: "npx shadcn@latest add @reactbits-starter/chroma-card-tw",
    Component: Preview_starter_chroma_card as unknown as PreviewComponent,
  },
  {
    id: "starter:chroma-waves",
    source: "starter",
    name: "chroma-waves",
    title: "Chroma Waves",
    category: "tw",
    installName: "@reactbits-starter/chroma-waves-tw",
    command: "npx shadcn@latest add @reactbits-starter/chroma-waves-tw",
    Component: Preview_starter_chroma_waves as unknown as PreviewComponent,
  },
  {
    id: "starter:circle-gallery",
    source: "starter",
    name: "circle-gallery",
    title: "Circle Gallery",
    category: "tw",
    installName: "@reactbits-starter/circle-gallery-tw",
    command: "npx shadcn@latest add @reactbits-starter/circle-gallery-tw",
    Component: Preview_starter_circle_gallery as unknown as PreviewComponent,
  },
  {
    id: "starter:circle-stack",
    source: "starter",
    name: "circle-stack",
    title: "Circle Stack",
    category: "tw",
    installName: "@reactbits-starter/circle-stack-tw",
    command: "npx shadcn@latest add @reactbits-starter/circle-stack-tw",
    Component: Preview_starter_circle_stack as unknown as PreviewComponent,
  },
  {
    id: "starter:circles",
    source: "starter",
    name: "circles",
    title: "Circles",
    category: "tw",
    installName: "@reactbits-starter/circles-tw",
    command: "npx shadcn@latest add @reactbits-starter/circles-tw",
    Component: Preview_starter_circles as unknown as PreviewComponent,
  },
  {
    id: "starter:click-stack",
    source: "starter",
    name: "click-stack",
    title: "Click Stack",
    category: "tw",
    installName: "@reactbits-starter/click-stack-tw",
    command: "npx shadcn@latest add @reactbits-starter/click-stack-tw",
    Component: Preview_starter_click_stack as unknown as PreviewComponent,
  },
  {
    id: "starter:color-loops",
    source: "starter",
    name: "color-loops",
    title: "Color Loops",
    category: "tw",
    installName: "@reactbits-starter/color-loops-tw",
    command: "npx shadcn@latest add @reactbits-starter/color-loops-tw",
    Component: Preview_starter_color_loops as unknown as PreviewComponent,
  },
  {
    id: "starter:comparison-slider",
    source: "starter",
    name: "comparison-slider",
    title: "Comparison Slider",
    category: "tw",
    installName: "@reactbits-starter/comparison-slider-tw",
    command: "npx shadcn@latest add @reactbits-starter/comparison-slider-tw",
    Component: Preview_starter_comparison_slider as unknown as PreviewComponent,
  },
  {
    id: "starter:credit-card",
    source: "starter",
    name: "credit-card",
    title: "Credit Card",
    category: "tw",
    installName: "@reactbits-starter/credit-card-tw",
    command: "npx shadcn@latest add @reactbits-starter/credit-card-tw",
    Component: Preview_starter_credit_card as unknown as PreviewComponent,
  },
  {
    id: "starter:cursor-wave",
    source: "starter",
    name: "cursor-wave",
    title: "Cursor Wave",
    category: "tw",
    installName: "@reactbits-starter/cursor-wave-tw",
    command: "npx shadcn@latest add @reactbits-starter/cursor-wave-tw",
    Component: Preview_starter_cursor_wave as unknown as PreviewComponent,
  },
  {
    id: "starter:custom-cursor",
    source: "starter",
    name: "custom-cursor",
    title: "Custom Cursor",
    category: "tw",
    installName: "@reactbits-starter/custom-cursor-tw",
    command: "npx shadcn@latest add @reactbits-starter/custom-cursor-tw",
    Component: Preview_starter_custom_cursor as unknown as PreviewComponent,
  },
  {
    id: "starter:depth-card",
    source: "starter",
    name: "depth-card",
    title: "Depth Card",
    category: "tw",
    installName: "@reactbits-starter/depth-card-tw",
    command: "npx shadcn@latest add @reactbits-starter/depth-card-tw",
    Component: Preview_starter_depth_card as unknown as PreviewComponent,
  },
  {
    id: "starter:device",
    source: "starter",
    name: "device",
    title: "Device",
    category: "tw",
    installName: "@reactbits-starter/device-tw",
    command: "npx shadcn@latest add @reactbits-starter/device-tw",
    Component: Preview_starter_device as unknown as PreviewComponent,
  },
  {
    id: "starter:dither-cursor",
    source: "starter",
    name: "dither-cursor",
    title: "Dither Cursor",
    category: "tw",
    installName: "@reactbits-starter/dither-cursor-tw",
    command: "npx shadcn@latest add @reactbits-starter/dither-cursor-tw",
    Component: Preview_starter_dither_cursor as unknown as PreviewComponent,
  },
  {
    id: "starter:dither-wave",
    source: "starter",
    name: "dither-wave",
    title: "Dither Wave",
    category: "tw",
    installName: "@reactbits-starter/dither-wave-tw",
    command: "npx shadcn@latest add @reactbits-starter/dither-wave-tw",
    Component: Preview_starter_dither_wave as unknown as PreviewComponent,
  },
  {
    id: "starter:dot-shift",
    source: "starter",
    name: "dot-shift",
    title: "Dot Shift",
    category: "tw",
    installName: "@reactbits-starter/dot-shift-tw",
    command: "npx shadcn@latest add @reactbits-starter/dot-shift-tw",
    Component: Preview_starter_dot_shift as unknown as PreviewComponent,
  },
  {
    id: "starter:draggable-grid",
    source: "starter",
    name: "draggable-grid",
    title: "Draggable Grid",
    category: "tw",
    installName: "@reactbits-starter/draggable-grid-tw",
    command: "npx shadcn@latest add @reactbits-starter/draggable-grid-tw",
    Component: Preview_starter_draggable_grid as unknown as PreviewComponent,
  },
  {
    id: "starter:falling-rays",
    source: "starter",
    name: "falling-rays",
    title: "Falling Rays",
    category: "tw",
    installName: "@reactbits-starter/falling-rays-tw",
    command: "npx shadcn@latest add @reactbits-starter/falling-rays-tw",
    Component: Preview_starter_falling_rays as unknown as PreviewComponent,
  },
  {
    id: "starter:flame-paths",
    source: "starter",
    name: "flame-paths",
    title: "Flame Paths",
    category: "tw",
    installName: "@reactbits-starter/flame-paths-tw",
    command: "npx shadcn@latest add @reactbits-starter/flame-paths-tw",
    Component: Preview_starter_flame_paths as unknown as PreviewComponent,
  },
  {
    id: "starter:flicker",
    source: "starter",
    name: "flicker",
    title: "Flicker",
    category: "tw",
    installName: "@reactbits-starter/flicker-tw",
    command: "npx shadcn@latest add @reactbits-starter/flicker-tw",
    Component: Preview_starter_flicker as unknown as PreviewComponent,
  },
  {
    id: "starter:fog-sphere",
    source: "starter",
    name: "fog-sphere",
    title: "Fog Sphere",
    category: "tw",
    installName: "@reactbits-starter/fog-sphere-tw",
    command: "npx shadcn@latest add @reactbits-starter/fog-sphere-tw",
    Component: Preview_starter_fog_sphere as unknown as PreviewComponent,
  },
  {
    id: "starter:frame-border",
    source: "starter",
    name: "frame-border",
    title: "Frame Border",
    category: "tw",
    installName: "@reactbits-starter/frame-border-tw",
    command: "npx shadcn@latest add @reactbits-starter/frame-border-tw",
    Component: Preview_starter_frame_border as unknown as PreviewComponent,
  },
  {
    id: "starter:glass-cursor",
    source: "starter",
    name: "glass-cursor",
    title: "Glass Cursor",
    category: "tw",
    installName: "@reactbits-starter/glass-cursor-tw",
    command: "npx shadcn@latest add @reactbits-starter/glass-cursor-tw",
    Component: Preview_starter_glass_cursor as unknown as PreviewComponent,
  },
  {
    id: "starter:glass-flow",
    source: "starter",
    name: "glass-flow",
    title: "Glass Flow",
    category: "tw",
    installName: "@reactbits-starter/glass-flow-tw",
    command: "npx shadcn@latest add @reactbits-starter/glass-flow-tw",
    Component: Preview_starter_glass_flow as unknown as PreviewComponent,
  },
  {
    id: "starter:glass-tiles",
    source: "starter",
    name: "glass-tiles",
    title: "Glass Tiles",
    category: "tw",
    installName: "@reactbits-starter/glass-tiles-tw",
    command: "npx shadcn@latest add @reactbits-starter/glass-tiles-tw",
    Component: Preview_starter_glass_tiles as unknown as PreviewComponent,
  },
  {
    id: "starter:glitch-text",
    source: "starter",
    name: "glitch-text",
    title: "Glitch Text",
    category: "tw",
    installName: "@reactbits-starter/glitch-text-tw",
    command: "npx shadcn@latest add @reactbits-starter/glitch-text-tw",
    Component: Preview_starter_glitch_text as unknown as PreviewComponent,
  },
  {
    id: "starter:glitter-warp",
    source: "starter",
    name: "glitter-warp",
    title: "Glitter Warp",
    category: "tw",
    installName: "@reactbits-starter/glitter-warp-tw",
    command: "npx shadcn@latest add @reactbits-starter/glitter-warp-tw",
    Component: Preview_starter_glitter_warp as unknown as PreviewComponent,
  },
  {
    id: "starter:globe",
    source: "starter",
    name: "globe",
    title: "Globe",
    category: "tw",
    installName: "@reactbits-starter/globe-tw",
    command: "npx shadcn@latest add @reactbits-starter/globe-tw",
    Component: Preview_starter_globe as unknown as PreviewComponent,
  },
  {
    id: "starter:gradient-bars",
    source: "starter",
    name: "gradient-bars",
    title: "Gradient Bars",
    category: "tw",
    installName: "@reactbits-starter/gradient-bars-tw",
    command: "npx shadcn@latest add @reactbits-starter/gradient-bars-tw",
    Component: Preview_starter_gradient_bars as unknown as PreviewComponent,
  },
  {
    id: "starter:gradient-blob",
    source: "starter",
    name: "gradient-blob",
    title: "Gradient Blob",
    category: "tw",
    installName: "@reactbits-starter/gradient-blob-tw",
    command: "npx shadcn@latest add @reactbits-starter/gradient-blob-tw",
    Component: Preview_starter_gradient_blob as unknown as PreviewComponent,
  },
  {
    id: "starter:gradient-carousel",
    source: "starter",
    name: "gradient-carousel",
    title: "Gradient Carousel",
    category: "tw",
    installName: "@reactbits-starter/gradient-carousel-tw",
    command: "npx shadcn@latest add @reactbits-starter/gradient-carousel-tw",
    Component: Preview_starter_gradient_carousel as unknown as PreviewComponent,
  },
  {
    id: "starter:grain-wave",
    source: "starter",
    name: "grain-wave",
    title: "Grain Wave",
    category: "tw",
    installName: "@reactbits-starter/grain-wave-tw",
    command: "npx shadcn@latest add @reactbits-starter/grain-wave-tw",
    Component: Preview_starter_grain_wave as unknown as PreviewComponent,
  },
  {
    id: "starter:halftone-vortex",
    source: "starter",
    name: "halftone-vortex",
    title: "Halftone Vortex",
    category: "tw",
    installName: "@reactbits-starter/halftone-vortex-tw",
    command: "npx shadcn@latest add @reactbits-starter/halftone-vortex-tw",
    Component: Preview_starter_halftone_vortex as unknown as PreviewComponent,
  },
  {
    id: "starter:halftone-wave",
    source: "starter",
    name: "halftone-wave",
    title: "Halftone Wave",
    category: "tw",
    installName: "@reactbits-starter/halftone-wave-tw",
    command: "npx shadcn@latest add @reactbits-starter/halftone-wave-tw",
    Component: Preview_starter_halftone_wave as unknown as PreviewComponent,
  },
  {
    id: "starter:hover-preview",
    source: "starter",
    name: "hover-preview",
    title: "Hover Preview",
    category: "tw",
    installName: "@reactbits-starter/hover-preview-tw",
    command: "npx shadcn@latest add @reactbits-starter/hover-preview-tw",
    Component: Preview_starter_hover_preview as unknown as PreviewComponent,
  },
  {
    id: "starter:infinite-gallery",
    source: "starter",
    name: "infinite-gallery",
    title: "Infinite Gallery",
    category: "tw",
    installName: "@reactbits-starter/infinite-gallery-tw",
    command: "npx shadcn@latest add @reactbits-starter/infinite-gallery-tw",
    Component: Preview_starter_infinite_gallery as unknown as PreviewComponent,
  },
  {
    id: "starter:light-droplets",
    source: "starter",
    name: "light-droplets",
    title: "Light Droplets",
    category: "tw",
    installName: "@reactbits-starter/light-droplets-tw",
    command: "npx shadcn@latest add @reactbits-starter/light-droplets-tw",
    Component: Preview_starter_light_droplets as unknown as PreviewComponent,
  },
  {
    id: "starter:lightspeed",
    source: "starter",
    name: "lightspeed",
    title: "Lightspeed",
    category: "tw",
    installName: "@reactbits-starter/lightspeed-tw",
    command: "npx shadcn@latest add @reactbits-starter/lightspeed-tw",
    Component: Preview_starter_lightspeed as unknown as PreviewComponent,
  },
  {
    id: "starter:liquid-ascii",
    source: "starter",
    name: "liquid-ascii",
    title: "Liquid Ascii",
    category: "tw",
    installName: "@reactbits-starter/liquid-ascii-tw",
    command: "npx shadcn@latest add @reactbits-starter/liquid-ascii-tw",
    Component: Preview_starter_liquid_ascii as unknown as PreviewComponent,
  },
  {
    id: "starter:liquid-bars",
    source: "starter",
    name: "liquid-bars",
    title: "Liquid Bars",
    category: "tw",
    installName: "@reactbits-starter/liquid-bars-tw",
    command: "npx shadcn@latest add @reactbits-starter/liquid-bars-tw",
    Component: Preview_starter_liquid_bars as unknown as PreviewComponent,
  },
  {
    id: "starter:liquid-lines",
    source: "starter",
    name: "liquid-lines",
    title: "Liquid Lines",
    category: "tw",
    installName: "@reactbits-starter/liquid-lines-tw",
    command: "npx shadcn@latest add @reactbits-starter/liquid-lines-tw",
    Component: Preview_starter_liquid_lines as unknown as PreviewComponent,
  },
  {
    id: "starter:liquid-swap",
    source: "starter",
    name: "liquid-swap",
    title: "Liquid Swap",
    category: "tw",
    installName: "@reactbits-starter/liquid-swap-tw",
    command: "npx shadcn@latest add @reactbits-starter/liquid-swap-tw",
    Component: Preview_starter_liquid_swap as unknown as PreviewComponent,
  },
  {
    id: "starter:magic-transform",
    source: "starter",
    name: "magic-transform",
    title: "Magic Transform",
    category: "tw",
    installName: "@reactbits-starter/magic-transform-tw",
    command: "npx shadcn@latest add @reactbits-starter/magic-transform-tw",
    Component: Preview_starter_magic_transform as unknown as PreviewComponent,
  },
  {
    id: "starter:metallic-swirl",
    source: "starter",
    name: "metallic-swirl",
    title: "Metallic Swirl",
    category: "tw",
    installName: "@reactbits-starter/metallic-swirl-tw",
    command: "npx shadcn@latest add @reactbits-starter/metallic-swirl-tw",
    Component: Preview_starter_metallic_swirl as unknown as PreviewComponent,
  },
  {
    id: "starter:modal-cards",
    source: "starter",
    name: "modal-cards",
    title: "Modal Cards",
    category: "tw",
    installName: "@reactbits-starter/modal-cards-tw",
    command: "npx shadcn@latest add @reactbits-starter/modal-cards-tw",
    Component: Preview_starter_modal_cards as unknown as PreviewComponent,
  },
  {
    id: "starter:mosaic",
    source: "starter",
    name: "mosaic",
    title: "Mosaic",
    category: "tw",
    installName: "@reactbits-starter/mosaic-tw",
    command: "npx shadcn@latest add @reactbits-starter/mosaic-tw",
    Component: Preview_starter_mosaic as unknown as PreviewComponent,
  },
  {
    id: "starter:neon-reveal",
    source: "starter",
    name: "neon-reveal",
    title: "Neon Reveal",
    category: "tw",
    installName: "@reactbits-starter/neon-reveal-tw",
    command: "npx shadcn@latest add @reactbits-starter/neon-reveal-tw",
    Component: Preview_starter_neon_reveal as unknown as PreviewComponent,
  },
  {
    id: "starter:parallax-cards",
    source: "starter",
    name: "parallax-cards",
    title: "Parallax Cards",
    category: "tw",
    installName: "@reactbits-starter/parallax-cards-tw",
    command: "npx shadcn@latest add @reactbits-starter/parallax-cards-tw",
    Component: Preview_starter_parallax_cards as unknown as PreviewComponent,
  },
  {
    id: "starter:parallax-carousel",
    source: "starter",
    name: "parallax-carousel",
    title: "Parallax Carousel",
    category: "tw",
    installName: "@reactbits-starter/parallax-carousel-tw",
    command: "npx shadcn@latest add @reactbits-starter/parallax-carousel-tw",
    Component: Preview_starter_parallax_carousel as unknown as PreviewComponent,
  },
  {
    id: "starter:parallax-pills",
    source: "starter",
    name: "parallax-pills",
    title: "Parallax Pills",
    category: "tw",
    installName: "@reactbits-starter/parallax-pills-tw",
    command: "npx shadcn@latest add @reactbits-starter/parallax-pills-tw",
    Component: Preview_starter_parallax_pills as unknown as PreviewComponent,
  },
  {
    id: "starter:particle-text",
    source: "starter",
    name: "particle-text",
    title: "Particle Text",
    category: "tw",
    installName: "@reactbits-starter/particle-text-tw",
    command: "npx shadcn@latest add @reactbits-starter/particle-text-tw",
    Component: Preview_starter_particle_text as unknown as PreviewComponent,
  },
  {
    id: "starter:perspective-grid",
    source: "starter",
    name: "perspective-grid",
    title: "Perspective Grid",
    category: "tw",
    installName: "@reactbits-starter/perspective-grid-tw",
    command: "npx shadcn@latest add @reactbits-starter/perspective-grid-tw",
    Component: Preview_starter_perspective_grid as unknown as PreviewComponent,
  },
  {
    id: "starter:pixel-reveal",
    source: "starter",
    name: "pixel-reveal",
    title: "Pixel Reveal",
    category: "tw",
    installName: "@reactbits-starter/pixel-reveal-tw",
    command: "npx shadcn@latest add @reactbits-starter/pixel-reveal-tw",
    Component: Preview_starter_pixel_reveal as unknown as PreviewComponent,
  },
  {
    id: "starter:pixelate-hover",
    source: "starter",
    name: "pixelate-hover",
    title: "Pixelate Hover",
    category: "tw",
    installName: "@reactbits-starter/pixelate-hover-tw",
    command: "npx shadcn@latest add @reactbits-starter/pixelate-hover-tw",
    Component: Preview_starter_pixelate_hover as unknown as PreviewComponent,
  },
  {
    id: "starter:portal",
    source: "starter",
    name: "portal",
    title: "Portal",
    category: "tw",
    installName: "@reactbits-starter/portal-tw",
    command: "npx shadcn@latest add @reactbits-starter/portal-tw",
    Component: Preview_starter_portal as unknown as PreviewComponent,
  },
  {
    id: "starter:preloader",
    source: "starter",
    name: "preloader",
    title: "Preloader",
    category: "tw",
    installName: "@reactbits-starter/preloader-tw",
    command: "npx shadcn@latest add @reactbits-starter/preloader-tw",
    Component: Preview_starter_preloader as unknown as PreviewComponent,
  },
  {
    id: "starter:radial-liquid",
    source: "starter",
    name: "radial-liquid",
    title: "Radial Liquid",
    category: "tw",
    installName: "@reactbits-starter/radial-liquid-tw",
    command: "npx shadcn@latest add @reactbits-starter/radial-liquid-tw",
    Component: Preview_starter_radial_liquid as unknown as PreviewComponent,
  },
  {
    id: "starter:retro-lines",
    source: "starter",
    name: "retro-lines",
    title: "Retro Lines",
    category: "tw",
    installName: "@reactbits-starter/retro-lines-tw",
    command: "npx shadcn@latest add @reactbits-starter/retro-lines-tw",
    Component: Preview_starter_retro_lines as unknown as PreviewComponent,
  },
  {
    id: "starter:rising-lines",
    source: "starter",
    name: "rising-lines",
    title: "Rising Lines",
    category: "tw",
    installName: "@reactbits-starter/rising-lines-tw",
    command: "npx shadcn@latest add @reactbits-starter/rising-lines-tw",
    Component: Preview_starter_rising_lines as unknown as PreviewComponent,
  },
  {
    id: "starter:rotating-cards",
    source: "starter",
    name: "rotating-cards",
    title: "Rotating Cards",
    category: "tw",
    installName: "@reactbits-starter/rotating-cards-tw",
    command: "npx shadcn@latest add @reactbits-starter/rotating-cards-tw",
    Component: Preview_starter_rotating_cards as unknown as PreviewComponent,
  },
  {
    id: "starter:rotating-stars",
    source: "starter",
    name: "rotating-stars",
    title: "Rotating Stars",
    category: "tw",
    installName: "@reactbits-starter/rotating-stars-tw",
    command: "npx shadcn@latest add @reactbits-starter/rotating-stars-tw",
    Component: Preview_starter_rotating_stars as unknown as PreviewComponent,
  },
  {
    id: "starter:rubber-fluid",
    source: "starter",
    name: "rubber-fluid",
    title: "Rubber Fluid",
    category: "tw",
    installName: "@reactbits-starter/rubber-fluid-tw",
    command: "npx shadcn@latest add @reactbits-starter/rubber-fluid-tw",
    Component: Preview_starter_rubber_fluid as unknown as PreviewComponent,
  },
  {
    id: "starter:shader-card",
    source: "starter",
    name: "shader-card",
    title: "Shader Card",
    category: "tw",
    installName: "@reactbits-starter/shader-card-tw",
    command: "npx shadcn@latest add @reactbits-starter/shader-card-tw",
    Component: Preview_starter_shader_card as unknown as PreviewComponent,
  },
  {
    id: "starter:shader-reveal",
    source: "starter",
    name: "shader-reveal",
    title: "Shader Reveal",
    category: "tw",
    installName: "@reactbits-starter/shader-reveal-tw",
    command: "npx shadcn@latest add @reactbits-starter/shader-reveal-tw",
    Component: Preview_starter_shader_reveal as unknown as PreviewComponent,
  },
  {
    id: "starter:shader-waves",
    source: "starter",
    name: "shader-waves",
    title: "Shader Waves",
    category: "tw",
    installName: "@reactbits-starter/shader-waves-tw",
    command: "npx shadcn@latest add @reactbits-starter/shader-waves-tw",
    Component: Preview_starter_shader_waves as unknown as PreviewComponent,
  },
  {
    id: "starter:shadow-bars",
    source: "starter",
    name: "shadow-bars",
    title: "Shadow Bars",
    category: "tw",
    installName: "@reactbits-starter/shadow-bars-tw",
    command: "npx shadcn@latest add @reactbits-starter/shadow-bars-tw",
    Component: Preview_starter_shadow_bars as unknown as PreviewComponent,
  },
  {
    id: "starter:silk-waves",
    source: "starter",
    name: "silk-waves",
    title: "Silk Waves",
    category: "tw",
    installName: "@reactbits-starter/silk-waves-tw",
    command: "npx shadcn@latest add @reactbits-starter/silk-waves-tw",
    Component: Preview_starter_silk_waves as unknown as PreviewComponent,
  },
  {
    id: "starter:simple-graph",
    source: "starter",
    name: "simple-graph",
    title: "Simple Graph",
    category: "tw",
    installName: "@reactbits-starter/simple-graph-tw",
    command: "npx shadcn@latest add @reactbits-starter/simple-graph-tw",
    Component: Preview_starter_simple_graph as unknown as PreviewComponent,
  },
  {
    id: "starter:simple-swirl",
    source: "starter",
    name: "simple-swirl",
    title: "Simple Swirl",
    category: "tw",
    installName: "@reactbits-starter/simple-swirl-tw",
    command: "npx shadcn@latest add @reactbits-starter/simple-swirl-tw",
    Component: Preview_starter_simple_swirl as unknown as PreviewComponent,
  },
  {
    id: "starter:smooth-cursor",
    source: "starter",
    name: "smooth-cursor",
    title: "Smooth Cursor",
    category: "tw",
    installName: "@reactbits-starter/smooth-cursor-tw",
    command: "npx shadcn@latest add @reactbits-starter/smooth-cursor-tw",
    Component: Preview_starter_smooth_cursor as unknown as PreviewComponent,
  },
  {
    id: "starter:square-matrix",
    source: "starter",
    name: "square-matrix",
    title: "Square Matrix",
    category: "tw",
    installName: "@reactbits-starter/square-matrix-tw",
    command: "npx shadcn@latest add @reactbits-starter/square-matrix-tw",
    Component: Preview_starter_square_matrix as unknown as PreviewComponent,
  },
  {
    id: "starter:squircle-shift",
    source: "starter",
    name: "squircle-shift",
    title: "Squircle Shift",
    category: "tw",
    installName: "@reactbits-starter/squircle-shift-tw",
    command: "npx shadcn@latest add @reactbits-starter/squircle-shift-tw",
    Component: Preview_starter_squircle_shift as unknown as PreviewComponent,
  },
  {
    id: "starter:staggered-text",
    source: "starter",
    name: "staggered-text",
    title: "Staggered Text",
    category: "tw",
    installName: "@reactbits-starter/staggered-text-tw",
    command: "npx shadcn@latest add @reactbits-starter/staggered-text-tw",
    Component: Preview_starter_staggered_text as unknown as PreviewComponent,
  },
  {
    id: "starter:star-burst",
    source: "starter",
    name: "star-burst",
    title: "Star Burst",
    category: "tw",
    installName: "@reactbits-starter/star-burst-tw",
    command: "npx shadcn@latest add @reactbits-starter/star-burst-tw",
    Component: Preview_starter_star_burst as unknown as PreviewComponent,
  },
  {
    id: "starter:star-swipe",
    source: "starter",
    name: "star-swipe",
    title: "Star Swipe",
    category: "tw",
    installName: "@reactbits-starter/star-swipe-tw",
    command: "npx shadcn@latest add @reactbits-starter/star-swipe-tw",
    Component: Preview_starter_star_swipe as unknown as PreviewComponent,
  },
  {
    id: "starter:swirl-blend",
    source: "starter",
    name: "swirl-blend",
    title: "Swirl Blend",
    category: "tw",
    installName: "@reactbits-starter/swirl-blend-tw",
    command: "npx shadcn@latest add @reactbits-starter/swirl-blend-tw",
    Component: Preview_starter_swirl_blend as unknown as PreviewComponent,
  },
  {
    id: "starter:synaptic-shift",
    source: "starter",
    name: "synaptic-shift",
    title: "Synaptic Shift",
    category: "tw",
    installName: "@reactbits-starter/synaptic-shift-tw",
    command: "npx shadcn@latest add @reactbits-starter/synaptic-shift-tw",
    Component: Preview_starter_synaptic_shift as unknown as PreviewComponent,
  },
  {
    id: "starter:text-cube",
    source: "starter",
    name: "text-cube",
    title: "Text Cube",
    category: "tw",
    installName: "@reactbits-starter/text-cube-tw",
    command: "npx shadcn@latest add @reactbits-starter/text-cube-tw",
    Component: Preview_starter_text_cube as unknown as PreviewComponent,
  },
  {
    id: "starter:text-path",
    source: "starter",
    name: "text-path",
    title: "Text Path",
    category: "tw",
    installName: "@reactbits-starter/text-path-tw",
    command: "npx shadcn@latest add @reactbits-starter/text-path-tw",
    Component: Preview_starter_text_path as unknown as PreviewComponent,
  },
  {
    id: "starter:text-scatter",
    source: "starter",
    name: "text-scatter",
    title: "Text Scatter",
    category: "tw",
    installName: "@reactbits-starter/text-scatter-tw",
    command: "npx shadcn@latest add @reactbits-starter/text-scatter-tw",
    Component: Preview_starter_text_scatter as unknown as PreviewComponent,
  },
  {
    id: "starter:twilight-lines",
    source: "starter",
    name: "twilight-lines",
    title: "Twilight Lines",
    category: "tw",
    installName: "@reactbits-starter/twilight-lines-tw",
    command: "npx shadcn@latest add @reactbits-starter/twilight-lines-tw",
    Component: Preview_starter_twilight_lines as unknown as PreviewComponent,
  },
  {
    id: "starter:user-cursor",
    source: "starter",
    name: "user-cursor",
    title: "User Cursor",
    category: "tw",
    installName: "@reactbits-starter/user-cursor-tw",
    command: "npx shadcn@latest add @reactbits-starter/user-cursor-tw",
    Component: Preview_starter_user_cursor as unknown as PreviewComponent,
  },
  {
    id: "starter:vortex",
    source: "starter",
    name: "vortex",
    title: "Vortex",
    category: "tw",
    installName: "@reactbits-starter/vortex-tw",
    command: "npx shadcn@latest add @reactbits-starter/vortex-tw",
    Component: Preview_starter_vortex as unknown as PreviewComponent,
  },
  {
    id: "starter:warp-twister",
    source: "starter",
    name: "warp-twister",
    title: "Warp Twister",
    category: "tw",
    installName: "@reactbits-starter/warp-twister-tw",
    command: "npx shadcn@latest add @reactbits-starter/warp-twister-tw",
    Component: Preview_starter_warp_twister as unknown as PreviewComponent,
  },
  {
    id: "starter:warped-card",
    source: "starter",
    name: "warped-card",
    title: "Warped Card",
    category: "tw",
    installName: "@reactbits-starter/warped-card-tw",
    command: "npx shadcn@latest add @reactbits-starter/warped-card-tw",
    Component: Preview_starter_warped_card as unknown as PreviewComponent,
  },
  {
    id: "starter:watercolor",
    source: "starter",
    name: "watercolor",
    title: "Watercolor",
    category: "tw",
    installName: "@reactbits-starter/watercolor-tw",
    command: "npx shadcn@latest add @reactbits-starter/watercolor-tw",
    Component: Preview_starter_watercolor as unknown as PreviewComponent,
  }
];
