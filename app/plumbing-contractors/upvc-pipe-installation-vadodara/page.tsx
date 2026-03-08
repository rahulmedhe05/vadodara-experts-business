import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("plumbing-contractors")!;

export const metadata: Metadata = {
  title: "UPVC pipe installation in Vadodara | Plumbing Contractors | VadodaraExperts",
  description: "Professional upvc pipe installation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/plumbing-contractors/upvc-pipe-installation-vadodara" },
  openGraph: {
    title: "UPVC pipe installation in Vadodara | VadodaraExperts",
    description: "Professional upvc pipe installation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/plumbing-contractors/upvc-pipe-installation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="upvc-pipe-installation-vadodara" />;
}
