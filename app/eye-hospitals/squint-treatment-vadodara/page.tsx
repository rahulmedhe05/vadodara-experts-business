import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("eye-hospitals")!;

export const metadata: Metadata = {
  title: "Squint treatment in Vadodara | Eye Hospitals | VadodaraExperts",
  description: "Professional squint treatment services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/eye-hospitals/squint-treatment-vadodara" },
  openGraph: {
    title: "Squint treatment in Vadodara | VadodaraExperts",
    description: "Professional squint treatment services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/eye-hospitals/squint-treatment-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="squint-treatment-vadodara" />;
}
