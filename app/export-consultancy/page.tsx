import { Metadata } from "next";
import NichePageTemplate from "@/components/NichePageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("export-consultancy")!;

export const metadata: Metadata = {
  title: "Export Consultancy in Vadodara | VadodaraExperts",
  description: "Find the best export consultancy in Vadodara. Verified experts, affordable pricing, and fast service. Book now on VadodaraExperts.",
  alternates: { canonical: "https://vadodaraexperts.com/export-consultancy" },
  openGraph: {
    title: "Export Consultancy in Vadodara | VadodaraExperts",
    description: "Find the best export consultancy in Vadodara. Verified experts, affordable pricing.",
    url: "https://vadodaraexperts.com/export-consultancy",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <NichePageTemplate niche={niche} />;
}
