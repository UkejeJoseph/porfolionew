import { Bot } from "lucide-react";

export default function FlyingRobots() {
  return (
    <>
      {/* Robot 1 - Flies across the whole page */}
      <div className="fixed z-[9999] pointer-events-none" style={{ animation: "robot-fly-1 12s ease-in-out infinite" }}>
        <div className="relative">
          <div className="bg-foreground text-background text-[10px] font-bold px-2 py-1 rounded-t-lg rounded-br-lg shadow-lg mb-1 whitespace-nowrap">
            Welcome! 👋
          </div>
          <Bot size={32} className="text-foreground drop-shadow-lg" />
        </div>
      </div>

      {/* Robot 2 - Flies a different path */}
      <div className="fixed z-[9999] pointer-events-none" style={{ animation: "robot-fly-2 15s ease-in-out infinite 2s" }}>
        <div className="relative">
          <div className="bg-foreground text-background text-[10px] font-bold px-2 py-1 rounded-t-lg rounded-br-lg shadow-lg mb-1 whitespace-nowrap">
            Check this out! 🚀
          </div>
          <Bot size={24} className="text-foreground/70 drop-shadow-lg" />
        </div>
      </div>

      <style>{`
        @keyframes robot-fly-1 {
          0% {
            top: 15%;
            left: -5%;
            transform: rotate(0deg) scale(1);
          }
          15% {
            top: 8%;
            left: 25%;
            transform: rotate(10deg) scale(1.1);
          }
          30% {
            top: 35%;
            left: 55%;
            transform: rotate(-5deg) scale(0.9);
          }
          45% {
            top: 12%;
            left: 75%;
            transform: rotate(15deg) scale(1.05);
          }
          60% {
            top: 55%;
            left: 85%;
            transform: rotate(-10deg) scale(1);
          }
          75% {
            top: 70%;
            left: 45%;
            transform: rotate(8deg) scale(0.95);
          }
          90% {
            top: 40%;
            left: 10%;
            transform: rotate(-12deg) scale(1.1);
          }
          100% {
            top: 15%;
            left: -5%;
            transform: rotate(0deg) scale(1);
          }
        }

        @keyframes robot-fly-2 {
          0% {
            top: 80%;
            right: -5%;
            left: auto;
            transform: rotate(0deg) scale(1);
          }
          12% {
            top: 60%;
            right: 20%;
            left: auto;
            transform: rotate(-8deg) scale(0.9);
          }
          25% {
            top: 25%;
            right: 40%;
            left: auto;
            transform: rotate(12deg) scale(1.1);
          }
          37% {
            top: 10%;
            right: 65%;
            left: auto;
            transform: rotate(-6deg) scale(1);
          }
          50% {
            top: 45%;
            right: 80%;
            left: auto;
            transform: rotate(10deg) scale(0.95);
          }
          62% {
            top: 70%;
            right: 60%;
            left: auto;
            transform: rotate(-15deg) scale(1.05);
          }
          75% {
            top: 50%;
            right: 35%;
            left: auto;
            transform: rotate(5deg) scale(1);
          }
          87% {
            top: 85%;
            right: 15%;
            left: auto;
            transform: rotate(-10deg) scale(0.9);
          }
          100% {
            top: 80%;
            right: -5%;
            left: auto;
            transform: rotate(0deg) scale(1);
          }
        }
      `}</style>
    </>
  );
}
