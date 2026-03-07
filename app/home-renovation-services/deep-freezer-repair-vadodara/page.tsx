import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("home-renovation-services")!;

export const metadata: Metadata = {
  title: "Deep freezer repair in Vadodara | Home Renovation Services | VadodaraExperts",
  description: "Professional deep freezer repair services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/home-renovation-services/deep-freezer-repair-vadodara" },
  openGraph: {
    title: "Deep freezer repair in Vadodara | VadodaraExperts",
    description: "Professional deep freezer repair services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/home-renovation-services/deep-freezer-repair-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="deep-freezer-repair-vadodara" />;
}
