import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("construction-safety-consultancy")!;

export const metadata: Metadata = {
  title: "PPE requirement assessment in Vadodara | Construction Safety Consultancy | VadodaraExperts",
  description: "Professional ppe requirement assessment services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/construction-safety-consultancy/ppe-requirement-assessment-vadodara" },
  openGraph: {
    title: "PPE requirement assessment in Vadodara | VadodaraExperts",
    description: "Professional ppe requirement assessment services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/construction-safety-consultancy/ppe-requirement-assessment-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="ppe-requirement-assessment-vadodara" />;
}
