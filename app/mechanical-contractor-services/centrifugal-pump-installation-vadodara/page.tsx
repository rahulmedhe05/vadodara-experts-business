import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("mechanical-contractor-services")!;

export const metadata: Metadata = {
  title: "centrifugal pump installation in Vadodara | Mechanical Contractor Services | VadodaraExperts",
  description: "Professional centrifugal pump installation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/mechanical-contractor-services/centrifugal-pump-installation-vadodara" },
  openGraph: {
    title: "centrifugal pump installation in Vadodara | VadodaraExperts",
    description: "Professional centrifugal pump installation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/mechanical-contractor-services/centrifugal-pump-installation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="centrifugal-pump-installation-vadodara" />;
}
