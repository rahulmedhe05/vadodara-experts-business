import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("ivf-clinics")!;

export const metadata: Metadata = {
  title: "tubal ligation reversal in Vadodara | IVF Clinics | VadodaraExperts",
  description: "Professional tubal ligation reversal services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/ivf-clinics/tubal-ligation-reversal-vadodara" },
  openGraph: {
    title: "tubal ligation reversal in Vadodara | VadodaraExperts",
    description: "Professional tubal ligation reversal services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/ivf-clinics/tubal-ligation-reversal-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="tubal-ligation-reversal-vadodara" />;
}
