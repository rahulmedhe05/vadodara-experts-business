import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("steel-structure-construction")!;

export const metadata: Metadata = {
  title: "zinc coating steel in Vadodara | Steel Structure Construction | VadodaraExperts",
  description: "Professional zinc coating steel services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/steel-structure-construction/zinc-coating-steel-vadodara" },
  openGraph: {
    title: "zinc coating steel in Vadodara | VadodaraExperts",
    description: "Professional zinc coating steel services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/steel-structure-construction/zinc-coating-steel-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="zinc-coating-steel-vadodara" />;
}
