import { Metadata } from "next";
import NichePageTemplate from "@/components/NichePageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("ivf-clinics")!;

export const metadata: Metadata = {
  title: "IVF Clinics in Vadodara | VadodaraExperts",
  description: "Find the best ivf clinics in Vadodara. Verified experts, affordable pricing, and fast service. Book now on VadodaraExperts.",
  alternates: { canonical: "https://vadodaraexperts.com/ivf-clinics" },
  openGraph: {
    title: "IVF Clinics in Vadodara | VadodaraExperts",
    description: "Find the best ivf clinics in Vadodara. Verified experts, affordable pricing.",
    url: "https://vadodaraexperts.com/ivf-clinics",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <NichePageTemplate niche={niche} />;
}
