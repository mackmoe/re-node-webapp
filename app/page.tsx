"use client";

import { useMemo, useState } from "react";
import { LenisProvider } from "@/src/context/LenisContext";
import { HeroSlideshow } from "@/src/components/HeroSlideshow";

const heroSlides = [
  "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1500534314209-a26db0f5f3a9?w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=2000&auto=format&fit=crop",
];

const timelineItems = [
  {
    time: "Sunrise",
    title: "Studio Light",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&auto=format&fit=crop",
  },
  {
    time: "Midday",
    title: "Market Loop",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200&auto=format&fit=crop",
  },
  {
    time: "Golden Hour",
    title: "Rooftop Gather",
    image:
      "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=1200&auto=format&fit=crop",
  },
  {
    time: "Evening",
    title: "Cinema Garden",
    image:
      "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?w=1200&auto=format&fit=crop",
  },
];

const travelTimes = [
  { label: "CBD Core", time: "12 min", distance: "6.4 km" },
  { label: "Waterfront", time: "8 min", distance: "3.2 km" },
  { label: "Arts District", time: "5 min", distance: "2.1 km" },
  { label: "University", time: "16 min", distance: "9.5 km" },
];

const galleryImages = [
  "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=900&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=900&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=900&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=900&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=900&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?w=900&auto=format&fit=crop",
];

