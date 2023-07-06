import { useState } from 'react';
import { Statistics } from './Statistics/Statistics.jsx';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions.jsx';
import { Section } from './Section/Section.jsx';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((100 / (good + neutral + bad)) * good) || 0;
  };

  const handleBtnClick = e => {
    // switch (e.target.name) {
    //   case 'good':
    //     setGood(prev => prev + 1);
    //     break;
    //   case 'neutral':
    //     setNeutral(prev => prev + 1);
    //     break;
    //   case 'bad':
    //     setBad(prev => prev + 1);
    //     break;
    //   default:
    //     console.log('Invalid button name');
    // }
    const { name } = e.target;
    if (name === 'good') return setGood(prev => prev + 1);
    if (name === 'neutral') return setNeutral(prev => prev + 1);
    if (name === 'bad') return setBad(prev => prev + 1);
  };

  return (
    <Section title={'Please leave feedback'}>
      <FeedbackOptions
        options={{ good, neutral, bad }}
        onLeaveFeedback={handleBtnClick}
      />
      <h3>Statistics</h3>
      {countTotalFeedback() === 0 ? (
        <p>There is no feedback</p>
      ) : (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          positiveFeedbacks={countPositiveFeedbackPercentage()}
        />
      )}
    </Section>
  );
};
