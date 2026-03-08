import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("hair-transplant-clinics")!;

export const metadata: Metadata = {
  title: "Post transplant care in Vadodara | Hair Transplant Clinics | VadodaraExperts",
  description: "Professional post transplant care services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/hair-transplant-clinics/post-transplant-care-vadodara" },
  openGraph: {
    title: "Post transplant care in Vadodara | VadodaraExperts",
    description: "Professional post transplant care services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/hair-transplant-clinics/post-transplant-care-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="post-transplant-care-vadodara" />;
}
