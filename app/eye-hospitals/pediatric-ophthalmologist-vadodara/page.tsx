import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("eye-hospitals")!;

export const metadata: Metadata = {
  title: "Pediatric ophthalmologist in Vadodara | Eye Hospitals | VadodaraExperts",
  description: "Professional pediatric ophthalmologist services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/eye-hospitals/pediatric-ophthalmologist-vadodara" },
  openGraph: {
    title: "Pediatric ophthalmologist in Vadodara | VadodaraExperts",
    description: "Professional pediatric ophthalmologist services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/eye-hospitals/pediatric-ophthalmologist-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="pediatric-ophthalmologist-vadodara" />;
}
