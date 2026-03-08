import { Metadata } from "next";
import NichePageTemplate from "@/components/NichePageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("chartered-accountant-services")!;

export const metadata: Metadata = {
  title: "Chartered Accountant Services in Vadodara | VadodaraExperts",
  description: "Find the best chartered accountant services in Vadodara. Verified experts, affordable pricing, and fast service. Book now on VadodaraExperts.",
  alternates: { canonical: "https://vadodaraexperts.com/chartered-accountant-services" },
  openGraph: {
    title: "Chartered Accountant Services in Vadodara | VadodaraExperts",
    description: "Find the best chartered accountant services in Vadodara. Verified experts, affordable pricing.",
    url: "https://vadodaraexperts.com/chartered-accountant-services",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <NichePageTemplate niche={niche} />;
}
