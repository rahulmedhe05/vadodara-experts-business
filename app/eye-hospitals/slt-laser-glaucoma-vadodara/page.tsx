import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("eye-hospitals")!;

export const metadata: Metadata = {
  title: "SLT laser glaucoma in Vadodara | Eye Hospitals | VadodaraExperts",
  description: "Professional slt laser glaucoma services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/eye-hospitals/slt-laser-glaucoma-vadodara" },
  openGraph: {
    title: "SLT laser glaucoma in Vadodara | VadodaraExperts",
    description: "Professional slt laser glaucoma services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/eye-hospitals/slt-laser-glaucoma-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="slt-laser-glaucoma-vadodara" />;
}
