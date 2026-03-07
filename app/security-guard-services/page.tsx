import { Metadata } from "next";
import NichePageTemplate from "@/components/NichePageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("security-guard-services")!;

export const metadata: Metadata = {
  title: "Security Guard Services in Vadodara | VadodaraExperts",
  description: "Find the best security guard services in Vadodara. Verified experts, affordable pricing, and fast service. Book now on VadodaraExperts.",
  alternates: { canonical: "https://vadodaraexperts.com/security-guard-services" },
  openGraph: {
    title: "Security Guard Services in Vadodara | VadodaraExperts",
    description: "Find the best security guard services in Vadodara. Verified experts, affordable pricing.",
    url: "https://vadodaraexperts.com/security-guard-services",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <NichePageTemplate niche={niche} />;
}
