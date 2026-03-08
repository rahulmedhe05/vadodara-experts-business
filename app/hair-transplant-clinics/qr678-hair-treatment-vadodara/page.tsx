import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("hair-transplant-clinics")!;

export const metadata: Metadata = {
  title: "QR678 hair treatment in Vadodara | Hair Transplant Clinics | VadodaraExperts",
  description: "Professional qr678 hair treatment services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/hair-transplant-clinics/qr678-hair-treatment-vadodara" },
  openGraph: {
    title: "QR678 hair treatment in Vadodara | VadodaraExperts",
    description: "Professional qr678 hair treatment services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/hair-transplant-clinics/qr678-hair-treatment-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="qr678-hair-treatment-vadodara" />;
}
