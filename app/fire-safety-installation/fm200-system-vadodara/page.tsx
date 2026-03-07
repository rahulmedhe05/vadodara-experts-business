import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("fire-safety-installation")!;

export const metadata: Metadata = {
  title: "FM200 system in Vadodara | Fire Safety Installation | VadodaraExperts",
  description: "Professional fm200 system services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/fire-safety-installation/fm200-system-vadodara" },
  openGraph: {
    title: "FM200 system in Vadodara | VadodaraExperts",
    description: "Professional fm200 system services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/fire-safety-installation/fm200-system-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="fm200-system-vadodara" />;
}
