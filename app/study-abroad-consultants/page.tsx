import { Metadata } from "next";
import NichePageTemplate from "@/components/NichePageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("study-abroad-consultants")!;

export const metadata: Metadata = {
  title: "Study Abroad Consultants in Vadodara | VadodaraExperts",
  description: "Find the best study abroad consultants in Vadodara. Verified experts, affordable pricing, and fast service. Book now on VadodaraExperts.",
  alternates: { canonical: "https://vadodaraexperts.com/study-abroad-consultants" },
  openGraph: {
    title: "Study Abroad Consultants in Vadodara | VadodaraExperts",
    description: "Find the best study abroad consultants in Vadodara. Verified experts, affordable pricing.",
    url: "https://vadodaraexperts.com/study-abroad-consultants",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <NichePageTemplate niche={niche} />;
}
