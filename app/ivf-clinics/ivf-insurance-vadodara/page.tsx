import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("ivf-clinics")!;

export const metadata: Metadata = {
  title: "IVF insurance in Vadodara | IVF Clinics | VadodaraExperts",
  description: "Professional ivf insurance services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/ivf-clinics/ivf-insurance-vadodara" },
  openGraph: {
    title: "IVF insurance in Vadodara | VadodaraExperts",
    description: "Professional ivf insurance services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/ivf-clinics/ivf-insurance-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="ivf-insurance-vadodara" />;
}
