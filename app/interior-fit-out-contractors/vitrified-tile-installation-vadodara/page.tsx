import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("interior-fit-out-contractors")!;

export const metadata: Metadata = {
  title: "vitrified tile installation in Vadodara | Interior Fit-Out Contractors | VadodaraExperts",
  description: "Professional vitrified tile installation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/interior-fit-out-contractors/vitrified-tile-installation-vadodara" },
  openGraph: {
    title: "vitrified tile installation in Vadodara | VadodaraExperts",
    description: "Professional vitrified tile installation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/interior-fit-out-contractors/vitrified-tile-installation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="vitrified-tile-installation-vadodara" />;
}
