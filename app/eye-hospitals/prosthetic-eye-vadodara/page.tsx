import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("eye-hospitals")!;

export const metadata: Metadata = {
  title: "Prosthetic eye in Vadodara | Eye Hospitals | VadodaraExperts",
  description: "Professional prosthetic eye services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/eye-hospitals/prosthetic-eye-vadodara" },
  openGraph: {
    title: "Prosthetic eye in Vadodara | VadodaraExperts",
    description: "Professional prosthetic eye services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/eye-hospitals/prosthetic-eye-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="prosthetic-eye-vadodara" />;
}
