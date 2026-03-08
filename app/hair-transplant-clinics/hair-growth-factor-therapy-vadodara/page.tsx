import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("hair-transplant-clinics")!;

export const metadata: Metadata = {
  title: "Hair growth factor therapy in Vadodara | Hair Transplant Clinics | VadodaraExperts",
  description: "Professional hair growth factor therapy services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/hair-transplant-clinics/hair-growth-factor-therapy-vadodara" },
  openGraph: {
    title: "Hair growth factor therapy in Vadodara | VadodaraExperts",
    description: "Professional hair growth factor therapy services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/hair-transplant-clinics/hair-growth-factor-therapy-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="hair-growth-factor-therapy-vadodara" />;
}
