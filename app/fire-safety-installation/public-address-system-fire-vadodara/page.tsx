import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("fire-safety-installation")!;

export const metadata: Metadata = {
  title: "public address system fire in Vadodara | Fire Safety Installation | VadodaraExperts",
  description: "Professional public address system fire services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/fire-safety-installation/public-address-system-fire-vadodara" },
  openGraph: {
    title: "public address system fire in Vadodara | VadodaraExperts",
    description: "Professional public address system fire services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/fire-safety-installation/public-address-system-fire-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="public-address-system-fire-vadodara" />;
}
