import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("infrastructure-consultancy")!;

export const metadata: Metadata = {
  title: "overhead tank design in Vadodara | Infrastructure Consultancy | VadodaraExperts",
  description: "Professional overhead tank design services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/infrastructure-consultancy/overhead-tank-design-vadodara" },
  openGraph: {
    title: "overhead tank design in Vadodara | VadodaraExperts",
    description: "Professional overhead tank design services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/infrastructure-consultancy/overhead-tank-design-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="overhead-tank-design-vadodara" />;
}