export default function Home() {
  const [cookieAccepted, setCookieAccepted] = useState(false);
  const [ctaOpen, setCtaOpen] = useState(false);

  return (
    <LenisProvider>
      <div className="bg-[#0b0b0c] text-white">
        {!cookieAccepted && (
          <div className="fixed bottom-4 left-4 right-4 z-50 rounded-2xl border border-white/10 bg-black/80 p-4 backdrop-blur-md md:left-8 md:right-auto md:w-[420px]">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <p className="text-sm text-white/80">
                We use cookies to personalize your experience and capture the
                creative rhythm of your visit.
              </p>
              <div className="flex gap-2">
                <button
                  className="rounded-full border border-white/20 px-4 py-2 text-xs uppercase tracking-[0.2em] text-white/70 hover:text-white"
                  onClick={() => setCookieAccepted(true)}
                >
                  Accept
                </button>
                <button
                  className="rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-black"
                  onClick={() => setCookieAccepted(true)}
                >
                  Accept All
                </button>
              </div>
            </div>
          </div>
        )}

        <section className="relative min-h-[90vh] w-full overflow-hidden">
          <HeroSlideshow slides={heroSlides} interval={5000} />

          <div className="relative z-10 flex h-full min-h-[90vh] items-end px-6 pb-16 md:px-16">
            <div className="max-w-2xl space-y-6">
              <p className="text-xs uppercase tracking-[0.45em] text-white/70">
                Creative Residential Community
              </p>
              <h1 className="text-4xl font-semibold leading-tight md:text-6xl">
                For the creatively curious
              </h1>
              <p className="text-base text-white/80 md:text-lg">
                A new neighbourhood where studios, gardens, and social spaces
                collide into a daily rhythm you can live inside.
              </p>
              <button className="rounded-full bg-white px-8 py-4 text-sm font-semibold uppercase tracking-[0.25em] text-black shadow-[0_20px_60px_rgba(0,0,0,0.35)] transition hover:-translate-y-0.5 hover:bg-white/90">
                Register Your Interest
              </button>
            </div>
          </div>
        </section>

        <section className="px-6 py-16 md:px-16 md:py-20">
          <div className="max-w-3xl space-y-4">
            <p className="text-sm uppercase tracking-[0.3em] text-white/60">
              The Vision
            </p>
            <h2 className="text-3xl font-semibold md:text-4xl">
              A creative lifestyle brochure, not a portal.
            </h2>
            <p className="text-base text-white/75 md:text-lg">
              Designed for makers, collaborators, and quiet optimists — this
              community layers bold architecture with intimate moments, giving
              you the space to create, gather, and recharge.
            </p>
          </div>
        </section>

        <section className="px-6 pb-16 md:px-16 md:pb-24">
          <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr]">
            <div className="relative min-h-[360px] overflow-hidden rounded-3xl">
              <img
                src="https://images1.apartments.com/i2/JrcbjpOKQs-e1HurMCbwC9idYXh4-GGCKYiaqckpfL8/117/artessa-at-quarry-village-san-antonio-tx-building-photo.jpg?w=1600&auto=format&fit=crop"
                alt="Lifestyle imagery"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-black/20" />
            </div>
            <div className="flex flex-col justify-center gap-4">
              <p className="text-sm uppercase tracking-[0.3em] text-white/60">
                Life & Leisure
              </p>
              <h3 className="text-2xl font-semibold md:text-3xl">
                A place that moves with your tempo.
              </h3>
              <p className="text-base text-white/75">
                Rooftop gardens, maker studios, and a resident gallery cultivate
                a daily mood of experimentation. Every detail is curated for
                rhythm, light, and human connection.
              </p>
              <div className="inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.25em] text-white/80">
                Explore the lifestyle <span aria-hidden>→</span>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 pb-16 md:px-16 md:pb-24">
          <div className="flex flex-col gap-8">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-white/60">
                A Day In The Life
              </p>
              <h3 className="text-2xl font-semibold md:text-3xl">
                A day at the community, captured in scenes.
              </h3>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {timelineItems.map((item) => (
                <div
                  key={item.title}
                  className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5"
                >
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  </div>
                  <div className="space-y-2 p-4">
                    <p className="text-xs uppercase tracking-[0.3em] text-white/50">
                      {item.time}
                    </p>
                    <p className="text-base font-semibold text-white">
                      {item.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 pb-16 md:px-16 md:pb-24">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 md:p-12">
            <div className="flex flex-col gap-8">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-white/60">
                  Travel Times
                </p>
                <h3 className="text-2xl font-semibold md:text-3xl">
                  Everything you need is minutes away.
                </h3>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                {travelTimes.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/40 px-5 py-4"
                  >
                    <div className="flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12 2C7.589 2 4 5.589 4 10c0 5.333 6.667 12 8 12 1.333 0 8-6.667 8-12 0-4.411-3.589-8-8-8Zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z"
                            stroke="white"
                            strokeWidth="1.4"
                          />
                        </svg>
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-white">
                          {item.label}
                        </p>
                        <p className="text-xs text-white/60">
                          {item.distance}
                        </p>
                      </div>
                    </div>
                    <span className="text-sm font-semibold text-white/80">
                      {item.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 pb-20 md:px-16 md:pb-28">
          <div className="flex flex-col gap-8">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-white/60">
                Social Gallery
              </p>
              <h3 className="text-2xl font-semibold md:text-3xl">
                Everyday moments, curated like a gallery wall.
              </h3>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {galleryImages.map((image) => (
                <div
                  key={image}
                  className="group relative overflow-hidden rounded-2xl"
                >
                  <img
                    src={image}
                    alt="Gallery" 
                    className="h-56 w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <footer className="border-t border-white/10 px-6 py-12 md:px-16">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-3">
              <p className="text-sm uppercase tracking-[0.3em] text-white/60">
                Contact
              </p>
              <p className="text-base font-semibold">Maurice Nash LLC</p>
              <p className="text-sm text-white/70">
                mo@molovestoshare.com
                <br />
                +1 (252) 646-4981
              </p>
            </div>
            <div className="space-y-3">
              <p className="text-sm uppercase tracking-[0.3em] text-white/60">
                Signup
              </p>
              <div className="flex items-center gap-2">
                <input
                  type="email"
                  placeholder="Email address"
                  className="w-full rounded-full border border-white/15 bg-black/40 px-4 py-2 text-sm text-white placeholder:text-white/40"
                />
                <button className="rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-black">
                  Join
                </button>
              </div>
            </div>
            <div className="space-y-3">
              <p className="text-sm uppercase tracking-[0.3em] text-white/60">
                Social
              </p>
              <div className="flex flex-col gap-3 text-sm text-white/70">
                <a href="#" className="flex items-center gap-2">
                  <img
                    src="https://img.freepik.com/premium-psd/instagram-logo-social-media-icon_705838-13489.jpg?semt=ais_hybrid&w=740&q=80"
                    alt="Instagram"
                    className="h-5 w-5 rounded-full object-cover"
                  />
                  Instagram
                </a>
                <a href="#" className="flex items-center gap-2">
                  <img
                    src="https://image.similarpng.com/file/similarpng/very-thumbnail/2020/05/Popular-Logo-YouTube-icon-PNG.png"
                    alt="YouTube"
                    className="h-5 w-5 rounded-full object-cover"
                  />
                  YouTube
                </a>
                <a href="#" className="flex items-center gap-2">
                  <img
                    src="https://image.similarpng.com/file/similarpng/original-picture/2020/11/Blue-facebook-icon-on-transparent-background-PNG.png"
                    alt="Facebook"
                    className="h-5 w-5 rounded-full object-cover"
                  />
                  Facebook
                </a>
              </div>
            </div>
            <div className="space-y-3">
              <p className="text-sm uppercase tracking-[0.3em] text-white/60">
                Legal
              </p>
              <div className="flex flex-col gap-2 text-sm text-white/70">
                <a href="#">Privacy Policy</a>
                <a href="#">Terms & Conditions</a>
                <a href="#">Cookie Policy</a>
              </div>
            </div>
          </div>
        </footer>

        {/* Static "Say Hello" Link - Top Right */}
        <div className="fixed top-8 right-8 z-40">
          <button
            onClick={() => setCtaOpen(true)}
            className="text-sm uppercase tracking-[0.3em] text-white/70 hover:text-white transition-colors"
          >
            @ say hello
          </button>
        </div>

        <aside className="hidden lg:block">
          <div className="hidden">
            {/* Old desktop modal hidden */}
            <div className="pointer-events-auto rounded-3xl border border-white/10 bg-black/80 p-6 shadow-[0_40px_80px_rgba(0,0,0,0.4)] backdrop-blur-md">
              <p className="text-xs uppercase tracking-[0.3em] text-white/60">
                Say Hello
              </p>
              <h4 className="mt-2 text-lg font-semibold">Stay in the loop.</h4>
              <form className="mt-4 space-y-3">
                <input
                  type="text"
                  placeholder="Full name"
                  className="w-full rounded-2xl border border-white/10 bg-black/50 px-4 py-3 text-sm text-white placeholder:text-white/40"
                />
                <input
                  type="email"
                  placeholder="Email address"
                  className="w-full rounded-2xl border border-white/10 bg-black/50 px-4 py-3 text-sm text-white placeholder:text-white/40"
                />
                <input
                  type="tel"
                  placeholder="Phone number"
                  className="w-full rounded-2xl border border-white/10 bg-black/50 px-4 py-3 text-sm text-white placeholder:text-white/40"
                />
                <button className="w-full rounded-full bg-white py-3 text-xs font-semibold uppercase tracking-[0.25em] text-black">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </aside>

        <div className="hidden lg:block">
          <button
            className="flex w-full items-center justify-between rounded-full border border-white/10 bg-white px-6 py-4 text-xs font-semibold uppercase tracking-[0.25em] text-black"
            onClick={() => setCtaOpen(true)}
          >
            Say Hello
            <span aria-hidden>+</span>
          </button>
        </div>

        {ctaOpen && (
          <div className="fixed inset-0 z-50 flex items-end bg-black/60 px-4 pb-6 backdrop-blur-sm">
            <div className="w-full rounded-3xl bg-black p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-white/60">
                    Say Hello
                  </p>
                  <h4 className="text-lg font-semibold">Stay in the loop.</h4>
                </div>
                <button
                  className="rounded-full border border-white/20 px-3 py-1 text-xs uppercase tracking-[0.2em] text-white/70"
                  onClick={() => setCtaOpen(false)}
                >
                  Close
                </button>
              </div>
              <form className="mt-4 space-y-3">
                <input
                  type="text"
                  placeholder="Full name"
                  className="w-full rounded-2xl border border-white/10 bg-black/50 px-4 py-3 text-sm text-white placeholder:text-white/40"
                />
                <input
                  type="email"
                  placeholder="Email address"
                  className="w-full rounded-2xl border border-white/10 bg-black/50 px-4 py-3 text-sm text-white placeholder:text-white/40"
                />
                <input
                  type="tel"
                  placeholder="Phone number"
                  className="w-full rounded-2xl border border-white/10 bg-black/50 px-4 py-3 text-sm text-white placeholder:text-white/40"
                />
                <button className="w-full rounded-full bg-white py-3 text-xs font-semibold uppercase tracking-[0.25em] text-black">
                  Submit
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </LenisProvider>
  );
}
