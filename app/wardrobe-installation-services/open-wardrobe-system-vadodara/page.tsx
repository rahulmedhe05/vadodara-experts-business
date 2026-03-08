import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("wardrobe-installation-services")!;

export const metadata: Metadata = {
  title: "Open wardrobe system in Vadodara | Wardrobe Installation Services | VadodaraExperts",
  description: "Professional open wardrobe system services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/wardrobe-installation-services/open-wardrobe-system-vadodara" },
  openGraph: {
    title: "Open wardrobe system in Vadodara | VadodaraExperts",
    description: "Professional open wardrobe system services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/wardrobe-installation-services/open-wardrobe-system-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="open-wardrobe-system-vadodara" />;
}
