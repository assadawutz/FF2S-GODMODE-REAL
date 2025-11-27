"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

export default function NewsSection() {
  const NEWS = [
    {
      id: 1,
      img: "/rectangle-700-2.png",
      title:
        "กรมสมเด็จพระเทพรัตน์ราชสุดาฯ เสด็จเปิดศูนย์เยาวชนเทศบาลนครยะลา แหล่งเรียนรู้ TK Park Yala",
      desc: "ความรู้จะมีพลังเมื่อถูกแบ่งปัน “คิด” แล้ว “เล่า” แล้วนำร่วม “แชร์” เพื่อสร้างแรงบันดาลใจให้ใครอีกหลายคน กับ “OKMD CREATOR: Knowledge Sharing” กิจกรรมที่ชวนทุกคนมาเขียน",
      date: "3 วันก่อน",
    },
    {
      id: 2,
      img: "/rectangle-700-3.png",
      title:
        "TK Park x มูลนิธิรักลูกทวบทวยชนคนไทยร่วมแบ่งปันคุณค่าผ่านหนังสือกับแคมเปญ “อ่านแล้ว อ่านอีก”",
      date: "5 วันก่อน",
    },
    {
      id: 3,
      img: "/rectangle-700-4.jpeg",
      title:
        "The Energy Shift : Transition With Opportunities อีเวนต์ที่จะเปลี่ยนวิสัยทัศน์ด้านพลังงานของคุณ",
      date: "7 วันก่อน",
    },
    {
      id: 4,
      img: "/rectangle-700-5.jpeg",
      title:
        "The Energy Shift : Transition With Opportunities อีเวนต์ที่จะเปลี่ยนวิสัยทัศน์ด้านพลังงานของคุณและอนาคต",
      date: "1 สัปดาห์ก่อน",
    },
  ];

  const [newsIndex, setNewsIndex] = useState(0);
  const newsRef = useRef<HTMLDivElement | null>(null);

  const handleNewsScroll = () => {
    if (!newsRef.current) return;
    const x = newsRef.current.scrollLeft;
    const w = newsRef.current.clientWidth;
    const i = Math.round(x / w);
    setNewsIndex(i);
  };

  useEffect(() => {
    const el = newsRef.current;
    if (!el) return;
    el.addEventListener("scroll", handleNewsScroll);
    return () => el.removeEventListener("scroll", handleNewsScroll);
  }, []);

  return (
    <section aria-label="News Section" className="w-full bg-[#EAF5FA] py-20 md:py-24">
      <div className="w-full max-w-[1440px] mx-auto px-6 lg:px-10">

        {/* ================= HEADER ================= */}
        <div className="flex items-start justify-between mb-12 md:mb-16">
          <div>
            <h2 className="text-[36px] md:text-[44px] font-bold text-[#1B1D20]">
              News
            </h2>
            <div className="text-[#16A7CB] text-[20px] md:text-[24px] font-normal mt-3">
              อัปเดตข่าว
            </div>
          </div>

          {/* VIEW ALL */}
          <button
            type="button"
            className="flex items-center gap-2 text-[#16A7CB] text-[16px] md:text-[17px] font-medium hover:text-[#1388A7] transition"
          >
            ดูทั้งหมด
            <span className="text-xl">↗</span>
          </button>
        </div>

        {/* ====================== DESKTOP ====================== */}
        <div className="hidden md:grid grid-cols-12 gap-12">

          {/* LEFT MAIN */}
          <article className="col-span-5 flex flex-col gap-5">

            <div className="w-full h-[360px] rounded-2xl overflow-hidden">
              <Image
                src={NEWS[0].img}
                alt={NEWS[0].title}
                width={900}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>

            <h3 className="text-[20px] font-semibold text-[#1B1D20] leading-snug">
              {NEWS[0].title}
            </h3>

            <p className="text-[#6B7280] text-[15px] leading-relaxed">
              {NEWS[0].desc}
            </p>

            <button
              type="button"
              className="flex items-center gap-1 text-[#16A7CB] text-[15px] font-medium hover:underline transition"
            >
              อ่านต่อ <span className="text-lg">↗</span>
            </button>
          </article>

          {/* 3 SMALL */}
          <div className="col-span-7 flex flex-col gap-8">
            {NEWS.slice(1).map((item) => (
              <article
                key={item.id}
                className="flex gap-5 p-2 rounded-xl hover:bg-white/40 transition cursor-pointer"
              >
                <div className="w-[210px] h-[150px] rounded-xl overflow-hidden flex-shrink-0">
                  <Image
                    src={item.img}
                    width={300}
                    height={200}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex flex-col justify-between">
                  <h4 className="text-[17px] font-semibold text-[#111827] leading-snug line-clamp-2">
                    {item.title}
                  </h4>

                  <p className="text-[13px] text-[#6B7280]">{item.date}</p>

                  <button
                    type="button"
                    className="flex items-center gap-1 text-[#16A7CB] text-[14px] hover:underline"
                  >
                    อ่านต่อ <span className="text-lg">↗</span>
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* ===================== MOBILE ===================== */}
        <div className="md:hidden mt-6">

          <div
            ref={newsRef}
            className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-4 no-scrollbar scroll-smooth"
          >

            {/* large item */}
            <article className="shrink-0 w-full snap-center">
              <div className="w-full h-[330px] rounded-2xl overflow-hidden">
                <Image
                  src={NEWS[0].img}
                  width={600}
                  height={400}
                  alt={NEWS[0].title}
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="text-lg font-semibold text-[#1B1D20] mt-4 leading-snug">
                {NEWS[0].title}
              </h3>

              <p className="text-[#6B7280] text-sm mt-2 line-clamp-3">
                {NEWS[0].desc}
              </p>

              <button type="button" className="text-[#16A7CB] text-sm font-medium mt-3">
                อ่านต่อ →
              </button>
            </article>

            {/* small cards */}
            {NEWS.slice(1).map((item) => (
              <article
                key={item.id}
                className="shrink-0 w-[88%] snap-center rounded-2xl bg-white p-4 shadow"
              >
                <div className="w-full h-[200px] rounded-xl overflow-hidden">
                  <Image
                    src={item.img}
                    width={300}
                    height={200}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <h4 className="text-base font-semibold text-[#1B1D20] mt-4 line-clamp-2 leading-snug">
                  {item.title}
                </h4>

                <p className="text-xs text-[#6B7280] mt-2">{item.date}</p>

                <button type="button" className="text-[#16A7CB] text-sm font-medium mt-3">
                  อ่านต่อ →
                </button>
              </article>
            ))}
          </div>

          {/* PAGING */}
          <div className="flex justify-center mt-3 gap-2">
            {NEWS.map((_, i) => (
              <div
                key={i}
                className={`transition-all rounded-full ${
                  i === newsIndex ? "w-6 h-2 bg-[#16A7CB]" : "w-2 h-2 bg-[#16A7CB]/40"
                }`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
