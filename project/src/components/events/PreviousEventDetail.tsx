import {
    Calendar,
    MapPin,
    Globe,
    Mail,
    ChevronLeft,
    ChevronRight,
  } from "lucide-react";
  import { motion, AnimatePresence } from "framer-motion";
  import { PreviousEventExtraData } from "./previousEventsData";
  import { useRef, useState } from "react";
  
  interface Props {
    data: PreviousEventExtraData;
  }
  
  export function PreviousEventDetail({ data }: Props) {
    const galleryRef = useRef<HTMLDivElement>(null);
    const [activeImage, setActiveImage] = useState<string | null>(null);
  
    const scrollGallery = (direction: "left" | "right") => {
      if (galleryRef.current) {
        const scrollAmount = galleryRef.current.offsetWidth;
        galleryRef.current.scrollBy({
          left: direction === "left" ? -scrollAmount : scrollAmount,
          behavior: "smooth",
        });
      }
    };
  
    return (
      <>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          className="mt-10 bg-white rounded-2xl shadow-xl overflow-hidden"
        >
          {/* HEADER */}
          <div className="bg-gradient-to-r from-[#223258] to-[#2a3f6f] p-8">
            <h3 className="text-3xl font-bold text-white mb-4">{data.title}</h3>
  
            <div className="flex flex-wrap gap-4 text-sm text-white/90">
              <div className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-full">
                <MapPin size={16} />
                {data.venue}
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-full">
                <Calendar size={16} />
                {data.date}
              </div>
              {data.website && (
                <div className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-full">
                  <Globe size={16} />
                  {data.website}
                </div>
              )}
              {data.email && (
                <div className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-full">
                  <Mail size={16} />
                  {data.email}
                </div>
              )}
            </div>
          </div>
  
          {/* CONTENT */}
          <div className="p-8">
            {/* OVERVIEW */}
            <div className="space-y-4 text-slate-600 mb-10">
              {data.overview.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
  
            {/* HIGHLIGHTS + VIDEO */}
            {(data.highlights?.length > 0 || data.video) && (
              <div className="grid lg:grid-cols-2 gap-8 mb-12 items-start">
                {data.highlights?.length > 0 && (
                  <div>
                    <h4 className="text-xl font-semibold mb-4 text-[#223258] flex items-center gap-2">
                      <span className="w-1 h-6 bg-[#a8042b] rounded-full" />
                      Key Highlights
                    </h4>
                    <ul className="space-y-3">
                      {data.highlights.map((h, i) => (
                        <li key={i} className="flex gap-3 text-slate-600">
                          <span className="mt-2 w-2 h-2 bg-[#a8042b] rounded-full" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
  
                {data.video && (
                  <div>
                    <h4 className="text-xl font-semibold mb-4 text-[#223258] flex items-center gap-2">
                      <span className="w-1 h-6 bg-[#a8042b] rounded-full" />
                      Event Video
                    </h4>
  
                    <div className="relative w-full aspect-video overflow-hidden rounded-2xl bg-black shadow-lg">
                      <iframe
                        src={data.video}
                        className="absolute inset-0 w-[140%] h-[140%] -left-[20%] -top-[20%]"
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                      />
                    </div>
                  </div>
                )}
              </div>
            )}
  
            {/* GALLERY */}
            <div>
              <h4 className="text-xl font-semibold mb-4 text-[#223258] flex items-center gap-2">
                <span className="w-1 h-6 bg-[#a8042b] rounded-full" />
                Event Gallery
              </h4>
  
              <div className="relative group">
                {data.gallery.length > 6 && (
                  <>
                    <button
                      onClick={() => scrollGallery("left")}
                      className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-[#223258] text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition hover:bg-[#a8042b]"
                    >
                      <ChevronLeft size={22} />
                    </button>
                    <button
                      onClick={() => scrollGallery("right")}
                      className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-[#223258] text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition hover:bg-[#a8042b]"
                    >
                      <ChevronRight size={22} />
                    </button>
                  </>
                )}
  
                <div ref={galleryRef} className="overflow-x-auto scrollbar-hide">
                  <div className="flex gap-6">
                    {Array.from({
                      length: Math.ceil(data.gallery.length / 6),
                    }).map((_, pageIndex) => (
                      <div
                        key={pageIndex}
                        className="grid grid-cols-3 grid-rows-2 gap-4 min-w-full"
                      >
                        {data.gallery
                          .slice(pageIndex * 6, pageIndex * 6 + 6)
                          .map((img, idx) => (
                            <motion.div
                              key={idx}
                              whileHover={{ scale: 1.04 }}
                              className="overflow-hidden rounded-xl shadow-md"
                            >
                              <img
                                src={img}
                                alt="Event gallery"
                                onClick={() => setActiveImage(img)}
                                className="w-full h-[220px] object-cover cursor-pointer transition-transform duration-300 hover:scale-110"
                              />
                            </motion.div>
                          ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
  
          <style jsx>{`
            .scrollbar-hide::-webkit-scrollbar {
              display: none;
            }
          `}</style>
        </motion.div>
  
        {/* IMAGE LIGHTBOX */}
        <AnimatePresence>
          {activeImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-6"
              onClick={() => setActiveImage(null)}
            >
              <motion.img
                src={activeImage}
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                className="max-w-full max-h-[90vh] rounded-xl shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              />
  
              <button
                onClick={() => setActiveImage(null)}
                className="absolute top-6 right-6 text-white text-3xl font-bold hover:opacity-80"
              >
                ×
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </>
    );
  }
  