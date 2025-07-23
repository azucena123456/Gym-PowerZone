import styled from 'styled-components/native';
import { View, Text, TouchableOpacity, Dimensions } from 'react-native';

const { width: screenWidth } = Dimensions.get('window');
const isPhone = screenWidth < 400;
const isTablet = screenWidth >= 400 && screenWidth < 800;

const fontSizes = {
  title: isPhone ? 20 : isTablet ? 26 : 30,
  sectionTitle: isPhone ? 16 : isTablet ? 18 : 20,
  question: isPhone ? 14 : isTablet ? 15 : 16,
  answer: isPhone ? 13 : isTablet ? 14 : 15,
  toggleIcon: isPhone ? 18 : isTablet ? 20 : 22
};

export const FAQContainer = styled(View)`
  padding: ${isPhone ? 15 : isTablet ? 20 : 25}px;
  background-color: #121212;
`;

export const FAQTitle = styled(Text)`
  font-size: ${fontSizes.title}px;
  text-align: center;
  margin-bottom: ${isPhone ? 15 : 20}px;
  color: #FFFFFF;
  font-weight: bold;
  text-transform: uppercase;
`;

export const FAQSection = styled(View)`
  margin-bottom: ${isPhone ? 15 : 20}px;
  background-color: #1E1E1E;
  padding: ${isPhone ? 12 : 15}px;
  border-radius: 8px;
  margin-left: ${isPhone ? 20 : 60}px;
  margin-right: ${isPhone ? 20 : 60}px;
`;

export const SectionTitle = styled(Text)`
  font-size: ${fontSizes.sectionTitle}px;
  color: #ff5722;
  margin-bottom: ${isPhone ? 10 : 12}px;
  font-weight: bold;
`;

export const QuestionContainer = styled(View)`
  flex-direction: row;
  align-items: center;
`;

export const QuestionHighlight = styled(View)`
  width: 4px;
  height: 24px;
  background-color: transparent;
  margin-right: 10px;
  border-radius: 2px;
`;

export const FAQQuestion = styled(TouchableOpacity)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: ${isPhone ? 6 : 8}px 0;
`;

export const QuestionText = styled(Text)`
  font-size: ${fontSizes.question}px;
  color: #E0E0E0;
  flex: 1;
  font-weight: bold;
`;

export const FAQToggleButton = styled(TouchableOpacity)`
  padding: 6px;
`;

export const ToggleIcon = styled(Text)`
  font-size: ${fontSizes.toggleIcon}px;
  color: #ff5722;
  font-weight: bold;
`;

export const FAQAnswer = styled(Text)`
  font-size: ${fontSizes.answer}px;
  color: #B0B0B0;
  margin-top: ${isPhone ? 6 : 8}px;
  padding: ${isPhone ? 6 : 8}px;
  background-color: #2A2A2A;
  border-radius: 5px;
  line-height: ${isPhone ? 18 : 20}px;
`;