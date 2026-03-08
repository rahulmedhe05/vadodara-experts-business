import { Metadata } from "next";
import NichePageTemplate from "@/components/NichePageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-interior-design")!;

export const metadata: Metadata = {
  title: "Industrial Interior Design in Vadodara | VadodaraExperts",
  description: "Find the best industrial interior design in Vadodara. Verified experts, affordable pricing, and fast service. Book now on VadodaraExperts.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-interior-design" },
  openGraph: {
    title: "Industrial Interior Design in Vadodara | VadodaraExperts",
    description: "Find the best industrial interior design in Vadodara. Verified experts, affordable pricing.",
    url: "https://vadodaraexperts.com/industrial-interior-design",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <NichePageTemplate niche={niche} />;
}
