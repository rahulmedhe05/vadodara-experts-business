import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("interior-design-services")!;

export const metadata: Metadata = {
  title: "3D interior visualization in Vadodara | Interior Design Services | VadodaraExperts",
  description: "Professional 3d interior visualization services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/interior-design-services/3d-interior-visualization-vadodara" },
  openGraph: {
    title: "3D interior visualization in Vadodara | VadodaraExperts",
    description: "Professional 3d interior visualization services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/interior-design-services/3d-interior-visualization-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="3d-interior-visualization-vadodara" />;
}
