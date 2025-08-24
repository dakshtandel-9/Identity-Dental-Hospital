// components/QuickInfoBar.jsx
import { SITE, telHref } from "./siteConfig";

export default function QuickInfoBar() {
    return (
        <section aria-label="Quick info" className="bg-slate-50 border-y border-slate-200">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 grid gap-3 sm:grid-cols-3">
                <a href={telHref()} className="qi">
                    <span className="qi__label">Call</span>
                    <span className="qi__value">{SITE.phone}</span>
                </a>
                <a href={SITE.mapsUrl} target="_blank" rel="noopener noreferrer" className="qi">
                    <span className="qi__label">Address</span>
                    <span className="qi__value">{SITE.addressLine1}</span>
                </a>
                <div className="qi">
                    <span className="qi__label">Hours</span>
                    <span className="qi__value">Mon–Sat: {SITE.hours.monSat1}, {SITE.hours.monSat2} • Sun: {SITE.hours.sun}</span>
                </div>
            </div>
        </section>
    );
}

/* Tailwind component classes (put in globals.css under @layer components)
@layer components {
  .qi { @apply flex items-center justify-between sm:block rounded-md bg-white px-4 py-3 shadow-sm ring-1 ring-slate-200 hover:bg-slate-50; }
  .qi__label { @apply text-xs font-semibold text-slate-500; }
  .qi__value { @apply text-sm font-medium text-slate-900; }
}
*/
