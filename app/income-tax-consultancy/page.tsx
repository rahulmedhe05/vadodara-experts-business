import { Metadata } from "next";
import NichePageTemplate from "@/components/NichePageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("income-tax-consultancy")!;

export const metadata: Metadata = {
  title: "Income Tax Consultancy in Vadodara | VadodaraExperts",
  description: "Find the best income tax consultancy in Vadodara. Verified experts, affordable pricing, and fast service. Book now on VadodaraExperts.",
  alternates: { canonical: "https://vadodaraexperts.com/income-tax-consultancy" },
  openGraph: {
    title: "Income Tax Consultancy in Vadodara | VadodaraExperts",
    description: "Find the best income tax consultancy in Vadodara. Verified experts, affordable pricing.",
    url: "https://vadodaraexperts.com/income-tax-consultancy",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <NichePageTemplate niche={niche} />;
}
