import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("land-development-consultancy")!;

export const metadata: Metadata = {
  title: "NA conversion in Vadodara | Land Development Consultancy | VadodaraExperts",
  description: "Professional na conversion services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/land-development-consultancy/na-conversion-vadodara" },
  openGraph: {
    title: "NA conversion in Vadodara | VadodaraExperts",
    description: "Professional na conversion services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/land-development-consultancy/na-conversion-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="na-conversion-vadodara" />;
}
