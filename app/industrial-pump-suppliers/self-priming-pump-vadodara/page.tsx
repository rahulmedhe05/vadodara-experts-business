import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-pump-suppliers")!;

export const metadata: Metadata = {
  title: "self priming pump in Vadodara | Industrial Pump Suppliers | VadodaraExperts",
  description: "Professional self priming pump services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-pump-suppliers/self-priming-pump-vadodara" },
  openGraph: {
    title: "self priming pump in Vadodara | VadodaraExperts",
    description: "Professional self priming pump services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-pump-suppliers/self-priming-pump-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="self-priming-pump-vadodara" />;
}
