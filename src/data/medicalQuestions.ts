export interface Question {
  id: string;
  text: string;
  type: 'yes_no' | 'multiple_choice';
  options?: string[];
}

export const MEDICAL_QUESTIONS: Record<string, Question[]> = {
  knee: [
    { id: 'k1', text: 'How did your symptoms start?', type: 'multiple_choice', options: ['Suddenly', 'Gradually', 'After injury'] },
    { id: 'k2', text: 'Was there a specific injury, twist, or accident?', type: 'yes_no' },
    { id: 'k3', text: 'Did you hear/feel a "pop" or "snap" during the injury?', type: 'yes_no' },
    { id: 'k4', text: 'Where exactly is the pain?', type: 'multiple_choice', options: ['Front', 'Inner side', 'Outer side', 'Back of knee'] },
    { id: 'k5', text: 'Is the pain worse going up or down stairs?', type: 'yes_no' },
    { id: 'k6', text: 'Is the pain worse after sitting for long periods? ("Movie theater sign")', type: 'yes_no' },
    { id: 'k7', text: 'Did the knee swell immediately (within 1-2 hours) after injury?', type: 'yes_no' },
    { id: 'k8', text: 'Does the knee lock or catch (suddenly cannot bend/straighten)?', type: 'yes_no' },
    { id: 'k9', text: 'Does the knee feel unstable or give way?', type: 'yes_no' },
    { id: 'k10', text: 'Are you over 50 years old?', type: 'yes_no' },
    { id: 'k11', text: 'Is there severe swelling, redness, and warmth in the knee?', type: 'yes_no' }, // Red Flag
    { id: 'k12', text: 'Do you have a fever along with knee pain?', type: 'yes_no' }, // Red Flag
  ],
  shoulder: [
    { id: 's1', text: 'How did your symptoms start?', type: 'multiple_choice', options: ['Suddenly', 'Gradually', 'After injury'] },
    { id: 's2', text: 'Has your shoulder ever "popped out" or dislocated?', type: 'yes_no' },
    { id: 's3', text: 'Where exactly is the pain?', type: 'multiple_choice', options: ['Front', 'Side', 'Back', 'Top of shoulder'] },
    { id: 's4', text: 'Is the pain worse at night?', type: 'yes_no' },
    { id: 's5', text: 'Is there pain when raising your arm to the side (60°–120° range)?', type: 'yes_no' },
    { id: 's6', text: 'Can you raise your arm above your head at all?', type: 'yes_no' },
    { id: 's7', text: 'Is your shoulder getting progressively stiffer over weeks/months?', type: 'yes_no' },
    { id: 's8', text: 'Do you feel weakness in the shoulder?', type: 'yes_no' },
    { id: 's9', text: 'Do you have numbness or tingling in arm/hand?', type: 'yes_no' },
    { id: 's10', text: 'Are you between 40–60 years old?', type: 'yes_no' },
    { id: 's11', text: 'Do you have breathing difficulties WITH shoulder pain?', type: 'yes_no' }, // Red Flag
    { id: 's12', text: 'Is there unexplained swelling, redness, or warmth?', type: 'yes_no' }, // Red Flag
  ],
  lower_back: [
    { id: 'b1', text: 'How did your symptoms start?', type: 'multiple_choice', options: ['Suddenly', 'Gradually', 'After injury'] },
    { id: 'b2', text: 'Does the pain radiate to the leg?', type: 'yes_no' },
    { id: 'b3', text: 'Does the pain radiate below the knee?', type: 'yes_no' },
    { id: 'b4', text: 'Is the pain worse in the morning or after prolonged rest?', type: 'yes_no' },
    { id: 'b5', text: 'Does the pain improve with movement/activity?', type: 'yes_no' },
    { id: 'b6', text: 'Do you have numbness, tingling, or pins and needles in the leg?', type: 'yes_no' },
    { id: 'b7', text: 'Do you have numbness between the legs (saddle anesthesia)?', type: 'yes_no' }, // Red Flag Cauda Equina
    { id: 'b8', text: 'Do you have uncontrolled urine loss or inability to urinate?', type: 'yes_no' }, // Red Flag
  ]
};
