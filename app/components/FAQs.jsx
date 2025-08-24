"use client";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

const FAQS_DATA = [
    {
        question: "What are the signs that I might need a root canal?",
        answer: "Common signs include severe tooth pain, prolonged sensitivity to hot or cold temperatures, swelling and tenderness in the nearby gums, and a darkening of the tooth. If you experience any of these, it's important to see a dentist right away.",
    },
    {
        question: "Is a single-visit root canal treatment (RCT) safe and effective?",
        answer: "Yes, for many patients, a single-visit RCT is a safe and highly effective option. Using advanced technology like dental microscopes and rotary instruments, we can often complete the entire procedure in one appointment, saving you time and discomfort.",
    },
    {
        question: "How do dental implants work, and what is the process?",
        answer: "A dental implant is a small titanium post that is surgically placed into the jawbone. Over a few months, it fuses with the bone in a process called osseointegration. Once healed, a custom-made crown is attached to the implant, restoring your smile and function.",
    },
    {
        question: "What are the main differences between clear aligners and traditional braces?",
        answer: "Clear aligners are removable, virtually invisible, and offer greater flexibility. Traditional braces are fixed to the teeth and are often more effective for treating complex orthodontic issues. We can help you decide which option is best for your specific needs.",
    },
    {
        question: "What are the benefits of choosing a zirconia crown?",
        answer: "Zirconia crowns are an excellent choice for dental restorations. They are completely metal-free, exceptionally strong and durable, and their color can be matched to your natural teeth for a seamless, beautiful look.",
    },
];

const AccordionItem = ({ faq, isOpen, onClick }) => (
    <div className="border-b border-gray-200 py-4">
        <button
            className="w-full flex justify-between items-center text-left text-lg font-semibold text-gray-800 focus:outline-none"
            onClick={onClick}
        >
            <span>{faq.question}</span>
            <FontAwesomeIcon icon={isOpen ? faMinus : faPlus} className="h-5 w-5 text-teal-500" />
        </button>
        <div
            className={`overflow-hidden transition-max-height duration-700 ease-in-out ${isOpen ? "max-h-screen" : "max-h-0"
                }`}
        >
            <p className="mt-4 text-gray-600">{faq.answer}</p>
        </div>
    </div>
);

export default function FAQs() {
    const [openIndex, setOpenIndex] = useState(null);

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faqs" className="py-20 bg-gray-50">
            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
                        Frequently Asked Questions
                    </h2>
                    <p className="mt-4 text-lg text-gray-600">
                        Have questions? We have answers. Here are some of the most common questions we receive.
                    </p>
                </div>
                <div className="bg-white rounded-xl shadow-lg p-6">
                    {FAQS_DATA.map((faq, index) => (
                        <AccordionItem
                            key={index}
                            faq={faq}
                            isOpen={openIndex === index}
                            onClick={() => handleToggle(index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}