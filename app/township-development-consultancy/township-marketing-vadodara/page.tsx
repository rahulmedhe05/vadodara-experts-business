import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("township-development-consultancy")!;

export const metadata: Metadata = {
  title: "township marketing in Vadodara | Township Development Consultancy | VadodaraExperts",
  description: "Professional township marketing services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/township-development-consultancy/township-marketing-vadodara" },
  openGraph: {
    title: "township marketing in Vadodara | VadodaraExperts",
    description: "Professional township marketing services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/township-development-consultancy/township-marketing-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="township-marketing-vadodara" />;
}
