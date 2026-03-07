import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("dermatology-clinics")!;

export const metadata: Metadata = {
  title: "Cheek filler in Vadodara | Dermatology Clinics | VadodaraExperts",
  description: "Professional cheek filler services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/dermatology-clinics/cheek-filler-vadodara" },
  openGraph: {
    title: "Cheek filler in Vadodara | VadodaraExperts",
    description: "Professional cheek filler services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/dermatology-clinics/cheek-filler-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="cheek-filler-vadodara" />;
}
