import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("ivf-clinics")!;

export const metadata: Metadata = {
  title: "AMH test in Vadodara | IVF Clinics | VadodaraExperts",
  description: "Professional amh test services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/ivf-clinics/amh-test-vadodara" },
  openGraph: {
    title: "AMH test in Vadodara | VadodaraExperts",
    description: "Professional amh test services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/ivf-clinics/amh-test-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="amh-test-vadodara" />;
}
