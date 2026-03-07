import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("plumbing-services")!;

export const metadata: Metadata = {
  title: "Shower installation in Vadodara | Plumbing Services | VadodaraExperts",
  description: "Professional shower installation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/plumbing-services/shower-installation-vadodara" },
  openGraph: {
    title: "Shower installation in Vadodara | VadodaraExperts",
    description: "Professional shower installation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/plumbing-services/shower-installation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="shower-installation-vadodara" />;
}
