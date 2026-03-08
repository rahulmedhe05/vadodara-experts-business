import { Metadata } from "next";
import NichePageTemplate from "@/components/NichePageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("dermatology-clinics")!;

export const metadata: Metadata = {
  title: "Dermatology Clinics in Vadodara | VadodaraExperts",
  description: "Find the best dermatology clinics in Vadodara. Verified experts, affordable pricing, and fast service. Book now on VadodaraExperts.",
  alternates: { canonical: "https://vadodaraexperts.com/dermatology-clinics" },
  openGraph: {
    title: "Dermatology Clinics in Vadodara | VadodaraExperts",
    description: "Find the best dermatology clinics in Vadodara. Verified experts, affordable pricing.",
    url: "https://vadodaraexperts.com/dermatology-clinics",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <NichePageTemplate niche={niche} />;
}
