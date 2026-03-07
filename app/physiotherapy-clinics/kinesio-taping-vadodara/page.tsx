import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("physiotherapy-clinics")!;

export const metadata: Metadata = {
  title: "Kinesio taping in Vadodara | Physiotherapy Clinics | VadodaraExperts",
  description: "Professional kinesio taping services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/physiotherapy-clinics/kinesio-taping-vadodara" },
  openGraph: {
    title: "Kinesio taping in Vadodara | VadodaraExperts",
    description: "Professional kinesio taping services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/physiotherapy-clinics/kinesio-taping-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="kinesio-taping-vadodara" />;
}
