"use client";
import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";

/* ---------- Inline SVG Icons ---------- */
function PeopleIcon({ className = "h-5 w-5" }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
    );
}

function ToothIcon({ className = "h-5 w-5" }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 2c-2 0-3 .67-5 2.5C12 2.67 11 2 9 2 5.69 2 3 4.69 3 8c0 3.09 1.16 7.2 3 9 1 .99 2.5 1 3.5 0C10 16 11 14 12 14s2 2 2.5 3c1 1 2.5.99 3.5 0 1.84-1.8 3-5.91 3-9 0-3.31-2.69-6-6-6Z" />
        </svg>
    );
}

function CalendarIcon({ className = "h-5 w-5" }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="4" width="18" height="18" rx="2" />
            <path d="M16 2v4M8 2v4M3 10h18" />
        </svg>
    );
}

function ToolsIcon({ className = "h-5 w-5" }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M14.7 6.3a4 4 0 1 0-5.66 5.66l9.9 9.9 5.66-5.66-9.9-9.9z" />
            <path d="M8 8l-5 5" />
        </svg>
    );
}

function AwardIcon({ className = "h-5 w-5" }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="8" r="5" />
            <path d="M8.21 13.89 7 22l5-2 5 2-1.21-8.11" />
        </svg>
    );
}

function StarIcon({ className = "h-5 w-5" }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
    );
}

/* ---------- Configuration ---------- */
const CONFIG = {
    clinicName: "Identity Dental Hospital",
    tagline: "Your Smile, Our Priority",
    description: "Experience world-class dental care with cutting-edge technology and compassionate service. We're committed to giving you the healthy, beautiful smile you deserve.",
    slides: [
        { mobile: "/image2.png", desktop: "/image.png", alt: "Modern dental clinic interior" },
    ],
    autoplayMs: 5000,
    statsAutoplayMs: 3000,
    statsResumeDelayMs: 5000,
    stats: [
        { icon: "people", label: "Happy Patients", value: "10K+", color: "text-blue-600" },
        { icon: "tooth", label: "Expert Dentists", value: "6+", color: "text-green-600" },
        { icon: "calendar", label: "Days Open", value: "7", color: "text-purple-600" },
        { icon: "tools", label: "Dental Implants", value: "1K+", color: "text-orange-600" },
        { icon: "tooth", label: "Dentures Made", value: "500+", color: "text-pink-600" },
        { icon: "award", label: "Crowns Fitted", value: "2K+", color: "text-indigo-600" },
    ],
};

/* Map icon names to components */
function StatIcon({ name, className = "h-5 w-5" }) {
    const iconMap = {
        people: PeopleIcon,
        tooth: ToothIcon,
        calendar: CalendarIcon,
        tools: ToolsIcon,
        award: AwardIcon,
        star: StarIcon,
    };
    
    const IconComponent = iconMap[name] || (() => <span className={className}>•</span>);
    return <IconComponent className={className} />;
}

