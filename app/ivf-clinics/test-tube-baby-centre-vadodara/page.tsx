import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("ivf-clinics")!;

export const metadata: Metadata = {
  title: "test tube baby centre in Vadodara | IVF Clinics | VadodaraExperts",
  description: "Professional test tube baby centre services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/ivf-clinics/test-tube-baby-centre-vadodara" },
  openGraph: {
    title: "test tube baby centre in Vadodara | VadodaraExperts",
    description: "Professional test tube baby centre services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/ivf-clinics/test-tube-baby-centre-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="test-tube-baby-centre-vadodara" />;
}
