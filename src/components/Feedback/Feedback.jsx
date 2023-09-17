import PropTypes from 'prop-types';
import { Button, FeedbackList } from './Feedback.styled';

export const Feedback = ({ options, onAddFeedback }) => {
  return (
    <div>
      <FeedbackList>
        {options.map((option, i) => {
          return (
            <li key={i}>
              <Button type="button" onClick={() => onAddFeedback(option)}>
                {option}
              </Button>
            </li>
          );
        })}
      </FeedbackList>
    </div>
  );
};

Feedback.protoType = {
  onAddFeedback: PropTypes.func,
};
