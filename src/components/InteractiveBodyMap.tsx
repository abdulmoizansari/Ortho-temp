import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Svg, { Path, Circle, G, Rect } from 'react-native-svg';
import { colors, spacing } from '../theme';

interface Props {
  selectedParts: string[];
  onTogglePart: (partId: string) => void;
}

export const InteractiveBodyMap: React.FC<Props> = ({ selectedParts, onTogglePart }) => {
  const [isFront, setIsFront] = useState(true);

  const getFill = (partId: string) => {
    return selectedParts.includes(partId) ? '#EF4444' : '#D1D5DB'; // Red if selected, Grey if not
  };

  return (
    <View style={styles.container}>
      {/* Rotation Button */}
      <TouchableOpacity style={styles.rotateBtn} onPress={() => setIsFront(!isFront)}>
        <Text style={styles.rotateText}>🔄 Rotate (Front/Back)</Text>
      </TouchableOpacity>

      <View style={styles.svgContainer}>
        <Svg viewBox="0 0 200 400" width="100%" height="100%">
          {isFront ? (
            <G>
              {/* Front Body */}
              <Circle cx="100" cy="40" r="22" fill={getFill('head')} onPress={() => onTogglePart('head')} />
              <Path d="M85,70 L115,70 L115,110 L85,110 Z" fill={getFill('neck')} onPress={() => onTogglePart('neck')} />
              {/* Chest */}
              <Path d="M75,110 L125,110 L115,160 L85,160 Z" fill={getFill('chest')} onPress={() => onTogglePart('chest')} />
              {/* Left Arm */}
              <Path d="M75,110 L55,180 L65,185 L80,120 Z" fill={getFill('left_arm')} onPress={() => onTogglePart('left_arm')} />
              {/* Right Arm */}
              <Path d="M125,110 L145,180 L135,185 L120,120 Z" fill={getFill('right_arm')} onPress={() => onTogglePart('right_arm')} />
              {/* Abdomen */}
              <Path d="M85,160 L115,160 L110,210 L90,210 Z" fill={getFill('abdomen')} onPress={() => onTogglePart('abdomen')} />
              {/* Left Leg */}
              <Path d="M90,210 L100,210 L95,320 L80,320 Z" fill={getFill('left_leg')} onPress={() => onTogglePart('left_leg')} />
              {/* Right Leg */}
              <Path d="M100,210 L110,210 L120,320 L105,320 Z" fill={getFill('right_leg')} onPress={() => onTogglePart('right_leg')} />
            </G>
          ) : (
            <G>
              {/* Back Body */}
              <Circle cx="100" cy="40" r="22" fill={getFill('head')} onPress={() => onTogglePart('head')} />
              <Path d="M85,70 L115,70 L115,110 L85,110 Z" fill={getFill('neck')} onPress={() => onTogglePart('neck')} />
              {/* Upper Back */}
              <Path d="M75,110 L125,110 L115,160 L85,160 Z" fill={getFill('upper_back')} onPress={() => onTogglePart('upper_back')} />
              {/* Arms (Back) */}
              <Path d="M75,110 L55,180 L65,185 L80,120 Z" fill={getFill('left_arm')} onPress={() => onTogglePart('left_arm')} />
              <Path d="M125,110 L145,180 L135,185 L120,120 Z" fill={getFill('right_arm')} onPress={() => onTogglePart('right_arm')} />
              {/* Lower Back */}
              <Path d="M85,160 L115,160 L110,210 L90,210 Z" fill={getFill('lower_back')} onPress={() => onTogglePart('lower_back')} />
              {/* Legs (Back) */}
              <Path d="M90,210 L100,210 L95,320 L80,320 Z" fill={getFill('left_leg')} onPress={() => onTogglePart('left_leg')} />
              <Path d="M100,210 L110,210 L120,320 L105,320 Z" fill={getFill('right_leg')} onPress={() => onTogglePart('right_leg')} />
            </G>
          )}
        </Svg>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { alignItems: 'center', marginVertical: 20 },
  rotateBtn: {
    backgroundColor: '#F3F4F6',
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#E5E7EB'
  },
  rotateText: { color: colors.textPrimary, fontWeight: 'bold', fontSize: 12 },
  svgContainer: { width: 280, height: 380, backgroundColor: '#FFFFFF', borderRadius: 16, padding: 10, elevation: 2 },
});
