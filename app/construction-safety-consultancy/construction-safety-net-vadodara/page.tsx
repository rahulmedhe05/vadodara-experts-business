import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("construction-safety-consultancy")!;

export const metadata: Metadata = {
  title: "construction safety net in Vadodara | Construction Safety Consultancy | VadodaraExperts",
  description: "Professional construction safety net services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/construction-safety-consultancy/construction-safety-net-vadodara" },
  openGraph: {
    title: "construction safety net in Vadodara | VadodaraExperts",
    description: "Professional construction safety net services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/construction-safety-consultancy/construction-safety-net-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="construction-safety-net-vadodara" />;
}
