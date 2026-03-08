import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("ivf-clinics")!;

export const metadata: Metadata = {
  title: "IVF EMI option in Vadodara | IVF Clinics | VadodaraExperts",
  description: "Professional ivf emi option services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/ivf-clinics/ivf-emi-option-vadodara" },
  openGraph: {
    title: "IVF EMI option in Vadodara | VadodaraExperts",
    description: "Professional ivf emi option services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/ivf-clinics/ivf-emi-option-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="ivf-emi-option-vadodara" />;
}
