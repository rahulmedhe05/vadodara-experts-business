import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("boiler-services")!;

export const metadata: Metadata = {
  title: "Boiler Services Phone Number in Vadodara | Boiler Services | VadodaraExperts",
  description: "Professional boiler services phone number services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/boiler-services/boiler-services-phone-number-vadodara" },
  openGraph: {
    title: "Boiler Services Phone Number in Vadodara | VadodaraExperts",
    description: "Professional boiler services phone number services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/boiler-services/boiler-services-phone-number-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="boiler-services-phone-number-vadodara" />;
}
