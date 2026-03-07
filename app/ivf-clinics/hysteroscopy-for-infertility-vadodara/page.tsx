import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("ivf-clinics")!;

export const metadata: Metadata = {
  title: "hysteroscopy for infertility in Vadodara | IVF Clinics | VadodaraExperts",
  description: "Professional hysteroscopy for infertility services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/ivf-clinics/hysteroscopy-for-infertility-vadodara" },
  openGraph: {
    title: "hysteroscopy for infertility in Vadodara | VadodaraExperts",
    description: "Professional hysteroscopy for infertility services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/ivf-clinics/hysteroscopy-for-infertility-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="hysteroscopy-for-infertility-vadodara" />;
}
