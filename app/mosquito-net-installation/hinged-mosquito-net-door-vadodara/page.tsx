import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("mosquito-net-installation")!;

export const metadata: Metadata = {
  title: "Hinged mosquito net door in Vadodara | Mosquito Net Installation | VadodaraExperts",
  description: "Professional hinged mosquito net door services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/mosquito-net-installation/hinged-mosquito-net-door-vadodara" },
  openGraph: {
    title: "Hinged mosquito net door in Vadodara | VadodaraExperts",
    description: "Professional hinged mosquito net door services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/mosquito-net-installation/hinged-mosquito-net-door-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="hinged-mosquito-net-door-vadodara" />;
}
