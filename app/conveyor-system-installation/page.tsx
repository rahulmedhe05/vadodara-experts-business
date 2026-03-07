import { Metadata } from "next";
import NichePageTemplate from "@/components/NichePageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("conveyor-system-installation")!;

export const metadata: Metadata = {
  title: "Conveyor System Installation in Vadodara | VadodaraExperts",
  description: "Find the best conveyor system installation in Vadodara. Verified experts, affordable pricing, and fast service. Book now on VadodaraExperts.",
  alternates: { canonical: "https://vadodaraexperts.com/conveyor-system-installation" },
  openGraph: {
    title: "Conveyor System Installation in Vadodara | VadodaraExperts",
    description: "Find the best conveyor system installation in Vadodara. Verified experts, affordable pricing.",
    url: "https://vadodaraexperts.com/conveyor-system-installation",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <NichePageTemplate niche={niche} />;
}
