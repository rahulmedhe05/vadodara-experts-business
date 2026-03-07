import { Metadata } from "next";
import NichePageTemplate from "@/components/NichePageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("eye-hospitals")!;

export const metadata: Metadata = {
  title: "Eye Hospitals in Vadodara | VadodaraExperts",
  description: "Find the best eye hospitals in Vadodara. Verified experts, affordable pricing, and fast service. Book now on VadodaraExperts.",
  alternates: { canonical: "https://vadodaraexperts.com/eye-hospitals" },
  openGraph: {
    title: "Eye Hospitals in Vadodara | VadodaraExperts",
    description: "Find the best eye hospitals in Vadodara. Verified experts, affordable pricing.",
    url: "https://vadodaraexperts.com/eye-hospitals",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <NichePageTemplate niche={niche} />;
}
