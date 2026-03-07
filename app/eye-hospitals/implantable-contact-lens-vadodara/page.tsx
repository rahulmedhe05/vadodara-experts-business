import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("eye-hospitals")!;

export const metadata: Metadata = {
  title: "Implantable contact lens in Vadodara | Eye Hospitals | VadodaraExperts",
  description: "Professional implantable contact lens services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/eye-hospitals/implantable-contact-lens-vadodara" },
  openGraph: {
    title: "Implantable contact lens in Vadodara | VadodaraExperts",
    description: "Professional implantable contact lens services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/eye-hospitals/implantable-contact-lens-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="implantable-contact-lens-vadodara" />;
}
