import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("plumbing-services")!;

export const metadata: Metadata = {
  title: "Plumbing services in Vadodara | Plumbing Services | VadodaraExperts",
  description: "Professional plumbing services services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/plumbing-services/plumbing-services-vadodara" },
  openGraph: {
    title: "Plumbing services in Vadodara | VadodaraExperts",
    description: "Professional plumbing services services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/plumbing-services/plumbing-services-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="plumbing-services-vadodara" />;
}
