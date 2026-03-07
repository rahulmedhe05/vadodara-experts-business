import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("dental-clinics")!;

export const metadata: Metadata = {
  title: "Zirconia crown in Vadodara | Dental Clinics | VadodaraExperts",
  description: "Professional zirconia crown services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/dental-clinics/zirconia-crown-vadodara" },
  openGraph: {
    title: "Zirconia crown in Vadodara | VadodaraExperts",
    description: "Professional zirconia crown services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/dental-clinics/zirconia-crown-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="zirconia-crown-vadodara" />;
}
