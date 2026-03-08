import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("ivf-clinics")!;

export const metadata: Metadata = {
  title: "TESA procedure in Vadodara | IVF Clinics | VadodaraExperts",
  description: "Professional tesa procedure services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/ivf-clinics/tesa-procedure-vadodara" },
  openGraph: {
    title: "TESA procedure in Vadodara | VadodaraExperts",
    description: "Professional tesa procedure services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/ivf-clinics/tesa-procedure-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="tesa-procedure-vadodara" />;
}
