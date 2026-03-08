import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("home-painting-services")!;

export const metadata: Metadata = {
  title: "3D wallpaper in Vadodara | Home Painting Services | VadodaraExperts",
  description: "Professional 3d wallpaper services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/home-painting-services/3d-wallpaper-vadodara" },
  openGraph: {
    title: "3D wallpaper in Vadodara | VadodaraExperts",
    description: "Professional 3d wallpaper services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/home-painting-services/3d-wallpaper-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="3d-wallpaper-vadodara" />;
}
