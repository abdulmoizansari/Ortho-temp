import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ScreenWrapper } from '../../components/ScreenWrapper';
import { PrimaryButton } from '../../components/PrimaryButton';
import { InteractiveBodyMap } from '../../components/InteractiveBodyMap';
import { useOnboardingStore } from '../../store/onboardingStore';
import { colors, spacing, typography } from '../../theme';
import { RootStackParamList } from '../../navigation/types';

type Props = NativeStackScreenProps<RootStackParamList, 'SymptomMap'>;

export const SymptomMapScreen: React.FC<Props> = ({ navigation }) => {
  const { data, toggleSymptom } = useOnboardingStore();

  const handleNext = () => {
    navigation.navigate('Questionnaire');
  };

  return (
    <ScreenWrapper>
      <Text style={styles.stepLabel}>Step 1 of 2</Text>
      <Text style={styles.title}>Where is your pain?</Text>
      <Text style={styles.subtitle}>
        Select one or more areas on the body. Selected areas light up red.
      </Text>

      <InteractiveBodyMap
        selectedParts={data.symptoms}
        onTogglePart={toggleSymptom}
      />

      <PrimaryButton
        title="Next"
        onPress={handleNext}
        disabled={data.symptoms.length === 0}
        style={styles.button}
      />
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  stepLabel: { color: colors.teal, fontSize: 13, fontWeight: '600', marginBottom: spacing.sm },
  title: { ...typography.h1, color: colors.textPrimary, marginBottom: spacing.sm },
  subtitle: { ...typography.body, color: colors.textSecondary, marginBottom: spacing.sm },
  button: { marginTop: spacing.xl },
});
