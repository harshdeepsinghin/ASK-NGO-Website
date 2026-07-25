
"use client";

import Image from "next/image";
import { useState } from "react"; 

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";


const achievements = [
  { id: "cert-1", src: `${basePath}/images/fame/certificate_1ask.png`, alt: "ASK Certificate 1" },
  { id: "cert-2", src: `${basePath}/images/fame/certificate_2ask.png`, alt: "ASK Certificate 2" },
  { id: "cert-3", src: `${basePath}/images/fame/certificate_3ask.png`, alt: "ASK Certificate 3" },
  { id: "dm-support", src: `${basePath}/images/fame/DM_support.jpeg`, alt: "DM Support" },
  
  { id: "cm-cutout", src: `${basePath}/images/fame/cm_cutout.jpeg`, alt: "CM Cutout" },
  { id: "news-8", src: `${basePath}/images/fame/news_8.jpeg`, alt: "News Feature 8" },
  { id: "hd-image-2", src: `${basePath}/images/fame/hd_image2.jpeg`, alt: "HD Event Image 2" },
  { id: "news-6", src: `${basePath}/images/fame/news_6.jpeg`, alt: "News Feature 6" },
  
  { id: "news-5", src: `${basePath}/images/fame/news_5.jpeg`, alt: "News Feature 5" },
  { id: "hd-news", src: `${basePath}/images/fame/hd_news.jpeg`, alt: "HD News Feature" },
  { id: "news-3", src: `${basePath}/images/fame/news_3.jpeg`, alt: "News Feature 3" },
  { id: "news-2", src: `${basePath}/images/fame/News_2.jpeg`, alt: "News Feature 2" },
  
  { id: "news-1", src: `${basePath}/images/fame/news1jpeg.jpeg`, alt: "News Feature 1" },
  { id: "donation-1", src: `${basePath}/images/fame/donation_campaign1.jpeg`, alt: "Donation Campaign" },
  { id: "headline-1", src: `${basePath}/images/fame/headline1ask.png`, alt: "ASK Headline 1" },
  { id: "headline-2", src: `${basePath}/images/fame/headline2ask.png`, alt: "ASK Headline 2" },
  { id: "headline-new1", src: `${basePath}/images/fame/ASK_new1.jpeg`, alt: "ASK Headline New 1" },
  { id: "headline-new2", src: `${basePath}/images/fame/ASK_new2.jpeg`, alt: "ASK Headline New 2" },
  { id: "headline-new3", src: `${basePath}/images/fame/ASK_new3.jpeg`, alt: "ASK Headline New 3" },
  { id: "headline-new4", src: `${basePath}/images/fame/ASK_new4.jpeg`, alt: "ASK Headline New 4" },
  { id: "headline-new5", src: `${basePath}/images/fame/ASK_new5.jpeg`, alt: "ASK Headline New 5" },
  { id: "headline-new6", src: `${basePath}/images/fame/ASK_new6.jpeg`, alt: "ASK Headline New 6" },
  { id: "headline-3", src: `${basePath}/images/fame/headline3ask.png`, alt: "ASK Headline 3" },
  { id: "headline-4", src: `${basePath}/images/fame/headline4ask.png`, alt: "ASK Headline 4" },
  { id: "testimonial-1", src: `${basePath}/images/fame/Testimonials_1.png`, alt: "Testimonial 1" },
  { id: "testimonial-2", src: `${basePath}/images/fame/Testimonials_2 .png`, alt: "Testimonial 2" },
];

export function WallOfFame() {
  // This tracks which image is currently clicked.
  const [selectedImage, setSelectedImage] = useState<{src: string, alt: string} | null>(null);

  return (
    <>
      <section className="w-full py-12 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 mb-10 text-center">
         
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#e65c00] via-[#F9D423] to-[#FF4E50] bg-clip-text text-transparent animate-text-flame pb-2 tracking-tight">
            Our Wall of Fame
          </h2>
          <p className="text-gray-600 mt-2 font-medium text-lg">
            Milestones, awards, and headlines.
          </p>
        </div>

        <div className="relative w-full overflow-hidden flex">
          <div className="animate-infinite-scroll">
            
            {/* The First List */}
            {achievements.map((item) => (
              <div 
                key={item.id} 
                onClick={() => setSelectedImage({ src: item.src, alt: item.alt })}
                className="w-96 h-64 mx-4 relative flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300 rounded-lg overflow-hidden shadow-md cursor-pointer"
              >
                <Image src={item.src} alt={item.alt} fill className="object-cover" unoptimized />
              </div>
            ))}

            {/* The Duplicate List (for the seamless loop) */}
            {achievements.map((item) => (
              <div 
                key={`${item.id}-duplicate`} 
                onClick={() => setSelectedImage({ src: item.src, alt: item.alt })}
                className="w-96 h-64 mx-4 relative flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300 rounded-lg overflow-hidden shadow-md cursor-pointer"
              >
                <Image src={item.src} alt={item.alt} fill className="object-cover" unoptimized />
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* The Maximized Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          
          {/* Clicking this invisible background layer closes the modal */}
          <div 
            className="absolute inset-0 cursor-pointer" 
            onClick={() => setSelectedImage(null)}
          />

          {/* The Maximized Image Container */}
          <div className="relative w-full max-w-5xl h-[85vh] z-10 flex flex-col items-center">
            
            {/* Close Button */}
            <button 
              className="absolute -top-10 right-0 text-white hover:text-gray-300 font-bold text-lg tracking-wider"
              onClick={() => setSelectedImage(null)}
            >
              CLOSE ✕
            </button>
            
            {/* The Image */}
            <div className="relative w-full h-full">
              <Image 
                src={selectedImage.src} 
                alt={selectedImage.alt}
                fill
                /* object-contain ensures the whole certificate/newspaper is visible without cropping */
                className="object-contain drop-shadow-2xl" 
                unoptimized
              />
            </div>

          </div>
        </div>
      )}
    </>
  );
}