import { Certification } from "@/data/certifications";

interface CertificationCardProps {
  certification: Certification;
}

export default function CertificationCard({ certification }: CertificationCardProps) {
  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
      <img 
        src={certification.image} 
        alt={certification.title} 
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h4 className="text-lg font-semibold mb-2" data-testid={`cert-title-${certification.id}`}>
          {certification.title}
        </h4>
        <a 
          href={certification.url} 
          data-testid={`link-cert-${certification.id}`}
          className="text-primary hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Certification
        </a>
      </div>
    </div>
  );
}
