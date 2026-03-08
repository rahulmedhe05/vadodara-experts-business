import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("home-renovation-services")!;

export const metadata: Metadata = {
  title: "Cold storage repair in Vadodara | Home Renovation Services | VadodaraExperts",
  description: "Professional cold storage repair services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/home-renovation-services/cold-storage-repair-vadodara" },
  openGraph: {
    title: "Cold storage repair in Vadodara | VadodaraExperts",
    description: "Professional cold storage repair services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/home-renovation-services/cold-storage-repair-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="cold-storage-repair-vadodara" />;
}
