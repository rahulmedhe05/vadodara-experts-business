import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("eye-hospitals")!;

export const metadata: Metadata = {
  title: "Corneal scar treatment in Vadodara | Eye Hospitals | VadodaraExperts",
  description: "Professional corneal scar treatment services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/eye-hospitals/corneal-scar-treatment-vadodara" },
  openGraph: {
    title: "Corneal scar treatment in Vadodara | VadodaraExperts",
    description: "Professional corneal scar treatment services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/eye-hospitals/corneal-scar-treatment-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="corneal-scar-treatment-vadodara" />;
}
