"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { createPortal } from "react-dom";

/* ====================================================== */
/*                        HEADER                           */
/* ====================================================== */
export default function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);

  /* Safe state load */
  useEffect(() => {
    try {
      const f = localStorage.getItem("font") || "md";
      const c = localStorage.getItem("contrast") || "normal";
      document.documentElement.setAttribute("data-font", f);
      document.documentElement.setAttribute("data-contrast", c);
    } catch {}
  }, []);

  /* Close mega menu when click outside */
  useEffect(() => {
    function handler(e: MouseEvent) {
      const target = e.target as HTMLElement;
      if (!target.closest("[data-menubar]") && !target.closest("[data-mega-panel]")) {
        setActive(null);
      }
    }
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  return (
    <>
      <header
        role="banner"
        className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur border-b border-[#ECECED]"
      >
        <div className="flex justify-center w-full">
          <div className="w-full max-w-[1440px] mx-auto px-6 lg:px-10">

            {/* ================= MAIN LAYOUT ================= */}
            <div className="relative flex items-center justify-between py-4">

              {/* LEFT LOGO */}
              <div className="flex">
                <a href="/" aria-label="OKMD Home">
                  <Image
                    src="/logo_okmd.png"
                    width={120}
                    height={50}
                    alt="OKMD Logo"
                    className="object-contain transition-transform hover:scale-[1.03]"
                    priority
                  />
                </a>
              </div>

              {/* ================= CENTER MENU ================= */}
              <div
                data-menubar
                className="
                  hidden lg:block
                  absolute left-1/2 -translate-x-1/2 
                  top-1/2 -translate-y-1/2
                  w-full max-w-fit
                  pointer-events-none select-none
                "
              >
                <nav role="navigation" aria-label="Primary" className="pointer-events-auto select-auto">
                  <ul className="flex gap-10 text-[16px] font-normal text-[#1B1D20] whitespace-nowrap min-w-fit">
                    <MenuItems active={active} setActive={setActive} />
                  </ul>
                </nav>
              </div>

              {/* RIGHT TOOLS */}
              <div className="flex justify-end pr-[4px]">
                <RightTools onOpenMenu={() => setOpen(true)} />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ================= MEGA MENU PANEL (PORTAL) ================= */}
      {typeof window !== "undefined" &&
        createPortal(
          <MegaMenu active={active} />,
          document.body
        )}

      {/* ================= MOBILE MENU ================= */}
      {open && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[60] bg-black/40 animate-fadeIn"
          onClick={() => setOpen(false)}
        >
          <div
            className="absolute w-full top-0 bg-white shadow-xl animate-slideDown p-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <div className="flex justify-end mb-6">
              <button aria-label="Close menu" onClick={() => setOpen(false)} className="p-2 active:scale-90 transition">
                <Image src="/close.png" alt="Close menu" width={26} height={26} />
              </button>
            </div>

            {/* Mobile Nav */}
            <nav aria-label="Mobile primary">
              <ul className="flex flex-col gap-6 text-[18px] font-medium text-[#1B1D20] animate-fadeUp">
                <MenuItems mobile active={active} setActive={setActive} />
              </ul>
            </nav>

            {/* Donate */}
            <button
              aria-label="Donate"
              className="mt-8 w-full bg-[#74CEE2] rounded-xl py-3 text-white text-[18px] font-semibold hover:bg-[#5FC4D8] active:scale-95 transition"
            >
              บริจาค
            </button>
          </div>
        </div>
      )}
    </>
  );
}

/* ====================================================== */
/*                      MEGA MENU PANEL                    */
/* ====================================================== */
function MegaMenu({ active }: { active: string | null }) {
  if (!active) return null;

  return (
    <div
      data-mega-panel
      role="region"
      aria-label={`${active} submenu`}
      className="
        fixed left-0 top-[72px] w-full 
        bg-white shadow-lg border-t border-gray-200 
        z-[49]
      "
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10 py-6">
        <h3 className="text-lg font-semibold mb-3 text-[#1B1D20]">{active}</h3>

        <div className="grid grid-cols-3 gap-4">
          <a className="py-2 px-3 rounded-lg hover:bg-gray-50 cursor-pointer">เมนูย่อย A1</a>
          <a className="py-2 px-3 rounded-lg hover:bg-gray-50 cursor-pointer">เมนูย่อย A2</a>
          <a className="py-2 px-3 rounded-lg hover:bg-gray-50 cursor-pointer">เมนูย่อย A3</a>
        </div>
      </div>
    </div>
  );
}


