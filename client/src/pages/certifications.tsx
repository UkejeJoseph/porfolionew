import { certifications } from "@/data/certifications";
import CertificationCard from "@/components/certification-card";
import LiveVisitors from "@/components/ui/live-visitors";

export default function Certifications() {
    return (
        <div className="p-8">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-2">Certifications</h2>
                <div className="text-muted-foreground text-sm mb-8">
                    (My Credentials)
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {certifications.map((cert) => (
                        <CertificationCard key={cert.id} certification={cert} />
                    ))}
                </div>
            </div>
        </div>
    );
}
