import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './types';

import { GenderSelectionScreen } from '../screens/onboarding/GenderSelectionScreen';
import { SymptomMapScreen } from '../screens/onboarding/SymptomMapScreen';
import { QuestionnaireScreen } from '../screens/onboarding/QuestionnaireScreen';
import { ReportSummaryScreen } from '../screens/home/ReportSummaryScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const RootNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false, contentStyle: { backgroundColor: '#F5F7FA' } }}>
        <Stack.Screen name="GenderSelection" component={GenderSelectionScreen} />
        <Stack.Screen name="SymptomMap" component={SymptomMapScreen} />
        <Stack.Screen name="Questionnaire" component={QuestionnaireScreen} />
        <Stack.Screen name="ReportSummary" component={ReportSummaryScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
