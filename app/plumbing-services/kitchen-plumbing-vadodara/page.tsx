import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("plumbing-services")!;

export const metadata: Metadata = {
  title: "Kitchen plumbing in Vadodara | Plumbing Services | VadodaraExperts",
  description: "Professional kitchen plumbing services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/plumbing-services/kitchen-plumbing-vadodara" },
  openGraph: {
    title: "Kitchen plumbing in Vadodara | VadodaraExperts",
    description: "Professional kitchen plumbing services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/plumbing-services/kitchen-plumbing-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="kitchen-plumbing-vadodara" />;
}
