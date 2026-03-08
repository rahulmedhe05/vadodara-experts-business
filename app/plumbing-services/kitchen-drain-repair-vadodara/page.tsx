import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("plumbing-services")!;

export const metadata: Metadata = {
  title: "Kitchen drain repair in Vadodara | Plumbing Services | VadodaraExperts",
  description: "Professional kitchen drain repair services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/plumbing-services/kitchen-drain-repair-vadodara" },
  openGraph: {
    title: "Kitchen drain repair in Vadodara | VadodaraExperts",
    description: "Professional kitchen drain repair services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/plumbing-services/kitchen-drain-repair-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="kitchen-drain-repair-vadodara" />;
}
