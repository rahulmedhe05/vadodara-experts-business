import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("hospital-interior-design")!;

export const metadata: Metadata = {
  title: "modular operation theatre in Vadodara | Hospital Interior Design | VadodaraExperts",
  description: "Professional modular operation theatre services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/hospital-interior-design/modular-operation-theatre-vadodara" },
  openGraph: {
    title: "modular operation theatre in Vadodara | VadodaraExperts",
    description: "Professional modular operation theatre services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/hospital-interior-design/modular-operation-theatre-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="modular-operation-theatre-vadodara" />;
}
