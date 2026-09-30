import { Brain, HeartHandshake, Flower2, UsersRound, CloudSun, Heart, BriefcaseBusiness, Sparkles } from "lucide-react";

export const services = [
  { title: "Anxiety & stress", description: "Find steadier ground with practical support for anxiety, overwhelm, and the pressures of everyday life.", icon: CloudSun },
  { title: "Depression support", description: "A compassionate space to understand what you’re experiencing and move forward at your own pace.", icon: Flower2 },
  { title: "Relationships & couples", description: "Make space for honest conversation, deeper understanding, and healthier ways of connecting.", icon: HeartHandshake },
  { title: "Trauma support", description: "Careful, considered support to help you process difficult experiences in a safe environment.", icon: Heart },
  { title: "Psychological assessments", description: "Personality and intelligence assessments tailored to your needs, with clear, thoughtful reporting.", icon: Brain },
  { title: "Workplace wellbeing", description: "Counselling and tailored programmes that help people and organisations thrive together.", icon: BriefcaseBusiness },
] as const;

export const values = [
  { title: "Confidential by nature", description: "A private space where your story is treated with care and respect.", icon: Heart },
  { title: "Here without judgement", description: "Come as you are. Every conversation begins with listening.", icon: UsersRound },
  { title: "Care that fits you", description: "Thoughtful, evidence-informed support shaped around your needs.", icon: Sparkles },
] as const;