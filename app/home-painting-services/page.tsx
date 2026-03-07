import { Metadata } from "next";
import NichePageTemplate from "@/components/NichePageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("home-painting-services")!;

export const metadata: Metadata = {
  title: "Home Painting Services in Vadodara | VadodaraExperts",
  description: "Find the best home painting services in Vadodara. Verified experts, affordable pricing, and fast service. Book now on VadodaraExperts.",
  alternates: { canonical: "https://vadodaraexperts.com/home-painting-services" },
  openGraph: {
    title: "Home Painting Services in Vadodara | VadodaraExperts",
    description: "Find the best home painting services in Vadodara. Verified experts, affordable pricing.",
    url: "https://vadodaraexperts.com/home-painting-services",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <NichePageTemplate niche={niche} />;
}
