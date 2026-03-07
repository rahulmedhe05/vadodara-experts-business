import { Metadata } from "next";
import NichePageTemplate from "@/components/NichePageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("energy-audit-consultancy")!;

export const metadata: Metadata = {
  title: "Energy Audit Consultancy in Vadodara | VadodaraExperts",
  description: "Find the best energy audit consultancy in Vadodara. Verified experts, affordable pricing, and fast service. Book now on VadodaraExperts.",
  alternates: { canonical: "https://vadodaraexperts.com/energy-audit-consultancy" },
  openGraph: {
    title: "Energy Audit Consultancy in Vadodara | VadodaraExperts",
    description: "Find the best energy audit consultancy in Vadodara. Verified experts, affordable pricing.",
    url: "https://vadodaraexperts.com/energy-audit-consultancy",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <NichePageTemplate niche={niche} />;
}
