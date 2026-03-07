import { Metadata } from "next";
import NichePageTemplate from "@/components/NichePageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-safety-consultancy")!;

export const metadata: Metadata = {
  title: "Industrial Safety Consultancy in Vadodara | VadodaraExperts",
  description: "Find the best industrial safety consultancy in Vadodara. Verified experts, affordable pricing, and fast service. Book now on VadodaraExperts.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-safety-consultancy" },
  openGraph: {
    title: "Industrial Safety Consultancy in Vadodara | VadodaraExperts",
    description: "Find the best industrial safety consultancy in Vadodara. Verified experts, affordable pricing.",
    url: "https://vadodaraexperts.com/industrial-safety-consultancy",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <NichePageTemplate niche={niche} />;
}
