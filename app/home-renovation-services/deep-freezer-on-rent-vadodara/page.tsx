import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("home-renovation-services")!;

export const metadata: Metadata = {
  title: "Deep freezer on rent in Vadodara | Home Renovation Services | VadodaraExperts",
  description: "Professional deep freezer on rent services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/home-renovation-services/deep-freezer-on-rent-vadodara" },
  openGraph: {
    title: "Deep freezer on rent in Vadodara | VadodaraExperts",
    description: "Professional deep freezer on rent services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/home-renovation-services/deep-freezer-on-rent-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="deep-freezer-on-rent-vadodara" />;
}
