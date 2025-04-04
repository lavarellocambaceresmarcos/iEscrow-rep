import styles from './AuthIcon.module.css';
import PropsType from 'prop-types';

export default function AuthIcon({ size = '32', variant = 'gray' }) {
  return (
    <svg
      className={styles[variant]}
      width={size}
      height={size}
      viewBox="0 0 33 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_911_382)">
        <path
          d="M16.3856 16.6623C20.0262 16.6623 23.7618 19.0293 24.0038 23.7845C24.0131 23.9678 23.9493 24.1473 23.8263 24.2836C23.7034 24.4199 23.5314 24.5018 23.3481 24.5114C21.4272 24.6092 12.5309 24.6693 9.42412 24.5114C9.24066 24.502 9.06843 24.4202 8.94529 24.2839C8.82215 24.1476 8.75819 23.968 8.76749 23.7845C9.00945 19.0302 12.7451 16.6623 16.3856 16.6623ZM16.3856 8.35059C15.4671 8.35059 14.5863 8.71546 13.9368 9.36494C13.2873 10.0144 12.9224 10.8953 12.9224 11.8138C12.9224 12.7323 13.2873 13.6132 13.9368 14.2627C14.5863 14.9121 15.4671 15.277 16.3856 15.277C17.3042 15.277 18.185 14.9121 18.8345 14.2627C19.484 13.6132 19.8489 12.7323 19.8489 11.8138C19.8489 10.8953 19.484 10.0144 18.8345 9.36494C18.185 8.71546 17.3042 8.35059 16.3856 8.35059Z"
          fill="#A8A8A8"
        />
      </g>
      <circle cx="16.4932" cy="16.3506" r="15.5" stroke="#A8A8A8" />
      <defs>
        <clipPath id="clip0_911_382">
          <rect
            width="15.1111"
            height="15.1111"
            fill="white"
            transform="translate(8.89355 8.35059)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}

AuthIcon.propTypes = {
  size: PropsType.string,
  variant: PropsType.string,
};
