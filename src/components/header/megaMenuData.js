import {
  Award,
  BarChart3,
  BookOpenCheck,
  BrainCircuit,
  Building2,
  ChartNoAxesCombined,
  ClipboardCheck,
  Code2,
  FileCheck2,
  Gauge,
  GraduationCap,
  Languages,
  ListChecks,
  ShieldCheck,
  Sparkles,
  Target,
  TestTube2,
  UsersRound,
} from 'lucide-react'

export const navigationMenus = [
  {
    id: 'platform',
    label: 'Platform',
    items: [
      {
        title: 'Skills & Aptitude Assessments',
        description: 'Evaluate reasoning, core skills, and role readiness.',
        Icon: BrainCircuit,
      },
      {
        title: 'Technical Assessments',
        description: 'Measure practical knowledge across technical subjects.',
        Icon: ClipboardCheck,
      },
      {
        title: 'Coding Challenges',
        description: 'Explore programming tasks and coding evaluations.',
        Icon: Code2,
      },
      {
        title: 'AI-Assisted Question Generation',
        description: 'Create assessment questions with AI assistance.',
        Icon: Sparkles,
      },
      {
        title: 'Results & Analytics',
        description: 'Review performance insights and assessment results.',
        Icon: ChartNoAxesCombined,
      },
      {
        title: 'Proctoring & Exam Security',
        description: 'Support secure and trusted online examinations.',
        Icon: ShieldCheck,
      },
      {
        title: 'Automated Grading',
        description: 'Score objective responses and review evaluated results.',
        Icon: FileCheck2,
      },
      {
        title: 'Certificates & Reports',
        description: 'Provide clear reports and completion recognition.',
        Icon: Award,
      },
    ],
  },
  {
    id: 'assessments',
    label: 'Assessments',
    items: [
      {
        title: 'Aptitude Assessments',
        description: 'Explore reasoning and aptitude assessment categories.',
        Icon: BrainCircuit,
      },
      {
        title: 'Technical Assessments',
        description: 'Review technical knowledge assessment examples.',
        Icon: ClipboardCheck,
      },
      {
        title: 'English Assessments',
        description: 'Explore language proficiency assessment categories.',
        Icon: Languages,
      },
      {
        title: 'Multiple-Choice Questions',
        description: 'See common objective question formats.',
        Icon: ListChecks,
      },
      {
        title: 'Subject-Based Tests',
        description: 'Organize assessments around subject areas.',
        Icon: BookOpenCheck,
      },
      {
        title: 'Custom Assessments',
        description: 'Review examples of tailored assessment formats.',
        Icon: Sparkles,
      },
    ],
  },
  {
    id: 'coding-tests',
    label: 'Coding Tests',
    items: [
      {
        title: 'Programming Challenges',
        description: 'Explore coding exercise categories.',
        Icon: Code2,
      },
      {
        title: 'Supported Programming Languages',
        description: 'Review language coverage information for the demo.',
        Icon: Languages,
      },
      {
        title: 'Sample Coding Questions',
        description: 'See examples of programming question formats.',
        Icon: BookOpenCheck,
      },
      {
        title: 'Automated Test Cases',
        description: 'Explore example approaches to code validation.',
        Icon: TestTube2,
      },
      {
        title: 'Coding Assessment Results',
        description: 'Review example coding assessment outcomes.',
        Icon: BarChart3,
      },
      {
        title: 'Difficulty Levels',
        description: 'Browse coding exercises by challenge level.',
        Icon: Gauge,
      },
    ],
  },
  {
    id: 'colleges',
    label: 'For Colleges',
    items: [
      {
        title: 'Campus Recruitment Assessments',
        description: 'Explore assessment examples for campus hiring.',
        Icon: Building2,
      },
      {
        title: 'Student Skill Evaluation',
        description: 'Review ways to assess student skills.',
        Icon: GraduationCap,
      },
      {
        title: 'Placement Readiness',
        description: 'Explore preparation and readiness assessment topics.',
        Icon: Target,
      },
      {
        title: 'Department-Wise Assessment',
        description: 'Organize assessment examples by department.',
        Icon: UsersRound,
      },
      {
        title: 'Student Performance Analytics',
        description: 'Review example student performance insights.',
        Icon: ChartNoAxesCombined,
      },
      {
        title: 'College Assessment Reports',
        description: 'Explore reporting examples for institutions.',
        Icon: FileCheck2,
      },
    ],
  },
]
