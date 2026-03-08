import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-pump-suppliers")!;

export const metadata: Metadata = {
  title: "SS pump in Vadodara | Industrial Pump Suppliers | VadodaraExperts",
  description: "Professional ss pump services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-pump-suppliers/ss-pump-vadodara" },
  openGraph: {
    title: "SS pump in Vadodara | VadodaraExperts",
    description: "Professional ss pump services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-pump-suppliers/ss-pump-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="ss-pump-vadodara" />;
}
