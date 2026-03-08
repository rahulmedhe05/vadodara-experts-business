import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("construction-project-management")!;

export const metadata: Metadata = {
  title: "3D construction planning in Vadodara | Construction Project Management | VadodaraExperts",
  description: "Professional 3d construction planning services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/construction-project-management/3d-construction-planning-vadodara" },
  openGraph: {
    title: "3D construction planning in Vadodara | VadodaraExperts",
    description: "Professional 3d construction planning services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/construction-project-management/3d-construction-planning-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="3d-construction-planning-vadodara" />;
}
