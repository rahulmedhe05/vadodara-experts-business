import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("interior-fit-out-contractors")!;

export const metadata: Metadata = {
  title: "co-working space fit out in Vadodara | Interior Fit-Out Contractors | VadodaraExperts",
  description: "Professional co-working space fit out services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/interior-fit-out-contractors/co-working-space-fit-out-vadodara" },
  openGraph: {
    title: "co-working space fit out in Vadodara | VadodaraExperts",
    description: "Professional co-working space fit out services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/interior-fit-out-contractors/co-working-space-fit-out-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="co-working-space-fit-out-vadodara" />;
}
