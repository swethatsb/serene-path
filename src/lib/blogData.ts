export interface BlogArticle {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  tags: string[];
  author: string;
  authorRole: string;
  readTime: string;
  date: string;
  featuredImage?: string;
}

export const blogArticles: BlogArticle[] = [
  {
    slug: "daily-habits-mental-health",
    title: "5 Daily Habits to Improve Your Mental Health",
    excerpt: "Simple yet powerful practices you can incorporate into your daily routine to boost your mental wellness and resilience.",
    content: `
Mental health is not a destination but a process. It's about how you drive, not where you're going. Here are five evidence-based habits that can significantly improve your mental wellness.

## 1. Start Your Day with Mindfulness

Beginning your morning with even five minutes of [mindfulness meditation](/blog/mindfulness-stress-management) can set a positive tone for the entire day. Research shows that consistent mindfulness practice reduces cortisol levels and improves emotional regulation.

Try this: Sit comfortably, close your eyes, and focus on your breath for five minutes. When your mind wanders, gently bring it back without judgment.

## 2. Move Your Body Daily

Physical exercise is one of the most powerful tools for mental health. A 30-minute walk, yoga session, or workout releases endorphins—your brain's natural mood elevators.

Studies consistently show that regular exercise is as effective as medication for mild to moderate depression. Even a brief walk in nature can reduce [anxiety symptoms](/blog/understanding-anxiety) significantly.

## 3. Practice Gratitude Journaling

Writing down three things you're grateful for each day rewires your brain to focus on positives. This simple practice has been shown to increase happiness levels by 25% over just two weeks.

## 4. Connect with Others

Human connection is fundamental to mental health. Make time each day for meaningful conversations—whether in person, by phone, or video call. Social isolation is a significant risk factor for depression and cognitive decline.

## 5. Establish a Wind-Down Routine

Quality sleep is the foundation of mental health. Create a calming pre-bed routine: dim the lights, put away screens, read, or practice gentle stretching. Consistent sleep schedules help regulate your circadian rhythm and improve [stress management](/blog/stress-burnout-workplace).

## The Bottom Line

Small, consistent habits compound over time. You don't need to overhaul your life overnight—start with one habit and build from there. If you're struggling with your mental health, remember that seeking professional help is a sign of strength, not weakness.
    `,
    category: "Self-Care",
    tags: ["self-care", "habits", "wellness", "mindfulness"],
    author: "Dr. Sarah Chen",
    authorRole: "Clinical Psychologist",
    readTime: "5 min read",
    date: "Feb 5, 2026",
  },
  {
    slug: "understanding-anxiety",
    title: "Understanding Anxiety: Signs, Causes, and Coping Strategies",
    excerpt: "Learn to recognize anxiety symptoms and discover evidence-based techniques to manage them effectively.",
    content: `
Anxiety is one of the most common mental health challenges, affecting over 300 million people worldwide. Understanding it is the first step toward managing it effectively.

## What Is Anxiety?

Anxiety is your body's natural response to stress. It's the feeling of fear or apprehension about what's to come. While occasional anxiety is normal, chronic or excessive anxiety can interfere with daily life and may indicate an anxiety disorder.

## Common Signs of Anxiety

Recognizing the signs early is crucial for effective management:

### Physical Symptoms
- Racing heart or palpitations
- Shortness of breath
- Muscle tension and headaches
- Digestive issues
- Fatigue and difficulty sleeping

### Emotional Symptoms
- Persistent worry or dread
- Irritability and restlessness
- Difficulty concentrating
- Feeling overwhelmed

## Evidence-Based Coping Strategies

### Cognitive Behavioral Techniques

Challenge anxious thoughts by asking: Is this thought based on facts or feelings? What evidence supports or contradicts this worry? CBT has been shown to be highly effective for anxiety disorders.

### Deep Breathing Exercises

The 4-7-8 technique is particularly effective: inhale for 4 seconds, hold for 7 seconds, exhale for 8 seconds. This activates your parasympathetic nervous system, countering the fight-or-flight response.

### Progressive Muscle Relaxation

Systematically tensing and relaxing muscle groups helps release physical tension that accompanies anxiety. Practice this alongside [daily mindfulness habits](/blog/daily-habits-mental-health) for best results.

### Lifestyle Modifications

Regular exercise, adequate sleep, limiting caffeine, and maintaining social connections all play vital roles in managing anxiety. Consider incorporating [stress management techniques](/blog/stress-burnout-workplace) into your daily routine.

## When to Seek Professional Help

If anxiety is interfering with your work, relationships, or daily activities, it's time to reach out to a mental health professional. Therapy, particularly CBT, and sometimes medication can make a significant difference.

Remember: anxiety is treatable, and you don't have to face it alone.
    `,
    category: "Anxiety",
    tags: ["anxiety", "mental-health", "coping", "CBT"],
    author: "Dr. Michael Ross",
    authorRole: "Psychiatrist",
    readTime: "8 min read",
    date: "Feb 3, 2026",
  },
  {
    slug: "mindfulness-stress-management",
    title: "The Power of Mindfulness in Managing Stress",
    excerpt: "Explore how mindfulness meditation can transform your relationship with stress and improve your overall well-being.",
    content: `
In our increasingly fast-paced world, stress has become an almost constant companion for many. Mindfulness offers a scientifically-backed path to a calmer, more centered life.

## What Is Mindfulness?

Mindfulness is the practice of paying attention to the present moment without judgment. It's not about emptying your mind—it's about observing your thoughts, feelings, and sensations with curiosity and compassion.

## The Science Behind Mindfulness

Research from Harvard, Stanford, and other leading institutions has demonstrated that regular mindfulness practice:

- **Reduces cortisol levels** (the stress hormone) by up to 23%
- **Shrinks the amygdala**, the brain's fear center
- **Strengthens the prefrontal cortex**, improving decision-making
- **Boosts immune function** and reduces inflammation
- **Improves sleep quality** and duration

## Getting Started with Mindfulness

### Body Scan Meditation

Lie down comfortably and bring attention to each part of your body, starting from your toes and moving upward. Notice sensations without trying to change them. This practice builds body awareness and releases stored tension.

### Mindful Breathing

Focus on the natural rhythm of your breath. Notice the air entering and leaving your body. When your mind wanders (and it will), gently redirect your attention. Start with 5 minutes and gradually increase.

### Mindful Walking

Walk slowly and deliberately, paying attention to each step. Feel the ground beneath your feet. This is especially powerful when combined with time in nature.

## Integrating Mindfulness into Daily Life

You don't need to meditate for hours. Try these micro-practices:

- **Mindful eating**: Savor each bite without distractions
- **Mindful transitions**: Take three deep breaths between activities
- **Mindful listening**: Give full attention in conversations

These small practices complement other [daily mental health habits](/blog/daily-habits-mental-health) and build resilience against [anxiety](/blog/understanding-anxiety) over time.

## Common Obstacles and How to Overcome Them

Many people struggle with consistency. Start small—even two minutes daily is beneficial. Use apps or guided meditations if sitting in silence feels challenging. Remember, there's no "perfect" meditation session.

## Mindfulness for Specific Challenges

Mindfulness has been adapted for various conditions including chronic pain, [workplace burnout](/blog/stress-burnout-workplace), PTSD, and depression. Mindfulness-Based Stress Reduction (MBSR) and Mindfulness-Based Cognitive Therapy (MBCT) are structured programs with strong clinical evidence.
    `,
    category: "Mindfulness",
    tags: ["mindfulness", "meditation", "stress", "wellness"],
    author: "Dr. Emily Park",
    authorRole: "Mindfulness Researcher",
    readTime: "6 min read",
    date: "Feb 1, 2026",
  },
  {
    slug: "stress-burnout-workplace",
    title: "Recognizing and Overcoming Workplace Burnout",
    excerpt: "Burnout is more than just feeling tired. Learn to identify the signs and take actionable steps to recover and prevent it.",
    content: `
Workplace burnout has been officially recognized by the WHO as an occupational phenomenon. It's characterized by emotional exhaustion, cynicism, and reduced professional efficacy.

## The Three Dimensions of Burnout

### 1. Emotional Exhaustion
Feeling drained, overwhelmed, and unable to cope. You may dread going to work and feel like you have nothing left to give.

### 2. Depersonalization
Developing a cynical attitude toward your work and the people you interact with. You might feel detached or numb.

### 3. Reduced Personal Accomplishment
Feeling ineffective, doubting the value of your work, and experiencing a decline in productivity despite working harder.

## Warning Signs You Shouldn't Ignore

- Chronic fatigue that doesn't improve with rest
- Increased irritability and impatience
- Difficulty concentrating or making decisions
- Physical symptoms: headaches, stomach issues, frequent illness
- Withdrawal from colleagues and social activities
- Loss of passion for work you once enjoyed

## Recovery Strategies

### Set Clear Boundaries

Learn to say no. Establish firm work hours and protect your personal time. Turn off notifications after hours. Boundaries aren't selfish—they're essential for sustainable performance.

### Prioritize Recovery Activities

Engage in activities that genuinely recharge you. This might include exercise, creative hobbies, time in nature, or [mindfulness practices](/blog/mindfulness-stress-management). Recovery isn't passive—it requires intentional action.

### Reassess Your Workload

Have an honest conversation with your manager about your capacity. Identify tasks that can be delegated, postponed, or eliminated entirely.

### Seek Social Support

Connect with trusted colleagues, friends, or a therapist. Talking about your experience reduces isolation and can provide new perspectives. Consider whether [professional counseling](/blog/understanding-anxiety) might benefit you.

### Build Daily Resilience

Incorporate [simple daily habits](/blog/daily-habits-mental-health) that support your mental health. Small, consistent actions are more sustainable than dramatic lifestyle changes.

## Prevention Is Key

The best approach to burnout is prevention. Regular check-ins with yourself, maintaining work-life balance, and cultivating interests outside of work create a buffer against chronic stress.

If you recognize these signs in yourself, don't wait for a crisis. Reach out to a mental health professional who can help you develop a personalized recovery plan.
    `,
    category: "Stress",
    tags: ["burnout", "workplace", "stress", "recovery"],
    author: "Dr. Sarah Chen",
    authorRole: "Clinical Psychologist",
    readTime: "7 min read",
    date: "Jan 28, 2026",
  },
  {
    slug: "building-healthy-relationships",
    title: "Building Healthy Relationships: Communication Skills That Matter",
    excerpt: "Strong relationships are built on effective communication. Discover the key skills that foster deeper connections.",
    content: `
Healthy relationships—whether romantic, familial, or platonic—are one of the strongest predictors of happiness and longevity. At their core, all healthy relationships share one thing: effective communication.

## The Foundation: Active Listening

Most people listen to respond, not to understand. Active listening means:

- Giving your full attention (put away your phone)
- Reflecting back what you've heard
- Asking clarifying questions
- Withholding judgment
- Acknowledging emotions before offering solutions

## The Four Communication Pitfalls

Psychologist John Gottman identified four patterns that predict relationship breakdown:

### 1. Criticism
Attacking your partner's character rather than addressing a specific behavior. Instead of "You never listen," try "I feel unheard when I'm talking and you're on your phone."

### 2. Contempt
Mockery, sarcasm, and disrespect. This is the strongest predictor of relationship failure. Build a culture of appreciation and respect instead.

### 3. Defensiveness
Deflecting responsibility with counter-complaints. Take ownership of your part in conflicts, even when it's uncomfortable.

### 4. Stonewalling
Shutting down and withdrawing from interaction. If you're overwhelmed, take a 20-minute break and return to the conversation.

## Building Stronger Connections

### Express Appreciation Daily

Tell the people in your life what you value about them. Specific appreciation ("Thank you for making dinner, it was delicious") is more powerful than generic praise.

### Navigate Conflict Constructively

Conflict is inevitable and can be healthy. Use "I" statements, focus on behaviors rather than character, and seek understanding before agreement.

### Maintain Emotional Availability

Being present emotionally means being open to your partner's feelings even when it's uncomfortable. This builds trust and intimacy over time.

### Support Each Other's Growth

Healthy relationships encourage individual growth alongside shared goals. Support your partner's ambitions, hobbies, and friendships.

## When Relationships Need Professional Support

If communication has broken down, resentment has built up, or you're going through a major life transition, couples or family therapy can help. A skilled therapist provides a safe space to rebuild connection. Managing individual [stress](/blog/stress-burnout-workplace) and [anxiety](/blog/understanding-anxiety) also supports healthier relationships.

Remember: seeking help is not a sign that your relationship has failed—it's a sign that you care enough to invest in it.
    `,
    category: "Relationships",
    tags: ["relationships", "communication", "couples", "family"],
    author: "Dr. James Chen",
    authorRole: "Relationship Therapist",
    readTime: "7 min read",
    date: "Jan 25, 2026",
  },
  {
    slug: "sleep-mental-health-connection",
    title: "The Sleep-Mental Health Connection: Why Rest Matters",
    excerpt: "Quality sleep is foundational to mental health. Understand the science and learn practical strategies for better rest.",
    content: `
Sleep and mental health have a bidirectional relationship: poor sleep worsens mental health conditions, and mental health challenges disrupt sleep. Breaking this cycle is essential for recovery and wellness.

## The Science of Sleep and Mental Health

During sleep, your brain performs critical functions:

- **Memory consolidation**: Processing and storing the day's experiences
- **Emotional regulation**: The amygdala resets, improving emotional responses
- **Toxin removal**: The glymphatic system clears metabolic waste
- **Hormone regulation**: Growth hormone, cortisol, and melatonin are calibrated

Chronic sleep deprivation increases the risk of depression by 10x and anxiety by 5x.

## Signs Your Sleep Needs Attention

- Taking more than 30 minutes to fall asleep
- Waking frequently during the night
- Feeling unrefreshed despite adequate hours
- Relying on caffeine to function
- Difficulty concentrating or increased irritability

## Evidence-Based Sleep Strategies

### Sleep Hygiene Fundamentals

- **Consistent schedule**: Same bed and wake times, even on weekends
- **Cool, dark environment**: 65-68°F (18-20°C) is optimal
- **No screens 1 hour before bed**: Blue light suppresses melatonin
- **Limit caffeine after 2 PM**: Its half-life is 5-6 hours

### Cognitive Techniques

Racing thoughts at bedtime? Try the "worry dump"—write down everything on your mind before bed. This externalizes your worries and signals to your brain that they're stored safely for tomorrow.

### Relaxation Methods

[Progressive muscle relaxation](/blog/mindfulness-stress-management) and guided imagery are particularly effective for sleep onset. Body scan meditations can help you release physical tension accumulated during the day.

### Lifestyle Factors

Regular exercise improves sleep quality, but avoid vigorous activity within 3 hours of bedtime. [Daily wellness habits](/blog/daily-habits-mental-health) that include morning sunlight exposure help regulate your circadian rhythm naturally.

## When to Seek Help

If sleep problems persist despite good sleep hygiene, consult a professional. Conditions like sleep apnea, restless leg syndrome, or chronic insomnia may require specific treatment. Cognitive Behavioral Therapy for Insomnia (CBT-I) is the gold-standard treatment and is more effective than medication long-term.

Don't underestimate the power of good sleep. It's not a luxury—it's a necessity for mental health.
    `,
    category: "Self-Care",
    tags: ["sleep", "self-care", "wellness", "rest"],
    author: "Dr. Emily Park",
    authorRole: "Mindfulness Researcher",
    readTime: "6 min read",
    date: "Jan 22, 2026",
  },
];

export function getArticleBySlug(slug: string): BlogArticle | undefined {
  return blogArticles.find((a) => a.slug === slug);
}

export function getRelatedArticles(slug: string, count = 3): BlogArticle[] {
  const current = getArticleBySlug(slug);
  if (!current) return blogArticles.slice(0, count);

  // Prioritize same category, then shared tags
  return blogArticles
    .filter((a) => a.slug !== slug)
    .sort((a, b) => {
      const aScore =
        (a.category === current.category ? 10 : 0) +
        a.tags.filter((t) => current.tags.includes(t)).length;
      const bScore =
        (b.category === current.category ? 10 : 0) +
        b.tags.filter((t) => current.tags.includes(t)).length;
      return bScore - aScore;
    })
    .slice(0, count);
}

export const categoryColors: Record<string, string> = {
  "Self-Care": "bg-sage-light text-sage-dark",
  Anxiety: "bg-lavender text-lavender-dark",
  Mindfulness: "bg-sky-light text-sky",
  Stress: "bg-peach text-peach-dark",
  Relationships: "bg-secondary text-secondary-foreground",
};
