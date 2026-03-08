import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("gst-consultancy")!;

export const metadata: Metadata = {
  title: "Job work under GST in Vadodara | GST Consultancy | VadodaraExperts",
  description: "Professional job work under gst services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/gst-consultancy/job-work-under-gst-vadodara" },
  openGraph: {
    title: "Job work under GST in Vadodara | VadodaraExperts",
    description: "Professional job work under gst services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/gst-consultancy/job-work-under-gst-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="job-work-under-gst-vadodara" />;
}
