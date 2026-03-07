import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("property-legal-services")!;

export const metadata: Metadata = {
  title: "Registration charges in Vadodara | Property Legal Services | VadodaraExperts",
  description: "Professional registration charges services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/property-legal-services/registration-charges-vadodara" },
  openGraph: {
    title: "Registration charges in Vadodara | VadodaraExperts",
    description: "Professional registration charges services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/property-legal-services/registration-charges-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="registration-charges-vadodara" />;
}
