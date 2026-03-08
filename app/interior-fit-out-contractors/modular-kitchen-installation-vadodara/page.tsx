import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("interior-fit-out-contractors")!;

export const metadata: Metadata = {
  title: "modular kitchen installation in Vadodara | Interior Fit-Out Contractors | VadodaraExperts",
  description: "Professional modular kitchen installation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/interior-fit-out-contractors/modular-kitchen-installation-vadodara" },
  openGraph: {
    title: "modular kitchen installation in Vadodara | VadodaraExperts",
    description: "Professional modular kitchen installation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/interior-fit-out-contractors/modular-kitchen-installation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="modular-kitchen-installation-vadodara" />;
}
