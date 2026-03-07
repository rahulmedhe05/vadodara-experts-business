import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("ivf-clinics")!;

export const metadata: Metadata = {
  title: "ICSI cost in Vadodara | IVF Clinics | VadodaraExperts",
  description: "Professional icsi cost services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/ivf-clinics/icsi-cost-vadodara" },
  openGraph: {
    title: "ICSI cost in Vadodara | VadodaraExperts",
    description: "Professional icsi cost services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/ivf-clinics/icsi-cost-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="icsi-cost-vadodara" />;
}
