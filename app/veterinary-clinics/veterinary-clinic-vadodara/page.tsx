import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("veterinary-clinics")!;

export const metadata: Metadata = {
  title: "veterinary clinic in Vadodara | Veterinary Clinics | VadodaraExperts",
  description: "Professional veterinary clinic services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/veterinary-clinics/veterinary-clinic-vadodara" },
  openGraph: {
    title: "veterinary clinic in Vadodara | VadodaraExperts",
    description: "Professional veterinary clinic services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/veterinary-clinics/veterinary-clinic-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="veterinary-clinic-vadodara" />;
}
