"use client";

import Link from "next/link";
import { useState } from "react";

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [lightboxImg, setLightboxImg] = useState(null);

  const filters = [
    { id: "all", label: "All" },
    { id: "vets", label: "Vet Visits" },
    { id: "grooming", label: "Grooming" },
    { id: "training", label: "Training" },
    { id: "happy", label: "Happy Pets" },
    { id: "events", label: "Events" }
  ];

  const galleryItems = [
    {
      id: 1,
      category: "happy",
      tag: "Happy Pets",
      title: "Wagging Tails & Big Smiles",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBsLZD4XIfCEXyb155moSEHmmEKkVurqqxXPLb3vNMK-oQAuUOaywLFuwy9QBU7_b6ChPYii-ap_AC20KMkpIUjXMNrGWs5lxTfdShjngDEwynX1LIsx9hC0dSpa9z7cs2k-wdO2TGUE8Wzw5E87eSWMO8otnXtTm97tYVUDxpL3zWphrbJUEiNm6mfAazXw25lvG_apXmmz8io89lywFUPEQNKvSpr5v0MeqnWoNjHxq156jhPJ11oIC9-OHo7498Is8VMcLvvkD4V",
      span: "lg:col-span-2 lg:row-span-2 min-h-[400px]"
    },
    {
      id: 2,
      category: "grooming",
      tag: "Grooming",
      title: "Spa Day Comfort",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDtARJ7egPwxJUPQye7t5RpGPiq3xIvJtam5pK6IF1Q7nTUF1BNy8invnlhRmklrV2wluL0bR1DX_whGSXVc6162n0el8PJST0ML9Dh1VqDnqMK8t9nbaT6BMIimfUy4M1hDV5t-8fQlt1D1f1NbOV6uTtmc0EIjYYZnhaefnmeFXtrC01mGwuekm5J8fyQeNqwjNkWG_etcDcOwlNmleXCBSz0MPJFLAbZof5eZ3pWO6XzEGI9jO_nPR7odVbu4NYjafErjXs2BakV",
      span: "lg:row-span-2 min-h-[400px]"
    },
    {
      id: 3,
      category: "training",
      tag: "Training",
      title: "New Skills",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDvT4WzZnXTtUe8stQIESgLn5I3FYVkmKDHN8kjvqj_7yljO6ZhmfXnQtZn7MdaLAeVqwNJQ1VsWeI3QGBrIwHxMutkn_Ml-f2eA3AGVuRs-b7tTdUC1RfJYFkEi286sBCvUxHq5dDn7bmd_150U7mYdhwv-KfiPZywwMbQ8eq6-Y5R8fsDcOOdMXSoIG8XiRj2-f79Zqiw7C_sy7_WtzOW3T5WDGT2F3Q2o5z0c_8zq6EOMMFTrNxWPtXbJV3xn0uBkes-8Eh3ytqv",
      span: "aspect-square"
    },
    {
      id: 4,
      category: "events",
      tag: "Events",
      title: "Paws & Hearts",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD21WU-5tBFh_P-o60GZ06qnqaOvvY9pb8R_4AaVll5ay7EspvvHh6ytNclalZ66clJtlvnZhWSeqk_JNX897ZA-PWsS82yTeQjoTj-Xh0uJgJiTBXOIFFW1BqlaaQte527qGkg9G3OjRkwRkGfFjxewNXsMy-i4BdyJwU25aNDTxxyqjPS62rrrdLD70ngd0g-U3Ma0-YOnuTKQtSIE-azfpPbR6rXTEqW6TVMDpDeRqiahbNyUpTgoNOp6vwYc2Lxd17P4SImOiWF",
      span: "aspect-square"
    },
    {
      id: 5,
      category: "vets",
      tag: "Vet Visits",
      title: "Routine Checkup",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDmhd1JscmTmPexscsKlcai3NBDsJXCGxE6ERcXRr9i-8YDQgNhlLKdqBgCcNOUFoo9qk6ODw4-w1JNG7Nucn4Sh8_MjQoQ7THhXUmMC7FEy9P4YAATrbb3saows1fOprGB5w-HWcLQ-oUVnQ49Wch-DVKCvlPsw4_eg9APya0UdpivWdSFHfHQU_Y5ZwSQUvPZ2HJUEgmrFaDDBuQe4FzbTsdtqs8EPU8O46I0q2edEPp_y5m_kYXOIkez4qoYAID-TWHW0dOKYom0",
      span: "aspect-square"
    },
    {
      id: 6,
      category: "training",
      tag: "Training",
      title: "Agility Success",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDhh3Cae-3UZlyc5sO0jKd0CEXsATDNr03lbpZBKunUCt4wjap1iy7vXJyRDrbR3M6wpmE9jkYG7tz61JCmyOejUZyqmptiFJUzfxkcfi1tKOAEzFy0Qyy_2af_do5g6iPT3L9TlkeO_IM96J49IbZlpuVkCOm5rkOmue6H7fLqlxHLXqLfGMFonaP9qCf_AV_gnEsowN3U68D52epyTzKAmjJ0ROkn76DpF0uDcDGT1GnWLNzhygk4_ERaDQ7a6QRY5jHb5lL0Nhjm",
      span: "aspect-square"
    },
    {
      id: 7,
      category: "grooming",
      tag: "Grooming",
      title: "The Fresh Pack",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCg6O4zqJdA8s5STUQ9og27RjdHr8gWegMjP4bfRm5BWw2-0g9AU_4rKHaD5if_t_HR6UjG9LuOTvCq5Vmh4MIrufoY49NPaNvFyrEJLyukGGeSCdEFmlW5lSFIauhjWv7aAVNI-pA43GoP5kQNTsd3CDTDoCtXCnulCjYs4sO9FoHSIl7ZwegiZIWHTfk88ylBtXOm7mTNdQzbIvpiC0BTwlvAz0o3-R5tO_b9GENkAs9cqgA5cBCS8i34ImPF25bN3EkYbf2_bDcH",
      span: "aspect-square"
    },
    {
      id: 8,
      category: "happy",
      tag: "Happy Pets",
      title: "Comfort of Home",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD91wqu1R2q7ri0QYfIFi7uvwoR5SfcXJTp4zt8THlnzHMdV_jj_Su5gGIDN5fNhCbu64cWh6VMmeJgTV1S-iqjNP0mnVP8pcRvEExMam0UlZk0KD93QmU3qZ_Eb6LKiSJyWePi_liVYOtbVUyt8cL17D_X7p4tYjKk6CTguUJQx9HXABbws-lBuPMmNnVmgBjvje5B_1Rni0otyq4m2oYkrRuxgJbN7Yj3_BPVKUVR2YrB5LOSmOws0oFzKZ7GBQTtS1KHZ4ZiN5Gb",
      span: "lg:col-span-2 min-h-[300px]"
    }
  ];

  const filteredItems = activeFilter === "all"
    ? galleryItems
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <>
      {/* Hero/Header Section */}
      <section className="pt-section-padding pb-base px-gutter max-w-container-max mx-auto text-center">
        <h1 className="font-headline-xl text-headline-xl text-on-background mb-4">Moments of Love & Care</h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
          Step into our gallery and witness the joy, health, and wagging tails of the pets we care for every single day.
        </p>
      </section>

      {/* Filters Section */}
      <section className="py-8 px-gutter max-w-container-max mx-auto overflow-x-auto">
        <div className="flex flex-nowrap md:flex-wrap justify-start md:justify-center items-center gap-3 pb-4 md:pb-0">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-2 rounded-full border font-label-md text-label-md transition-all focus:outline-none ${
                activeFilter === filter.id
                  ? "bg-primary text-white border-primary"
                  : "bg-white border-outline text-on-surface hover:border-primary"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </section>

      {/* Bento Grid Gallery */}
      <section className="pb-section-padding px-gutter max-w-container-max mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setLightboxImg(item)}
              className={`${item.span} relative group gallery-card overflow-hidden rounded-xl border border-surface-container-highest cursor-pointer bg-surface-container-low`}
            >
              <img
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                alt={item.title}
                src={item.img}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white">
                <span className="text-xs font-bold uppercase tracking-widest text-primary-fixed">{item.tag}</span>
                <h3 className="font-headline-md text-headline-md">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxImg && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-md z-[100] flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setLightboxImg(null)}
        >
          <div className="relative max-w-4xl w-full h-auto flex flex-col justify-center items-center">
            <button
              onClick={() => setLightboxImg(null)}
              className="absolute -top-12 right-0 text-white hover:text-primary transition-colors focus:outline-none"
            >
              <span className="material-symbols-outlined text-4xl">close</span>
            </button>
            <div className="bg-white rounded-2xl overflow-hidden shadow-2xl max-w-full">
              <img
                src={lightboxImg.img}
                alt={lightboxImg.title}
                className="max-h-[70vh] object-contain mx-auto"
              />
              <div className="p-6 bg-white">
                <span className="text-xs font-bold uppercase tracking-widest text-primary">{lightboxImg.tag}</span>
                <h3 className="font-headline-md text-headline-md text-on-background mt-1">{lightboxImg.title}</h3>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Footer Section */}
      <section className="bg-primary-container py-16 px-gutter relative overflow-hidden mb-section-padding rounded-3xl max-w-container-max mx-auto">
        <div className="absolute inset-0 bg-pattern opacity-10"></div>
        <div className="max-w-container-max mx-auto flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
          <div className="text-center md:text-left">
            <h2 className="font-headline-lg text-headline-lg text-white mb-2">Want Your Pet to be in Our Gallery?</h2>
            <p className="font-body-md text-body-md text-white/90">Share your pet's happy moments with us and get featured!</p>
          </div>
          <Link
            href="/contact"
            className="bg-white text-primary font-bold px-10 py-4 rounded-lg shadow-lg hover:bg-surface transition-all active:scale-95 text-center inline-block"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </>
  );
}
