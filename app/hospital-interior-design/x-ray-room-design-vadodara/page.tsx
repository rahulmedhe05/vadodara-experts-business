import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("hospital-interior-design")!;

export const metadata: Metadata = {
  title: "X-ray room design in Vadodara | Hospital Interior Design | VadodaraExperts",
  description: "Professional x-ray room design services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/hospital-interior-design/x-ray-room-design-vadodara" },
  openGraph: {
    title: "X-ray room design in Vadodara | VadodaraExperts",
    description: "Professional x-ray room design services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/hospital-interior-design/x-ray-room-design-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="x-ray-room-design-vadodara" />;
}
