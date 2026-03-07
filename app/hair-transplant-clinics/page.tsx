import { Metadata } from "next";
import NichePageTemplate from "@/components/NichePageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("hair-transplant-clinics")!;

export const metadata: Metadata = {
  title: "Hair Transplant Clinics in Vadodara | VadodaraExperts",
  description: "Find the best hair transplant clinics in Vadodara. Verified experts, affordable pricing, and fast service. Book now on VadodaraExperts.",
  alternates: { canonical: "https://vadodaraexperts.com/hair-transplant-clinics" },
  openGraph: {
    title: "Hair Transplant Clinics in Vadodara | VadodaraExperts",
    description: "Find the best hair transplant clinics in Vadodara. Verified experts, affordable pricing.",
    url: "https://vadodaraexperts.com/hair-transplant-clinics",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <NichePageTemplate niche={niche} />;
}
