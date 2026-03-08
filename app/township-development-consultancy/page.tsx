import { Metadata } from "next";
import NichePageTemplate from "@/components/NichePageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("township-development-consultancy")!;

export const metadata: Metadata = {
  title: "Township Development Consultancy in Vadodara | VadodaraExperts",
  description: "Find the best township development consultancy in Vadodara. Verified experts, affordable pricing, and fast service. Book now on VadodaraExperts.",
  alternates: { canonical: "https://vadodaraexperts.com/township-development-consultancy" },
  openGraph: {
    title: "Township Development Consultancy in Vadodara | VadodaraExperts",
    description: "Find the best township development consultancy in Vadodara. Verified experts, affordable pricing.",
    url: "https://vadodaraexperts.com/township-development-consultancy",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <NichePageTemplate niche={niche} />;
}
