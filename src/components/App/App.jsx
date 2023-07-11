import { useState } from 'react';
import FeedbackOptions from '../FeedbackOptions';
import Statistics from '../Statistics';
import Section from '../Section';
import Notification from '../Notification';

export function App() {
  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [neutral, setNeutral] = useState(0);

  const feedbackType = ['good', 'neutral', 'bad'];

  const total = good + neutral + bad;

  const positiveFeedback = Math.round((good * 100) / total);

  const onLeaveFeedback = (option) => {
    switch (option) {
      case 'good':
        setGood(prevValue => prevValue + 1);
        break;
      
      case 'bad':
        setBad(prevValue => prevValue + 1);
        break;
      
      case 'neutral':
        setNeutral(prevValue => prevValue + 1);
        break;
      
      default:
        console.log(`${option} is not recognized`);
    }
  };

  return (
      <div>
        <Section title="Please leave your feedback">
          <FeedbackOptions
            options={feedbackType}
            onLeaveFeedback={onLeaveFeedback}
          />
        </Section>
        <Section title="Statistic">
          {total === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positiveFeedback}
            />
          )}
        </Section>
      </div>
    );
}