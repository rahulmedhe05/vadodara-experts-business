import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-interior-design")!;

export const metadata: Metadata = {
  title: "ETP room design in Vadodara | Industrial Interior Design | VadodaraExperts",
  description: "Professional etp room design services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-interior-design/etp-room-design-vadodara" },
  openGraph: {
    title: "ETP room design in Vadodara | VadodaraExperts",
    description: "Professional etp room design services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-interior-design/etp-room-design-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="etp-room-design-vadodara" />;
}
