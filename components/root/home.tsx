"use client";

import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  CheckCircle2,
  ChevronRight,
  Clock3,
  MapPin,
  MessageCircle,
  Search,
  ShieldCheck,
  Star,
  Users,
  Wrench,
  Zap,
} from "lucide-react";

const categories = [
  {
    name: "Plumbing",
    icon: Wrench,
    description: "Pipes, leaks and water systems",
  },
  {
    name: "Electrical",
    icon: Zap,
    description: "Electrical installation and repair",
  },
  {
    name: "Construction",
    icon: BriefcaseBusiness,
    description: "Masonry, painting and renovation",
  },
  {
    name: "Home Repair",
    icon: Wrench,
    description: "Maintenance and general repairs",
  },
  {
    name: "Auto Services",
    icon: BriefcaseBusiness,
    description: "Mechanics and vehicle services",
  },
  {
    name: "Technology",
    icon: BriefcaseBusiness,
    description: "Computer, phone and IT support",
  },
  {
    name: "Cleaning",
    icon: CheckCircle2,
    description: "Home and office cleaning",
  },
  {
    name: "Tutoring",
    icon: Users,
    description: "Find qualified tutors",
  },
];

const providers = [
  {
    name: "Ahmad Khan",
    service: "Professional Electrician",
    location: "Kabul",
    rating: "4.9",
    reviews: 42,
  },
  {
    name: "Farid Ahmad",
    service: "Plumbing & Home Repair",
    location: "Kabul",
    rating: "4.8",
    reviews: 35,
  },
  {
    name: "Mohammad Nasir",
    service: "Car Mechanic",
    location: "Herat",
    rating: "4.9",
    reviews: 58,
  },
];

