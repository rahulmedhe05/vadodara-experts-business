import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("interior-fit-out-contractors")!;

export const metadata: Metadata = {
  title: "wall panelling installation in Vadodara | Interior Fit-Out Contractors | VadodaraExperts",
  description: "Professional wall panelling installation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/interior-fit-out-contractors/wall-panelling-installation-vadodara" },
  openGraph: {
    title: "wall panelling installation in Vadodara | VadodaraExperts",
    description: "Professional wall panelling installation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/interior-fit-out-contractors/wall-panelling-installation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="wall-panelling-installation-vadodara" />;
}
