import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("dermatology-clinics")!;

export const metadata: Metadata = {
  title: "Lip filler in Vadodara | Dermatology Clinics | VadodaraExperts",
  description: "Professional lip filler services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/dermatology-clinics/lip-filler-vadodara" },
  openGraph: {
    title: "Lip filler in Vadodara | VadodaraExperts",
    description: "Professional lip filler services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/dermatology-clinics/lip-filler-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="lip-filler-vadodara" />;
}
