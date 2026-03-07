import { Metadata } from "next";
import NichePageTemplate from "@/components/NichePageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-project-consultancy")!;

export const metadata: Metadata = {
  title: "Industrial Project Consultancy in Vadodara | VadodaraExperts",
  description: "Find the best industrial project consultancy in Vadodara. Verified experts, affordable pricing, and fast service. Book now on VadodaraExperts.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-project-consultancy" },
  openGraph: {
    title: "Industrial Project Consultancy in Vadodara | VadodaraExperts",
    description: "Find the best industrial project consultancy in Vadodara. Verified experts, affordable pricing.",
    url: "https://vadodaraexperts.com/industrial-project-consultancy",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <NichePageTemplate niche={niche} />;
}