export default function HomePage() {
  return (
    <main className="bg-white text-slate-900 transition-colors dark:bg-[#050816] dark:text-white">
      {/* Hero */}
      <section className="relative overflow-hidden px-4 pb-20 pt-20 sm:px-6 lg:px-8 lg:pb-28 lg:pt-28">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 h-125 w-125 -translate-x-1/2 rounded-full bg-blue-500/10 blur-[120px] dark:bg-cyan-500/10" />
          <div className="absolute -left-32 top-1/3 h-80 w-80 rounded-full bg-purple-500/10 blur-[110px]" />
          <div className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-[110px]" />
        </div>

        <div className="relative mx-auto max-w-7xl">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 px-4 py-2 text-xs font-semibold text-cyan-600 dark:text-cyan-400">
              <MapPin className="h-3.5 w-3.5" />
              Find trusted services near you
            </div>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-7xl">
              Find the right person
              <br />
              <span className="bg-linear-to-r from-cyan-500 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                for any job.
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-400 sm:text-lg">
              Connect with local service providers, technicians and skilled
              professionals across Afghanistan. Search, call or message
              directly and get your job done.
            </p>

            {/* Search */}
            <div className="mx-auto mt-9 max-w-3xl rounded-sm border border-slate-200 bg-white p-2 shadow-xl shadow-blue-500/5 dark:border-white/10 dark:bg-[#0b1020]">
              <div className="flex flex-col gap-2 sm:flex-row">
                <div className="flex flex-1 items-center gap-3 px-4 py-3">
                  <Search className="h-5 w-5 text-slate-400" />

                  <input
                    type="text"
                    placeholder="What service do you need?"
                    className="w-full bg-transparent text-sm outline-none placeholder:text-slate-400"
                  />
                </div>

                <div className="flex items-center gap-3 border-t px-4 py-3 sm:border-l sm:border-t-0 dark:border-white/10">
                  <MapPin className="h-5 w-5 text-slate-400" />

                  <span className="text-sm text-slate-500 dark:text-slate-400">
                    Select city
                  </span>
                </div>

                <button
                  type="button"
                  className="inline-flex items-center justify-center gap-2 rounded-sm bg-linear-to-r from-cyan-500 via-blue-600 to-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg"
                >
                  Search
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-x-7 gap-y-3 text-xs text-slate-500 dark:text-slate-400">
              <span className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                Verified providers
              </span>

              <span className="flex items-center gap-2">
                <MessageCircle className="h-4 w-4 text-cyan-500" />
                Call or message directly
              </span>

              <span className="flex items-center gap-2">
                <Star className="h-4 w-4 text-amber-500" />
                Customer reviews
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="border-y border-slate-200 bg-slate-50/70 px-4 py-20 dark:border-white/5 dark:bg-white/2 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-semibold text-cyan-500">
                Browse services
              </p>

              <h2 className="mt-2 text-3xl font-bold tracking-tight">
                What do you need help with?
              </h2>

              <p className="mt-3 max-w-xl text-sm leading-6 text-slate-600 dark:text-slate-400">
                Explore popular services and find professionals who can help.
              </p>
            </div>

            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-500 dark:text-blue-400"
            >
              View all services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((category) => {
              const Icon = category.icon;

              return (
                <Link
                  key={category.name}
                  href={`/services?category=${encodeURIComponent(
                    category.name,
                  )}`}
                  className="group rounded-sm border border-slate-200 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/5 dark:border-white/10 dark:bg-[#0b1020] dark:hover:border-blue-500/40"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-sm bg-linear-to-br from-cyan-500/10 to-blue-500/10 ring-1 ring-cyan-500/20">
                    <Icon className="h-5 w-5 text-cyan-500" />
                  </div>

                  <h3 className="mt-5 font-bold">{category.name}</h3>

                  <p className="mt-2 text-xs leading-5 text-slate-500 dark:text-slate-400">
                    {category.description}
                  </p>

                  <div className="mt-4 flex items-center text-xs font-semibold text-blue-600 dark:text-blue-400">
                    Explore
                    <ChevronRight className="ml-1 h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold text-cyan-500">
              Simple and local
            </p>

            <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              Get your job done in three steps
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                number: "01",
                title: "Search",
                description:
                  "Tell us what service you need and select your city or area.",
                icon: Search,
              },
              {
                number: "02",
                title: "Connect",
                description:
                  "Review providers, ratings and experience. Then call or message them directly.",
                icon: MessageCircle,
              },
              {
                number: "03",
                title: "Get it done",
                description:
                  "Agree on the work and price with the provider and get your job completed.",
                icon: CheckCircle2,
              },
            ].map((step) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.number}
                  className="relative rounded-sm border border-slate-200 bg-white p-7 dark:border-white/10 dark:bg-[#0b1020]"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-400">
                      {step.number}
                    </span>

                    <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-blue-500/10">
                      <Icon className="h-5 w-5 text-blue-500" />
                    </div>
                  </div>

                  <h3 className="mt-7 text-xl font-bold">{step.title}</h3>

                  <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured providers */}
      <section className="bg-slate-50 px-4 py-20 dark:bg-white/2 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-semibold text-cyan-500">
                Local professionals
              </p>

              <h2 className="mt-2 text-3xl font-bold tracking-tight">
                Featured service providers
              </h2>
            </div>

            <Link
              href="/providers"
              className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400"
            >
              Browse providers
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {providers.map((provider) => (
              <div
                key={provider.name}
                className="rounded-sm border border-slate-200 bg-white p-6 dark:border-white/10 dark:bg-[#0b1020]"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-cyan-500 to-blue-600 text-sm font-bold text-white">
                    {provider.name
                      .split(" ")
                      .map((name) => name[0])
                      .join("")}
                  </div>

                  <div className="min-w-0">
                    <h3 className="font-bold">{provider.name}</h3>

                    <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                      {provider.service}
                    </p>

                    <div className="mt-2 flex items-center gap-3 text-xs">
                      <span className="flex items-center gap-1 text-amber-500">
                        <Star className="h-3.5 w-3.5 fill-current" />
                        {provider.rating}
                      </span>

                      <span className="text-slate-400">
                        ({provider.reviews} reviews)
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-5 flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                  <MapPin className="h-4 w-4" />
                  {provider.location}
                </div>

                <div className="mt-5 grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    className="inline-flex items-center justify-center gap-2 rounded-sm border border-slate-200 px-3 py-2.5 text-xs font-semibold transition hover:bg-slate-50 dark:border-white/10 dark:hover:bg-white/5"
                  >
                    <MessageCircle className="h-3.5 w-3.5" />
                    Message
                  </button>

                  <button
                    type="button"
                    className="rounded-sm bg-slate-900 px-3 py-2.5 text-xs font-semibold text-white transition hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
                  >
                    View profile
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Provider CTA */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-sm bg-linear-to-br from-cyan-500 via-blue-600 to-purple-600 p-8 text-white shadow-xl shadow-blue-500/20 sm:p-12">
          <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-white/10 blur-3xl" />

          <div className="relative flex flex-col justify-between gap-8 md:flex-row md:items-center">
            <div>
              <p className="text-sm font-semibold text-cyan-100">
                Are you a service provider?
              </p>

              <h2 className="mt-2 text-3xl font-bold">
                Get more customers for your skills.
              </h2>

              <p className="mt-3 max-w-xl text-sm leading-6 text-blue-50">
                Create your professional profile, showcase your services and
                let customers in your area find and contact you.
              </p>
            </div>

            <Link
              href="/register?role=provider"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-sm bg-white px-6 py-3.5 text-sm font-bold text-blue-700 shadow-lg transition hover:-translate-y-0.5 hover:bg-slate-50"
            >
              Become a provider
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Trust */}
      <section className="border-t border-slate-200 px-4 py-10 dark:border-white/5 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-4xl flex-wrap justify-center gap-x-10 gap-y-4 text-xs text-slate-500 dark:text-slate-400">
          <span className="flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-emerald-500" />
            Provider profiles
          </span>

          <span className="flex items-center gap-2">
            <Users className="h-4 w-4 text-blue-500" />
            Local professionals
          </span>

          <span className="flex items-center gap-2">
            <Clock3 className="h-4 w-4 text-cyan-500" />
            Direct communication
          </span>

          <span className="flex items-center gap-2">
            <Star className="h-4 w-4 text-amber-500" />
            Community reviews
          </span>
        </div>
      </section>
    </main>
  );
}