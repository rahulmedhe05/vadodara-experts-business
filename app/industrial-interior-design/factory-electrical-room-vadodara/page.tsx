import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-interior-design")!;

export const metadata: Metadata = {
  title: "factory electrical room in Vadodara | Industrial Interior Design | VadodaraExperts",
  description: "Professional factory electrical room services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-interior-design/factory-electrical-room-vadodara" },
  openGraph: {
    title: "factory electrical room in Vadodara | VadodaraExperts",
    description: "Professional factory electrical room services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-interior-design/factory-electrical-room-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="factory-electrical-room-vadodara" />;
}
