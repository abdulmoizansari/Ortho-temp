import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ScreenWrapper } from '../../components/ScreenWrapper';
import { PrimaryButton } from '../../components/PrimaryButton';
import { useOnboardingStore } from '../../store/onboardingStore';
import { MEDICAL_QUESTIONS, Question } from '../../data/medicalQuestions';
import { colors, spacing, typography, radius } from '../../theme';
import { RootStackParamList } from '../../navigation/types';

type Props = NativeStackScreenProps<RootStackParamList, 'Questionnaire'>;

export const QuestionnaireScreen: React.FC<Props> = ({ navigation }) => {
  const { data, setQuestionnaireAnswer } = useOnboardingStore();
  
  // Gather unique questions from all selected body parts
  const getQuestionsForSymptoms = (): Question[] => {
    let questions: Question[] = [];
    data.symptoms.forEach((symptom) => {
      if (MEDICAL_QUESTIONS[symptom]) {
        questions = [...questions, ...MEDICAL_QUESTIONS[symptom]];
      }
    });
    // Remove duplicates by ID (if any)
    return Array.from(new Map(questions.map(q => [q.id, q])).values());
  };

  const questions = getQuestionsForSymptoms();
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentQ = questions[currentIndex];

  const handleAnswer = (answer: string) => {
    setQuestionnaireAnswer(currentQ.id, answer);
    
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      navigation.navigate('ReportSummary');
    }
  };

  if (!currentQ) {
    return (
      <ScreenWrapper>
        <Text style={styles.title}>No specific questions found.</Text>
        <PrimaryButton title="Continue" onPress={() => navigation.navigate('ReportSummary')} />
      </ScreenWrapper>
    );
  }

  // Progress calculation
  const progress = ((currentIndex) / questions.length) * 100;

  return (
    <ScreenWrapper>
      {/* Progress Bar */}
      <View style={styles.progressBarBg}>
        <View style={[styles.progressBarFill, { width: `${progress}%` }]} />
      </View>
      
      <Text style={styles.stepLabel}>Question {currentIndex + 1} of {questions.length}</Text>
      <Text style={styles.title}>{currentQ.text}</Text>

      <View style={styles.optionsContainer}>
        {currentQ.type === 'yes_no' ? (
          <>
            <TouchableOpacity style={styles.optionBtn} onPress={() => handleAnswer('Yes')}>
              <Text style={styles.optionText}>Yes</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionBtn} onPress={() => handleAnswer('No')}>
              <Text style={styles.optionText}>No</Text>
            </TouchableOpacity>
          </>
        ) : (
          currentQ.options?.map((opt) => (
            <TouchableOpacity key={opt} style={styles.optionBtn} onPress={() => handleAnswer(opt)}>
              <Text style={styles.optionText}>{opt}</Text>
            </TouchableOpacity>
          ))
        )}
      </View>

      <PrimaryButton
        title="Back"
        variant="ghost"
        onPress={() => {
          if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
          else navigation.goBack();
        }}
        style={styles.backButton}
      />
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  progressBarBg: { height: 6, backgroundColor: colors.border, borderRadius: 3, marginBottom: spacing.xl },
  progressBarFill: { height: 6, backgroundColor: colors.teal, borderRadius: 3 },
  stepLabel: { color: colors.teal, fontSize: 13, fontWeight: '600', marginBottom: spacing.sm },
  title: { ...typography.h2, color: colors.textPrimary, marginBottom: spacing.xxl, lineHeight: 34 },
  optionsContainer: { flex: 1, gap: spacing.md },
  optionBtn: {
    backgroundColor: colors.surface,
    padding: spacing.lg,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.border,
    elevation: 1,
  },
  optionText: { fontSize: 16, color: colors.textPrimary, fontWeight: '500' },
  backButton: { marginTop: 'auto', marginBottom: spacing.lg },
});
