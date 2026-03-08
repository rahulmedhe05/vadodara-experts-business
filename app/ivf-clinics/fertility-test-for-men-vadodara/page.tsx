import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("ivf-clinics")!;

export const metadata: Metadata = {
  title: "fertility test for men in Vadodara | IVF Clinics | VadodaraExperts",
  description: "Professional fertility test for men services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/ivf-clinics/fertility-test-for-men-vadodara" },
  openGraph: {
    title: "fertility test for men in Vadodara | VadodaraExperts",
    description: "Professional fertility test for men services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/ivf-clinics/fertility-test-for-men-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="fertility-test-for-men-vadodara" />;
}
