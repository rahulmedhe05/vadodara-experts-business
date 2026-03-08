import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-safety-consultancy")!;

export const metadata: Metadata = {
  title: "hot work safety in Vadodara | Industrial Safety Consultancy | VadodaraExperts",
  description: "Professional hot work safety services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-safety-consultancy/hot-work-safety-vadodara" },
  openGraph: {
    title: "hot work safety in Vadodara | VadodaraExperts",
    description: "Professional hot work safety services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-safety-consultancy/hot-work-safety-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="hot-work-safety-vadodara" />;
}
