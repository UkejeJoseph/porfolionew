import { useEffect, useRef } from "react";
import { ArrowDown, Bot, CornerRightDown } from "lucide-react";
import profilePhoto from "../assets/profile.png";

export default function HeroSection() {
  const hasSpoken = useRef(false);

  useEffect(() => {
    const handleInteraction = () => {
      if (!hasSpoken.current) {
        hasSpoken.current = true;
        const msg = new SpeechSynthesisUtterance("Welcome, glad to make your acquaintance.");
        window.speechSynthesis.speak(msg);
        
        // Remove listeners once spoken
        window.removeEventListener("click", handleInteraction);
        window.removeEventListener("scroll", handleInteraction);
      }
    };

    window.addEventListener("click", handleInteraction);
    window.addEventListener("scroll", handleInteraction);

    return () => {
      window.removeEventListener("click", handleInteraction);
      window.removeEventListener("scroll", handleInteraction);
    };
  }, []);
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
          <div className="lg:hidden w-full mb-8 sm:mb-12 flex justify-center relative z-10">
            <div className="w-[60vw] sm:w-[50vw] max-w-[250px] aspect-square rounded-full overflow-hidden border-4 border-muted">
              <img
                src={profilePhoto}
                alt="Joseph Ukeje - Senior Software Engineer"
                className="w-full h-full object-cover object-center grayscale contrast-125 brightness-110"
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
            <div className="animate-fade-up-delay-3 relative mt-12">
              {/* Robot Mascot pointing to the button */}
              <div className="absolute -top-12 left-8 md:left-24 flex items-end gap-2 animate-fly-around z-50">
                <div className="bg-foreground text-background text-xs font-bold px-3 py-1 rounded-t-xl rounded-br-xl shadow-lg border border-border">
                  View Secondary!
                </div>
                <Bot size={28} className="text-primary mb-1" />
                <CornerRightDown size={24} className="text-primary translate-y-2 -translate-x-1" />
              </div>
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
      <div className="absolute right-12 top-1/2 -translate-y-1/2 hidden lg:block">
        <div className="relative w-[400px] h-[400px] xl:w-[500px] xl:h-[500px] rounded-full overflow-hidden border-[8px] border-muted shadow-2xl">
          <img
            src={profilePhoto}
            alt="Joseph Ukeje - Senior Software Engineer"
            className="w-full h-full object-cover object-center grayscale contrast-125 brightness-110"
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