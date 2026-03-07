import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("electrical-contractor-services")!;

export const metadata: Metadata = {
  title: "new electrical connection in Vadodara | Electrical Contractor Services | VadodaraExperts",
  description: "Professional new electrical connection services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/electrical-contractor-services/new-electrical-connection-vadodara" },
  openGraph: {
    title: "new electrical connection in Vadodara | VadodaraExperts",
    description: "Professional new electrical connection services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/electrical-contractor-services/new-electrical-connection-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="new-electrical-connection-vadodara" />;
}
