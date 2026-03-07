import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("dental-clinics")!;

export const metadata: Metadata = {
  title: "Re root canal treatment in Vadodara | Dental Clinics | VadodaraExperts",
  description: "Professional re root canal treatment services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/dental-clinics/re-root-canal-treatment-vadodara" },
  openGraph: {
    title: "Re root canal treatment in Vadodara | VadodaraExperts",
    description: "Professional re root canal treatment services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/dental-clinics/re-root-canal-treatment-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="re-root-canal-treatment-vadodara" />;
}
