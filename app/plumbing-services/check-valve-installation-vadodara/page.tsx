import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("plumbing-services")!;

export const metadata: Metadata = {
  title: "Check valve installation in Vadodara | Plumbing Services | VadodaraExperts",
  description: "Professional check valve installation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/plumbing-services/check-valve-installation-vadodara" },
  openGraph: {
    title: "Check valve installation in Vadodara | VadodaraExperts",
    description: "Professional check valve installation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/plumbing-services/check-valve-installation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="check-valve-installation-vadodara" />;
}
