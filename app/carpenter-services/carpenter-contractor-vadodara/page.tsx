import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("carpenter-services")!;

export const metadata: Metadata = {
  title: "Carpenter contractor in Vadodara | Carpenter Services | VadodaraExperts",
  description: "Professional carpenter contractor services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/carpenter-services/carpenter-contractor-vadodara" },
  openGraph: {
    title: "Carpenter contractor in Vadodara | VadodaraExperts",
    description: "Professional carpenter contractor services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/carpenter-services/carpenter-contractor-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="carpenter-contractor-vadodara" />;
}
