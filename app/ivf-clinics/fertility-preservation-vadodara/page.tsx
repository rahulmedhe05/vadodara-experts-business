import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("ivf-clinics")!;

export const metadata: Metadata = {
  title: "fertility preservation in Vadodara | IVF Clinics | VadodaraExperts",
  description: "Professional fertility preservation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/ivf-clinics/fertility-preservation-vadodara" },
  openGraph: {
    title: "fertility preservation in Vadodara | VadodaraExperts",
    description: "Professional fertility preservation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/ivf-clinics/fertility-preservation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="fertility-preservation-vadodara" />;
}
