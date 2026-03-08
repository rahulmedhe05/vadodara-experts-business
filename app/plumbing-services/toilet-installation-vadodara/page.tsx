import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("plumbing-services")!;

export const metadata: Metadata = {
  title: "Toilet installation in Vadodara | Plumbing Services | VadodaraExperts",
  description: "Professional toilet installation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/plumbing-services/toilet-installation-vadodara" },
  openGraph: {
    title: "Toilet installation in Vadodara | VadodaraExperts",
    description: "Professional toilet installation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/plumbing-services/toilet-installation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="toilet-installation-vadodara" />;
}
