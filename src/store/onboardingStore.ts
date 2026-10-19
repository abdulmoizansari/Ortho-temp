import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { OnboardingData } from '../types/onboarding';

interface OnboardingState {
  data: OnboardingData;
  setGender: (gender: 'male' | 'female') => void;
  toggleSymptom: (part: string) => void;
  setQuestionnaireAnswer: (key: string, value: string) => void;
  reset: () => void;
}

const initialData: OnboardingData = {
  gender: null,
  symptoms: [],
  questionnaireAnswers: {},
};

export const useOnboardingStore = create<OnboardingState>()(
  persist(
    (set) => ({
      data: initialData,
      setGender: (gender) => set((state) => ({ data: { ...state.data, gender } })),
      toggleSymptom: (part) =>
        set((state) => {
          const symptoms = state.data.symptoms.includes(part)
            ? state.data.symptoms.filter((p) => p !== part)
            : [...state.data.symptoms, part];
          return { data: { ...state.data, symptoms } };
        }),
      setQuestionnaireAnswer: (key, value) =>
        set((state) => ({
          data: {
            ...state.data,
            questionnaireAnswers: { ...state.data.questionnaireAnswers, [key]: value },
          },
        })),
      reset: () => set({ data: initialData }),
    }),
    { name: 'orthosight-storage', storage: createJSONStorage(() => AsyncStorage) }
  )
);
