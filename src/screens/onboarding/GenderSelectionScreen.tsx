import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ScreenWrapper } from '../../components/ScreenWrapper';
import { useOnboardingStore } from '../../store/onboardingStore';
import { colors, spacing, typography } from '../../theme';
import { RootStackParamList } from '../../navigation/types';

type Props = NativeStackScreenProps<RootStackParamList, 'GenderSelection'>;

export const GenderSelectionScreen: React.FC<Props> = ({ navigation }) => {
  const { setGender } = useOnboardingStore();

  const handleSelect = (gender: 'male' | 'female') => {
    setGender(gender);
    navigation.navigate('SymptomMap');
  };

  return (
    <ScreenWrapper>
      <View style={styles.header}>
        <Text style={styles.title}>Welcome to OrthoSight</Text>
        <Text style={styles.subtitle}>To personalize your experience, please select your biological gender for the body model.</Text>
      </View>

      <View style={styles.options}>
        <TouchableOpacity style={styles.card} onPress={() => handleSelect('male')}>
          <Text style={styles.icon}>👨</Text>
          <Text style={styles.cardText}>Male</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={() => handleSelect('female')}>
          <Text style={styles.icon}>👩</Text>
          <Text style={styles.cardText}>Female</Text>
        </TouchableOpacity>
      </View>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  header: { marginTop: 60, alignItems: 'center' },
  title: { ...typography.h1, color: colors.teal, marginBottom: spacing.md },
  subtitle: { ...typography.body, color: colors.textSecondary, textAlign: 'center', marginBottom: 40, paddingHorizontal: 20 },
  options: { flexDirection: 'row', justifyContent: 'space-around', paddingHorizontal: 20 },
  card: {
    backgroundColor: colors.surface,
    width: 140, height: 160,
    borderRadius: 20, alignItems: 'center', justifyContent: 'center',
    borderWidth: 2, borderColor: colors.border,
    elevation: 3,
  },
  icon: { fontSize: 60, marginBottom: 10 },
  cardText: { fontSize: 18, fontWeight: 'bold', color: colors.textPrimary },
});
