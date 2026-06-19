import { Plus, ArrowUpRight, Download } from "lucide-react";
import cvPdf from "../assets/Atharv_s_Cv.pdf";

import profilePhotoUrl from "../assets/profile.png";

const highlights = [
	{
		text: "Senior Software Engineer with 5+ years building high-throughput enterprise systems across fintech, oil & gas, and AI automation.",
	},
	{
		text: "Currently at Interswitch Group — engineering ISO 20022 payment infrastructure in Java Spring Boot & C# .NET Core 8, processing millions of transactions across Tier-1 banks.",
	},
	{
		text: "Deep expertise in gRPC microservices, distributed systems, IBM MQ, Kubernetes, and enterprise integration patterns.",
	},
	{
		text: "I run a developer community on daily.dev with 2,000+ active members, and write technical blogs with over 1 million views.",
	},
	{
		text: "Passionate about crafting systems that are not just functional, but fault-tolerant, observable, and production-grade.",
	},
];

export default function AboutSection() {
	return (
		<section id="about" className="py-24 lg:py-32 bg-tertiary">
			<div className="container mx-auto px-6 lg:px-20">
				<div className="grid lg:grid-cols-12 gap-12 lg:gap-8">
					{/* Left Column - Text */}
					<div className="lg:col-span-4">
						<h2 className="font-display text-4xl md:text-5xl font-light tracking-tight text-foreground mb-6">
							About Me
						</h2>

						<p className="text-base text-muted-foreground font-body leading-relaxed italic">
							I'm specialized in turning complex problems into elegant solutions. My
							approach blends creativity with strategic thinking to deliver applications
							that not only work great but scale seamlessly. Ready to start your next
							project?
						</p>

							{/* Download CV Button */}
						<a
							href={cvPdf}
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center gap-3 mt-6 px-6 py-3 border border-foreground/20 rounded-full text-sm font-body text-foreground hover:bg-foreground hover:text-primary-foreground transition-all duration-300 group"
						>
							<Download size={16} className="group-hover:animate-bounce" />
							View CV
						</a>

						{/* Decorative Arrow */}
						<div className="mt-8 hidden lg:block">
							<svg
								width="60"
								height="100"
								viewBox="0 0 60 100"
								fill="none"
								className="text-muted-foreground/30"
							>
								<path
									d="M30 0 C30 50, 50 70, 50 100"
									stroke="currentColor"
									strokeWidth="1.5"
									fill="none"
								/>
								<path
									d="M45 90 L50 100 L55 90"
									stroke="currentColor"
									strokeWidth="1.5"
									fill="none"
								/>
							</svg>
						</div>
					</div>

					{/* Center Column - Stats & Image */}
					<div className="lg:col-span-4 space-y-6">
						{/* Stats Card */}
						<div className="bg-card rounded-2xl p-8 card-shadow">
							<div className="w-12 h-12 rounded-full border border-border flex items-center justify-center mb-6">
								<svg
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="1.5"
									className="text-foreground"
								>
									<circle cx="12" cy="12" r="10" />
									<path d="M12 6v6l4 2" />
								</svg>
							</div>
							<div className="text-5xl font-display font-light tracking-tight text-foreground mb-2">
								40%
							</div>
							<p className="text-sm text-muted-foreground font-body">
								Average transaction throughput boost delivered across Tier-1 bank integrations
							</p>
						</div>

						{/* Image */}
						<div className="w-[80vw] sm:w-[60vw] max-w-[350px] aspect-square rounded-full overflow-hidden border-[8px] border-muted mx-auto shadow-xl">
							<img
								src={profilePhotoUrl}
								alt="About Joseph Ukeje"
								className="w-full h-full object-cover object-center grayscale contrast-125 brightness-110"
							/>
						</div>
					</div>

					{/* Right Column - Profile Card & Highlights */}
					<div className="lg:col-span-4 space-y-6">
						{/* Profile Card */}
						<div className="relative rounded-2xl overflow-hidden bg-muted">
							<img
								src={profilePhotoUrl}
								alt="Joseph Ukeje Profile"
								className="w-full h-48 object-contain object-bottom grayscale contrast-125 brightness-110 bg-muted p-4"
							/>
							<a
								href="https://www.linkedin.com/in/joseph-ukeje-8a0300220/"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="View Joseph's LinkedIn"
								className="absolute top-4 right-4 w-10 h-10 bg-card rounded-full flex items-center justify-center hover:bg-foreground hover:text-primary-foreground transition-colors"
							>
								<ArrowUpRight size={18} />
							</a>
						</div>

						{/* Highlights */}
						<div className="space-y-4">
							{highlights.map((item, index) => (
								<div key={index} className="flex gap-4">
									<div className="w-6 h-6 rounded-full bg-foreground flex items-center justify-center flex-shrink-0 mt-1">
										<Plus size={14} className="text-primary-foreground" />
									</div>
									<p className="text-sm text-muted-foreground font-body leading-relaxed">
										{item.text}
									</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}