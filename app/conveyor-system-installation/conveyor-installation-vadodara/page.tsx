import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("conveyor-system-installation")!;

export const metadata: Metadata = {
  title: "conveyor installation in Vadodara | Conveyor System Installation | VadodaraExperts",
  description: "Professional conveyor installation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/conveyor-system-installation/conveyor-installation-vadodara" },
  openGraph: {
    title: "conveyor installation in Vadodara | VadodaraExperts",
    description: "Professional conveyor installation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/conveyor-system-installation/conveyor-installation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="conveyor-installation-vadodara" />;
}