export default function Hero() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);
    const heroTimerRef = useRef(null);
    const totalSlides = CONFIG.slides.length;

    // Navigation functions
    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    };

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    // Auto-play functionality
    useEffect(() => {
        if (!isPlaying || !CONFIG.autoplayMs || totalSlides <= 1) return;

        if (heroTimerRef.current) {
            clearInterval(heroTimerRef.current);
        }

        heroTimerRef.current = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % totalSlides);
        }, CONFIG.autoplayMs);

        return () => {
            if (heroTimerRef.current) {
                clearInterval(heroTimerRef.current);
            }
        };
    }, [isPlaying, totalSlides]);

    // Pause on hover
    const handleMouseEnter = () => setIsPlaying(false);
    const handleMouseLeave = () => setIsPlaying(true);

    const slideAriaLabel = useMemo(
        () => `Slide ${currentSlide + 1} of ${totalSlides}`,
        [currentSlide, totalSlides]
    );

    return (
        <section className="relative overflow-hidden">
            {/* Hero Slider */}
            <div 
                className="relative h-[500px] md:h-[600px] lg:h-[700px]"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                {/* Slides */}
                {CONFIG.slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                            index === currentSlide 
                                ? "opacity-100 scale-100" 
                                : "opacity-0 scale-105 pointer-events-none"
                        }`}
                        aria-hidden={index !== currentSlide}
                    >
                        {/* Mobile Image */}
                        <div className="relative block md:hidden h-full">
                            <Image
                                src={slide.mobile}
                                alt={slide.alt}
                                fill
                                sizes="100vw"
                                className="object-cover"
                                priority={index === 0}
                            />
                        </div>
                        
                        {/* Desktop Image */}
                        <div className="relative hidden md:block h-full">
                            <Image
                                src={slide.desktop}
                                alt={slide.alt}
                                fill
                                sizes="100vw"
                                className="object-cover"
                                priority={index === 0}
                            />
                        </div>
                        
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
                    </div>
                ))}

                {/* Hero Content */}
                <div className="absolute inset-0 flex items-center">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-2xl text-white">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
                                {CONFIG.clinicName}
                            </h1>
                            <p className="text-xl md:text-2xl font-light mb-6 text-blue-100">
                                {CONFIG.tagline}
                            </p>
                            <p className="text-lg mb-8 text-gray-200 leading-relaxed">
                                {CONFIG.description}
                            </p>
                            
                            {/* CTA Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4">
                                <a href="#appointment" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg text-center">
                                    Book Appointment
                                </a>
                                <a href="#services" className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300 text-center">
                                    Learn More
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Navigation Controls */}
                {totalSlides > 1 && (
                    <>
                        {/* Previous Button */}
                        <button
                            type="button"
                            aria-label="Previous slide"
                            onClick={prevSlide}
                            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 group"
                        >
                            <svg className="w-6 h-6 text-white group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>

                        {/* Next Button */}
                        <button
                            type="button"
                            aria-label="Next slide"
                            onClick={nextSlide}
                            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 group"
                        >
                            <svg className="w-6 h-6 text-white group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>

                        {/* Slide Indicators */}
                        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3">
                            {CONFIG.slides.map((_, index) => (
                                <button
                                    key={index}
                                    aria-label={`Go to slide ${index + 1}`}
                                    onClick={() => goToSlide(index)}
                                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                        index === currentSlide
                                            ? "bg-white scale-125"
                                            : "bg-white/50 hover:bg-white/75"
                                    }`}
                                />
                            ))}
                            <span className="sr-only">{slideAriaLabel}</span>
                        </div>
                    </>
                )}
            </div>

            {/* Stats Section */}
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border-t border-blue-100">
                {/* Mobile Stats Carousel */}
                <div className="md:hidden">
                    <MobileStatsCarousel 
                        stats={CONFIG.stats} 
                        intervalMs={CONFIG.statsAutoplayMs}
                        resumeDelayMs={CONFIG.statsResumeDelayMs}
                    />
                </div>

                {/* Desktop Stats Grid */}
                <div className="hidden md:block px-4 sm:px-6 lg:px-8">
                    <div className="container mx-auto">
                        <div className="grid grid-cols-3 lg:grid-cols-6 gap-6 py-8">
                            {CONFIG.stats.map((stat, index) => (
                                <div 
                                    key={index} 
                                    className="text-center group hover:scale-105 transition-transform duration-300"
                                >
                                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-md mb-3 ${stat.color} group-hover:shadow-lg transition-shadow`}>
                                        <StatIcon name={stat.icon} className="h-6 w-6" />
                                    </div>
                                    <div className="font-bold text-2xl text-gray-900 mb-1">
                                        {stat.value}
                                    </div>
                                    <div className="text-sm text-gray-600 font-medium">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ===== Mobile Stats Carousel Component ===== */
function MobileStatsCarousel({ stats, intervalMs = 3000, resumeDelayMs = 5000 }) {
    const containerRef = useRef(null);
    const timerRef = useRef(null);
    const [isPaused, setIsPaused] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const container = containerRef.current;
        if (!container || stats.length === 0) return;

        const startAutoScroll = () => {
            if (timerRef.current) clearInterval(timerRef.current);
            
            timerRef.current = setInterval(() => {
                if (!isPaused) {
                    setCurrentIndex((prev) => {
                        const nextIndex = (prev + 1) % stats.length;
                        const cardWidth = 240; // min-w-[240px] + gap
                        container.scrollTo({
                            left: nextIndex * cardWidth,
                            behavior: 'smooth'
                        });
                        return nextIndex;
                    });
                }
            }, intervalMs);
        };

        const handleInteraction = () => {
            setIsPaused(true);
            if (timerRef.current) clearInterval(timerRef.current);
            
            setTimeout(() => {
                setIsPaused(false);
                startAutoScroll();
            }, resumeDelayMs);
        };

        container.addEventListener('touchstart', handleInteraction, { passive: true });
        container.addEventListener('wheel', handleInteraction, { passive: true });
        container.addEventListener('pointerdown', handleInteraction, { passive: true });

        startAutoScroll();

        return () => {
            if (timerRef.current) clearInterval(timerRef.current);
            container.removeEventListener('touchstart', handleInteraction);
            container.removeEventListener('wheel', handleInteraction);
            container.removeEventListener('pointerdown', handleInteraction);
        };
    }, [stats.length, intervalMs, resumeDelayMs, isPaused]);

    return (
        <div className="relative py-6">
            {/* Gradient Edges */}
            <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-blue-50 to-transparent pointer-events-none z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-cyan-50 to-transparent pointer-events-none z-10" />
            
            {/* Scrollable Container */}
            <div
                ref={containerRef}
                className="flex gap-4 px-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide"
                style={{
                    scrollbarWidth: 'none',
                    msOverflowStyle: 'none',
                    WebkitOverflowScrolling: 'touch'
                }}
            >
                {stats.map((stat, index) => (
                    <div
                        key={index}
                        className="min-w-[240px] bg-white rounded-xl p-4 shadow-md snap-start flex items-center space-x-4 border border-gray-100"
                    >
                        <div className={`flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center ${stat.color}`}>
                            <StatIcon name={stat.icon} className="h-6 w-6" />
                        </div>
                        <div className="flex-1">
                            <div className="font-bold text-xl text-gray-900">
                                {stat.value}
                            </div>
                            <div className="text-sm text-gray-600 font-medium">
                                {stat.label}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
