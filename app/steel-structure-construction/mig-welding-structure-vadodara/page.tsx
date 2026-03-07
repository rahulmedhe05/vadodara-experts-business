import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("steel-structure-construction")!;

export const metadata: Metadata = {
  title: "MIG welding structure in Vadodara | Steel Structure Construction | VadodaraExperts",
  description: "Professional mig welding structure services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/steel-structure-construction/mig-welding-structure-vadodara" },
  openGraph: {
    title: "MIG welding structure in Vadodara | VadodaraExperts",
    description: "Professional mig welding structure services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/steel-structure-construction/mig-welding-structure-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="mig-welding-structure-vadodara" />;
}
