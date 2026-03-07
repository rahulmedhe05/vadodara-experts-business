import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("eye-hospitals")!;

export const metadata: Metadata = {
  title: "Femto Lasik in Vadodara | Eye Hospitals | VadodaraExperts",
  description: "Professional femto lasik services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/eye-hospitals/femto-lasik-vadodara" },
  openGraph: {
    title: "Femto Lasik in Vadodara | VadodaraExperts",
    description: "Professional femto lasik services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/eye-hospitals/femto-lasik-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="femto-lasik-vadodara" />;
}
