import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("dermatology-clinics")!;

export const metadata: Metadata = {
  title: "Dark spots treatment in Vadodara | Dermatology Clinics | VadodaraExperts",
  description: "Professional dark spots treatment services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/dermatology-clinics/dark-spots-treatment-vadodara" },
  openGraph: {
    title: "Dark spots treatment in Vadodara | VadodaraExperts",
    description: "Professional dark spots treatment services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/dermatology-clinics/dark-spots-treatment-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="dark-spots-treatment-vadodara" />;
}
