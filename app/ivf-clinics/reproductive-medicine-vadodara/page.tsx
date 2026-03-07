import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("ivf-clinics")!;

export const metadata: Metadata = {
  title: "reproductive medicine in Vadodara | IVF Clinics | VadodaraExperts",
  description: "Professional reproductive medicine services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/ivf-clinics/reproductive-medicine-vadodara" },
  openGraph: {
    title: "reproductive medicine in Vadodara | VadodaraExperts",
    description: "Professional reproductive medicine services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/ivf-clinics/reproductive-medicine-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="reproductive-medicine-vadodara" />;
}
