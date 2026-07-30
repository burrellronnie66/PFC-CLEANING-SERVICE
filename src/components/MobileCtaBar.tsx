import Link from "next/link";
import { site, bookHref } from "@/config/site";
import { PhoneIcon } from "@/components/icons";

/**
 * Persistent call / quote bar pinned to the bottom of mobile
 * screens. Hidden on large viewports where the header CTAs show.
 */
export function MobileCtaBar() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 border-t-2 border-red bg-navy-deep/95 backdrop-blur lg:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="grid grid-cols-2 gap-2 p-2.5">
        <a href={site.phone.telHref} className="btn btn-red px-3 py-3 text-sm">
          <PhoneIcon className="h-4 w-4" />
          Call Now
        </a>
        <Link href={bookHref} className="btn btn-gold px-3 py-3 text-sm">
          Book Your Clean
        </Link>
      </div>
    </div>
  );
}
