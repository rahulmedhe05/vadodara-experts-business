import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("fire-safety-installation")!;

export const metadata: Metadata = {
  title: "dry sprinkler system in Vadodara | Fire Safety Installation | VadodaraExperts",
  description: "Professional dry sprinkler system services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/fire-safety-installation/dry-sprinkler-system-vadodara" },
  openGraph: {
    title: "dry sprinkler system in Vadodara | VadodaraExperts",
    description: "Professional dry sprinkler system services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/fire-safety-installation/dry-sprinkler-system-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="dry-sprinkler-system-vadodara" />;
}
