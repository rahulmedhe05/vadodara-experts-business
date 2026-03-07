import { Metadata } from "next";
import NichePageTemplate from "@/components/NichePageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("architecture-firms")!;

export const metadata: Metadata = {
  title: "Architecture Firms in Vadodara | VadodaraExperts",
  description: "Find the best architecture firms in Vadodara. Verified experts, affordable pricing, and fast service. Book now on VadodaraExperts.",
  alternates: { canonical: "https://vadodaraexperts.com/architecture-firms" },
  openGraph: {
    title: "Architecture Firms in Vadodara | VadodaraExperts",
    description: "Find the best architecture firms in Vadodara. Verified experts, affordable pricing.",
    url: "https://vadodaraexperts.com/architecture-firms",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <NichePageTemplate niche={niche} />;
}
