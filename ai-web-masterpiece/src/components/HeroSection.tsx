import { ArrowDown } from "lucide-react";

export default function HeroSection() {
  const scrollToAbout = () => {
    const element = document.querySelector("#about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center relative overflow-hidden bg-background">
      {/* Side vertical text with connecting line */}
      <div className="hidden lg:flex flex-col items-center absolute left-8 top-1/2 -translate-y-1/2 gap-4">
        <span className="vertical-text text-xs tracking-[0.3em] text-muted-foreground uppercase font-body">
          Senior Software Engineer
        </span>
        <div className="w-px h-24 bg-border"></div>
        <span className="vertical-text text-xs tracking-[0.3em] text-muted-foreground uppercase font-body">
          2026
        </span>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-16 relative z-10">
        <div className="min-h-screen flex flex-col lg:flex-row items-start lg:items-center py-16 sm:py-20 lg:py-24">
          {/* Mobile Image - Positioned at the top on mobile */}
          <div className="lg:hidden w-full mb-8 sm:mb-12 flex justify-center relative z-10">
            <div className="w-[80vw] sm:w-[70vw] max-w-md h-[50vh] sm:h-[55vh]">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800"
                alt="Joseph Ukeje - Senior Software Engineer"
                className="w-full h-full object-contain object-center grayscale"
              />
            </div>
          </div>

          {/* Left Content */}
          <div className="w-full max-w-xl lg:pl-12 relative z-20">
            {/* Stats */}
            <div className="flex gap-8 sm:gap-12 mb-8 sm:mb-12 lg:mb-16 animate-fade-up">
              <div className="text-left">
                <span className="text-3xl sm:text-4xl md:text-5xl font-display font-light tracking-tight text-foreground">5+</span>
                <p className="text-xs sm:text-sm text-muted-foreground mt-1 font-body">Years experience</p>
              </div>
              <div className="text-left">
                <span className="text-3xl sm:text-4xl md:text-5xl font-display font-light tracking-tight text-foreground">30+</span>
                <p className="text-xs sm:text-sm text-muted-foreground mt-1 font-body">Projects shipped</p>
              </div>
            </div>

            {/* Main Heading */}
            <h1 className="font-display text-[4.5rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] font-extralight tracking-tight text-foreground leading-[0.85] mb-4 sm:mb-6 animate-fade-up-delay-1">
              Hello
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-muted-foreground font-body leading-relaxed animate-fade-up-delay-2 max-w-md mb-8">
              — It's <span className="text-foreground">Joseph Ukeje</span>, a Senior Software Engineer specialising in Java &amp; C# .NET
            </p>

            {/* Legacy Portfolio Button */}
            <div className="animate-fade-up-delay-3">
              <a
                href="http://localhost:4000/"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-foreground text-background font-body text-sm font-medium rounded-full hover:bg-foreground/90 transition-colors"
              >
                View Legacy Portfolio
                <ArrowDown size={16} className="-rotate-90" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Profile Image - Positioned to the right edge (Desktop only) */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden lg:block">
        <div className="relative w-[45vw] h-[90vh]">
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800"
            alt="Joseph Ukeje - Senior Software Engineer"
            className="w-full h-full object-cover object-top grayscale"
          />
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-[40%] -translate-x-1/2 sm:bottom-10 sm:left-[40%] sm:-translate-x-1/2 md:bottom-20 md:left-28 md:translate-x-0 lg:bottom-28 lg:left-48 flex items-center justify-center gap-2 text-foreground/70 hover:text-foreground transition-all duration-300 animate-fade-up-delay-4 font-body z-30"
        aria-label="Scroll to about section"
      >
        <span className="text-sm">Scroll down</span>
        <ArrowDown size={16} className="animate-bounce" />
      </button>
    </section>
  );
}