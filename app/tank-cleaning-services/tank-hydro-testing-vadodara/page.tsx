import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("tank-cleaning-services")!;

export const metadata: Metadata = {
  title: "tank hydro testing in Vadodara | Tank Cleaning Services | VadodaraExperts",
  description: "Professional tank hydro testing services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/tank-cleaning-services/tank-hydro-testing-vadodara" },
  openGraph: {
    title: "tank hydro testing in Vadodara | VadodaraExperts",
    description: "Professional tank hydro testing services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/tank-cleaning-services/tank-hydro-testing-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="tank-hydro-testing-vadodara" />;
}
