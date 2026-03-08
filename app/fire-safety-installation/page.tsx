import { Metadata } from "next";
import NichePageTemplate from "@/components/NichePageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("fire-safety-installation")!;

export const metadata: Metadata = {
  title: "Fire Safety Installation in Vadodara | VadodaraExperts",
  description: "Find the best fire safety installation in Vadodara. Verified experts, affordable pricing, and fast service. Book now on VadodaraExperts.",
  alternates: { canonical: "https://vadodaraexperts.com/fire-safety-installation" },
  openGraph: {
    title: "Fire Safety Installation in Vadodara | VadodaraExperts",
    description: "Find the best fire safety installation in Vadodara. Verified experts, affordable pricing.",
    url: "https://vadodaraexperts.com/fire-safety-installation",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <NichePageTemplate niche={niche} />;
}
