import { Metadata } from "next";
import NichePageTemplate from "@/components/NichePageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("loan-consultancy-services")!;

export const metadata: Metadata = {
  title: "Loan Consultancy Services in Vadodara | VadodaraExperts",
  description: "Find the best loan consultancy services in Vadodara. Verified experts, affordable pricing, and fast service. Book now on VadodaraExperts.",
  alternates: { canonical: "https://vadodaraexperts.com/loan-consultancy-services" },
  openGraph: {
    title: "Loan Consultancy Services in Vadodara | VadodaraExperts",
    description: "Find the best loan consultancy services in Vadodara. Verified experts, affordable pricing.",
    url: "https://vadodaraexperts.com/loan-consultancy-services",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <NichePageTemplate niche={niche} />;
}
