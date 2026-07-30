"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { nav, site, bookHref } from "@/config/site";
import { Logo } from "@/components/Logo";
import { CloseIcon, MenuIcon, PhoneIcon } from "@/components/icons";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Close the mobile menu on navigation (state adjustment during render)
  const [lastPathname, setLastPathname] = useState(pathname);
  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 border-b-2 transition-shadow ${
        scrolled
          ? "border-red bg-navy-deep/95 shadow-lg shadow-black/40 backdrop-blur"
          : "border-red/60 bg-navy-deep"
      }`}
    >
      {/* Skip link for keyboard users */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-2 focus:top-2 focus:z-[60] focus:rounded focus:bg-gold focus:px-4 focus:py-2 focus:font-head focus:text-ink"
      >
        Skip to main content
      </a>

      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:h-20">
        <Link
          href="/"
          aria-label={`${site.name} — home`}
          className="shrink-0 py-1"
        >
          <span className="[&_svg]:transition-transform hover:[&_svg]:scale-105 block scale-90 lg:scale-100">
            <Logo />
          </span>
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Main navigation" className="hidden lg:block">
          <ul className="flex items-center gap-6">
            {nav.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`font-head text-sm font-semibold tracking-[0.12em] transition-colors hover:text-gold ${
                      active
                        ? "text-gold underline decoration-red decoration-2 underline-offset-8"
                        : "text-cream"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={site.phone.telHref}
            className="btn btn-outline px-4 py-2.5 text-sm"
          >
            <PhoneIcon className="h-4 w-4" />
            Call Now
          </a>
          <Link href={bookHref} className="btn btn-gold px-4 py-2.5 text-sm">
            Book Your Clean
          </Link>
        </div>

        {/* Mobile: call shortcut + hamburger */}
        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={site.phone.telHref}
            aria-label={`Call ${site.name} at ${site.phone.display}`}
            className="flex h-11 w-11 items-center justify-center rounded-md border-2 border-gold text-gold"
          >
            <PhoneIcon className="h-5 w-5" />
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="flex h-11 w-11 items-center justify-center rounded-md border-2 border-navy-line text-cream"
          >
            {open ? (
              <CloseIcon className="h-6 w-6" />
            ) : (
              <MenuIcon className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        hidden={!open}
        className="border-t-2 border-red bg-navy-deep lg:hidden"
      >
        <nav aria-label="Mobile navigation" className="px-4 pb-6 pt-2">
          <ul className="divide-y divide-navy-line/60">
            {nav.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`block py-3.5 font-head text-lg font-semibold tracking-[0.1em] ${
                      active ? "text-gold" : "text-cream"
                    }`}
                  >
                    <span className="mr-2 text-gold" aria-hidden="true">
                      ★
                    </span>
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="mt-4 grid gap-3">
            <Link href={bookHref} className="btn btn-gold w-full">
              Book Your Clean
            </Link>
            <a href={site.phone.telHref} className="btn btn-outline w-full">
              <PhoneIcon className="h-4 w-4" />
              Call {site.phone.display}
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
