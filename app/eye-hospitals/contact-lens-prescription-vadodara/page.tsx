import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("eye-hospitals")!;

export const metadata: Metadata = {
  title: "Contact lens prescription in Vadodara | Eye Hospitals | VadodaraExperts",
  description: "Professional contact lens prescription services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/eye-hospitals/contact-lens-prescription-vadodara" },
  openGraph: {
    title: "Contact lens prescription in Vadodara | VadodaraExperts",
    description: "Professional contact lens prescription services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/eye-hospitals/contact-lens-prescription-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="contact-lens-prescription-vadodara" />;
}
