import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-welding-services")!;

export const metadata: Metadata = {
  title: "visual inspection welding in Vadodara | Industrial Welding Services | VadodaraExperts",
  description: "Professional visual inspection welding services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-welding-services/visual-inspection-welding-vadodara" },
  openGraph: {
    title: "visual inspection welding in Vadodara | VadodaraExperts",
    description: "Professional visual inspection welding services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-welding-services/visual-inspection-welding-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="visual-inspection-welding-vadodara" />;
}
