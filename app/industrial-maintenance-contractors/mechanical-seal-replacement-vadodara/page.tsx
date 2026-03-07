import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-maintenance-contractors")!;

export const metadata: Metadata = {
  title: "mechanical seal replacement in Vadodara | Industrial Maintenance Contractors | VadodaraExperts",
  description: "Professional mechanical seal replacement services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-maintenance-contractors/mechanical-seal-replacement-vadodara" },
  openGraph: {
    title: "mechanical seal replacement in Vadodara | VadodaraExperts",
    description: "Professional mechanical seal replacement services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-maintenance-contractors/mechanical-seal-replacement-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="mechanical-seal-replacement-vadodara" />;
}
