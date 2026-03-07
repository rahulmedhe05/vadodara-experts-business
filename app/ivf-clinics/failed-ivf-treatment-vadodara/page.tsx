import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("ivf-clinics")!;

export const metadata: Metadata = {
  title: "failed IVF treatment in Vadodara | IVF Clinics | VadodaraExperts",
  description: "Professional failed ivf treatment services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/ivf-clinics/failed-ivf-treatment-vadodara" },
  openGraph: {
    title: "failed IVF treatment in Vadodara | VadodaraExperts",
    description: "Professional failed ivf treatment services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/ivf-clinics/failed-ivf-treatment-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="failed-ivf-treatment-vadodara" />;
}
