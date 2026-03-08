import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("lift-installation-services")!;

export const metadata: Metadata = {
  title: "Lift preventive maintenance in Vadodara | Lift Installation Services | VadodaraExperts",
  description: "Professional lift preventive maintenance services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/lift-installation-services/lift-preventive-maintenance-vadodara" },
  openGraph: {
    title: "Lift preventive maintenance in Vadodara | VadodaraExperts",
    description: "Professional lift preventive maintenance services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/lift-installation-services/lift-preventive-maintenance-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="lift-preventive-maintenance-vadodara" />;
}
