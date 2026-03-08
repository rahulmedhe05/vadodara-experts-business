import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("ivf-clinics")!;

export const metadata: Metadata = {
  title: "genetic testing before IVF in Vadodara | IVF Clinics | VadodaraExperts",
  description: "Professional genetic testing before ivf services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/ivf-clinics/genetic-testing-before-ivf-vadodara" },
  openGraph: {
    title: "genetic testing before IVF in Vadodara | VadodaraExperts",
    description: "Professional genetic testing before ivf services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/ivf-clinics/genetic-testing-before-ivf-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="genetic-testing-before-ivf-vadodara" />;
}
