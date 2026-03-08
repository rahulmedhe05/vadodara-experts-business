import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("ivf-clinics")!;

export const metadata: Metadata = {
  title: "affordable IVF treatment in Vadodara | IVF Clinics | VadodaraExperts",
  description: "Professional affordable ivf treatment services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/ivf-clinics/affordable-ivf-treatment-vadodara" },
  openGraph: {
    title: "affordable IVF treatment in Vadodara | VadodaraExperts",
    description: "Professional affordable ivf treatment services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/ivf-clinics/affordable-ivf-treatment-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="affordable-ivf-treatment-vadodara" />;
}
