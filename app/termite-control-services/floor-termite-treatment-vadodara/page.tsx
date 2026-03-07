import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("termite-control-services")!;

export const metadata: Metadata = {
  title: "Floor termite treatment in Vadodara | Termite Control Services | VadodaraExperts",
  description: "Professional floor termite treatment services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/termite-control-services/floor-termite-treatment-vadodara" },
  openGraph: {
    title: "Floor termite treatment in Vadodara | VadodaraExperts",
    description: "Professional floor termite treatment services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/termite-control-services/floor-termite-treatment-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="floor-termite-treatment-vadodara" />;
}
