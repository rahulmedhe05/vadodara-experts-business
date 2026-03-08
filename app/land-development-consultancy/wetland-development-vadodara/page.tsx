import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("land-development-consultancy")!;

export const metadata: Metadata = {
  title: "wetland development in Vadodara | Land Development Consultancy | VadodaraExperts",
  description: "Professional wetland development services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/land-development-consultancy/wetland-development-vadodara" },
  openGraph: {
    title: "wetland development in Vadodara | VadodaraExperts",
    description: "Professional wetland development services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/land-development-consultancy/wetland-development-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="wetland-development-vadodara" />;
}
