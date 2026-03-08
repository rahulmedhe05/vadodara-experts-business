import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("civil-contractors")!;

export const metadata: Metadata = {
  title: "Rock cutting in Vadodara | Civil Contractors | VadodaraExperts",
  description: "Professional rock cutting services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/civil-contractors/rock-cutting-vadodara" },
  openGraph: {
    title: "Rock cutting in Vadodara | VadodaraExperts",
    description: "Professional rock cutting services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/civil-contractors/rock-cutting-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="rock-cutting-vadodara" />;
}
