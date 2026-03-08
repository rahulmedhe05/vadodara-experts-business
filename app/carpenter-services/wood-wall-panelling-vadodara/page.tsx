import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("carpenter-services")!;

export const metadata: Metadata = {
  title: "Wood wall panelling in Vadodara | Carpenter Services | VadodaraExperts",
  description: "Professional wood wall panelling services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/carpenter-services/wood-wall-panelling-vadodara" },
  openGraph: {
    title: "Wood wall panelling in Vadodara | VadodaraExperts",
    description: "Professional wood wall panelling services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/carpenter-services/wood-wall-panelling-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="wood-wall-panelling-vadodara" />;
}
