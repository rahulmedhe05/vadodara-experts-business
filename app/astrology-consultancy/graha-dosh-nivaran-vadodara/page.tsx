import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("astrology-consultancy")!;

export const metadata: Metadata = {
  title: "graha dosh nivaran in Vadodara | Astrology Consultancy | VadodaraExperts",
  description: "Professional graha dosh nivaran services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/astrology-consultancy/graha-dosh-nivaran-vadodara" },
  openGraph: {
    title: "graha dosh nivaran in Vadodara | VadodaraExperts",
    description: "Professional graha dosh nivaran services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/astrology-consultancy/graha-dosh-nivaran-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="graha-dosh-nivaran-vadodara" />;
}
