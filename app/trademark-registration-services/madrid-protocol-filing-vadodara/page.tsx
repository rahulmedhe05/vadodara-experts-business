import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("trademark-registration-services")!;

export const metadata: Metadata = {
  title: "Madrid protocol filing in Vadodara | Trademark Registration Services | VadodaraExperts",
  description: "Professional madrid protocol filing services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/trademark-registration-services/madrid-protocol-filing-vadodara" },
  openGraph: {
    title: "Madrid protocol filing in Vadodara | VadodaraExperts",
    description: "Professional madrid protocol filing services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/trademark-registration-services/madrid-protocol-filing-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="madrid-protocol-filing-vadodara" />;
}
