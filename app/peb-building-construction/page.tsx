import { Metadata } from "next";
import NichePageTemplate from "@/components/NichePageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("peb-building-construction")!;

export const metadata: Metadata = {
  title: "PEB Building Construction in Vadodara | VadodaraExperts",
  description: "Find the best peb building construction in Vadodara. Verified experts, affordable pricing, and fast service. Book now on VadodaraExperts.",
  alternates: { canonical: "https://vadodaraexperts.com/peb-building-construction" },
  openGraph: {
    title: "PEB Building Construction in Vadodara | VadodaraExperts",
    description: "Find the best peb building construction in Vadodara. Verified experts, affordable pricing.",
    url: "https://vadodaraexperts.com/peb-building-construction",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <NichePageTemplate niche={niche} />;
}
