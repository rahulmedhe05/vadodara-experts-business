import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("fire-safety-installation")!;

export const metadata: Metadata = {
  title: "automatic sprinkler system in Vadodara | Fire Safety Installation | VadodaraExperts",
  description: "Professional automatic sprinkler system services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/fire-safety-installation/automatic-sprinkler-system-vadodara" },
  openGraph: {
    title: "automatic sprinkler system in Vadodara | VadodaraExperts",
    description: "Professional automatic sprinkler system services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/fire-safety-installation/automatic-sprinkler-system-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="automatic-sprinkler-system-vadodara" />;
}
