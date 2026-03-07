import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("mechanical-contractor-services")!;

export const metadata: Metadata = {
  title: "GI piping in Vadodara | Mechanical Contractor Services | VadodaraExperts",
  description: "Professional gi piping services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/mechanical-contractor-services/gi-piping-vadodara" },
  openGraph: {
    title: "GI piping in Vadodara | VadodaraExperts",
    description: "Professional gi piping services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/mechanical-contractor-services/gi-piping-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="gi-piping-vadodara" />;
}
