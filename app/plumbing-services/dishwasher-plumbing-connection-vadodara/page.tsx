import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("plumbing-services")!;

export const metadata: Metadata = {
  title: "Dishwasher plumbing connection in Vadodara | Plumbing Services | VadodaraExperts",
  description: "Professional dishwasher plumbing connection services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/plumbing-services/dishwasher-plumbing-connection-vadodara" },
  openGraph: {
    title: "Dishwasher plumbing connection in Vadodara | VadodaraExperts",
    description: "Professional dishwasher plumbing connection services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/plumbing-services/dishwasher-plumbing-connection-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="dishwasher-plumbing-connection-vadodara" />;
}
