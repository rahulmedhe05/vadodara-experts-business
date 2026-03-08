import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("washing-machine-services")!;

export const metadata: Metadata = {
  title: "Steam press repair in Vadodara | Washing Machine Services | VadodaraExperts",
  description: "Professional steam press repair services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/washing-machine-services/steam-press-repair-vadodara" },
  openGraph: {
    title: "Steam press repair in Vadodara | VadodaraExperts",
    description: "Professional steam press repair services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/washing-machine-services/steam-press-repair-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="steam-press-repair-vadodara" />;
}
