import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("hair-transplant-clinics")!;

export const metadata: Metadata = {
  title: "Low level laser therapy hair in Vadodara | Hair Transplant Clinics | VadodaraExperts",
  description: "Professional low level laser therapy hair services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/hair-transplant-clinics/low-level-laser-therapy-hair-vadodara" },
  openGraph: {
    title: "Low level laser therapy hair in Vadodara | VadodaraExperts",
    description: "Professional low level laser therapy hair services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/hair-transplant-clinics/low-level-laser-therapy-hair-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="low-level-laser-therapy-hair-vadodara" />;
}
