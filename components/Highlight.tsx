"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";

const HIGHLIGHTS = [
  {
    id: 1,
    img: "/hi1.png",
    title: "เพราะทุกครั้งที่คุณสูบ \nคือการทำร้ายตัวเองอย่างช้า ๆ",
    desc: "ทุกคำสูบ คือก้าวถอยจากสุขภาพดี",
    link: "#",
  },
  {
    id: 2,
    img: "/hi2.png",
    title: "The Knowledge\nvol.36",
    desc: "",
    link: "#",
  },
  {
    id: 3,
    img: "/hi3.png",
    title: "สำรวจธุรกิจและองค์กรทั่วโลก เสริมพลังด้านวัฒนธรรมด้วย AI",
    desc: "sk Mona ใช้ AI ส่งเสริมการเข้าถึงวัฒนธรรม ศิลปะ และพิพิธภัณฑ์",
    link: "#",
  },
  { id: 4, img: "/hi4.png", title: "", desc: "", link: "#" },
  {
    id: 5,
    img: "/hi5.png",
    title: "เรียนรู้แบบเถื่อนๆ ไปกับ สิงห์ วรรณสิงห์",
    desc: "",
    link: "#",
  },
];

export default function HighlightSection() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [index, setIndex] = useState(0);

  /* AUTO SLIDE */
  useEffect(() => {
    const timer = setInterval(() => {
      if (!ref.current) return;
      const next = (index + 1) % HIGHLIGHTS.length;
      setIndex(next);
      ref.current.scrollTo({
        left: next * ref.current.clientWidth,
        behavior: "smooth",
      });
    }, 3800);
    return () => clearInterval(timer);
  }, [index]);

  return (
    <section className="w-full bg-[#DFF1F9] py-20">
      {/* HEADER */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-[#1B1D20] tracking-tight drop-shadow-sm">
          Highlight
        </h2>
        <p className="text-xl text-[#16A7CB] mt-2 opacity-90">
          ทุกจุดเด่น ถูกยกมาไว้ตรงนี้
        </p>
      </div>

      {/* DESKTOP */}
      <div className="hidden md:flex flex-col items-center w-full">

        {/* ROW 1 */}
        <div className="flex gap-10 max-w-[1440px] px-6 md:px-10">

          {/* BOX 1 */}
          <div className="relative rounded-2xl overflow-hidden h-[330px] w-[365px] group shadow-[0_6px_22px_rgba(0,0,0,0.10)]">
            <Image
              src="/hi1.png"
              fill
              alt="highlight-1"
              className="object-cover group-hover:scale-[1.06] transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/70" />
            <div className="absolute bottom-6 left-6 text-white space-y-3 drop-shadow-lg">
              <h3 className="text-[20px] font-semibold leading-[28px] whitespace-pre-line">
                เพราะทุกครั้งที่คุณสูบ{"\n"}คือการทำร้ายตัวเองอย่างช้า ๆ
              </h3>
              <p className="text-[14px] opacity-90">ทุกคำสูบ คือก้าวถอยจากสุขภาพดี</p>
              <a href="#" className="flex items-center gap-1 text-[#74CEE2] text-sm hover:opacity-70 transition">
                อ่านต่อ <span>↗</span>
              </a>
            </div>
          </div>

          {/* BOX 2 */}
          <div className="bg-white rounded-2xl pt-10 pb-10 px-6 shadow-[0_4px_22px_rgba(0,0,0,0.08)] h-[330px] w-[365px] flex justify-between hover:shadow-[0_6px_26px_rgba(0,0,0,0.12)] transition">
            <div>
              <p className="text-gray-500 text-sm mb-1">The Knowledge</p>
              <h3 className="text-4xl font-bold leading-snug">vol.36</h3>
            </div>
            <Image
              src="/hi2.png"
              width={180}
              height={260}
              alt="highlight-2"
              className="rounded-none shadow-md"
            />
          </div>

          {/* BOX 3 */}
          <div className="bg-white rounded-2xl pt-6 px-6 shadow-[0_4px_22px_rgba(0,0,0,0.08)] h-[330px] w-[365px] relative overflow-hidden hover:shadow-[0_6px_26px_rgba(0,0,0,0.12)] transition">
            <Image
              src="/hi3.png"
              width={150}
              height={150}
              alt="highlight-3-icon"
              className="absolute right-4 bottom-4 opacity-30"
            />

            <p className="font-bold text-lg mb-2 tracking-tight">OKMD</p>

            <h3 className="text-[16px] text-[#1B1D20] leading-6 font-medium mb-3">
              สำรวจธุรกิจและองค์กรทั่วโลก เสริมพลังด้าน<br />วัฒนธรรมด้วย AI
            </h3>

            <p className="text-sm text-[#7F8288] leading-5 line-clamp-3">
              sk Mona ใช้ AI ส่งเสริมการเข้าถึงวัฒนธรรม ศิลปะ และพิพิธภัณฑ์ โดยเฉพาะกับคนรุ่นใหม่
            </p>

            <a href="#" className="flex items-center gap-1 text-[#16A7CB] text-sm mt-6 hover:opacity-70 transition">
              อ่านต่อ <span>↗</span>
            </a>
          </div>
        </div>

        {/* ROW 2 */}
        <div className="flex gap-10 mt-10 max-w-[1440px] px-6 md:px-10">

          {/* BOX 4 */}
          <div className="relative rounded-2xl overflow-hidden h-[330px] w-[752px] group shadow-[0_6px_22px_rgba(0,0,0,0.10)]">
            <Image
              src="/hi4.png"
              fill
              alt="highlight-4"
              className="object-cover group-hover:scale-[1.06] transition-all duration-700"
            />
          </div>

          {/* BOX 5 */}
          <div className="relative rounded-2xl overflow-hidden h-[330px] w-[365px] group shadow-[0_6px_22px_rgba(0,0,0,0.10)]">
            <Image
              src="/hi5.png"
              fill
              alt="highlight-5"
              className="object-cover group-hover:scale-[1.06] transition-all duration-700"
            />
            <div className="absolute inset-0 bg-black/25" />
            <div className="absolute bottom-6 left-6 text-white space-y-3 drop-shadow-lg">
              <h3 className="text-xl font-semibold leading-snug">
                เรียนรู้แบบเถื่อนๆ ไปกับ สิงห์ วรรณสิงห์
              </h3>
              <a href="#" className="flex items-center gap-1 text-[#74CEE2] text-sm hover:opacity-70 transition">
                อ่านต่อ <span>↗</span>
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* ================= MOBILE ================= */}
      <div className="md:hidden w-full px-6">
        <div ref={ref} className="w-full overflow-x-auto scroll-smooth snap-x snap-mandatory flex no-scrollbar">
          {HIGHLIGHTS.map((h, i) => (
            <div
              key={h.id}
              className="snap-center w-full flex-shrink-0 rounded-2xl overflow-hidden shadow-[0_6px_18px_rgba(0,0,0,0.10)] bg-white h-[330px]"
            >
              {/* MOBILE TYPE MATCHING */}
              {i === 0 && (
                <div className="relative h-full">
                  <Image src={h.img} fill alt="" className="object-cover" />
                  <div className="absolute inset-0 bg-black/40" />
                  <div className="absolute bottom-6 left-6 text-white space-y-2 drop-shadow-lg w-[80%]">
                    <h3 className="text-[18px] font-semibold leading-[24px] whitespace-pre-line">
                      เพราะทุกครั้งที่คุณสูบ{"\n"}คือการทำร้ายตัวเองอย่างช้า ๆ
                    </h3>
                    <p className="text-[13px] opacity-90">ทุกคำสูบ คือก้าวถอยจากสุขภาพดี</p>
                    <a className="flex items-center gap-1 text-[#74CEE2] text-sm" href="#">
                      อ่านต่อ ↗
                    </a>
                  </div>
                </div>
              )}

              {i === 1 && (
                <div className="bg-white h-full flex items-center justify-between px-6">
                  <div>
                    <p className="text-gray-600 text-sm mb-1">The Knowledge</p>
                    <h3 className="text-4xl font-bold leading-snug">vol.36</h3>
                  </div>
                  <Image src="/hi2.png" width={140} height={200} alt="" className="rounded-xl shadow" />
                </div>
              )}

              {i === 2 && (
                <div className="bg-white relative h-full px-6 py-6 overflow-hidden">
                  <Image src="/hi3.png" width={120} height={120} alt="" className="absolute right-4 bottom-4 opacity-20" />
                  <p className="font-bold text-lg mb-2">OKMD</p>
                  <h3 className="text-[15px] text-[#1B1D20] leading-[22px] font-medium mb-2">
                    สำรวจธุรกิจและองค์กรทั่วโลก เสริมพลังด้าน<br />วัฒนธรรมด้วย AI
                  </h3>
                  <p className="text-sm text-[#7F8288] leading-5 line-clamp-2 w-[90%]">
                    sk Mona ใช้ AI ส่งเสริมการเข้าถึงวัฒนธรรม ศิลปะ และพิพิธภัณฑ์
                  </p>
                  <a className="flex items-center gap-1 text-[#16A7CB] text-sm mt-4" href="#">
                    อ่านต่อ ↗
                  </a>
                </div>
              )}

              {i === 3 && (
                <div className="relative h-full rounded-2xl overflow-hidden">
                  <Image src="/hi4.png" fill alt="" className="object-cover" />
                </div>
              )}

              {i === 4 && (
                <div className="relative h-full rounded-2xl overflow-hidden">
                  <Image src="/hi5.png" fill alt="" className="object-cover" />
                  <div className="absolute inset-0 bg-black/30" />
                  <div className="absolute bottom-6 left-6 text-white space-y-2 drop-shadow-lg w-[80%]">
                    <h3 className="text-lg font-semibold leading-snug">
                      เรียนรู้แบบเถื่อนๆ ไปกับ สิงห์ วรรณสิงห์
                    </h3>
                    <a className="flex items-center gap-1 text-[#74CEE2] text-sm" href="#">
                      อ่านต่อ ↗
                    </a>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* PAGINATION */}
        <div className="flex justify-center mt-6">
          {HIGHLIGHTS.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                if (!ref.current) return;
                setIndex(i);
                ref.current.scrollTo({ left: i * ref.current.clientWidth, behavior: "smooth" });
              }}
              className={`mx-1 rounded-full transition-all ${
                index === i ? "w-6 h-2 bg-[#16A7CB]" : "w-2 h-2 bg-[#C8E8EF]"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
