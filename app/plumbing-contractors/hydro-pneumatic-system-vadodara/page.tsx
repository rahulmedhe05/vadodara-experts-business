import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("plumbing-contractors")!;

export const metadata: Metadata = {
  title: "hydro pneumatic system in Vadodara | Plumbing Contractors | VadodaraExperts",
  description: "Professional hydro pneumatic system services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/plumbing-contractors/hydro-pneumatic-system-vadodara" },
  openGraph: {
    title: "hydro pneumatic system in Vadodara | VadodaraExperts",
    description: "Professional hydro pneumatic system services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/plumbing-contractors/hydro-pneumatic-system-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="hydro-pneumatic-system-vadodara" />;
}
