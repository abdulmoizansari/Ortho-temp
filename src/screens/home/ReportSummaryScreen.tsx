import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ScreenWrapper } from '../../components/ScreenWrapper';
import { PrimaryButton } from '../../components/PrimaryButton';
import { useOnboardingStore } from '../../store/onboardingStore';
import { colors, spacing, typography, radius } from '../../theme';
import { RootStackParamList } from '../../navigation/types';

type Props = NativeStackScreenProps<RootStackParamList, 'ReportSummary'>;

export const ReportSummaryScreen: React.FC<Props> = ({ navigation }) => {
  const { data, reset } = useOnboardingStore();

  const onStartOver = () => {
    reset();
    navigation.reset({ index: 0, routes: [{ name: 'GenderSelection' }] });
  };

  return (
    <ScreenWrapper>
      <Text style={styles.title}>Assessment Complete</Text>
      <Text style={styles.subtitle}>Based on your answers, here is your clinical summary.</Text>

      <ScrollView style={{ flex: 1, marginTop: spacing.md }}>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Affected Areas</Text>
          <Text style={styles.cardText}>{data.symptoms.join(', ').replace(/_/g, ' ')}</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Your Responses</Text>
          {Object.entries(data.questionnaireAnswers).map(([key, val]) => (
            <Text key={key} style={styles.cardText}>• {key.toUpperCase()}: {val}</Text>
          ))}
        </View>

        <View style={styles.alertBox}>
          <Text style={styles.alertTitle}>Next Steps</Text>
          <Text style={styles.alertText}>
            Our AI engine is now matching your symptoms with clinical conditions (e.g., ACL tear, Rotator Cuff Injury) to generate your personalized exercise plan.
          </Text>
        </View>
      </ScrollView>

      <PrimaryButton title="Start Over (Demo Reset)" variant="secondary" onPress={onStartOver} style={styles.button} />
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  title: { ...typography.h1, color: colors.teal, marginBottom: spacing.sm },
  subtitle: { ...typography.body, color: colors.textSecondary, marginBottom: spacing.lg },
  card: { backgroundColor: colors.surface, padding: spacing.md, borderRadius: radius.md, marginBottom: spacing.md },
  cardTitle: { fontSize: 14, fontWeight: 'bold', color: colors.textPrimary, marginBottom: spacing.xs, textTransform: 'uppercase' },
  cardText: { fontSize: 15, color: colors.textSecondary, marginBottom: 6 },
  alertBox: { backgroundColor: '#E0F2FE', padding: spacing.md, borderRadius: radius.md, marginTop: spacing.md },
  alertTitle: { fontSize: 15, fontWeight: 'bold', color: '#0284C7', marginBottom: 4 },
  alertText: { fontSize: 14, color: colors.textPrimary, lineHeight: 20 },
  button: { marginTop: 'auto', marginBottom: spacing.lg },
});
