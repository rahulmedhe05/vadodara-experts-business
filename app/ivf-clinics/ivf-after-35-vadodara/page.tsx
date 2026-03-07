import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("ivf-clinics")!;

export const metadata: Metadata = {
  title: "IVF after 35 in Vadodara | IVF Clinics | VadodaraExperts",
  description: "Professional ivf after 35 services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/ivf-clinics/ivf-after-35-vadodara" },
  openGraph: {
    title: "IVF after 35 in Vadodara | VadodaraExperts",
    description: "Professional ivf after 35 services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/ivf-clinics/ivf-after-35-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="ivf-after-35-vadodara" />;
}
