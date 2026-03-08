import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("interior-design-services")!;

export const metadata: Metadata = {
  title: "Interior 3D rendering in Vadodara | Interior Design Services | VadodaraExperts",
  description: "Professional interior 3d rendering services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/interior-design-services/interior-3d-rendering-vadodara" },
  openGraph: {
    title: "Interior 3D rendering in Vadodara | VadodaraExperts",
    description: "Professional interior 3d rendering services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/interior-design-services/interior-3d-rendering-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="interior-3d-rendering-vadodara" />;
}
