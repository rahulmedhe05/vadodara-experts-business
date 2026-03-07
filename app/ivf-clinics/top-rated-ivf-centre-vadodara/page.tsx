import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("ivf-clinics")!;

export const metadata: Metadata = {
  title: "top rated IVF centre in Vadodara | IVF Clinics | VadodaraExperts",
  description: "Professional top rated ivf centre services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/ivf-clinics/top-rated-ivf-centre-vadodara" },
  openGraph: {
    title: "top rated IVF centre in Vadodara | VadodaraExperts",
    description: "Professional top rated ivf centre services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/ivf-clinics/top-rated-ivf-centre-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="top-rated-ivf-centre-vadodara" />;
}
