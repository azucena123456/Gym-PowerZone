import styled from 'styled-components';

export const FAQContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  font-family: 'Arial', sans-serif;
`;

export const FAQTitle = styled.h1`
  text-align: center;
  color: #333;
  margin-bottom: 2rem;
  font-size: 2rem;
  text-transform: uppercase;
`;

export const FAQSection = styled.section`
  margin-bottom: 2rem;

  h2 {
    color: #444;
    border-bottom: 2px solid #eee;
    padding-bottom: 0.5rem;
    margin-bottom: 1rem;
    font-size: 1.5rem;
  }
`;

export const FAQQuestion = styled.p`
  color: #666;
  padding: 0.5rem 0;
  margin-left: 1rem;
  font-size: 1.1rem;
  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    color: #000;
  }

  &::before {
    content: "•";
    color: #ff6b6b;
    margin-right: 0.5rem;
  }
`;