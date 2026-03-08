import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("fire-safety-installation")!;

export const metadata: Metadata = {
  title: "AFFF system in Vadodara | Fire Safety Installation | VadodaraExperts",
  description: "Professional afff system services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/fire-safety-installation/afff-system-vadodara" },
  openGraph: {
    title: "AFFF system in Vadodara | VadodaraExperts",
    description: "Professional afff system services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/fire-safety-installation/afff-system-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="afff-system-vadodara" />;
}
