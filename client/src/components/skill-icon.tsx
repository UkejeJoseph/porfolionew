import { Skill } from "@/data/skills";

interface SkillIconProps {
  skill: Skill;
}

export default function SkillIcon({ skill }: SkillIconProps) {
  return (
    <div className="text-center">
      <img 
        src={skill.icon} 
        alt={skill.name} 
        className="skill-icon mx-auto mb-2"
        data-testid={`skill-icon-${skill.name.toLowerCase().replace(/\s+/g, '-')}`}
      />
      <span className="text-sm" data-testid={`skill-name-${skill.name.toLowerCase().replace(/\s+/g, '-')}`}>
        {skill.name}
      </span>
    </div>
  );
}
