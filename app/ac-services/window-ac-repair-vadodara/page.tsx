import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("ac-services")!;

export const metadata: Metadata = {
  title: "Window AC repair in Vadodara | AC Services | VadodaraExperts",
  description: "Professional window ac repair services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/ac-services/window-ac-repair-vadodara" },
  openGraph: {
    title: "Window AC repair in Vadodara | VadodaraExperts",
    description: "Professional window ac repair services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/ac-services/window-ac-repair-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="window-ac-repair-vadodara" />;
}
