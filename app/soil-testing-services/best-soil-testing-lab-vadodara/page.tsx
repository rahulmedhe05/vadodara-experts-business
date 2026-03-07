import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("soil-testing-services")!;

export const metadata: Metadata = {
  title: "best soil testing lab in Vadodara | Soil Testing Services | VadodaraExperts",
  description: "Professional best soil testing lab services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/soil-testing-services/best-soil-testing-lab-vadodara" },
  openGraph: {
    title: "best soil testing lab in Vadodara | VadodaraExperts",
    description: "Professional best soil testing lab services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/soil-testing-services/best-soil-testing-lab-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="best-soil-testing-lab-vadodara" />;
}
