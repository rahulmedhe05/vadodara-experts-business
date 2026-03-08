import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("mosquito-net-installation")!;

export const metadata: Metadata = {
  title: "Awning window mosquito net in Vadodara | Mosquito Net Installation | VadodaraExperts",
  description: "Professional awning window mosquito net services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/mosquito-net-installation/awning-window-mosquito-net-vadodara" },
  openGraph: {
    title: "Awning window mosquito net in Vadodara | VadodaraExperts",
    description: "Professional awning window mosquito net services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/mosquito-net-installation/awning-window-mosquito-net-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="awning-window-mosquito-net-vadodara" />;
}
