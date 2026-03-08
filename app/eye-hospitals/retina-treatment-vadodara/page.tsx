import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("eye-hospitals")!;

export const metadata: Metadata = {
  title: "Retina treatment in Vadodara | Eye Hospitals | VadodaraExperts",
  description: "Professional retina treatment services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/eye-hospitals/retina-treatment-vadodara" },
  openGraph: {
    title: "Retina treatment in Vadodara | VadodaraExperts",
    description: "Professional retina treatment services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/eye-hospitals/retina-treatment-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="retina-treatment-vadodara" />;
}
