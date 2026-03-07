import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("eye-hospitals")!;

export const metadata: Metadata = {
  title: "Glaucoma laser treatment in Vadodara | Eye Hospitals | VadodaraExperts",
  description: "Professional glaucoma laser treatment services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/eye-hospitals/glaucoma-laser-treatment-vadodara" },
  openGraph: {
    title: "Glaucoma laser treatment in Vadodara | VadodaraExperts",
    description: "Professional glaucoma laser treatment services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/eye-hospitals/glaucoma-laser-treatment-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="glaucoma-laser-treatment-vadodara" />;
}
