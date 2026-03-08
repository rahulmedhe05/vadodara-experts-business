import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("export-consultancy")!;

export const metadata: Metadata = {
  title: "Container booking in Vadodara | Export Consultancy | VadodaraExperts",
  description: "Professional container booking services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/export-consultancy/container-booking-vadodara" },
  openGraph: {
    title: "Container booking in Vadodara | VadodaraExperts",
    description: "Professional container booking services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/export-consultancy/container-booking-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="container-booking-vadodara" />;
}
