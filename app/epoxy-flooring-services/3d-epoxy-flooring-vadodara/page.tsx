import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("epoxy-flooring-services")!;

export const metadata: Metadata = {
  title: "3D epoxy flooring in Vadodara | Epoxy Flooring Services | VadodaraExperts",
  description: "Professional 3d epoxy flooring services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/epoxy-flooring-services/3d-epoxy-flooring-vadodara" },
  openGraph: {
    title: "3D epoxy flooring in Vadodara | VadodaraExperts",
    description: "Professional 3d epoxy flooring services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/epoxy-flooring-services/3d-epoxy-flooring-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="3d-epoxy-flooring-vadodara" />;
}
