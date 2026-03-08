import { Metadata } from "next";
import NichePageTemplate from "@/components/NichePageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("hospital-interior-design")!;

export const metadata: Metadata = {
  title: "Hospital Interior Design in Vadodara | VadodaraExperts",
  description: "Find the best hospital interior design in Vadodara. Verified experts, affordable pricing, and fast service. Book now on VadodaraExperts.",
  alternates: { canonical: "https://vadodaraexperts.com/hospital-interior-design" },
  openGraph: {
    title: "Hospital Interior Design in Vadodara | VadodaraExperts",
    description: "Find the best hospital interior design in Vadodara. Verified experts, affordable pricing.",
    url: "https://vadodaraexperts.com/hospital-interior-design",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <NichePageTemplate niche={niche} />;
}
