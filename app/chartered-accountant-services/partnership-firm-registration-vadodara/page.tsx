import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("chartered-accountant-services")!;

export const metadata: Metadata = {
  title: "Partnership firm registration in Vadodara | Chartered Accountant Services | VadodaraExperts",
  description: "Professional partnership firm registration services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/chartered-accountant-services/partnership-firm-registration-vadodara" },
  openGraph: {
    title: "Partnership firm registration in Vadodara | VadodaraExperts",
    description: "Professional partnership firm registration services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/chartered-accountant-services/partnership-firm-registration-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="partnership-firm-registration-vadodara" />;
}
