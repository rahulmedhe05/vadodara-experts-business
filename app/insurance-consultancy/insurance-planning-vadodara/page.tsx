import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("insurance-consultancy")!;

export const metadata: Metadata = {
  title: "Insurance planning in Vadodara | Insurance Consultancy | VadodaraExperts",
  description: "Professional insurance planning services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/insurance-consultancy/insurance-planning-vadodara" },
  openGraph: {
    title: "Insurance planning in Vadodara | VadodaraExperts",
    description: "Professional insurance planning services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/insurance-consultancy/insurance-planning-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="insurance-planning-vadodara" />;
}
