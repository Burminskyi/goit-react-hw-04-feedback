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
    switch (e.target.name) {
      case 'good':
        setGood(good + 1);
        break;

      case 'neutral':
        setNeutral(neutral + 1);
        break;

      case 'bad':
        setBad(bad + 1);
        break;

      default:
        console.log('Invalid button name');
    }

    // if (e.target.name === 'good') {
    //   setGood(good + 1);
    //   return;
    // }
    // if (e.target.name === 'neutral') {
    //   setNeutral(neutral + 1);
    //   return;
    // }
    // if (e.target.name === 'bad') {
    //   setBad(bad + 1);
    //   return;
    // }
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
