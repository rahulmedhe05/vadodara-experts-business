import { Metadata } from "next";
import NichePageTemplate from "@/components/NichePageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("civil-contractors")!;

export const metadata: Metadata = {
  title: "Civil Contractors in Vadodara | VadodaraExperts",
  description: "Find the best civil contractors in Vadodara. Verified experts, affordable pricing, and fast service. Book now on VadodaraExperts.",
  alternates: { canonical: "https://vadodaraexperts.com/civil-contractors" },
  openGraph: {
    title: "Civil Contractors in Vadodara | VadodaraExperts",
    description: "Find the best civil contractors in Vadodara. Verified experts, affordable pricing.",
    url: "https://vadodaraexperts.com/civil-contractors",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <NichePageTemplate niche={niche} />;
}
