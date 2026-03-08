import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("plumbing-contractors")!;

export const metadata: Metadata = {
  title: "western toilet installation in Vadodara | Plumbing Contractors | VadodaraExperts",
  description: "Professional western toilet installation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/plumbing-contractors/western-toilet-installation-vadodara" },
  openGraph: {
    title: "western toilet installation in Vadodara | VadodaraExperts",
    description: "Professional western toilet installation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/plumbing-contractors/western-toilet-installation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="western-toilet-installation-vadodara" />;
}
