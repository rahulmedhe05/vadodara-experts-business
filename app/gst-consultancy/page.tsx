import { Metadata } from "next";
import NichePageTemplate from "@/components/NichePageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("gst-consultancy")!;

export const metadata: Metadata = {
  title: "GST Consultancy in Vadodara | VadodaraExperts",
  description: "Find the best gst consultancy in Vadodara. Verified experts, affordable pricing, and fast service. Book now on VadodaraExperts.",
  alternates: { canonical: "https://vadodaraexperts.com/gst-consultancy" },
  openGraph: {
    title: "GST Consultancy in Vadodara | VadodaraExperts",
    description: "Find the best gst consultancy in Vadodara. Verified experts, affordable pricing.",
    url: "https://vadodaraexperts.com/gst-consultancy",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <NichePageTemplate niche={niche} />;
}
