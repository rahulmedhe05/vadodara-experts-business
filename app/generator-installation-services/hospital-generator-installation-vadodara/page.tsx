import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("generator-installation-services")!;

export const metadata: Metadata = {
  title: "Hospital generator installation in Vadodara | Generator Installation Services | VadodaraExperts",
  description: "Professional hospital generator installation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/generator-installation-services/hospital-generator-installation-vadodara" },
  openGraph: {
    title: "Hospital generator installation in Vadodara | VadodaraExperts",
    description: "Professional hospital generator installation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/generator-installation-services/hospital-generator-installation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="hospital-generator-installation-vadodara" />;
}
