import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("sound-lighting-services")!;

export const metadata: Metadata = {
  title: "Cold spark machine in Vadodara | Sound & Lighting Services | VadodaraExperts",
  description: "Professional cold spark machine services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/sound-lighting-services/cold-spark-machine-vadodara" },
  openGraph: {
    title: "Cold spark machine in Vadodara | VadodaraExperts",
    description: "Professional cold spark machine services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/sound-lighting-services/cold-spark-machine-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="cold-spark-machine-vadodara" />;
}
