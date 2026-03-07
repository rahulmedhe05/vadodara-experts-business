import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("fire-safety-installation")!;

export const metadata: Metadata = {
  title: "deluge sprinkler system in Vadodara | Fire Safety Installation | VadodaraExperts",
  description: "Professional deluge sprinkler system services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/fire-safety-installation/deluge-sprinkler-system-vadodara" },
  openGraph: {
    title: "deluge sprinkler system in Vadodara | VadodaraExperts",
    description: "Professional deluge sprinkler system services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/fire-safety-installation/deluge-sprinkler-system-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="deluge-sprinkler-system-vadodara" />;
}
