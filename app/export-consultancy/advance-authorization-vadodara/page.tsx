import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("export-consultancy")!;

export const metadata: Metadata = {
  title: "Advance authorization in Vadodara | Export Consultancy | VadodaraExperts",
  description: "Professional advance authorization services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/export-consultancy/advance-authorization-vadodara" },
  openGraph: {
    title: "Advance authorization in Vadodara | VadodaraExperts",
    description: "Professional advance authorization services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/export-consultancy/advance-authorization-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="advance-authorization-vadodara" />;
}
