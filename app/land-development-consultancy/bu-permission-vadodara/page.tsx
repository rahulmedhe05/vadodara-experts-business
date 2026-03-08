import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("land-development-consultancy")!;

export const metadata: Metadata = {
  title: "BU permission in Vadodara | Land Development Consultancy | VadodaraExperts",
  description: "Professional bu permission services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/land-development-consultancy/bu-permission-vadodara" },
  openGraph: {
    title: "BU permission in Vadodara | VadodaraExperts",
    description: "Professional bu permission services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/land-development-consultancy/bu-permission-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="bu-permission-vadodara" />;
}
