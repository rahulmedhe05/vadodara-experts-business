import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("hospital-interior-design")!;

export const metadata: Metadata = {
  title: "chemotherapy room design in Vadodara | Hospital Interior Design | VadodaraExperts",
  description: "Professional chemotherapy room design services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/hospital-interior-design/chemotherapy-room-design-vadodara" },
  openGraph: {
    title: "chemotherapy room design in Vadodara | VadodaraExperts",
    description: "Professional chemotherapy room design services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/hospital-interior-design/chemotherapy-room-design-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="chemotherapy-room-design-vadodara" />;
}
