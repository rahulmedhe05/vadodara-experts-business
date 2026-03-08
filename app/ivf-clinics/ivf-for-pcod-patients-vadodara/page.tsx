import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("ivf-clinics")!;

export const metadata: Metadata = {
  title: "IVF for PCOD patients in Vadodara | IVF Clinics | VadodaraExperts",
  description: "Professional ivf for pcod patients services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/ivf-clinics/ivf-for-pcod-patients-vadodara" },
  openGraph: {
    title: "IVF for PCOD patients in Vadodara | VadodaraExperts",
    description: "Professional ivf for pcod patients services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/ivf-clinics/ivf-for-pcod-patients-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="ivf-for-pcod-patients-vadodara" />;
}
