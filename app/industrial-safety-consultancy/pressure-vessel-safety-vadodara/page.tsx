import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-safety-consultancy")!;

export const metadata: Metadata = {
  title: "pressure vessel safety in Vadodara | Industrial Safety Consultancy | VadodaraExperts",
  description: "Professional pressure vessel safety services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-safety-consultancy/pressure-vessel-safety-vadodara" },
  openGraph: {
    title: "pressure vessel safety in Vadodara | VadodaraExperts",
    description: "Professional pressure vessel safety services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-safety-consultancy/pressure-vessel-safety-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="pressure-vessel-safety-vadodara" />;
}
