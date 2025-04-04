import PropsTypes from 'prop-types';

export default function VideoIcon({ theme = 'dark' }) {
  return (
    <svg
      width="9"
      height="15"
      viewBox="0 0 9 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.00781 7.38525L0.768682 14.6479L0.768682 0.122565L9.00781 7.38525Z"
        fill={theme === 'dark' ? '#ffffff' : '#171717'}
      />
    </svg>
  );
}

VideoIcon.propTypes = {
  theme: PropsTypes.string,
};
