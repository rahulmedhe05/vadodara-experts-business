import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("hospital-interior-design")!;

export const metadata: Metadata = {
  title: "patient room interior in Vadodara | Hospital Interior Design | VadodaraExperts",
  description: "Professional patient room interior services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/hospital-interior-design/patient-room-interior-vadodara" },
  openGraph: {
    title: "patient room interior in Vadodara | VadodaraExperts",
    description: "Professional patient room interior services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/hospital-interior-design/patient-room-interior-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="patient-room-interior-vadodara" />;
}
