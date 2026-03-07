import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("fire-safety-installation")!;

export const metadata: Metadata = {
  title: "overhead fire tank in Vadodara | Fire Safety Installation | VadodaraExperts",
  description: "Professional overhead fire tank services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/fire-safety-installation/overhead-fire-tank-vadodara" },
  openGraph: {
    title: "overhead fire tank in Vadodara | VadodaraExperts",
    description: "Professional overhead fire tank services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/fire-safety-installation/overhead-fire-tank-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="overhead-fire-tank-vadodara" />;
}
