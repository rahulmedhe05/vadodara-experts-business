import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("electrical-contractor-services")!;

export const metadata: Metadata = {
  title: "maintenance free earthing in Vadodara | Electrical Contractor Services | VadodaraExperts",
  description: "Professional maintenance free earthing services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/electrical-contractor-services/maintenance-free-earthing-vadodara" },
  openGraph: {
    title: "maintenance free earthing in Vadodara | VadodaraExperts",
    description: "Professional maintenance free earthing services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/electrical-contractor-services/maintenance-free-earthing-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="maintenance-free-earthing-vadodara" />;
}
