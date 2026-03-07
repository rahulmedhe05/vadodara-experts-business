import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("modular-kitchen-services")!;

export const metadata: Metadata = {
  title: "Tandem drawer in Vadodara | Modular Kitchen Services | VadodaraExperts",
  description: "Professional tandem drawer services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/modular-kitchen-services/tandem-drawer-vadodara" },
  openGraph: {
    title: "Tandem drawer in Vadodara | VadodaraExperts",
    description: "Professional tandem drawer services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/modular-kitchen-services/tandem-drawer-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="tandem-drawer-vadodara" />;
}
