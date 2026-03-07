import { Metadata } from "next";
import NichePageTemplate from "@/components/NichePageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("import-consultancy")!;

export const metadata: Metadata = {
  title: "Import Consultancy in Vadodara | VadodaraExperts",
  description: "Find the best import consultancy in Vadodara. Verified experts, affordable pricing, and fast service. Book now on VadodaraExperts.",
  alternates: { canonical: "https://vadodaraexperts.com/import-consultancy" },
  openGraph: {
    title: "Import Consultancy in Vadodara | VadodaraExperts",
    description: "Find the best import consultancy in Vadodara. Verified experts, affordable pricing.",
    url: "https://vadodaraexperts.com/import-consultancy",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <NichePageTemplate niche={niche} />;
}
