import { Metadata } from "next";
import NichePageTemplate from "@/components/NichePageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("land-development-consultancy")!;

export const metadata: Metadata = {
  title: "Land Development Consultancy in Vadodara | VadodaraExperts",
  description: "Find the best land development consultancy in Vadodara. Verified experts, affordable pricing, and fast service. Book now on VadodaraExperts.",
  alternates: { canonical: "https://vadodaraexperts.com/land-development-consultancy" },
  openGraph: {
    title: "Land Development Consultancy in Vadodara | VadodaraExperts",
    description: "Find the best land development consultancy in Vadodara. Verified experts, affordable pricing.",
    url: "https://vadodaraexperts.com/land-development-consultancy",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <NichePageTemplate niche={niche} />;
}
