import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("eye-hospitals")!;

export const metadata: Metadata = {
  title: "Retinal tear treatment in Vadodara | Eye Hospitals | VadodaraExperts",
  description: "Professional retinal tear treatment services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/eye-hospitals/retinal-tear-treatment-vadodara" },
  openGraph: {
    title: "Retinal tear treatment in Vadodara | VadodaraExperts",
    description: "Professional retinal tear treatment services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/eye-hospitals/retinal-tear-treatment-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="retinal-tear-treatment-vadodara" />;
}
