import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("carpenter-services")!;

export const metadata: Metadata = {
  title: "Drawer slide repair in Vadodara | Carpenter Services | VadodaraExperts",
  description: "Professional drawer slide repair services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/carpenter-services/drawer-slide-repair-vadodara" },
  openGraph: {
    title: "Drawer slide repair in Vadodara | VadodaraExperts",
    description: "Professional drawer slide repair services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/carpenter-services/drawer-slide-repair-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="drawer-slide-repair-vadodara" />;
}
