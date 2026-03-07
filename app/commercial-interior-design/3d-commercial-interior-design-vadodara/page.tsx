import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("commercial-interior-design")!;

export const metadata: Metadata = {
  title: "3D commercial interior design in Vadodara | Commercial Interior Design | VadodaraExperts",
  description: "Professional 3d commercial interior design services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/commercial-interior-design/3d-commercial-interior-design-vadodara" },
  openGraph: {
    title: "3D commercial interior design in Vadodara | VadodaraExperts",
    description: "Professional 3d commercial interior design services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/commercial-interior-design/3d-commercial-interior-design-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="3d-commercial-interior-design-vadodara" />;
}
