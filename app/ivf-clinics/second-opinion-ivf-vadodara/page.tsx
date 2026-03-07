import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("ivf-clinics")!;

export const metadata: Metadata = {
  title: "second opinion IVF in Vadodara | IVF Clinics | VadodaraExperts",
  description: "Professional second opinion ivf services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/ivf-clinics/second-opinion-ivf-vadodara" },
  openGraph: {
    title: "second opinion IVF in Vadodara | VadodaraExperts",
    description: "Professional second opinion ivf services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/ivf-clinics/second-opinion-ivf-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="second-opinion-ivf-vadodara" />;
}
