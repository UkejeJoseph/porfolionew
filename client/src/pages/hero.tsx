import { Link } from "wouter";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden">

      {/* Side vertical text */}
      <div className="hidden lg:flex flex-col items-center absolute left-8 top-1/2 -translate-y-1/2 gap-4 z-20">
        <span
          className="vertical-text text-xs tracking-[0.3em] text-muted-foreground uppercase"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Senior Software Engineer
        </span>
        <div className="w-px h-24 bg-border" />
        <span
          className="vertical-text text-xs tracking-[0.3em] text-muted-foreground uppercase"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          2026
        </span>
      </div>

      <div className="w-full px-4 sm:px-6 lg:px-16 relative z-10">
        <div className="min-h-screen flex flex-col lg:flex-row items-start lg:items-center py-16 sm:py-20 lg:py-24">

          {/* Left Content */}
          <div className="w-full max-w-xl lg:pl-12 relative z-20">

            {/* Stats */}
            <div className="flex gap-8 sm:gap-12 mb-8 sm:mb-12 lg:mb-16 animate-fade-up">
              <div className="text-left">
                <span
                  className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-foreground"
                  style={{ fontFamily: "'Sora', sans-serif" }}
                >
                  5+
                </span>
                <p
                  className="text-xs sm:text-sm text-muted-foreground mt-1"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Years experience
                </p>
              </div>
              <div className="text-left">
                <span
                  className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-foreground"
                  style={{ fontFamily: "'Sora', sans-serif" }}
                >
                  30+
                </span>
                <p
                  className="text-xs sm:text-sm text-muted-foreground mt-1"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Projects shipped
                </p>
              </div>
              <div className="text-left">
                <span
                  className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-foreground"
                  style={{ fontFamily: "'Sora', sans-serif" }}
                >
                  4
                </span>
                <p
                  className="text-xs sm:text-sm text-muted-foreground mt-1"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Companies worked
                </p>
              </div>
            </div>

            {/* Main Heading */}
            <h1
              className="text-[4.5rem] sm:text-[6rem] md:text-[8rem] lg:text-[9rem] font-extralight tracking-tight text-foreground leading-[0.85] mb-4 sm:mb-6 animate-fade-up-delay-1"
              style={{ fontFamily: "'Sora', sans-serif" }}
            >
              Hello
            </h1>

            {/* Subtitle */}
            <p
              className="text-base sm:text-lg text-muted-foreground leading-relaxed animate-fade-up-delay-2 max-w-md mb-10"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              — I'm{" "}
              <span className="text-foreground font-medium">Joseph Ukeje</span>,
              a Senior Software Engineer specialising in Java &amp; C# .NET
            </p>

            {/* CTA Buttons */}
            <div className="flex gap-4 animate-fade-up-delay-4">
              <Link href="/projects">
                <button
                  className="px-6 py-3 bg-foreground text-background text-sm font-medium rounded-full hover:bg-foreground/90 transition-all duration-300 hover:scale-105"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  View Projects
                </button>
              </Link>
              <Link href="/resume">
                <button
                  className="px-6 py-3 border border-foreground/20 text-foreground text-sm font-medium rounded-full hover:border-foreground/50 hover:bg-foreground/5 transition-all duration-300"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  My Resume
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-[50%] -translate-x-1/2 lg:left-48 lg:translate-x-0 flex items-center gap-2 text-foreground/50 animate-fade-up-delay-4 z-20">
        <span className="text-xs tracking-widest uppercase" style={{ fontFamily: "'Inter', sans-serif" }}>
          Scroll
        </span>
        <ArrowDown size={14} className="animate-bounce" />
      </div>
    </section>
  );
}
