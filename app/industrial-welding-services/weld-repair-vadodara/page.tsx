import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-welding-services")!;

export const metadata: Metadata = {
  title: "weld repair in Vadodara | Industrial Welding Services | VadodaraExperts",
  description: "Professional weld repair services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-welding-services/weld-repair-vadodara" },
  openGraph: {
    title: "weld repair in Vadodara | VadodaraExperts",
    description: "Professional weld repair services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-welding-services/weld-repair-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="weld-repair-vadodara" />;
}
