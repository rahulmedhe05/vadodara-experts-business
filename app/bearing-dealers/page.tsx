import { Metadata } from "next";
import NichePageTemplate from "@/components/NichePageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("bearing-dealers")!;

export const metadata: Metadata = {
  title: "Bearing Dealers in Vadodara | VadodaraExperts",
  description: "Find the best bearing dealers in Vadodara. Verified experts, affordable pricing, and fast service. Book now on VadodaraExperts.",
  alternates: { canonical: "https://vadodaraexperts.com/bearing-dealers" },
  openGraph: {
    title: "Bearing Dealers in Vadodara | VadodaraExperts",
    description: "Find the best bearing dealers in Vadodara. Verified experts, affordable pricing.",
    url: "https://vadodaraexperts.com/bearing-dealers",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <NichePageTemplate niche={niche} />;
}
