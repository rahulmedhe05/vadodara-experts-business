import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("interior-fit-out-contractors")!;

export const metadata: Metadata = {
  title: "fit out project management in Vadodara | Interior Fit-Out Contractors | VadodaraExperts",
  description: "Professional fit out project management services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/interior-fit-out-contractors/fit-out-project-management-vadodara" },
  openGraph: {
    title: "fit out project management in Vadodara | VadodaraExperts",
    description: "Professional fit out project management services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/interior-fit-out-contractors/fit-out-project-management-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="fit-out-project-management-vadodara" />;
}
