import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("ivf-clinics")!;

export const metadata: Metadata = {
  title: "infertility specialist in Vadodara | IVF Clinics | VadodaraExperts",
  description: "Professional infertility specialist services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/ivf-clinics/infertility-specialist-vadodara" },
  openGraph: {
    title: "infertility specialist in Vadodara | VadodaraExperts",
    description: "Professional infertility specialist services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/ivf-clinics/infertility-specialist-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="infertility-specialist-vadodara" />;
}
