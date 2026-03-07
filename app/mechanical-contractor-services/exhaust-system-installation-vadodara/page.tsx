import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("mechanical-contractor-services")!;

export const metadata: Metadata = {
  title: "exhaust system installation in Vadodara | Mechanical Contractor Services | VadodaraExperts",
  description: "Professional exhaust system installation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/mechanical-contractor-services/exhaust-system-installation-vadodara" },
  openGraph: {
    title: "exhaust system installation in Vadodara | VadodaraExperts",
    description: "Professional exhaust system installation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/mechanical-contractor-services/exhaust-system-installation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="exhaust-system-installation-vadodara" />;
}
