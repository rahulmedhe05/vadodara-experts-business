import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("ivf-clinics")!;

export const metadata: Metadata = {
  title: "PCOS treatment for fertility in Vadodara | IVF Clinics | VadodaraExperts",
  description: "Professional pcos treatment for fertility services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/ivf-clinics/pcos-treatment-for-fertility-vadodara" },
  openGraph: {
    title: "PCOS treatment for fertility in Vadodara | VadodaraExperts",
    description: "Professional pcos treatment for fertility services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/ivf-clinics/pcos-treatment-for-fertility-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="pcos-treatment-for-fertility-vadodara" />;
}
