import { Plus, ArrowUpRight, Download } from "lucide-react";
import cvPdf from "../assets/Joseph_Ukeje_Paga_Senior_Java_Resume_V2.pdf";

import profilePhotoUrl from "../assets/profile.png";

const highlights = [
	{
		text: "Senior Software Engineer with 6+ years delivering transaction-heavy systems across fintech, payments, enterprise SaaS, and AI automation.",
	},
	{
		text: "At Interswitch, I engineer ISO 20022 payment and core-banking infrastructure with Java/Spring Boot, C#/.NET, Kafka, Redis, and Kubernetes at Tier-1 bank transaction volumes.",
	},
	{
		text: "I work across Java 21, Spring Boot, C#/.NET, Node.js/NestJS, React/TypeScript, REST/gRPC APIs, and event-driven systems.",
	},
	{
		text: "My work spans multi-tenant APIs, Open Banking and AML/KYC integrations, financial audit trails, cloud delivery, and production incident recovery.",
	},
	{
		text: "I own services from architecture and implementation through testing, observability, performance optimisation, mentoring, and production support.",
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
							I turn complex financial and enterprise workflows into reliable software.
							My work combines backend depth, product ownership, and pragmatic system
							design so services remain correct under concurrency and recover cleanly
							from failure.
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
