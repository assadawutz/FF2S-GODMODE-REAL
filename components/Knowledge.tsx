"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";

/* -------------------------------------------- */
/* MOBILE DATA (ใช้ชุดเดิมของ Arty ไม่แตะ)     */
/* -------------------------------------------- */
const SLIDES_MOBILE = [
  {
    id: 1,
    title: "The Knowledge vol.40",
    desc: `นิตยสาร OKMD | เพิ่มพูนความรู้ | สร้างสรรค์ภูมิปัญญา\nฉบับที่ 40 | กันยายน – ตุลาคม 2568\nสำนักงานบริหารและพัฒนาองค์ความรู้ (องค์การมหาชน)`,
    img: "/screenshot-2568-09-27-at-22.06.11-1.jpeg",
  },
  {
    id: 2,
    title: "The Knowledge vol.39",
    desc: `ฉบับที่ 39 | กรกฎาคม – สิงหาคม 2568\nสำนักงานบริหารและพัฒนาองค์ความรู้`,
    img: "/screenshot-2568-09-27-at-22.06.11-1.jpeg",
  },
  {
    id: 3,
    title: "The Knowledge vol.38",
    desc: `ฉบับที่ 38 | พฤษภาคม – มิถุนายน 2568\nสำนักงานบริหารและพัฒนาองค์ความรู้`,
    img: "/screenshot-2568-09-27-at-22.06.11-1.jpeg",
  },
];

/* -------------------------------------------- */
/* PC MENU DATA (MOCKUP อ้างอิงจาก Figma)      */
/* -------------------------------------------- */
const PC_MENUS = [
  {
    id: 0,
    menu: "OKMD กระตุกต่อมคิด นิตยสารเพื่อพัฒนาความคิด",
    title: "The Knowledge vol.40",
    desc: `นิตยสาร OKMD | เพิ่มพูนความรู้ | สร้างสรรค์ภูมิปัญญา\nฉบับที่ 40 | กันยายน – ตุลาคม 2568\nสำนักงานบริหารและพัฒนาองค์ความรู้ (องค์การมหาชน)`,
    img: "/screenshot-2568-09-27-at-22.06.11-1.jpeg",
    pdf: "27,935.23 KB",
  },
  {
    id: 1,
    menu: "OKMD แนะนำหนังสือดี",
    title: "OKMD แนะนำหนังสือดี – รวมเล่มพิเศษ",
    desc: `รวมหนังสือดีน่าอ่านแห่งปีจากสำนักองค์ความรู้\nออกประจำปี 2568\nพบกับหนังสือ 30 รายการที่คัดมาให้แล้ว`,
    img: "/screenshot-2568-09-27-at-22.06.11-1.jpeg",
    pdf: "8,524.11 KB",
  },
  {
    id: 2,
    menu: "OKMD Infographic",
    title: "Infographic – Creative Knowledge",
    desc: `อินโฟกราฟิกชุดพิเศษเชิงความรู้\nออกแบบเพื่อให้เยาวชนสามารถเข้าใจง่าย\nเผยแพร่โดยสำนักการเรียนรู้`,
    img: "/screenshot-2568-09-27-at-22.06.11-1.jpeg",
    pdf: "3,823.90 KB",
  },
  {
    id: 3,
    menu: "OKMD บทความวิจัย",
    title: "งานวิจัย OKMD ปี 2568",
    desc: `สรุปองค์ความรู้จากงานวิจัยล่าสุดของ OKMD\nตีพิมพ์ในปี 2568 ครอบคลุม 6 หัวข้อสำคัญ`,
    img: "/screenshot-2568-09-27-at-22.06.11-1.jpeg",
    pdf: "12,993.54 KB",
  },
  {
    id: 4,
    menu: "OKMD Recommended",
    title: "OKMD Recommended – คัดพิเศษ",
    desc: `สื่อการเรียนรู้ที่ OKMD แนะนำเป็นพิเศษ\nเหมาะสำหรับครอบครัวและการศึกษาในยุคใหม่`,
    img: "/screenshot-2568-09-27-at-22.06.11-1.jpeg",
    pdf: "9,244.88 KB",
  },
];

