// "use client";

// import Header from "@/components/Header";
// import Hero from "@/components/HeroAI";
// import SearchStrip from "@/components/Shelf";
// import Highlight from "@/components/Highlight";
// import Recommended from "@/components/Recommended";
// import Shelf from "@/components/Shelf";
// import Activity from "@/components/Activity";
// import News from "@/components/News";
// import Footer from "@/components/Footer";
// // import "@/app/styles/okmd.css";

// export default function Page() {
//   return (
//     <>
//       <Header />
//       <Hero />
//       <SearchStrip />
//       <Highlight />
//       <Recommended />
//       <Shelf />
//       <Activity />
//       <News />
//       <Footer />
//     </>
//   );
// }





"use client";

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function OKMDHomePerfect() {
  return (
    <>
      <Head>
        <title>OKMD Portal</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Prompt ไทยสำหรับสเกลตัวอักษรที่ตรงภาพต้นแบบ */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Prompt:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main className="okmd">
        {/* ───────────────────── ACCESS BAR ───────────────────── */}
        <div className="bar">
          <div className="container bar-row">
            <div className="kio">
              <div className="a">KNOWLEDGE IS</div>
              <div className="b">OPPORTUNITY</div>
            </div>

            <div className="acc">
              <div className="grp">
                <span className="label">ขนาดตัวอักษร</span>
                <div className="chips" role="group" aria-label="Font size">
                  <button className="chip">ก</button>
                  <button className="chip mid">ก</button>
                  <button className="chip bold">ก</button>
                </div>
              </div>
              <div className="grp">
                <span className="label">ความตัดกันของสี</span>
                <div className="swatches" role="group" aria-label="Contrast">
                  <span className="sw w" />
                  <span className="sw g" />
                  <span className="sw d" />
                  <span className="sw k" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ───────────────────── NAV / BRAND ──────────────────── */}
        <header className="header">
          <div className="container brand-row">
            <div />
            <div className="brand">okmd</div>
            <div className="auth">
              <button className="btn ghost" aria-label="เลือกภาษา">🇹🇭 ▾</button>
              <button className="btn outline">เข้าสู่ระบบ</button>
              <button className="btn sky">ลงทะเบียน</button>
            </div>
          </div>

          <nav className="container nav">
            <Link href="#" className="navlink">รู้จัก OKMD ▾</Link>
            <Link href="#" className="navlink">Shelf</Link>
            <Link href="#" className="navlink">ข่าวและกิจกรรม ▾</Link>
            <Link href="#" className="navlink">ปฏิทินกิจกรรม</Link>
            <Link href="#" className="navlink">AI</Link>
            <Link href="#" className="navlink">Knowledge Portal</Link>
            <Link href="#" className="navlink">ติดต่อเรา</Link>
          </nav>
        </header>

        {/* ───────────────────── HERO ─────────────────────────── */}
        <section className="hero">
          <div className="container hero-grid">
            <div className="l">
              <div className="mini">
                <Image
                  unoptimized
                  src="https://upload.wikimedia.org/wikipedia/commons/3/3f/OOjs_UI_icon_article-ltr.svg"
                  alt="OKMD mini"
                  width={44}
                  height={44}
                />
                <span>OKMD</span>
              </div>
              <h1 className="h1">
                AI-Driven <span className="accent">intelligence:</span>
              </h1>
              <p className="lead">Search, summarize, and Recommend in an instant.</p>
              <button className="btn sky lg">ดูรายละเอียด</button>
            </div>

            <div className="r">
              <Image
                unoptimized
                src="https://images.unsplash.com/photo-1581091012184-5c72c3d32c97?auto=format&fit=crop&w=1600&q=80"
                alt="AI robot hand"
                width={920}
                height={540}
                className="heroimg"
              />
            </div>
          </div>

          <div className="pager" aria-hidden>
            <span className="pg on" />
            <span className="pg" />
            <span className="pg" />
          </div>
        </section>

        {/* ───────────────────── SEARCH STRIP ─────────────────── */}
        <section className="search">
          <div className="container">
            <p className="kio-wide">K N O W L E D G E &nbsp; I S &nbsp; O P P O R T U N I T Y</p>
            <div className="dots">
              <span className="bar6" />
              <span className="dot" />
              <span className="dot" />
            </div>

            <h2 className="h2">
              รวมไอเดียเด็ด แรงบันดาลใจเจ๋ง ๆ และความรู้นอกตำรา <span className="sky">OKMD</span>
            </h2>
            <p className="subhead">โลกของคนชอบคิดต่าง</p>

            <div className="searchcard">
              <div className="inner">
                <p className="cardlead">
                  เรามอบประสบการณ์การค้นหาอย่างแม่นยำด้วย ที่ช่วยให้คุณได้คำตอบตรงใจ รวดเร็ว
                </p>
                <div className="inputwrap">
                  <input placeholder="พิมพ์เป้าหมายของคุณที่นี่" />
                  <button aria-label="ค้นหา">🔎</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ───────────────────── HIGHLIGHT ────────────────────── */}
        <section className="highlight">
          <div className="container">
            <div className="sec-head">
              <h3 className="h3">Highlight</h3>
              <p className="sub sky">ทุกจุดเด่น ถูกยกมาไว้ตรงนี้</p>
            </div>

            <div className="grid-3">
              <article className="card dark">
                <Image
                  unoptimized
                  src="https://images.unsplash.com/photo-1518779578993-ec3579fee39f?auto=format&fit=crop&w=1400&q=80"
                  alt="Let's play"
                  fill
                  sizes="(max-width: 900px) 100vw, 33vw"
                  className="bg"
                />
                <div className="cardpad bottom">
                  <h4 className="t18">มันส์สมอง | Let’s play with knowledge</h4>
                  <Link href="#" className="link sky">อ่านต่อ ↗</Link>
                </div>
              </article>

              <article className="card white datecard">
                <div className="datecol">
                  <div className="muted">The Knowledge vol.36</div>
                  <div className="dxxl">30</div>
                  <div className="muted">กันยายน 2568</div>
                </div>
                <Image
                  unoptimized
                  src="https://images.unsplash.com/photo-1541963463532-d68292c34b19?auto=format&fit=crop&w=420&q=80"
                  alt="mag cover"
                  width={190}
                  height={250}
                  className="mag"
                />
              </article>

              <article className="card white textillus">
                <div className="text">
                  <h4 className="t18">เปิดสมองไปกับวิธีการเรียนรู้ในโลกใหม่ โดย Dr. Pasi Sahlberg</h4>
                  <p className="muted">
                    New Learning Skills in the Dynamic World ผู้เชี่ยวชาญระดับโลกแบ่งปันแนวทางการศึกษาอนาคต
                  </p>
                  <Link href="#" className="link sky">อ่านต่อ ↗</Link>
                </div>
                <Image
                  unoptimized
                  src="https://images.unsplash.com/photo-1559757175-08c6d5d2c247?auto=format&fit=crop&w=200&q=60"
                  alt="brain"
                  width={120}
                  height={120}
                  className="illus"
                />
              </article>
            </div>
          </div>
        </section>

        {/* ───────────────────── RECOMMENDED ──────────────────── */}
        <section className="reco">
          <div className="container">
            <div className="sec-head white">
              <h3 className="h3">Recommended</h3>
              <p className="sub">เราไม่ได้แค่แนะนำ แต่เรากำหนดนิยามใหม่ให้กับทางเลือก</p>
            </div>

            <div className="grid-2">
              <article className="card white phcard">
                <div className="ph">
                  <Image
                    unoptimized
                    src="https://images.unsplash.com/photo-1581090464777-98950c71f4c7?auto=format&fit=crop&w=1600&q=80"
                    alt="unleash"
                    fill
                    sizes="(max-width: 900px) 100vw, 50vw"
                    className="bg"
                  />
                </div>
                <div className="cardpad">
                  <h4 className="t28">
                    Unleash <span className="sky">Your Potential</span>
                  </h4>
                </div>
              </article>

              <article className="card darkimg phcard">
                <div className="ph">
                  <Image
                    unoptimized
                    src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1600&q=80"
                    alt="portal"
                    fill
                    sizes="(max-width: 900px) 100vw, 50vw"
                    className="bg"
                  />
                  <div className="overlay" />
                  <div className="cardpad bottom">
                    <h4 className="t28 white">Unlock knowledge anywhere you are</h4>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* ───────────────────── SHELF ────────────────────────── */}
        <section className="shelf">
          <div className="container grid-3 shelfgrid">
            <div className="intro">
              <h3 className="h1-48">OKMD Shelf</h3>
              <p className="sub sky">เพิ่มความรู้ | สร้างสรรค์ภูมิปัญญา</p>

              <div className="list">
                <div className="row first">OKMD กระตุกต่อมคิด นิตยสารเพื่อพัฒนาความคิด →</div>
                <div className="row">OKMD แนะนำหนังสือดี</div>
                <div className="row">OKMD Infographic</div>
                <div className="row">OKMD บทความวิจัย</div>
              </div>
            </div>

            <div className="mid">
              <div className="cover">
                <Image
                  unoptimized
                  src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=640&q=80"
                  alt="mag-large"
                  width={360}
                  height={520}
                  className="coverimg"
                />
                <div className="dots2">
                  <span className="d long" />
                  <span className="d" />
                  <span className="d" />
                  <span className="d" />
                </div>
              </div>
            </div>

            <div className="desc">
              <h4 className="t28">The Knowledge vol.40</h4>
              <p className="muted">
                นิตยสาร OKMD | เพิ่มพูนความรู้ | สร้างสรรค์ภูมิปัญญา ฉบับที่ 40 | กันยายน – ตุลาคม 2568
              </p>
              <Link href="#" className="link sky">⬇ ดาวน์โหลดเอกสาร pdf ขนาด 27,935.23 KB</Link>
            </div>
          </div>
        </section>

        {/* ───────────────────── ACTIVITY ─────────────────────── */}
        <section className="activity">
          <div className="container">
            <p className="sub sky center">ทุกกิจกรรมในเดือนของเมษายน สู่มวลชนที่แตกต่าง</p>

            <div className="thumbs">
              {[
                "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=1200&q=80",
                "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1200&q=80",
                "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
                "https://images.unsplash.com/photo-1520975922203-b91a9a0b73b5?auto=format&fit=crop&w=1200&q=80",
                "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=80",
              ].map((src, i) => (
                <Image key={i} unoptimized src={src} alt={`act-${i}`} width={360} height={200} className="thumb" />
              ))}
            </div>

            <div className="actgrid">
              <Image
                unoptimized
                src="https://images.unsplash.com/photo-1520975682031-1903f3d6745b?auto=format&fit=crop&w=1400&q=80"
                alt="calendar"
                width={900}
                height={320}
                className="calendar"
              />
              <div className="actlist">
                {[1, 2, 3, 4].map((n) => (
                  <div className="item" key={n}>
                    <p>กิจกรรมตัวอย่าง {n}</p>
                    <span>10:00–12:00</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="more"><Link href="#" className="link sky">ดูทั้งหมด ↗</Link></div>
          </div>
        </section>

        {/* ───────────────────── NEWS ─────────────────────────── */}
        <section className="news">
          <div className="container">
            <h3 className="h3">News</h3>
            <p className="muted">อัปเดตข่าว</p>

            <div className="grid-3">
              {[0, 1, 2].map((i) => (
                <article className="ncard" key={i}>
                  <Image
                    unoptimized
                    src={[
                      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=1200&q=80",
                      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=80",
                      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=1200&q=80",
                    ][i]}
                    alt={`news-${i}`}
                    width={1200}
                    height={700}
                    className="nimg"
                  />
                  <div className="npad">
                    <h4 className="t18">ข่าวกิจกรรมเด่น {i + 1} — โครงการพัฒนาความรู้สู่สังคมแห่งโอกาส</h4>
                    <p className="muted">สรุปประเด็นสำคัญและภาพรวมกิจกรรมที่เกิดขึ้นในสัปดาห์นี้</p>
                    <div className="row">
                      <span className="ts">29 ก.ย. 2568</span>
                      <Link href="#" className="link sky">อ่านต่อ ↗</Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="more right"><Link href="#" className="link sky">ดูทั้งหมด ↗</Link></div>
          </div>
        </section>

        {/* ───────────────────── FOOTER ───────────────────────── */}
        <footer className="footer">
          <div className="tech">
            <div className="container techrow">
              {[
                "https://upload.wikimedia.org/wikipedia/commons/4/44/Google-flutter-logo.svg",
                "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
                "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",
              ].map((src, i) => (
                <Image key={i} unoptimized src={src} alt={`logo-${i}`} width={48} height={48} />
              ))}
            </div>
          </div>

          <div className="cta">
            <div className="container ctagrid">
              <div>
                <div className="brand w">okmd</div>
                <h4 className="ctatitle">
                  Office of Knowledge
                  <br />Management and
                  <br />Development
                </h4>
                <p className="muted w">จัดทำโดย © 2016–2025 OKMD ประเทศไทย</p>
              </div>

              <div>
                <div className="subscribe">
                  <input placeholder="Enter your email" aria-label="Email" />
                  <button>→</button>
                </div>

                <div className="links">
                  <ul>
                    <li className="hd">เกี่ยวกับ OKMD</li>
                    <li>ข่าวและกิจกรรม</li>
                    <li>ติดตามเรา</li>
                    <li>ติดต่อ</li>
                  </ul>
                  <ul>
                    <li className="hd">OKMD Shelf</li>
                    <li>Infographic</li>
                    <li>งานวิจัย</li>
                    <li>บทความ</li>
                  </ul>
                  <ul>
                    <li className="hd">กฎหมาย</li>
                    <li>นโยบายความเป็นส่วนตัว</li>
                    <li>ข้อกำหนดการใช้งาน</li>
                    <li>คุกกี้</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="copy">
            <div className="container small w">
              สงวนลิขสิทธิ์ • พัฒนาเพื่อสาธิตโครงหน้าเว็บ • ภาพจาก Unsplash
            </div>
          </div>
        </footer>
      </main>

      {/* ───────────────────── TOKENS + BASE ────────────────── */}
      <style jsx global>{`
        :root{
          --container:1200px; --gutter:24px;
          --y:104px; --y-tight:96px; --gap:36px;
          --radius:16px; --shadow:0 6px 20px rgba(0,0,0,.08);
          --text:#0f172a; --dark:#0b1220; --sky:#38bdf8; --sky600:#0ea5e9;
          --muted:#6b7280; --border:#e5e7eb; --hero:#b7cee0; --card:#ffffff;
        }
        *,*:before,*:after{box-sizing:border-box}
        html,body{margin:0;padding:0}
        body{font-family:"Prompt",system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif;color:var(--text);background:#fff}
        a{color:inherit;text-decoration:none}
        .okmd{max-width:1440px;margin:0 auto}
        .container{max-width:var(--container);margin:0 auto;padding:0 var(--gutter)}
        /* type scale */
        .h1{font-size:72px;line-height:1.05;font-weight:800;letter-spacing:-0.015em;margin:8px 0 12px}
        .h1-48{font-size:48px;line-height:1.08;font-weight:800;margin:0}
        .h2{font-size:40px;line-height:1.15;font-weight:700;letter-spacing:-0.01em;margin:22px 0 6px;text-align:center}
        .h3{font-size:32px;line-height:1.25;font-weight:700;margin:0}
        .t28{font-size:28px;font-weight:800;margin:0}
        .t18{font-size:18px;font-weight:600;margin:0}
        .lead{font-size:22px;color:#2b2f35;margin:6px 0 24px}
        .subhead{font-size:24px;color:var(--sky600);text-align:center;margin:0}
        .muted{color:var(--muted)}
        .sky{color:var(--sky600)}
        .white{color:#fff}
        .small{font-size:12px}
        /* controls */
        .btn{height:44px;padding:0 16px;border-radius:12px;border:1px solid transparent;background:#fff;color:var(--text);cursor:pointer;transition:filter .15s,transform .06s}
        .btn:active{transform:translateY(1px)}
        .btn.lg{height:48px;border-radius:14px}
        .btn.sky{background:var(--sky);color:#fff;border-color:var(--sky)}
        .btn.outline{background:#fff;border-color:#93c5fd;color:var(--sky600)}
        .btn.ghost{background:#fff;color:#374151;border:0}
        .btn:hover{filter:brightness(1.04)}
        .link.sky:hover{text-decoration:underline;text-underline-offset:3px}
        /* focus */
        .btn:focus-visible,.navlink:focus-visible,.chip:focus-visible,input:focus-visible{outline:3px solid #94d9ff;outline-offset:2px;border-radius:12px}
      `}</style>

      {/* ───────────────────── PAGE CSS ─────────────────────── */}
      <style jsx>{`
        /* access bar */
        .bar{border-bottom:1px solid var(--border);background:#fff}
        .bar-row{height:64px;display:flex;align-items:center;justify-content:space-between}
        .kio .a{font-weight:700;font-size:20px;line-height:1.1}
        .kio .b{font-weight:700;font-size:20px;color:var(--sky600);line-height:1.1}
        .acc{display:flex;gap:28px;align-items:center}
        .grp{display:flex;gap:12px;align-items:center;font-size:14px;color:#374151}
        .chips{display:flex;gap:8px}
        .chip{min-width:34px;height:28px;border-radius:8px;border:1px solid #d1d5db;background:#fff}
        .chip.mid{font-weight:600}.chip.bold{font-weight:800}
        .swatches{display:flex;gap:8px}
        .sw{width:22px;height:22px;border-radius:4px;border:1px solid #d1d5db;display:inline-block}
        .sw.w{background:#fff}.sw.g{background:#e5e7eb;border-color:#e5e7eb}
        .sw.d{background:#0f172a;border-color:#0f172a}.sw.k{background:#000;border-color:#000}

        /* nav */
        .header{background:#fff;border-bottom:1px solid var(--border)}
        .brand-row{height:56px;display:grid;grid-template-columns:1fr auto 1fr;align-items:center}
        .brand{justify-self:center;color:var(--sky);font-size:44px;font-weight:700;line-height:1}
        .brand.w{color:#fff}
        .auth{justify-self:end;display:flex;gap:10px}
        .nav{height:56px;display:flex;align-items:center;justify-content:center;gap:28px}
        .navlink{font-size:18px;color:#0b1220}
        .navlink:hover{color:var(--sky600)}

        /* hero */
        .hero{background:var(--hero);padding:var(--y) 0 var(--y-tight)}
        .hero-grid{display:grid;gap:var(--gap);align-items:center;grid-template-columns:1fr}
        @media(min-width:992px){.hero-grid{grid-template-columns:55% 45%}}
        .mini{display:flex;align-items:center;gap:10px;color:#2e6e80;font-weight:700}
        .accent{color:#2b5d69}
        .heroimg{width:100%;height:auto;border-radius:14px;box-shadow:var(--shadow)}
        .pager{display:flex;justify-content:center;gap:8px;padding-top:16px}
        .pg{width:10px;height:6px;background:#d1d5db;border-radius:999px}
        .pg.on{width:64px;background:var(--sky)}

        /* search strip */
        .search{padding:var(--y) 0}
        .kio-wide{color:var(--sky600);letter-spacing:.9em;font-size:13px;text-align:center;margin:0}
        .dots{display:flex;justify-content:center;align-items:center;gap:8px;margin-top:12px}
        .bar6{width:72px;height:8px;border-radius:999px;background:rgba(56,189,248,.6)}
        .dot{width:8px;height:8px;border-radius:999px;background:rgba(56,189,248,.6)}
        .searchcard{max-width:980px;margin:18px auto 0;border-radius:18px;padding:2px;
          background:linear-gradient(90deg,#7dd3fc,#a5b4fc,#fb7185)}
        .inner{background:#fff;border-radius:16px;padding:32px 32px 28px}
        .cardlead{color:var(--sky600);font-size:15px;margin:0 0 12px}
        .inputwrap{position:relative}
        .inputwrap input{width:100%;border:0;border-bottom:1px solid #d1d5db;padding:16px 48px 16px 0;font-size:16px;outline:none}
        .inputwrap button{position:absolute;right:0;top:50%;transform:translateY(-50%);width:40px;height:40px;border:0;border-radius:999px;color:#fff;
          background:linear-gradient(90deg,var(--sky),#fb7185);cursor:pointer}

        /* highlight */
        .highlight{background:#d8f1fb;padding:var(--y) 0}
        .sec-head{text-align:center;margin-bottom:28px}
        .grid-3{display:grid;gap:24px;grid-template-columns:1fr}
        @media(min-width:992px){.grid-3{grid-template-columns:1fr 1fr 1fr}}
        .card{position:relative;border-radius:16px;overflow:hidden;background:var(--card);box-shadow:var(--shadow);height:280px}
        .cardpad{padding:24px}
        .cardpad.bottom{position:absolute;left:0;right:0;bottom:0}
        .card.dark{color:#fff;background:#000}
        .card .bg{object-fit:cover}
        .datecard{display:flex;justify-content:space-between;align-items:center;padding:24px}
        .dxxl{font-size:56px;font-weight:800;line-height:1}
        .mag{border-radius:12px}
        .textillus{padding:24px}
        .textillus .text{padding-right:96px}
        .illus{position:absolute;right:18px;bottom:16px;opacity:.3}

        /* reco */
        .reco{background:var(--dark);color:#fff;padding:var(--y) 0}
        .phcard .ph{position:relative;height:400px}
        .overlay{position:absolute;inset:0;background:rgba(0,0,0,.28)}

        /* shelf */
        .shelf{padding:var(--y) 0}
        .shelfgrid .intro .list{margin-top:18px;border-top:1px solid var(--border)}
        .row{padding:14px 0;border-top:1px solid var(--border)}
        .row.first{border-top:0;padding-top:10px}
        .cover{max-width:360px;margin:0 auto}
        .coverimg{width:100%;height:auto;border-radius:14px;box-shadow:var(--shadow)}
        .dots2{display:flex;justify-content:center;gap:6px;margin-top:12px}
        .d{width:8px;height:6px;background:#e5e7eb;border-radius:999px}
        .d.long{width:48px;background:var(--sky)}
        .desc .muted{margin:6px 0 10px}

        /* activity */
        .activity{background:#e9f7fd;padding:var(--y) 0}
        .thumbs{display:grid;gap:18px;grid-template-columns:1fr}
        @media(min-width:992px){.thumbs{grid-template-columns:repeat(5,1fr)}}
        .thumb{width:100%;height:140px;object-fit:cover;border-radius:14px}
        .actgrid{display:grid;gap:24px;grid-template-columns:1fr}
        @media(min-width:992px){.actgrid{grid-template-columns:3fr 2fr}}
        .calendar{width:100%;height:280px;object-fit:cover;border-radius:14px;background:#000}
        .actlist{display:grid;gap:12px}
        .item{display:flex;align-items:center;justify-content:space-between;padding:14px 16px;background:#fff;border-radius:14px;box-shadow:0 2px 10px rgba(0,0,0,.06)}
        .more{margin-top:14px}
        .right{text-align:right}

        /* news */
        .news{padding:var(--y) 0}
        .ncard{border-radius:16px;overflow:hidden;background:#fff;border:1px solid #eef2f7;box-shadow:0 2px 8px rgba(0,0,0,.04)}
        .nimg{width:100%;height:200px;object-fit:cover;display:block}
        .npad{padding:16px}
        .npad .row{display:flex;align-items:center;justify-content:space-between;margin-top:6px}
        .ts{color:#9ca3af}

        /* footer */
        .footer .tech{background:var(--dark);padding:18px 0}
        .techrow{display:flex;align-items:center;justify-content:center;gap:48px;opacity:.85}
        .cta{background:linear-gradient(135deg,#0369a1,#0ea5e9);color:#fff}
        .ctagrid{display:grid;grid-template-columns:1fr;gap:28px;padding:56px 0}
        @media(min-width:992px){.ctagrid{grid-template-columns:1fr 1fr}}
        .ctatitle{font-size:34px;font-weight:800;line-height:1.14;margin:16px 0 12px}
        .subscribe{display:flex;justify-content:flex-end;gap:8px}
        .subscribe input{height:44px;width:260px;border-radius:10px;border:0;padding:0 12px;font-size:15px;color:var(--text)}
        .subscribe button{height:44px;padding:0 14px;border-radius:10px;border:0;background:#fff;color:var(--text);cursor:pointer}
        .links{display:grid;grid-template-columns:1fr 1fr;gap:18px;margin-top:18px}
        @media(min-width:992px){.links{grid-template-columns:1fr 1fr 1fr}}
        .links ul{list-style:none;margin:0;padding:0}
        .links .hd{font-weight:600}
        .copy{background:var(--dark);color:rgba(255,255,255,.75);padding:16px 0}
        .w{color:rgba(255,255,255,.9)}
      `}</style>

      {/* ─ Overlay Grid ตรวจ rhythm 104px (Cmd/Ctrl+G) */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
          (function(){
            document.addEventListener('keydown',e=>{
              if((e.metaKey||e.ctrlKey)&&e.key.toLowerCase()==='g'){
                document.documentElement.classList.toggle('okmd-grid');
              }
            });
          })();`,
        }}
      />
      <style jsx global>{`
        html.okmd-grid::before{
          content:"";position:fixed;inset:0;pointer-events:none;z-index:9999;
          background:linear-gradient(to bottom, rgba(0,140,255,.12) 0 1px, transparent 1px var(--y));
        }
      `}</style>
    </>
  );
}
