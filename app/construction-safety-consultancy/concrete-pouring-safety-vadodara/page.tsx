import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("construction-safety-consultancy")!;

export const metadata: Metadata = {
  title: "concrete pouring safety in Vadodara | Construction Safety Consultancy | VadodaraExperts",
  description: "Professional concrete pouring safety services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/construction-safety-consultancy/concrete-pouring-safety-vadodara" },
  openGraph: {
    title: "concrete pouring safety in Vadodara | VadodaraExperts",
    description: "Professional concrete pouring safety services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/construction-safety-consultancy/concrete-pouring-safety-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="concrete-pouring-safety-vadodara" />;
}