export default function KnowledgeShelfSection() {
  /* MOBILE index */
  const [mobileIndex, setMobileIndex] = useState(0);
  const mobileRef = useRef<HTMLDivElement | null>(null);

  /* PC index (เมนูที่เลือก) */
  const [pcIndex, setPCIndex] = useState(0);

  /* -------------------------------------------- */
  /* MOBILE AUTO SLIDE                            */
  /* -------------------------------------------- */
  useEffect(() => {
    const timer = setInterval(() => {
      const next = (mobileIndex + 1) % SLIDES_MOBILE.length;
      setMobileIndex(next);

      if (mobileRef.current) {
        mobileRef.current.scrollTo({
          left: next * mobileRef.current.clientWidth,
          behavior: "smooth",
        });
      }
    }, 4000);

    return () => clearInterval(timer);
  }, [mobileIndex]);

  return (
    <section className="w-full bg-[#D4F0F6]">

      {/* ===================================================================== */}
      {/* MOBILE SECTION (Auto Slide ถูกต้องแล้ว ไม่แตะโค้ดเดิม)            */}
      {/* ===================================================================== */}
      <div className="md:hidden w-full flex flex-col items-center pt-10 pb-14">
        <div
          ref={mobileRef}
          className="w-full overflow-x-auto snap-x snap-mandatory flex no-scrollbar"
        >
          
          {SLIDES_MOBILE.map((item, i) => (
            <div
              key={item.id}
              className="snap-center shrink-0 w-full flex justify-center"
            >
              <div className="w-[343px] bg-[#D4F0F6] rounded-xl pt-[36px] pb-[40px]">

                <h2 className="text-4xl font-bold text-center text-[#1B1D20]">
                  knowledge Box
                </h2>

                <p className="text-lg text-[#16A7CB] leading-[28px] text-center mt-2">
                  ตู้ความรู้ | สร้างสรรค์ภูมิปัญญา
                </p>

                <p className="text-sm text-[#1B1D20] text-center font-normal mt-[10px] leading-[20px]">
                  OKMD กระตุกต่อมคิด นิตยสารเพื่อพัฒนาความคิด
                </p>

                <div className="w-[325px] h-[1px] border border-[#1B1D20] mx-auto mt-[10px]" />

                <div className="w-full flex justify-center mt-[28px]">
                  <div className="relative w-[250px] h-[350px] rounded-xl overflow-hidden shadow-md">
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                <p className="text-lg font-medium text-[#1B1D20] text-center mt-[32px] leading-[32px]">
                  {item.title}
                </p>

                <div className="flex justify-center gap-[8px] mt-[10px]">
                  {SLIDES_MOBILE.map((s, dot) => (
                    <div
                      key={dot}
                      className={`w-[21px] h-[5px] rounded-full transition-all ${
                        mobileIndex === dot ? "bg-[#74CEE2]" : "bg-[#C4C5C8]"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

     {/* ===================================================================== */}
{/* PC SECTION (Full 12-col grid align Figma) */}
{/* ===================================================================== */}
<div className="hidden md:block w-full py-[60px]">
  <div className="max-w-[1440px] mx-auto grid grid-cols-12 gap-6">

    {/* -------------------------- */}
    {/* LEFT = col-span-4         */}
    {/* -------------------------- */}
    <div className="col-span-4 flex flex-col gap-[32px]">

      <div className="flex flex-col gap-[8px]">
        <h2 className="text-[48px] font-bold leading-[60px] text-[#1B1D20]">
          Knowledge Box
        </h2>
        <p className="text-[18px] leading-[28px] text-[#16A7CB]">
          ตู้ความรู้ | สร้างสรรค์ภูมิปัญญา
        </p>
      </div>

      {/* MENU LIST PC */}
      <div className="flex flex-col gap-[2px]">
        {PC_MENUS.map((item) => (
          <div
            key={item.id}
            onClick={() => setPCIndex(item.id)}
            className={`
              cursor-pointer flex items-center justify-between 
              py-[10px] pb-[16px] border-b
              ${
                pcIndex === item.id
                  ? "border-[#1B1D20]"
                  : "border-[#7F8288]"
              }
            `}
          >
            <p
              className={
                pcIndex === item.id
                  ? "text-[#1B1D20] font-semibold text-[14px]"
                  : "text-[#7F8288] text-[14px]"
              }
            >
              {item.menu}
            </p>
            <span
              className={
                pcIndex === item.id ? "text-black" : "text-[#A7A9AD]"
              }
            >
              →
            </span>
          </div>
        ))}
      </div>
    </div>

    {/* -------------------------- */}
    {/* CENTER IMAGE = col-span-4 */}
    {/* -------------------------- */}
    <div className="col-span-4 flex justify-center">
      <div className="w-[339px] h-[475px] rounded-2xl overflow-hidden shadow-xl">
        <Image
          src={PC_MENUS[pcIndex].img}
          alt={PC_MENUS[pcIndex].title}
          width={339}
          height={475}
          className="object-cover w-full h-full"
        />
      </div>
    </div>

    {/* -------------------------- */}
    {/* RIGHT = col-span-4        */}
    {/* -------------------------- */}
    <div className="col-span-4 flex flex-col gap-[72px]">

      {/* ดูทั้งหมด */}
      <div className="flex items-center gap-[8px]">
        <div className="flex-1 border-b border-black"></div>
        <div className="flex items-center gap-[4px] cursor-pointer">
          <span className="text-[#74CEE2]">↗</span>
          <p className="text-[#1B1D20] text-[14px]">ดูทั้งหมด</p>
        </div>
      </div>

      {/* TITLE + DESCRIPTION */}
      <div className="flex flex-col gap-[16px]">
        <h3 className="text-[24px] font-bold leading-[32px] text-[#1B1D20]">
          {PC_MENUS[pcIndex].title}
        </h3>

        <p className="text-[14px] leading-[20px] text-[#7F8288] whitespace-pre-line">
          {PC_MENUS[pcIndex].desc}
        </p>
      </div>

      {/* Download */}
      <div className="flex items-center gap-[8px] cursor-pointer">
        <span className="text-[#16A7CB]">⬇</span>
        <p className="text-[14px] leading-[20px] text-[#16A7CB]">
          ดาวน์โหลดเอกสาร pdf ขนาด {PC_MENUS[pcIndex].pdf}
        </p>
      </div>
    </div>

  </div>
</div>

    </section>
  );
}
