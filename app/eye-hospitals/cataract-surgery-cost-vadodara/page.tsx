import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("eye-hospitals")!;

export const metadata: Metadata = {
  title: "Cataract surgery cost in Vadodara | Eye Hospitals | VadodaraExperts",
  description: "Professional cataract surgery cost services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/eye-hospitals/cataract-surgery-cost-vadodara" },
  openGraph: {
    title: "Cataract surgery cost in Vadodara | VadodaraExperts",
    description: "Professional cataract surgery cost services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/eye-hospitals/cataract-surgery-cost-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="cataract-surgery-cost-vadodara" />;
}
