import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("home-painting-services")!;

export const metadata: Metadata = {
  title: "PU coating wood in Vadodara | Home Painting Services | VadodaraExperts",
  description: "Professional pu coating wood services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/home-painting-services/pu-coating-wood-vadodara" },
  openGraph: {
    title: "PU coating wood in Vadodara | VadodaraExperts",
    description: "Professional pu coating wood services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/home-painting-services/pu-coating-wood-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="pu-coating-wood-vadodara" />;
}
