import PropsType from 'prop-types';

FacebookIcon.propTypes = {
  size: PropsType.string,
  theme: PropsType.string,
};

export default function FacebookIcon({ size = '17', theme = 'dark' }) {
  const color = theme === 'dark' ? '#02284A' : '#ffffff';

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1645_195)">
        <path
          d="M12.1347 9.52757L12.5487 6.80151H9.95889V5.03326C9.95889 4.28728 10.32 3.55971 11.4799 3.55971H12.6581V1.23888C12.6581 1.23888 11.5894 1.05469 10.568 1.05469C8.43421 1.05469 7.04084 2.36062 7.04084 4.72381V6.80151H4.66992V9.52757H7.04084V16.118C7.51685 16.1935 8.0038 16.2322 8.49986 16.2322C8.99593 16.2322 9.48288 16.1935 9.95889 16.118V9.52757H12.1347Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_1645_195">
          <rect
            width="15.9763"
            height="15.9763"
            fill="white"
            transform="translate(0.675781 0.65625)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
