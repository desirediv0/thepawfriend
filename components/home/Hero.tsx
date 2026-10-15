'use client'

import Image from 'next/image'
import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  IconArrowUpRight,
  IconMapPin,
  IconPaw,
  IconHeartFilled,
  IconSparkles,
} from '@tabler/icons-react'

import { BookingForm } from './BookingForm'
import { MorphingText } from '@/components/ui/morphing-text'

gsap.registerPlugin(ScrollTrigger)

export const HERO_IMG = '/photos/hero.jpg'

// Last headline word morphs between these (copy already used across the site).
const HERO_MORPH = ['Doorstep.', 'Home.']

const lines: [string, boolean][] = [
  ['Expert', false],
  ['Pet', false],
  ['Care,', false],
  ['Right', true],
  ['at Your', true],
  ['Doorstep.', true],
]

export function Hero() {
  const heroRef = useRef<HTMLElement>(null)
  const [reduceMotion, setReduceMotion] = useState(false)

  useEffect(() => {
    setReduceMotion(window.matchMedia('(prefers-reduced-motion: reduce)').matches)
  }, [])

  useLayoutEffect(() => {
    const hero = heroRef.current

    if (!hero) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const ctx = gsap.context(() => {
      const intro = gsap.timeline({
        defaults: {
          ease: 'power3.out',
        },
      })

      intro
        .from('[data-hero="eyebrow"]', {
          y: 18,
          opacity: 0,
          duration: 0.55,
        })
        .from(
          '[data-hero-line]',
          {
            yPercent: 110,
            opacity: 0,
            duration: 0.72,
            stagger: 0.07,
          },
          '-=0.25'
        )
        .from(
          '[data-hero="copy"]',
          {
            y: 20,
            opacity: 0,
            duration: 0.55,
            stagger: 0.08,
          },
          '-=0.35'
        )
        .from(
          '[data-hero="image"]',
          {
            y: 35,
            opacity: 0,
            scale: 1.035,
            duration: 0.9,
          },
          '-=0.45'
        )
        .from(
          '[data-hero="pill"]',
          {
            y: 12,
            opacity: 0,
            duration: 0.45,
          },
          '-=0.55'
        )
        .from(
          '[data-hero="price"]',
          {
            x: -20,
            y: 15,
            opacity: 0,
            rotate: -2,
            duration: 0.55,
          },
          '-=0.4'
        )
        .from(
          '[data-hero="form"]',
          {
            x: 25,
            y: 25,
            opacity: 0,
            duration: 0.65,
          },
          '-=0.5'
        )

      // Desktop scroll movement.
      // Keep this subtle — hero should never feel unstable.
      const mm = gsap.matchMedia()

      mm.add('(min-width: 1024px)', () => {
        gsap.to('[data-hero-parallax="image"]', {
          y: 55,
          scale: 1.025,
          ease: 'none',
          scrollTrigger: {
            trigger: hero,
            start: 'top top',
            end: 'bottom top',
            scrub: 1.2,
          },
        })

        gsap.to('[data-hero-parallax="text"]', {
          y: -45,
          ease: 'none',
          scrollTrigger: {
            trigger: hero,
            start: 'top top',
            end: 'bottom top',
            scrub: 1.2,
          },
        })

        gsap.to('[data-hero-parallax="form"]', {
          y: 24,
          ease: 'none',
          scrollTrigger: {
            trigger: hero,
            start: 'top top',
            end: 'bottom top',
            scrub: 1.2,
          },
        })

        gsap.to('[data-hero="price"]', {
          y: -18,
          ease: 'none',
          scrollTrigger: {
            trigger: hero,
            start: 'top top',
            end: 'bottom top',
            scrub: 1.2,
          },
        })
      })

      return () => {
        mm.revert()
      }
    }, hero)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={heroRef}
      id="top"
      className="relative overflow-hidden bg-paper"
    >
      {/* Very subtle background decoration */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-[-180px] top-[120px] h-[420px] w-[420px] rounded-full bg-brand/[0.025] blur-3xl"
      />

      <div
        aria-hidden
        className="pointer-events-none absolute right-[-180px] top-[80px] h-[500px] w-[500px] rounded-full bg-sand/50 blur-3xl"
      />

      <div className="wrap relative z-10 pt-8 md:pt-10 lg:pt-12">
        <div className="grid items-center gap-8 lg:grid-cols-[0.92fr_1.16fr_0.9fr] lg:gap-0">
          {/* =====================================================
              LEFT — HERO CONTENT
          ====================================================== */}
          <div
            data-hero-parallax="text"
            className="relative z-20 flex flex-col lg:pr-8"
          >
            <div
              data-hero="eyebrow"
              className="label inline-flex w-fit items-center gap-2"
            >
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand/10">
                <IconPaw
                  size={13}
                  stroke={1.9}
                  className="text-brand"
                />
              </span>

              <span>Trusted doorstep pet healthcare</span>
            </div>

            <h1
              data-hero-title
              className="display mt-5 max-w-[570px] text-[clamp(3rem,5.3vw,5.2rem)] leading-[0.91] tracking-[-0.055em] lg:mt-7 lg:text-[clamp(3.2rem,4.25vw,4.8rem)]"
              aria-label="Expert Pet Care, Right at Your Doorstep."
            >
              {lines.map(([text, brand]) => (
                <span
                  key={text}
                  className="block overflow-hidden pb-[0.075em]"
                >
                  <span
                    data-hero-line
                    className={`block ${brand ? 'text-brand' : 'text-charcoal'
                      }`}
                  >
                    {text === HERO_MORPH[0] ? (
                      <>
                        <span className="sr-only">{text}</span>
                        <span aria-hidden>{reduceMotion ? text : (
                          <MorphingText
                            texts={HERO_MORPH}
                            className="mx-0 h-[1.06em] max-w-none text-left text-[clamp(3rem,5.3vw,5.2rem)] font-extrabold leading-[.91] tracking-[-0.055em] text-brand md:h-[1.06em] lg:text-[clamp(3.2rem,4.25vw,4.8rem)]"
                          />
                        )}</span>
                      </>
                    ) : text}
                  </span>
                </span>
              ))}
            </h1>

            <div className="mt-7 lg:mt-8">
              <p
                data-hero="copy"
                className="max-w-[410px] text-[14px] leading-[1.7] text-muted md:text-[15px]"
              >
                From veterinary consultations and vaccinations to grooming
                and training, trusted pet-care professionals bring expert
                care directly to your home.
              </p>

              <div
                data-hero="copy"
                className="mt-6 flex flex-wrap items-center gap-5"
              >
                <a
                  href="#booking"
                  className="btn btn-brand group inline-flex items-center gap-2"
                >
                  Book a Home Visit
                  <IconArrowUpRight
                    size={17}
                    stroke={2}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </a>

                <a
                  href="#services"
                  className="tlink group inline-flex items-center gap-1.5"
                >
                  Explore Services
                  <IconArrowUpRight
                    size={16}
                    stroke={2}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </a>
              </div>

              {/* Small social proof */}
              <div
                data-hero="copy"
                className="mt-7 flex items-center gap-3"
              >
                <div className="flex items-center gap-2">
                  <IconHeartFilled
                    size={15}
                    className="text-brand"
                  />

                  <p className="text-[11px] leading-[1.4] text-muted">
                    <strong className="text-[13px] text-charcoal">
                      5,200+
                    </strong>{' '}
                    happy pet parents
                    <br />
                    trust The Paws Friend
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* =====================================================
              CENTER — IMAGE
          ====================================================== */}
          <div className="relative order-2 mx-auto w-full max-w-[570px] lg:order-none lg:max-w-none lg:px-2">
            {/* Background shape */}
            <div
              aria-hidden
              className="absolute -inset-x-3 bottom-[-18px] top-[42px] rounded-[180px_180px_28px_28px] bg-sand md:-inset-x-5 lg:bottom-[-25px] lg:top-[55px]"
            />

            {/* Image */}
            <div
              data-hero="image"
              data-hero-parallax="image"
              className="relative aspect-[0.82] overflow-hidden rounded-[170px_170px_28px_28px] border border-line bg-sand shadow-[0_35px_80px_-45px_rgba(67,40,20,0.45)] sm:aspect-[0.86] lg:aspect-[0.8]"
            >
              <Image
                src={HERO_IMG}
                alt="Pet parent spending time with a golden retriever at home"
                fill
                priority
                sizes="(min-width:1280px) 42vw, (min-width:1024px) 40vw, 100vw"
                className="object-cover object-center"
              />

              {/* Soft bottom image fade */}
              <div
                aria-hidden
                className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/25 to-transparent"
              />

              {/* Image caption */}
              <div className="absolute bottom-5 left-5 flex items-center gap-2 text-white">
                <span className="h-px w-7 bg-white/70" />

                <span className="text-[10px] font-bold uppercase tracking-[0.22em]">
                  Care that comes home
                </span>
              </div>
            </div>

            {/* Location pill */}
            <div
              data-hero="pill"
              className="absolute left-1/2 top-3 z-10 flex -translate-x-1/2 items-center gap-1.5 whitespace-nowrap rounded-full border border-line bg-paper/95 px-3.5 py-2 text-[10px] font-extrabold uppercase tracking-[0.13em] shadow-[0_8px_20px_-15px_rgba(0,0,0,0.5)] backdrop-blur-sm"
            >
              <IconMapPin
                size={12}
                stroke={2}
                className="text-brand"
              />
              Delhi NCR · Lucknow
            </div>

            {/* Editorial vertical label */}
            <div className="absolute bottom-20 right-[-3px] z-10 hidden rotate-90 origin-bottom-right lg:block">
              <span className="text-[10px] font-extrabold uppercase tracking-[0.25em] text-muted">
                Professional care · At home
              </span>
            </div>

            {/* ₹499 card */}
            <div
              data-hero="price"
              className="absolute -bottom-5 left-4 z-20 w-[185px] border border-line border-l-[3px] border-l-brand bg-paper p-4 shadow-[0_20px_40px_-24px_rgba(62,36,18,0.55)] sm:left-[-18px] lg:bottom-16 lg:left-[-52px]"
            >
              <div className="flex items-center justify-between">
                <p className="text-[10px] font-extrabold uppercase tracking-[0.17em] text-brand">
                  Vet home visit
                </p>

                <IconSparkles
                  size={13}
                  stroke={1.8}
                  className="text-brand"
                />
              </div>

              <div className="mt-2 flex items-end gap-1.5">
                <span className="text-[32px] font-extrabold leading-none tracking-[-0.045em]">
                  ₹499
                </span>

                <span className="pb-0.5 text-[10px] text-muted">
                  consultation
                </span>
              </div>

              <a
                href="#booking"
                className="group mt-3 inline-flex items-center gap-1 text-[10px] font-extrabold uppercase tracking-[0.15em]"
              >
                Book visit

                <IconArrowUpRight
                  size={13}
                  stroke={2.25}
                  className="text-brand transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </div>
          </div>

          {/* =====================================================
              RIGHT — BOOKING FORM
          ====================================================== */}
          <div
            data-hero="form"
            data-hero-parallax="form"
            id="booking"
            className="relative z-30 order-3 lg:order-none lg:-ml-10 lg:pt-16"
          >
            <div className="relative">
              {/* Small decorative line */}
              <div
                aria-hidden
                className="absolute -top-[1px] left-7 z-10 h-[2px] w-12 bg-brand"
              />

              {/* Form */}
              <div className="relative">
                <BookingForm />
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}