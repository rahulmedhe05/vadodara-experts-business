import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("building-maintenance-services")!;

export const metadata: Metadata = {
  title: "Fire escape maintenance in Vadodara | Building Maintenance Services | VadodaraExperts",
  description: "Professional fire escape maintenance services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/building-maintenance-services/fire-escape-maintenance-vadodara" },
  openGraph: {
    title: "Fire escape maintenance in Vadodara | VadodaraExperts",
    description: "Professional fire escape maintenance services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/building-maintenance-services/fire-escape-maintenance-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="fire-escape-maintenance-vadodara" />;
}
