import { Metadata } from "next";
import NichePageTemplate from "@/components/NichePageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("construction-project-management")!;

export const metadata: Metadata = {
  title: "Construction Project Management in Vadodara | VadodaraExperts",
  description: "Find the best construction project management in Vadodara. Verified experts, affordable pricing, and fast service. Book now on VadodaraExperts.",
  alternates: { canonical: "https://vadodaraexperts.com/construction-project-management" },
  openGraph: {
    title: "Construction Project Management in Vadodara | VadodaraExperts",
    description: "Find the best construction project management in Vadodara. Verified experts, affordable pricing.",
    url: "https://vadodaraexperts.com/construction-project-management",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <NichePageTemplate niche={niche} />;
}
