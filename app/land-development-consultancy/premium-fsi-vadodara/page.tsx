import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("land-development-consultancy")!;

export const metadata: Metadata = {
  title: "premium FSI in Vadodara | Land Development Consultancy | VadodaraExperts",
  description: "Professional premium fsi services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/land-development-consultancy/premium-fsi-vadodara" },
  openGraph: {
    title: "premium FSI in Vadodara | VadodaraExperts",
    description: "Professional premium fsi services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/land-development-consultancy/premium-fsi-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="premium-fsi-vadodara" />;
}
