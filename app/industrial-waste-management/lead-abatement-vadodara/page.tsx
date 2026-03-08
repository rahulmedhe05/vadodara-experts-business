import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-waste-management")!;

export const metadata: Metadata = {
  title: "Lead abatement in Vadodara | Industrial Waste Management | VadodaraExperts",
  description: "Professional lead abatement services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-waste-management/lead-abatement-vadodara" },
  openGraph: {
    title: "Lead abatement in Vadodara | VadodaraExperts",
    description: "Professional lead abatement services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-waste-management/lead-abatement-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="lead-abatement-vadodara" />;
}
