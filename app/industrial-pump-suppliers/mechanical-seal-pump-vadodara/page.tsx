import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-pump-suppliers")!;

export const metadata: Metadata = {
  title: "mechanical seal pump in Vadodara | Industrial Pump Suppliers | VadodaraExperts",
  description: "Professional mechanical seal pump services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-pump-suppliers/mechanical-seal-pump-vadodara" },
  openGraph: {
    title: "mechanical seal pump in Vadodara | VadodaraExperts",
    description: "Professional mechanical seal pump services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-pump-suppliers/mechanical-seal-pump-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="mechanical-seal-pump-vadodara" />;
}
