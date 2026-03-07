import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("diagnostic-labs")!;

export const metadata: Metadata = {
  title: "Post prandial blood sugar in Vadodara | Diagnostic Labs | VadodaraExperts",
  description: "Professional post prandial blood sugar services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/diagnostic-labs/post-prandial-blood-sugar-vadodara" },
  openGraph: {
    title: "Post prandial blood sugar in Vadodara | VadodaraExperts",
    description: "Professional post prandial blood sugar services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/diagnostic-labs/post-prandial-blood-sugar-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="post-prandial-blood-sugar-vadodara" />;
}
