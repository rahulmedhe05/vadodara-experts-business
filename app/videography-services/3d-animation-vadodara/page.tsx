import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("videography-services")!;

export const metadata: Metadata = {
  title: "3D animation in Vadodara | Videography Services | VadodaraExperts",
  description: "Professional 3d animation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/videography-services/3d-animation-vadodara" },
  openGraph: {
    title: "3D animation in Vadodara | VadodaraExperts",
    description: "Professional 3d animation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/videography-services/3d-animation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="3d-animation-vadodara" />;
}
