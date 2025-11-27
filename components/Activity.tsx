"use client";

import Image from "next/image";

const A = [
  { id: 1, img: "/act1.png" },
  { id: 2, img: "/act2.png" },
  { id: 3, img: "/act3.png" },
  { id: 4, img: "/act4.png" },
  { id: 5, img: "/act5.png" }
];

const CAL = {
  day: "MONDAY",
  month: "September",
  date: 20,
  week: ["S", "M", "T", "W", "T", "F", "S"],
  grid: [
    26, 27, 28, 29, 30, 31, 1,
    2, 3, 4, 5, 6, 7, 8,
    9, 10, 11, 12, 13, 14, 15,
    16, 17, 18, 19, 20, 21, 22,
    23, 24, 25, 26, 27, 28, 29,
    30, 31, 1, 2, 3, 4, 5,
  ]
};

/* ฟังก์ชันแก้ dateTime ให้ถูกต้อง YYYY-MM-DD */
function formatDate(day: number) {
  const padded = String(day).padStart(2, "0");
  return `2024-09-${padded}`;
}

export default function ActivityBlock() {
  return (
    <section aria-label="Activity Block" className="w-full bg-white py-20">

      {/* ================= DESKTOP ================= */}
      <div className="hidden md:flex flex-col gap-12 max-w-[1440px] mx-auto px-4 lg:px-8">

        {/* ---------------- ROW 1 ---------------- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full">

          {A.slice(0, 3).map((item) => (
            <article
              key={item.id}
              aria-label={`Activity ${item.id}`}
              className="relative h-[250px] md:h-[255px] rounded-2xl overflow-hidden group cursor-pointer"
            >
              <button className="absolute inset-0 w-full h-full cursor-pointer" aria-label={`Open Activity ${item.id}`}>
                <Image
                  src={item.img}
                  alt={`Activity image ${item.id}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-all duration-500 group-hover:scale-105"
                />
                <Image
                  src="/okmd_ai_logo.png"
                  alt="OKMD Logo"
                  width={34}
                  height={34}
                  className="absolute top-3 right-3 z-20 opacity-90 group-hover:opacity-100 transition pointer-events-none"
                />
              </button>
            </article>
          ))}
        </div>

        {/* ---------------- ROW 2 ---------------- */}
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-6">

          {/* CARD 4 */}
          <article
            aria-label="Activity 4"
            className="col-span-3 relative h-[260px] md:h-[312px] rounded-2xl overflow-hidden group cursor-pointer"
          >
            <button className="absolute inset-0 w-full h-full cursor-pointer" aria-label="Open Activity 4">
              <Image
                src={A[3].img}
                alt="Activity image 4"
                fill
                sizes="(max-width: 768px) 100vw, 25vw"
                className="object-cover transition-all duration-500 group-hover:scale-105"
              />
              <Image
                src="/okmd_ai_logo.png"
                alt="OKMD Logo"
                width={34}
                height={34}
                className="absolute top-3 right-3 z-20 opacity-90 group-hover:opacity-100 transition pointer-events-none"
              />
            </button>
          </article>

          {/* CARD 5 — object-contain */}
          <article
            aria-label="Activity 5"
            className="col-span-3 relative h-[260px] md:h-[312px] bg-white rounded-2xl overflow-hidden group cursor-pointer flex items-center justify-center p-4"
          >
            <button className="absolute inset-0 w-full h-full cursor-pointer" aria-label="Open Activity 5">
              <Image
                src={A[4].img}
                alt="Activity image 5"
                fill
                sizes="(max-width: 768px) 100vw, 25vw"
                className="object-contain transition-all duration-500 group-hover:scale-105"
              />
              <Image
                src="/okmd_ai_logo.png"
                alt="OKMD Logo"
                width={34}
                height={34}
                className="absolute top-3 right-8 z-20 opacity-90 group-hover:opacity-100 transition pointer-events-none"
              />
            </button>
          </article>

          {/* CALENDAR */}
          <article
            aria-label="Activity Calendar"
            className="col-span-6 bg-[#26282B] rounded-2xl p-6 flex flex-row gap-6 sm:gap-8 min-h-[312px]"
          >
            {/* LEFT */}
            <div className="flex flex-col items-start justify-start w-[120px] gap-3 pt-1">
              <p className="text-xs text-[#6ABBCE] tracking-wide">{CAL.day}</p>

              <div className="flex flex-col leading-none">
                <p className="text-5xl font-bold text-white leading-none">{CAL.date}</p>
                <p className="text-gray-400 mt-1 leading-tight">{CAL.month}</p>
              </div>
            </div>

            {/* RIGHT CALENDAR */}
            <div className="grid grid-cols-7 gap-[4px] sm:gap-[6px] text-center flex-1">

              {CAL.week.map((w, idx) => (
                <span key={`w-${idx}`} className="text-gray-400 text-[11px] font-semibold py-1">
                  {w}
                </span>
              ))}

              {CAL.grid.map((n, idx) => {
                const active = n === CAL.date;
                return (
                  <time
                    key={`d-${idx}`}
                    dateTime={formatDate(n)}
                    className={
                      active
                        ? "bg-[#16A7CB] text-white font-semibold rounded-md py-[6px] flex items-center justify-center"
                        : "text-gray-300 rounded-md py-[6px] hover:bg-[#3A3D41] hover:text-white transition"
                    }
                  >
                    {n}
                  </time>
                );
              })}
            </div>
          </article>

        </div>
      </div>

      {/* ================= MOBILE ================= */}
      <div className="md:hidden flex flex-col gap-10 px-4">

        <article
          aria-label="Activity mobile"
          className="relative h-[312px] rounded-2xl overflow-hidden cursor-pointer"
        >
          <button className="absolute inset-0 w-full h-full">
            <Image
              src={A[0].img}
              alt="Activity mobile image"
              fill
              sizes="100vw"
              className="object-cover"
            />
            <Image
              src="/okmd_ai_logo.png"
              width={28}
              height={28}
              alt="OKMD Logo"
              className="absolute top-3 right-3 z-20 opacity-90 pointer-events-none"
            />
          </button>
        </article>

        {/* MOBILE CALENDAR */}
        <article aria-label="Calendar mobile" className="bg-[#26282B] h-[312px] rounded-2xl p-5 flex flex-row gap-5">

          <div className="flex flex-col items-start w-[70px]">
            <p className="text-xs text-[#6ABBCE]">{CAL.day}</p>
            <p className="text-3xl font-bold text-white mt-1 leading-none">{CAL.date}</p>
            <p className="text-gray-400">{CAL.month}</p>
          </div>

          <div className="grid grid-cols-7 gap-[3px] text-center flex-1 text-[9px]">

            {CAL.week.map((w, idx) => (
              <span key={`mw-${idx}`} className="text-gray-400 font-medium py-[2px]">
                {w}
              </span>
            ))}

            {CAL.grid.map((n, idx) => (
              <time
                key={`md-${idx}`}
                dateTime={formatDate(n)}
                className={
                  n === CAL.date
                    ? "bg-[#16A7CB] text-white rounded-md py-[3px]"
                    : "text-gray-300 rounded-md py-[3px]"
                }
              >
                {n}
              </time>
            ))}
          </div>

        </article>

      </div>
    </section>
  );
}
