import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("ivf-clinics")!;

export const metadata: Metadata = {
  title: "best IVF hospital in Vadodara | IVF Clinics | VadodaraExperts",
  description: "Professional best ivf hospital services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/ivf-clinics/best-ivf-hospital-vadodara" },
  openGraph: {
    title: "best IVF hospital in Vadodara | VadodaraExperts",
    description: "Professional best ivf hospital services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/ivf-clinics/best-ivf-hospital-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="best-ivf-hospital-vadodara" />;
}
