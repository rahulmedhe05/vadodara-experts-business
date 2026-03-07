import { Metadata } from "next";
import NichePageTemplate from "@/components/NichePageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("swimming-pool-construction")!;

export const metadata: Metadata = {
  title: "Swimming Pool Construction in Vadodara | VadodaraExperts",
  description: "Find the best swimming pool construction in Vadodara. Verified experts, affordable pricing, and fast service. Book now on VadodaraExperts.",
  alternates: { canonical: "https://vadodaraexperts.com/swimming-pool-construction" },
  openGraph: {
    title: "Swimming Pool Construction in Vadodara | VadodaraExperts",
    description: "Find the best swimming pool construction in Vadodara. Verified experts, affordable pricing.",
    url: "https://vadodaraexperts.com/swimming-pool-construction",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <NichePageTemplate niche={niche} />;
}
