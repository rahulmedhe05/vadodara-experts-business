import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("conveyor-system-installation")!;

export const metadata: Metadata = {
  title: "flexible roller conveyor in Vadodara | Conveyor System Installation | VadodaraExperts",
  description: "Professional flexible roller conveyor services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/conveyor-system-installation/flexible-roller-conveyor-vadodara" },
  openGraph: {
    title: "flexible roller conveyor in Vadodara | VadodaraExperts",
    description: "Professional flexible roller conveyor services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/conveyor-system-installation/flexible-roller-conveyor-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="flexible-roller-conveyor-vadodara" />;
}
