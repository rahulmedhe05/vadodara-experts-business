import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("pre-wedding-photography")!;

export const metadata: Metadata = {
  title: "Kerala pre wedding shoot in Vadodara | Pre-Wedding Photography | VadodaraExperts",
  description: "Professional kerala pre wedding shoot services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/pre-wedding-photography/kerala-pre-wedding-shoot-vadodara" },
  openGraph: {
    title: "Kerala pre wedding shoot in Vadodara | VadodaraExperts",
    description: "Professional kerala pre wedding shoot services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/pre-wedding-photography/kerala-pre-wedding-shoot-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="kerala-pre-wedding-shoot-vadodara" />;
}
