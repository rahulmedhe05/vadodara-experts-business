import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("ivf-clinics")!;

export const metadata: Metadata = {
  title: "embryo freezing in Vadodara | IVF Clinics | VadodaraExperts",
  description: "Professional embryo freezing services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/ivf-clinics/embryo-freezing-vadodara" },
  openGraph: {
    title: "embryo freezing in Vadodara | VadodaraExperts",
    description: "Professional embryo freezing services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/ivf-clinics/embryo-freezing-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="embryo-freezing-vadodara" />;
}
