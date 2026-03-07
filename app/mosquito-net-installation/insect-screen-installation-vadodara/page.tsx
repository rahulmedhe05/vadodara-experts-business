import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("mosquito-net-installation")!;

export const metadata: Metadata = {
  title: "Insect screen installation in Vadodara | Mosquito Net Installation | VadodaraExperts",
  description: "Professional insect screen installation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/mosquito-net-installation/insect-screen-installation-vadodara" },
  openGraph: {
    title: "Insect screen installation in Vadodara | VadodaraExperts",
    description: "Professional insect screen installation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/mosquito-net-installation/insect-screen-installation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="insect-screen-installation-vadodara" />;
}
