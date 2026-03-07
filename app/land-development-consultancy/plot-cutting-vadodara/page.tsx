import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("land-development-consultancy")!;

export const metadata: Metadata = {
  title: "plot cutting in Vadodara | Land Development Consultancy | VadodaraExperts",
  description: "Professional plot cutting services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/land-development-consultancy/plot-cutting-vadodara" },
  openGraph: {
    title: "plot cutting in Vadodara | VadodaraExperts",
    description: "Professional plot cutting services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/land-development-consultancy/plot-cutting-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="plot-cutting-vadodara" />;
}
