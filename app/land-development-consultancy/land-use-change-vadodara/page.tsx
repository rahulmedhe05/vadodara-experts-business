import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("land-development-consultancy")!;

export const metadata: Metadata = {
  title: "land use change in Vadodara | Land Development Consultancy | VadodaraExperts",
  description: "Professional land use change services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/land-development-consultancy/land-use-change-vadodara" },
  openGraph: {
    title: "land use change in Vadodara | VadodaraExperts",
    description: "Professional land use change services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/land-development-consultancy/land-use-change-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="land-use-change-vadodara" />;
}
