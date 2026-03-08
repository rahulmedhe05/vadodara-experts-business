import { Metadata } from "next";
import NichePageTemplate from "@/components/NichePageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-electrical-contractors")!;

export const metadata: Metadata = {
  title: "Industrial Electrical Contractors in Vadodara | VadodaraExperts",
  description: "Find the best industrial electrical contractors in Vadodara. Verified experts, affordable pricing, and fast service. Book now on VadodaraExperts.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-electrical-contractors" },
  openGraph: {
    title: "Industrial Electrical Contractors in Vadodara | VadodaraExperts",
    description: "Find the best industrial electrical contractors in Vadodara. Verified experts, affordable pricing.",
    url: "https://vadodaraexperts.com/industrial-electrical-contractors",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <NichePageTemplate niche={niche} />;
}
