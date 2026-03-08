import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("building-maintenance-services")!;

export const metadata: Metadata = {
  title: "Column repair in Vadodara | Building Maintenance Services | VadodaraExperts",
  description: "Professional column repair services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/building-maintenance-services/column-repair-vadodara" },
  openGraph: {
    title: "Column repair in Vadodara | VadodaraExperts",
    description: "Professional column repair services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/building-maintenance-services/column-repair-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="column-repair-vadodara" />;
}
