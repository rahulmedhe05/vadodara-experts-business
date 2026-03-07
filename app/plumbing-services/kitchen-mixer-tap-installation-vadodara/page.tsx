import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("plumbing-services")!;

export const metadata: Metadata = {
  title: "Kitchen mixer tap installation in Vadodara | Plumbing Services | VadodaraExperts",
  description: "Professional kitchen mixer tap installation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/plumbing-services/kitchen-mixer-tap-installation-vadodara" },
  openGraph: {
    title: "Kitchen mixer tap installation in Vadodara | VadodaraExperts",
    description: "Professional kitchen mixer tap installation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/plumbing-services/kitchen-mixer-tap-installation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="kitchen-mixer-tap-installation-vadodara" />;
}
