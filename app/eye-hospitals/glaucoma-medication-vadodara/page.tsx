import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("eye-hospitals")!;

export const metadata: Metadata = {
  title: "Glaucoma medication in Vadodara | Eye Hospitals | VadodaraExperts",
  description: "Professional glaucoma medication services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/eye-hospitals/glaucoma-medication-vadodara" },
  openGraph: {
    title: "Glaucoma medication in Vadodara | VadodaraExperts",
    description: "Professional glaucoma medication services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/eye-hospitals/glaucoma-medication-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="glaucoma-medication-vadodara" />;
}
