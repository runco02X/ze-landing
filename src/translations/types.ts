// Define the structure of our translations
export interface TranslationSchema {
  nav: {
    features: string;
    howItWorks: string;
  };
  hero: {
    title1: string;
    title2: string;
    title3: string;
    title4: string;
    subtitle: string;
    downloadNow: string;
    playStore: any; // Image import
    appStore: any; // Image import
  };
  saveMore: {
    title1: string;
    title2: string;
    description: string;
  };
  stats: {
    title: string;
    subtitle: string;
    users: string;
    countries: string;
    satisfied: string;
    goals: string;
    activeGoals: string;
    completedGoals: string;
    earnings: string;
    cta: string;
    feature1: {
      title: string;
      description: string;
    };
    feature2: {
      title: string;
      description: string;
    };
    feature3: {
      title: string;
      description: string;
    };
  };
  testimonials: {
    title: string;
    subtitle: string;
    reviews: Array<{
      name: string;
      profession: string;
      text: string;
      pictureUrl: string;
    }>;
  };
  faqs: {
    title: string;
    subtitle: string;
    questions: Array<{
      question: string;
      answer: string;
    }>;
  };
  howItWorks: {
    title: string;
    description: string;
    steps: Array<{
      number: string;
      description: string;
    }>;
  };
  
  // Features Section
  features: {
    feature1: {
      title: string;
      bullet1: string;
      bullet2: string;
      bullet3: string;
    };
    feature2: {
      title: string;
      bullet1: string;
      bullet2: string;
      bullet3: string;
    };
    feature3: {
      title: string;
      bullet1: string;
      bullet2: string;
      bullet3: string;
    };
    downloadNow: string;
  };
  functionalities: {
    title: string;
    subtitle: string;
    feature1: {
      title: string;
      bullet1: string;
      bullet2: string;
      bullet3: string;
    };
    feature2: {
      title: string;
      bullet1: string;
      bullet2: string;
      bullet3: string;
    };
    feature3: {
      title: string;
      bullet1: string;
      bullet2: string;
      bullet3: string;
    };
    feature4: {
      title: string;
      bullet1: string;
      bullet2: string;
      bullet3: string;
    };
    feature5: {
      title: string;
      bullet1: string;
      bullet2: string;
      bullet3: string;
    };
    budgetCalculator: string;
    keyFeatures: string;
    whyUseIt: string;
    howItWorks: string;
  };
  footer: {
    followUs: string;
    community: string;
    blog: string;
    faq: string;
    support: string;
    company: string;
    termsOfUse: string;
    privacyPolicy: string;
    legalMentions: string;
    cookiesPolicy: string;
    downloadApp: string;
    disclaimer: string;
    copyright: string;
  };
  notFound: {
    title: string;
    message: string;
    backHome: string;
  };
  press: {
    title: string;
    subtitle: string;
    mentions: Array<{
      name: string;
      quote: string;
      logo: string;
      link: string;
    }>;
  };
}
