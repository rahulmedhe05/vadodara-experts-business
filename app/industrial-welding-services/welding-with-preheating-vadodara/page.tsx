import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-welding-services")!;

export const metadata: Metadata = {
  title: "welding with preheating in Vadodara | Industrial Welding Services | VadodaraExperts",
  description: "Professional welding with preheating services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-welding-services/welding-with-preheating-vadodara" },
  openGraph: {
    title: "welding with preheating in Vadodara | VadodaraExperts",
    description: "Professional welding with preheating services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-welding-services/welding-with-preheating-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="welding-with-preheating-vadodara" />;
}
