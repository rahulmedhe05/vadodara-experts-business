import { Metadata } from "next";
import NichePageTemplate from "@/components/NichePageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("prefabricated-building-construction")!;

export const metadata: Metadata = {
  title: "Prefabricated Building Construction in Vadodara | VadodaraExperts",
  description: "Find the best prefabricated building construction in Vadodara. Verified experts, affordable pricing, and fast service. Book now on VadodaraExperts.",
  alternates: { canonical: "https://vadodaraexperts.com/prefabricated-building-construction" },
  openGraph: {
    title: "Prefabricated Building Construction in Vadodara | VadodaraExperts",
    description: "Find the best prefabricated building construction in Vadodara. Verified experts, affordable pricing.",
    url: "https://vadodaraexperts.com/prefabricated-building-construction",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <NichePageTemplate niche={niche} />;
}
