import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("trademark-registration-services")!;

export const metadata: Metadata = {
  title: "PCT application in Vadodara | Trademark Registration Services | VadodaraExperts",
  description: "Professional pct application services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/trademark-registration-services/pct-application-vadodara" },
  openGraph: {
    title: "PCT application in Vadodara | VadodaraExperts",
    description: "Professional pct application services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/trademark-registration-services/pct-application-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="pct-application-vadodara" />;
}
