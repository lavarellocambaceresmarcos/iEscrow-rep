import PropsType from 'prop-types';

TikTokIcon.propTypes = {
  size: PropsType.string,
  theme: PropsType.string,
};

export default function TikTokIcon({ size = '17', theme = 'dark' }) {
  const color = theme === 'dark' ? '#02284A' : '#ffffff';

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1645_207)">
        <path
          d="M12.1766 0.679688H9.41848V11.5621C9.41848 12.8588 8.35768 13.9238 7.03754 13.9238C5.7174 13.9238 4.65658 12.8588 4.65658 11.5621C4.65658 10.2887 5.69383 9.24669 6.96683 9.2004V6.46822C4.16153 6.51451 1.89844 8.76047 1.89844 11.5621C1.89844 14.3869 4.20867 16.656 7.06112 16.656C9.91353 16.656 12.2238 14.3638 12.2238 11.5621V5.98197C13.261 6.72291 14.534 7.16284 15.8777 7.186V4.45381C13.8032 4.38435 12.1766 2.71725 12.1766 0.679688Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_1645_207">
          <rect
            width="15.9763"
            height="15.9763"
            fill="white"
            transform="translate(0.701172 0.679688)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
