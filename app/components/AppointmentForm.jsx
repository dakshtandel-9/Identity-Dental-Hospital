// components/AppointmentForm.jsx
"use client";
import { useState } from "react";
import { SITE, telHref, waHref } from "./siteConfig";

export default function AppointmentForm() {
    const [loading, setLoading] = useState(false);
    const [ok, setOk] = useState(false);

    async function onSubmit(e) {
        e.preventDefault();
        setLoading(true);
        // Replace with your API route or service
        // await fetch("/api/appointment", { method: "POST", body: new FormData(e.currentTarget) });
        setTimeout(() => { setOk(true); setLoading(false); }, 800);
    }

    return (
        <section id="appointment" className="py-16 bg-white">
            <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 text-center">Book an Appointment</h2>
                <form onSubmit={onSubmit} className="mt-8 rounded-2xl bg-slate-50 p-6 ring-1 ring-slate-200">
                    <div className="grid gap-4 sm:grid-cols-2">
                        <div>
                            <label className="lbl">Full Name</label>
                            <input name="name" required className="inp" placeholder="Your name" />
                        </div>
                        <div>
                            <label className="lbl">Phone</label>
                            <input name="phone" required inputMode="tel" className="inp" placeholder="99XXXXXXXX" />
                        </div>
                        <div className="sm:col-span-2">
                            <label className="lbl">Service</label>
                            <select name="service" className="inp">
                                <option>Root Canal</option>
                                <option>Dental Implants</option>
                                <option>Aligners / Braces</option>
                                <option>Crowns & Bridges</option>
                                <option>Cleaning & Preventive</option>
                                <option>Other</option>
                            </select>
                        </div>
                        <div className="sm:col-span-2">
                            <label className="lbl">Preferred Date/Time</label>
                            <input name="datetime" type="text" className="inp" placeholder="e.g., Tomorrow evening" />
                        </div>
                        <div className="sm:col-span-2">
                            <label className="lbl">Message (optional)</label>
                            <textarea name="message" rows={3} className="inp" placeholder="Any symptoms or requests?" />
                        </div>
                        <div className="sm:col-span-2 flex items-center gap-2">
                            <input type="checkbox" required className="h-4 w-4" />
                            <span className="text-xs text-slate-600">I agree to be contacted via phone/WhatsApp.</span>
                        </div>
                    </div>

                    <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:items-center">
                        <button type="submit" disabled={loading} className="btn-primary">
                            {loading ? "Submitting..." : "Request Appointment"}
                        </button>
                        <a href={waHref()} target="_blank" rel="noopener noreferrer" className="btn-secondary">WhatsApp</a>
                        <a href={telHref()} className="btn-outline">Call {SITE.phone}</a>
                    </div>

                    {ok && (
                        <p className="mt-4 text-sm text-teal-700">
                            Thank you! The clinic will contact soon to confirm your slot.
                        </p>
                    )}
                </form>
            </div>
        </section>
    );
}

/* Add to globals.css under @layer components
@layer components {
  .lbl { @apply block text-xs font-semibold text-slate-600 mb-1; }
  .inp { @apply w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500; }
  .btn-primary { @apply inline-flex items-center justify-center px-5 py-3 rounded-md text-sm font-semibold text-white bg-teal-600 hover:bg-teal-700; }
  .btn-secondary { @apply inline-flex items-center justify-center px-5 py-3 rounded-md text-sm font-semibold text-teal-700 bg-teal-50 hover:bg-teal-100 border border-teal-200; }
  .btn-outline { @apply inline-flex items-center justify-center px-5 py-3 rounded-md text-sm font-semibold text-slate-800 border border-slate-300 hover:bg-white; }
  .badge { @apply inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-700; }
}
*/
