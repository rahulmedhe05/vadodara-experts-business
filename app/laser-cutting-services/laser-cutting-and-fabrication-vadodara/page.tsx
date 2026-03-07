import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("laser-cutting-services")!;

export const metadata: Metadata = {
  title: "laser cutting and fabrication in Vadodara | Laser Cutting Services | VadodaraExperts",
  description: "Professional laser cutting and fabrication services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/laser-cutting-services/laser-cutting-and-fabrication-vadodara" },
  openGraph: {
    title: "laser cutting and fabrication in Vadodara | VadodaraExperts",
    description: "Professional laser cutting and fabrication services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/laser-cutting-services/laser-cutting-and-fabrication-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="laser-cutting-and-fabrication-vadodara" />;
}
