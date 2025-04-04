import PropsType from 'prop-types';

YoutubeIcon.propTypes = {
  size: PropsType.string,
  theme: PropsType.string,
};

export default function YoutubeIcon({ size = '17', theme = 'dark' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1645_210)">
        <path
          d="M16.3465 4.82645C16.1622 4.14213 15.6227 3.60257 14.9384 3.41833C13.6882 3.07617 8.68735 3.07617 8.68735 3.07617C8.68735 3.07617 3.68654 3.07617 2.43634 3.40517C1.76518 3.58941 1.21246 4.14213 1.02822 4.82645C0.699219 6.07666 0.699219 8.66918 0.699219 8.66918C0.699219 8.66918 0.699219 11.2749 1.02822 12.5119C1.21246 13.1962 1.75202 13.7358 2.43634 13.92C3.6997 14.2622 8.68735 14.2622 8.68735 14.2622C8.68735 14.2622 13.6882 14.2622 14.9384 13.9332C15.6227 13.7489 16.1622 13.2094 16.3465 12.5251C16.6755 11.2749 16.6755 8.68234 16.6755 8.68234C16.6755 8.68234 16.6886 6.07666 16.3465 4.82645Z"
          fill={theme === 'dark' ? '#02284A' : '#ffffff'}
        />
        <path
          d="M7.09375 11.0637L11.2523 8.66856L7.09375 6.27344V11.0637Z"
          fill={theme === 'dark' ? '#1b80a4' : '#0056b3'}
        />
      </g>
      <defs>
        <clipPath id="clip0_1645_210">
          <rect
            width="15.9763"
            height="15.9763"
            fill="white"
            transform="translate(0.699219 0.679688)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
