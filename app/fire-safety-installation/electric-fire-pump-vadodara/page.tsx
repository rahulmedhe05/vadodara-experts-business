import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("fire-safety-installation")!;

export const metadata: Metadata = {
  title: "electric fire pump in Vadodara | Fire Safety Installation | VadodaraExperts",
  description: "Professional electric fire pump services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/fire-safety-installation/electric-fire-pump-vadodara" },
  openGraph: {
    title: "electric fire pump in Vadodara | VadodaraExperts",
    description: "Professional electric fire pump services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/fire-safety-installation/electric-fire-pump-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="electric-fire-pump-vadodara" />;
}
