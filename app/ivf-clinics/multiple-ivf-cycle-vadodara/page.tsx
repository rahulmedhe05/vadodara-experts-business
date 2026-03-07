import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("ivf-clinics")!;

export const metadata: Metadata = {
  title: "multiple IVF cycle in Vadodara | IVF Clinics | VadodaraExperts",
  description: "Professional multiple ivf cycle services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/ivf-clinics/multiple-ivf-cycle-vadodara" },
  openGraph: {
    title: "multiple IVF cycle in Vadodara | VadodaraExperts",
    description: "Professional multiple ivf cycle services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/ivf-clinics/multiple-ivf-cycle-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="multiple-ivf-cycle-vadodara" />;
}
