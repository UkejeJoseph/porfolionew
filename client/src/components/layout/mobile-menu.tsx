import { Link, useLocation } from "wouter";
import { useCurrentTime } from "@/hooks/use-current-time";
import { cn } from "@/lib/utils";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const [location] = useLocation();
  const currentTime = useCurrentTime();

  const navigation = [
    { name: "About", path: "/" },
    { name: "Resume", path: "/resume" },
    { name: "Projects", path: "/projects" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={onClose}
        />
      )}
      
      {/* Mobile Sidebar */}
      <div className={cn(
        "md:hidden fixed w-80 bg-card border-r border-border h-screen overflow-y-auto z-40 sidebar-mobile",
        isOpen && "open"
      )}>
        <div className="p-6">
          {/* Profile Section */}
          <div className="text-center mb-8">
            <img 
              src="https://raw.githubusercontent.com/vishxly/Certification/main/my.jpg" 
              alt="Vishal Yadav" 
              className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-primary"
            />
            <h1 className="text-2xl font-bold mb-2">Vishal Yadav</h1>
            <p className="text-muted-foreground mb-4">Fullstack Developer</p>
            <a 
              href="mailto:vishxly@gmail.com" 
              data-testid="link-email-cta-mobile"
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
                  href="mailto:vishxly@gmail.com" 
                  data-testid="link-email-mobile"
                  className="text-sm hover:text-primary"
                >
                  vishxly@gmail.com
                </a>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center">
                📱
              </div>
              <div>
                <div className="text-xs text-muted-foreground">PHONE</div>
                <div className="text-sm" data-testid="text-phone-mobile">8668279388</div>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center">
                📍
              </div>
              <div>
                <div className="text-xs text-muted-foreground">LOCATION</div>
                <div className="text-sm" data-testid="text-location-mobile">Nashik, India</div>
              </div>
            </div>
            
            <div className="text-center text-muted-foreground text-sm" data-testid="text-current-time-mobile">
              {currentTime}
            </div>
          </div>

          {/* Navigation */}
          <nav className="space-y-2">
            {navigation.map((item) => (
              <Link key={item.path} href={item.path}>
                <div
                  data-testid={`nav-${item.name.toLowerCase()}-mobile`}
                  onClick={onClose}
                  className={cn(
                    "flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-secondary transition-colors cursor-pointer",
                    location === item.path && "bg-primary text-primary-foreground"
                  )}
                >
                  <span>{item.name}</span>
                </div>
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
}
