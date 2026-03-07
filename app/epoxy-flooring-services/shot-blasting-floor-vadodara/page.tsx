import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("epoxy-flooring-services")!;

export const metadata: Metadata = {
  title: "shot blasting floor in Vadodara | Epoxy Flooring Services | VadodaraExperts",
  description: "Professional shot blasting floor services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/epoxy-flooring-services/shot-blasting-floor-vadodara" },
  openGraph: {
    title: "shot blasting floor in Vadodara | VadodaraExperts",
    description: "Professional shot blasting floor services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/epoxy-flooring-services/shot-blasting-floor-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="shot-blasting-floor-vadodara" />;
}
