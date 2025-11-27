"use client";

import Image from "next/image";

export default function RecommendSection() {
  const ITEMS = [
    {
      id: 1,
      title: "Unleash Your Potential",
      desc: "เราไม่ได้แค่แนะนำ แต่เราคัดหมวดนิยมใหม่ให้เป็นทางเลือก",
      img: "/rec1.png",
    },
    {
      id: 2,
      title: "Unlock knowledge anywhere you are",
      desc: "OKMD Knowledge Portal",
      img: "/rec2.png",
    },
  ];

  return (
    <section className="bg-[#0F0F0F] py-16 md:py-24">
      <div className="w-full flex justify-center">
        <div className="w-full max-w-[1440px] mx-auto px-6 lg:px-10">

          {/* TITLE */}
          <header className="text-center mb-14 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
              Smart Picks
            </h2>
            <p className="text-gray-300 mt-2 text-lg md:text-xl opacity-90">
              เราไม่ได้แค่แนะนำ แต่เราคัดหมวดนิยมใหม่ให้เป็นทางเลือก
            </p>
          </header>

          {/* ---------------- MOBILE (VALID) ---------------- */}
          <div className="md:hidden space-y-10">
            {ITEMS.map((item) => (
              <article
                key={item.id}
                className="
                  relative rounded-2xl overflow-hidden 
                  bg-[#1A1A1A]
                  shadow-[0_10px_36px_rgba(0,0,0,0.55)]
                  transition-transform duration-500
                  hover:scale-[1.03]
                "
              >
                <Image
                  src={item.img}
                  alt={item.title}
                  width={600}
                  height={300}
                  className="
                    w-full h-[300px] object-cover 
                    transition-transform duration-[900ms] 
                    hover:scale-[1.08]
                  "
                />

                <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/35 to-black/60" />

              
              </article>
            ))}
          </div>

          {/* ---------------- DESKTOP (VALID) ---------------- */}
          <div className="hidden md:grid grid-cols-2 gap-10">
            {ITEMS.map((item) => (
              <article
                key={item.id}
                className="
                  group relative rounded-2xl overflow-hidden 
                  bg-[#1A1A1A]
                  shadow-[0_14px_40px_rgba(0,0,0,0.55)]
                  transition-transform duration-500
                  hover:scale-[1.02]
                "
              >
                <div className="overflow-hidden">
                  <Image
                    src={item.img}
                    alt={item.title}
                    width={600}
                    height={400}
                    className="
                      w-full h-[400px] object-cover
                      group-hover:scale-[1.09]
                      transition-transform duration-[1100ms] ease-out
                    "
                  />
                </div>

                <div className="
                  pointer-events-none absolute inset-0 
                  bg-gradient-to-b from-black/0 via-black/30 to-black/85
                  opacity-80 group-hover:opacity-95  
                  transition duration-700
                " />

                
              </article>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
