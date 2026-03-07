import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("pre-wedding-photography")!;

export const metadata: Metadata = {
  title: "Udaipur pre wedding shoot in Vadodara | Pre-Wedding Photography | VadodaraExperts",
  description: "Professional udaipur pre wedding shoot services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/pre-wedding-photography/udaipur-pre-wedding-shoot-vadodara" },
  openGraph: {
    title: "Udaipur pre wedding shoot in Vadodara | VadodaraExperts",
    description: "Professional udaipur pre wedding shoot services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/pre-wedding-photography/udaipur-pre-wedding-shoot-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="udaipur-pre-wedding-shoot-vadodara" />;
}
