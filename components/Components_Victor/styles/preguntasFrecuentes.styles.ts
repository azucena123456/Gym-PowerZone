import styled from 'styled-components/native';
import { View, Text, TouchableOpacity } from 'react-native';

export const FAQContainer = styled(View)`
  padding: 20px;
  background-color: #121212;
  width: 100%;
`;

export const FAQTitle = styled(Text)`
  font-size: 24px;
  text-align: center;
  margin-bottom: 20px;
  color: #FFFFFF;
  font-weight: bold;
  text-transform: uppercase;
`;

export const FAQColumnsContainer = styled(View)`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
`;

export const FAQColumn = styled(View)<{ singleColumn: boolean }>`
  width: ${props => props.singleColumn ? '100%' : '48%'};
  margin-bottom: 15px;
`;

export const QuestionContainer = styled(View)`
  flex-direction: row;
  align-items: center;
  width: 100%;
`;

export const QuestionHighlight = styled(View)<{ hovered: boolean }>`
  width: 4px;
  height: 24px;
  background-color: ${props => props.hovered ? '#ff5722' : 'transparent'};
  margin-right: 10px;
  border-radius: 2px;
`;

export const FAQQuestion = styled(TouchableOpacity)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  margin-bottom: 10px;
  width: 100%;
`;

export const QuestionText = styled(Text)`
  font-size: 16px;
  color: #E0E0E0;
  flex: 1;
  font-weight: bold;
`;

export const ToggleIcon = styled(Text)`
  font-size: 20px;
  color: #ff5722;
  font-weight: bold;
  margin-left: 10px;
`;

export const FAQAnswer = styled(Text)`
  font-size: 14px;
  color: #B0B0B0;
  margin-top: 10px;
  padding: 10px;
  background-color: #2A2A2A;
  border-radius: 5px;
  line-height: 22px;
  margin-bottom: 15px;
  width: 100%;
`;