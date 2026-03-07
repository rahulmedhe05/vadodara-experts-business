import { Metadata } from "next";
import NichePageTemplate from "@/components/NichePageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("veterinary-clinics")!;

export const metadata: Metadata = {
  title: "Veterinary Clinics in Vadodara | VadodaraExperts",
  description: "Find the best veterinary clinics in Vadodara. Verified experts, affordable pricing, and fast service. Book now on VadodaraExperts.",
  alternates: { canonical: "https://vadodaraexperts.com/veterinary-clinics" },
  openGraph: {
    title: "Veterinary Clinics in Vadodara | VadodaraExperts",
    description: "Find the best veterinary clinics in Vadodara. Verified experts, affordable pricing.",
    url: "https://vadodaraexperts.com/veterinary-clinics",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <NichePageTemplate niche={niche} />;
}
