import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("mosquito-net-installation")!;

export const metadata: Metadata = {
  title: "Fly catcher installation in Vadodara | Mosquito Net Installation | VadodaraExperts",
  description: "Professional fly catcher installation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/mosquito-net-installation/fly-catcher-installation-vadodara" },
  openGraph: {
    title: "Fly catcher installation in Vadodara | VadodaraExperts",
    description: "Professional fly catcher installation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/mosquito-net-installation/fly-catcher-installation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="fly-catcher-installation-vadodara" />;
}
