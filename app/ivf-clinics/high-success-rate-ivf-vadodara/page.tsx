import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("ivf-clinics")!;

export const metadata: Metadata = {
  title: "high success rate IVF in Vadodara | IVF Clinics | VadodaraExperts",
  description: "Professional high success rate ivf services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/ivf-clinics/high-success-rate-ivf-vadodara" },
  openGraph: {
    title: "high success rate IVF in Vadodara | VadodaraExperts",
    description: "Professional high success rate ivf services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/ivf-clinics/high-success-rate-ivf-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="high-success-rate-ivf-vadodara" />;
}
