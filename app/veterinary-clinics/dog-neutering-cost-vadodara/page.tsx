import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("veterinary-clinics")!;

export const metadata: Metadata = {
  title: "dog neutering cost in Vadodara | Veterinary Clinics | VadodaraExperts",
  description: "Professional dog neutering cost services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/veterinary-clinics/dog-neutering-cost-vadodara" },
  openGraph: {
    title: "dog neutering cost in Vadodara | VadodaraExperts",
    description: "Professional dog neutering cost services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/veterinary-clinics/dog-neutering-cost-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="dog-neutering-cost-vadodara" />;
}
