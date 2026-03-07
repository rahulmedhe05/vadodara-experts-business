import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-automation")!;

export const metadata: Metadata = {
  title: "servo drive installation in Vadodara | Industrial Automation | VadodaraExperts",
  description: "Professional servo drive installation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-automation/servo-drive-installation-vadodara" },
  openGraph: {
    title: "servo drive installation in Vadodara | VadodaraExperts",
    description: "Professional servo drive installation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-automation/servo-drive-installation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="servo-drive-installation-vadodara" />;
}
