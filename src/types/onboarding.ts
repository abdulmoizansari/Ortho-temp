export type Gender = 'male' | 'female';

export interface OnboardingData {
  gender: Gender | null;
  symptoms: string[]; // e.g., 'knee', 'shoulder', 'lower_back'
  questionnaireAnswers: Record<string, string>; // Stores exact answers
  
  fullName?: string;
}
