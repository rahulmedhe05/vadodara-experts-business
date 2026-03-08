import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("curtain-blinds-installation")!;

export const metadata: Metadata = {
  title: "Faux wood blinds in Vadodara | Curtain & Blinds Installation | VadodaraExperts",
  description: "Professional faux wood blinds services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/curtain-blinds-installation/faux-wood-blinds-vadodara" },
  openGraph: {
    title: "Faux wood blinds in Vadodara | VadodaraExperts",
    description: "Professional faux wood blinds services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/curtain-blinds-installation/faux-wood-blinds-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="faux-wood-blinds-vadodara" />;
}
