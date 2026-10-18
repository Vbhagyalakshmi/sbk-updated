"use client";

import Link from "next/link";
import RemoteImage from "@/components/ui/RemoteImage";
import { services } from "@/lib/services";
import { IMAGES } from "@/lib/images";

const serviceTitles = [
  "Website Development",
  "Custom Software Development",
  "E-commerce Development",
  "Mobile & Web Applications",
  "AI & Automation",
  "Cloud & DevOps",
  "SEO & Digital Marketing",
  "UI/UX & Graphic Design",
] as const;

export default function ServicesCarousel() {
  const cards = services.map((service, index) => ({
    ...service,
    title: serviceTitles[index],
  }));

  return (
    <section
      aria-labelledby="services-heading"
      className="overflow-hidden bg-gradient-to-b from-[#F3F8FF] via-white to-[#F7FAFF] py-16 sm:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-9 flex flex-col gap-3 sm:mb-11 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#2563EB]">
              What we do
            </p>
            <h2 id="services-heading" className="h-section mt-3">
              Services designed to move your ideas forward.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-[#53647C]">
            Practical digital solutions, built around your goals and ready to
            grow with your business.
          </p>
        </div>
      </div>

      <div className="services-marquee-wrap" aria-label="Our services">
        <div className="services-marquee-track">
          {[false, true].map((duplicate) => (
            <div
              key={duplicate ? "duplicate" : "services"}
              aria-hidden={duplicate || undefined}
              className="flex"
            >
              {cards.map(({ slug, title, short, image }) => (
                <Link
                  key={slug}
                  href={`/services/${slug}`}
                  tabIndex={duplicate ? -1 : undefined}
                  className="service-card group block text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2563EB]"
                >
                  <div className="service-image">
                    <RemoteImage
                      src={`/images/services/${image}.webp`}
                      alt={IMAGES[image].alt}
                      sizes="(min-width: 768px) 336px, 72vw"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="service-card-content">
                    <h3 className="text-xl font-semibold text-[#10213D]">
                      {title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-[#53647C]">
                      {short}
                    </p>
                    <span className="mt-auto inline-flex items-center gap-2 pt-5 text-sm font-semibold text-[#2563EB]">
                      Explore service
                      <span aria-hidden="true">→</span>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
