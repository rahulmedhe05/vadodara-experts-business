import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("ivf-clinics")!;

export const metadata: Metadata = {
  title: "IVF centre reviews in Vadodara | IVF Clinics | VadodaraExperts",
  description: "Professional ivf centre reviews services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/ivf-clinics/ivf-centre-reviews-vadodara" },
  openGraph: {
    title: "IVF centre reviews in Vadodara | VadodaraExperts",
    description: "Professional ivf centre reviews services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/ivf-clinics/ivf-centre-reviews-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="ivf-centre-reviews-vadodara" />;
}
