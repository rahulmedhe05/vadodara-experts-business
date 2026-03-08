import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-project-consultancy")!;

export const metadata: Metadata = {
  title: "payback period analysis in Vadodara | Industrial Project Consultancy | VadodaraExperts",
  description: "Professional payback period analysis services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-project-consultancy/payback-period-analysis-vadodara" },
  openGraph: {
    title: "payback period analysis in Vadodara | VadodaraExperts",
    description: "Professional payback period analysis services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-project-consultancy/payback-period-analysis-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="payback-period-analysis-vadodara" />;
}
