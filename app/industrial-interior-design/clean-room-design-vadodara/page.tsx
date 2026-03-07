import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-interior-design")!;

export const metadata: Metadata = {
  title: "clean room design in Vadodara | Industrial Interior Design | VadodaraExperts",
  description: "Professional clean room design services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-interior-design/clean-room-design-vadodara" },
  openGraph: {
    title: "clean room design in Vadodara | VadodaraExperts",
    description: "Professional clean room design services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-interior-design/clean-room-design-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="clean-room-design-vadodara" />;
}
