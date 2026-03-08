import { Metadata } from "next";
import NichePageTemplate from "@/components/NichePageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("physiotherapy-clinics")!;

export const metadata: Metadata = {
  title: "Physiotherapy Clinics in Vadodara | VadodaraExperts",
  description: "Find the best physiotherapy clinics in Vadodara. Verified experts, affordable pricing, and fast service. Book now on VadodaraExperts.",
  alternates: { canonical: "https://vadodaraexperts.com/physiotherapy-clinics" },
  openGraph: {
    title: "Physiotherapy Clinics in Vadodara | VadodaraExperts",
    description: "Find the best physiotherapy clinics in Vadodara. Verified experts, affordable pricing.",
    url: "https://vadodaraexperts.com/physiotherapy-clinics",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <NichePageTemplate niche={niche} />;
}
