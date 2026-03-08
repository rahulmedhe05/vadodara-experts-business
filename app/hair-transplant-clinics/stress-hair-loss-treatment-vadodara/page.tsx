import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("hair-transplant-clinics")!;

export const metadata: Metadata = {
  title: "Stress hair loss treatment in Vadodara | Hair Transplant Clinics | VadodaraExperts",
  description: "Professional stress hair loss treatment services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/hair-transplant-clinics/stress-hair-loss-treatment-vadodara" },
  openGraph: {
    title: "Stress hair loss treatment in Vadodara | VadodaraExperts",
    description: "Professional stress hair loss treatment services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/hair-transplant-clinics/stress-hair-loss-treatment-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="stress-hair-loss-treatment-vadodara" />;
}
