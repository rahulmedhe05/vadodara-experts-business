import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("eye-hospitals")!;

export const metadata: Metadata = {
  title: "RGP contact lens in Vadodara | Eye Hospitals | VadodaraExperts",
  description: "Professional rgp contact lens services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/eye-hospitals/rgp-contact-lens-vadodara" },
  openGraph: {
    title: "RGP contact lens in Vadodara | VadodaraExperts",
    description: "Professional rgp contact lens services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/eye-hospitals/rgp-contact-lens-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="rgp-contact-lens-vadodara" />;
}
