import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("factory-leasing-services")!;

export const metadata: Metadata = {
  title: "plug and play factory in Vadodara | Factory Leasing Services | VadodaraExperts",
  description: "Professional plug and play factory services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/factory-leasing-services/plug-and-play-factory-vadodara" },
  openGraph: {
    title: "plug and play factory in Vadodara | VadodaraExperts",
    description: "Professional plug and play factory services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/factory-leasing-services/plug-and-play-factory-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="plug-and-play-factory-vadodara" />;
}
