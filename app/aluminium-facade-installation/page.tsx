import { Metadata } from "next";
import NichePageTemplate from "@/components/NichePageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("aluminium-facade-installation")!;

export const metadata: Metadata = {
  title: "Aluminium Facade Installation in Vadodara | VadodaraExperts",
  description: "Find the best aluminium facade installation in Vadodara. Verified experts, affordable pricing, and fast service. Book now on VadodaraExperts.",
  alternates: { canonical: "https://vadodaraexperts.com/aluminium-facade-installation" },
  openGraph: {
    title: "Aluminium Facade Installation in Vadodara | VadodaraExperts",
    description: "Find the best aluminium facade installation in Vadodara. Verified experts, affordable pricing.",
    url: "https://vadodaraexperts.com/aluminium-facade-installation",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <NichePageTemplate niche={niche} />;
}
