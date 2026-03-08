import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("hospital-interior-design")!;

export const metadata: Metadata = {
  title: "MRI room design in Vadodara | Hospital Interior Design | VadodaraExperts",
  description: "Professional mri room design services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/hospital-interior-design/mri-room-design-vadodara" },
  openGraph: {
    title: "MRI room design in Vadodara | VadodaraExperts",
    description: "Professional mri room design services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/hospital-interior-design/mri-room-design-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="mri-room-design-vadodara" />;
}
