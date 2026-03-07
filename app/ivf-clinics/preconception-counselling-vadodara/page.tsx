import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("ivf-clinics")!;

export const metadata: Metadata = {
  title: "preconception counselling in Vadodara | IVF Clinics | VadodaraExperts",
  description: "Professional preconception counselling services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/ivf-clinics/preconception-counselling-vadodara" },
  openGraph: {
    title: "preconception counselling in Vadodara | VadodaraExperts",
    description: "Professional preconception counselling services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/ivf-clinics/preconception-counselling-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="preconception-counselling-vadodara" />;
}
