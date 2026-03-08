import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("eye-hospitals")!;

export const metadata: Metadata = {
  title: "Blade free Lasik in Vadodara | Eye Hospitals | VadodaraExperts",
  description: "Professional blade free lasik services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/eye-hospitals/blade-free-lasik-vadodara" },
  openGraph: {
    title: "Blade free Lasik in Vadodara | VadodaraExperts",
    description: "Professional blade free lasik services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/eye-hospitals/blade-free-lasik-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="blade-free-lasik-vadodara" />;
}
