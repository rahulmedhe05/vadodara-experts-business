import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-interior-design")!;

export const metadata: Metadata = {
  title: "pharmaceutical clean room in Vadodara | Industrial Interior Design | VadodaraExperts",
  description: "Professional pharmaceutical clean room services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-interior-design/pharmaceutical-clean-room-vadodara" },
  openGraph: {
    title: "pharmaceutical clean room in Vadodara | VadodaraExperts",
    description: "Professional pharmaceutical clean room services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-interior-design/pharmaceutical-clean-room-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="pharmaceutical-clean-room-vadodara" />;
}
