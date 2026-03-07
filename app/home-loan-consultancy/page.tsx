import { Metadata } from "next";
import NichePageTemplate from "@/components/NichePageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("home-loan-consultancy")!;

export const metadata: Metadata = {
  title: "Home Loan Consultancy in Vadodara | VadodaraExperts",
  description: "Find the best home loan consultancy in Vadodara. Verified experts, affordable pricing, and fast service. Book now on VadodaraExperts.",
  alternates: { canonical: "https://vadodaraexperts.com/home-loan-consultancy" },
  openGraph: {
    title: "Home Loan Consultancy in Vadodara | VadodaraExperts",
    description: "Find the best home loan consultancy in Vadodara. Verified experts, affordable pricing.",
    url: "https://vadodaraexperts.com/home-loan-consultancy",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <NichePageTemplate niche={niche} />;
}
