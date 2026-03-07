import { Metadata } from "next";
import NichePageTemplate from "@/components/NichePageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("green-building-consultancy")!;

export const metadata: Metadata = {
  title: "Green Building Consultancy in Vadodara | VadodaraExperts",
  description: "Find the best green building consultancy in Vadodara. Verified experts, affordable pricing, and fast service. Book now on VadodaraExperts.",
  alternates: { canonical: "https://vadodaraexperts.com/green-building-consultancy" },
  openGraph: {
    title: "Green Building Consultancy in Vadodara | VadodaraExperts",
    description: "Find the best green building consultancy in Vadodara. Verified experts, affordable pricing.",
    url: "https://vadodaraexperts.com/green-building-consultancy",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <NichePageTemplate niche={niche} />;
}
