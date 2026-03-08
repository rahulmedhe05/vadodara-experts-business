import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("export-consultancy")!;

export const metadata: Metadata = {
  title: "Ex-works in Vadodara | Export Consultancy | VadodaraExperts",
  description: "Professional ex-works services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/export-consultancy/ex-works-vadodara" },
  openGraph: {
    title: "Ex-works in Vadodara | VadodaraExperts",
    description: "Professional ex-works services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/export-consultancy/ex-works-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="ex-works-vadodara" />;
}
