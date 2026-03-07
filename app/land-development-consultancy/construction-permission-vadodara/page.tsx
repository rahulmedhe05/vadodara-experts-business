import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("land-development-consultancy")!;

export const metadata: Metadata = {
  title: "construction permission in Vadodara | Land Development Consultancy | VadodaraExperts",
  description: "Professional construction permission services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/land-development-consultancy/construction-permission-vadodara" },
  openGraph: {
    title: "construction permission in Vadodara | VadodaraExperts",
    description: "Professional construction permission services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/land-development-consultancy/construction-permission-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="construction-permission-vadodara" />;
}
