import { Link, useLocation } from "wouter";
import { useCurrentTime } from "@/hooks/use-current-time";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export default function Sidebar() {
  const [location] = useLocation();
  const currentTime = useCurrentTime();

  // Navigation moved to Navbar.tsx

  return (
    <div className="sticky top-8 bg-card/60 backdrop-blur-xl border border-border rounded-2xl p-6 shadow-sm overflow-hidden flex flex-col">
      <div className="w-full">
        {/* Theme Toggle */}
        <div className="flex justify-end mb-4">
          <ThemeToggle />
        </div>

        {/* Profile Section */}
        <div className="text-center mb-8">
          <img
            src="/profile.png"
            alt="Joseph Ukeje"
            className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-primary object-cover"
          />
          <h1 className="text-2xl font-bold mb-2">Joseph Ukeje</h1>
          <p className="text-muted-foreground mb-4">Junior Software Engineer</p>
          <a
            href="mailto:ukejejoseph1@gmail.com"
            data-testid="link-email-cta"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:opacity-90 transition-opacity"
          >
            Available for work
          </a>
        </div>

        {/* Contact Info */}
        <div className="space-y-4 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center">
              📧
            </div>
            <div>
              <div className="text-xs text-muted-foreground">EMAIL</div>
              <a
                href="mailto:ukejejoseph1@gmail.com"
                data-testid="link-email"
                className="text-sm hover:text-primary"
              >
                ukejejoseph1@gmail.com
              </a>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center">
              📱
            </div>
            <div>
              <div className="text-xs text-muted-foreground">PHONE</div>
              <div className="text-sm" data-testid="text-phone">07087232777</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center">
              📍
            </div>
            <div>
              <div className="text-xs text-muted-foreground">LOCATION</div>
              <div className="text-sm" data-testid="text-location">Nigeria</div>
            </div>
          </div>

          <div className="text-center text-muted-foreground text-sm" data-testid="text-current-time">
            {currentTime}
          </div>
        </div>


      </div>
    </div>
  );
}
