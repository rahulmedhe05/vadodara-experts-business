import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("ivf-clinics")!;

export const metadata: Metadata = {
  title: "PGT genetic testing in Vadodara | IVF Clinics | VadodaraExperts",
  description: "Professional pgt genetic testing services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/ivf-clinics/pgt-genetic-testing-vadodara" },
  openGraph: {
    title: "PGT genetic testing in Vadodara | VadodaraExperts",
    description: "Professional pgt genetic testing services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/ivf-clinics/pgt-genetic-testing-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="pgt-genetic-testing-vadodara" />;
}
