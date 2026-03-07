import { Metadata } from "next";
import NichePageTemplate from "@/components/NichePageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("construction-safety-consultancy")!;

export const metadata: Metadata = {
  title: "Construction Safety Consultancy in Vadodara | VadodaraExperts",
  description: "Find the best construction safety consultancy in Vadodara. Verified experts, affordable pricing, and fast service. Book now on VadodaraExperts.",
  alternates: { canonical: "https://vadodaraexperts.com/construction-safety-consultancy" },
  openGraph: {
    title: "Construction Safety Consultancy in Vadodara | VadodaraExperts",
    description: "Find the best construction safety consultancy in Vadodara. Verified experts, affordable pricing.",
    url: "https://vadodaraexperts.com/construction-safety-consultancy",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <NichePageTemplate niche={niche} />;
}
