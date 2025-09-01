import { useEffect, useState } from "react";

export default function GitHubContributions() {
  const [contributions, setContributions] = useState<number[]>([]);

  useEffect(() => {
    // Generate contribution data (53 weeks × 7 days = 371 days)
    const contributionData = [];
    for (let i = 0; i < 371; i++) {
      contributionData.push(Math.floor(Math.random() * 5));
    }
    setContributions(contributionData);
  }, []);

  const months = ['Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];
  const weekDays = ['Mon', 'Wed', 'Fri'];

  return (
    <div className="bg-card border border-border rounded-lg p-6">
      <h3 className="text-xl font-semibold mb-4">GitHub Contributions</h3>
      <p className="text-sm text-muted-foreground mb-4">1832 contributions in the last year</p>
      
      <div className="mb-4">
        <div className="github-contrib-grid">
          {contributions.map((intensity, index) => (
            <div
              key={index}
              className={`github-day contrib-${intensity}`}
              title={`${intensity} contributions`}
              data-testid={`contrib-day-${index}`}
            />
          ))}
        </div>
      </div>
      
      <div className="flex items-center justify-between text-xs text-muted-foreground">
        <div className="flex items-center gap-2">
          {months.map((month, index) => (
            <span key={index}>{month}</span>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <span>Less</span>
          <div className="flex gap-1">
            <div className="github-day contrib-0"></div>
            <div className="github-day contrib-1"></div>
            <div className="github-day contrib-2"></div>
            <div className="github-day contrib-3"></div>
            <div className="github-day contrib-4"></div>
          </div>
          <span>More</span>
        </div>
      </div>
    </div>
  );
}
