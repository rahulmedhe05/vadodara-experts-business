import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("inverter-battery-services")!;

export const metadata: Metadata = {
  title: "Automatic changeover switch in Vadodara | Inverter & Battery Services | VadodaraExperts",
  description: "Professional automatic changeover switch services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/inverter-battery-services/automatic-changeover-switch-vadodara" },
  openGraph: {
    title: "Automatic changeover switch in Vadodara | VadodaraExperts",
    description: "Professional automatic changeover switch services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/inverter-battery-services/automatic-changeover-switch-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="automatic-changeover-switch-vadodara" />;
}