/* ====================================================== */
/*                      MENU ITEMS                         */
/* ====================================================== */
function MenuItems({
  mobile = false,
  active,
  setActive,
}: {
  mobile?: boolean;
  active: string | null;
  setActive: (s: string | null) => void;
}) {
  const items = [
    { label: "รู้จัก OKMD", dropdown: true },
    { label: "ตู้ความรู้", dropdown: true },
    { label: "ข่าวและกิจกรรม", dropdown: true },
    { label: "ปฏิทินกิจกรรม" },
    { label: "OKMD AI" },
    { label: "Knowledge Portal" },
    { label: "ติดต่อเรา" },
  ];

  return (
    <>
      {items.map((item) => (
        <MenuItem
          key={item.label}
          label={item.label}
          dropdown={item.dropdown}
          mobile={mobile}
          active={active}
          setActive={setActive}
        />
      ))}
    </>
  );
}

function MenuItem({
  label,
  dropdown,
  mobile,
  active,
  setActive,
}: {
  label: string;
  dropdown?: boolean;
  mobile?: boolean;
  active: string | null;
  setActive: (s: string | null) => void;
}) {
  const isOpen = active === label;

  return (
    <li className="list-none relative">
      <button
        aria-haspopup={dropdown ? "true" : undefined}
        aria-expanded={dropdown ? (isOpen ? "true" : "false") : undefined}
        onClick={() => dropdown && setActive(isOpen ? null : label)}
        className={`group cursor-pointer flex items-center gap-1 ${mobile ? "text-[20px]" : ""}`}
      >
        <span className="relative pb-1">
          {label}
          {!mobile && (
            <span className="absolute left-0 -bottom-[2px] w-0 h-[2px] bg-[#1B9DBC] group-hover:w-full transition-all duration-300"></span>
          )}
        </span>

        {dropdown && (
          <Image
            src="/dropdown.png"
            width={14}
            height={14}
            alt={`เปิดเมนูย่อย ${label}`}
            className={`transition ${isOpen ? "rotate-180" : "group-hover:rotate-180"}`}
          />
        )}
      </button>
    </li>
  );
}

/* ====================================================== */
/*                      RIGHT TOOLS                        */
/* ====================================================== */
function RightTools({ onOpenMenu }: { onOpenMenu: () => void }) {
  const applyFont = (size: "sm" | "md" | "lg") => {
    document.documentElement.setAttribute("data-font", size);
    localStorage.setItem("font", size);
  };

  const applyContrast = (mode: "normal" | "dark" | "high") => {
    document.documentElement.setAttribute("data-contrast", mode);
    localStorage.setItem("contrast", mode);
  };

  return (
    <div role="group" aria-label="เครื่องมือผู้ใช้" className="flex items-center gap-4">

      {/* DESKTOP TOOLS */}
      <div className="hidden lg:flex flex-col items-end gap-2">

        {/* FONT + CONTRAST */}
        <div className="flex items-center gap-4">

          {/* FONT */}
          <div className="flex items-center gap-2">
            {["sm", "md", "lg"].map((s) => (
              <button
                key={s}
                aria-label={`Font size ${s}`}
                onClick={() => applyFont(s as any)}
                className="w-6 h-6 bg-[#F1FAFC] rounded-md flex justify-center cursor-pointer items-center font-kanit hover:bg-[#E2F6FA] active:scale-90 transition text-[12px] [&:nth-child(2)]:text-[16px] [&:nth-child(3)]:text-[20px]"
              >
                ก
              </button>
            ))}
          </div>

          {/* CONTRAST */}
          <div className="flex items-center gap-2">
            <button aria-label="Normal contrast" onClick={() => applyContrast("normal")} className="w-6 h-6 rounded-md bg-[#F1FAFC] cursor-pointer hover:ring-2 hover:ring-[#1E1E1E]/40 active:scale-90 font-bold text-[#1E1E1E] transition">C</button>
            <button aria-label="Dark contrast" onClick={() => applyContrast("dark")} className="w-6 h-6 rounded-md bg-[#1E1E1E] cursor-pointer text-white hover:ring-2 hover:ring-[#1E1E1E]/60 active:scale-90 font-bold transition">C</button>
            <button aria-label="High contrast" onClick={() => applyContrast("high")} className="w-6 h-6 rounded-md bg-[#1E1E1E] cursor-pointer text-[#FFD13F] hover:ring-2 hover:ring-[#FFD13F]/50 active:scale-90 font-bold transition">C</button>
          </div>
        </div>

        {/* DONATE */}
        <button aria-label="Donate" className="bg-[#74CEE2] cursor-pointer text-white rounded-xl w-[100px] h-10 text-[16px] font-medium hover:bg-[#5FC4D8] active:scale-95 transition flex justify-center items-center shadow-sm">
          บริจาค
        </button>
      </div>

      {/* MOBILE MENU BUTTON */}
      <button aria-label="Open mobile menu" className="lg:hidden p-2 active:scale-90 transition" onClick={onOpenMenu}>
        <Image src="/menu.png" alt="เปิดเมนู" width={38} height={38} />
      </button>
    </div>
  );
}
