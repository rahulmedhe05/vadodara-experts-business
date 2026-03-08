import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("interior-fit-out-contractors")!;

export const metadata: Metadata = {
  title: "interior fit out company in Vadodara | Interior Fit-Out Contractors | VadodaraExperts",
  description: "Professional interior fit out company services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/interior-fit-out-contractors/interior-fit-out-company-vadodara" },
  openGraph: {
    title: "interior fit out company in Vadodara | VadodaraExperts",
    description: "Professional interior fit out company services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/interior-fit-out-contractors/interior-fit-out-company-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="interior-fit-out-company-vadodara" />;
}
