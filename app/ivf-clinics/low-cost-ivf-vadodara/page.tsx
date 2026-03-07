import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("ivf-clinics")!;

export const metadata: Metadata = {
  title: "low cost IVF in Vadodara | IVF Clinics | VadodaraExperts",
  description: "Professional low cost ivf services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/ivf-clinics/low-cost-ivf-vadodara" },
  openGraph: {
    title: "low cost IVF in Vadodara | VadodaraExperts",
    description: "Professional low cost ivf services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/ivf-clinics/low-cost-ivf-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="low-cost-ivf-vadodara" />;
}
