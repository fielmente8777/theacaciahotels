"use client";
import dynamic from "next/dynamic";
import Image from "next/image";


const LazyLoadedVideo = dynamic(() => import("./SEOVideo"), {
  ssr: false,
  loading: () => (
    <Image src="/landing-page/poster.png" alt="banner" fill className="object-cover" />
  ),
});

export default LazyLoadedVideo;
