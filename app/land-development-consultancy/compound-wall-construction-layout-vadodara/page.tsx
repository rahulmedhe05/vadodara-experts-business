import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("land-development-consultancy")!;

export const metadata: Metadata = {
  title: "compound wall construction layout in Vadodara | Land Development Consultancy | VadodaraExperts",
  description: "Professional compound wall construction layout services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/land-development-consultancy/compound-wall-construction-layout-vadodara" },
  openGraph: {
    title: "compound wall construction layout in Vadodara | VadodaraExperts",
    description: "Professional compound wall construction layout services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/land-development-consultancy/compound-wall-construction-layout-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="compound-wall-construction-layout-vadodara" />;
}
