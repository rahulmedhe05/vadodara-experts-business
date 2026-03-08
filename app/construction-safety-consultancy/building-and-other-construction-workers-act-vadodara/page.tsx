import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("construction-safety-consultancy")!;

export const metadata: Metadata = {
  title: "building and other construction workers act in Vadodara | Construction Safety Consultancy | VadodaraExperts",
  description: "Professional building and other construction workers act services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/construction-safety-consultancy/building-and-other-construction-workers-act-vadodara" },
  openGraph: {
    title: "building and other construction workers act in Vadodara | VadodaraExperts",
    description: "Professional building and other construction workers act services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/construction-safety-consultancy/building-and-other-construction-workers-act-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="building-and-other-construction-workers-act-vadodara" />;
}
