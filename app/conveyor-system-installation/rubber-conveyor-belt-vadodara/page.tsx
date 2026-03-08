import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("conveyor-system-installation")!;

export const metadata: Metadata = {
  title: "rubber conveyor belt in Vadodara | Conveyor System Installation | VadodaraExperts",
  description: "Professional rubber conveyor belt services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/conveyor-system-installation/rubber-conveyor-belt-vadodara" },
  openGraph: {
    title: "rubber conveyor belt in Vadodara | VadodaraExperts",
    description: "Professional rubber conveyor belt services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/conveyor-system-installation/rubber-conveyor-belt-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="rubber-conveyor-belt-vadodara" />;
}
