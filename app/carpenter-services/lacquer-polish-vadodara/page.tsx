import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("carpenter-services")!;

export const metadata: Metadata = {
  title: "Lacquer polish in Vadodara | Carpenter Services | VadodaraExperts",
  description: "Professional lacquer polish services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/carpenter-services/lacquer-polish-vadodara" },
  openGraph: {
    title: "Lacquer polish in Vadodara | VadodaraExperts",
    description: "Professional lacquer polish services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/carpenter-services/lacquer-polish-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="lacquer-polish-vadodara" />;
}
