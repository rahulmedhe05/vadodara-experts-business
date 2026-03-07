import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("eye-hospitals")!;

export const metadata: Metadata = {
  title: "Color blindness test in Vadodara | Eye Hospitals | VadodaraExperts",
  description: "Professional color blindness test services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/eye-hospitals/color-blindness-test-vadodara" },
  openGraph: {
    title: "Color blindness test in Vadodara | VadodaraExperts",
    description: "Professional color blindness test services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/eye-hospitals/color-blindness-test-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="color-blindness-test-vadodara" />;
}
