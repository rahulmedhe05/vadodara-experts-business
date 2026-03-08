import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-welding-services")!;

export const metadata: Metadata = {
  title: "reactor welding in Vadodara | Industrial Welding Services | VadodaraExperts",
  description: "Professional reactor welding services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-welding-services/reactor-welding-vadodara" },
  openGraph: {
    title: "reactor welding in Vadodara | VadodaraExperts",
    description: "Professional reactor welding services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-welding-services/reactor-welding-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="reactor-welding-vadodara" />;
}
