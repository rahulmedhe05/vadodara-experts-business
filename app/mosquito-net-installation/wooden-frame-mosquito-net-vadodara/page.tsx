import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("mosquito-net-installation")!;

export const metadata: Metadata = {
  title: "Wooden frame mosquito net in Vadodara | Mosquito Net Installation | VadodaraExperts",
  description: "Professional wooden frame mosquito net services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/mosquito-net-installation/wooden-frame-mosquito-net-vadodara" },
  openGraph: {
    title: "Wooden frame mosquito net in Vadodara | VadodaraExperts",
    description: "Professional wooden frame mosquito net services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/mosquito-net-installation/wooden-frame-mosquito-net-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="wooden-frame-mosquito-net-vadodara" />;
}
