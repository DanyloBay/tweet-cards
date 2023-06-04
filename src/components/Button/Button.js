import clsx from 'clsx';
import './Button.css';

export const Button = ({ onClick, follow }) => {
  const buttonClasses = clsx({
    button: true,
    'button-followed': follow,
  });

  return (
    <button onClick={onClick} className={buttonClasses} type="button">
      {!follow ? 'Follow' : 'Following'}
    </button>
  );
};
