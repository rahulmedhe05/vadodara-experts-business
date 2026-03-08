import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("conveyor-system-installation")!;

export const metadata: Metadata = {
  title: "decline belt conveyor in Vadodara | Conveyor System Installation | VadodaraExperts",
  description: "Professional decline belt conveyor services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/conveyor-system-installation/decline-belt-conveyor-vadodara" },
  openGraph: {
    title: "decline belt conveyor in Vadodara | VadodaraExperts",
    description: "Professional decline belt conveyor services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/conveyor-system-installation/decline-belt-conveyor-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="decline-belt-conveyor-vadodara" />;
}
