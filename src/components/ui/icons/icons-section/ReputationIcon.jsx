import PropTypes from 'prop-types';

ReputationIcon.propTypes = {
  size: PropTypes.string,
  theme: PropTypes.string,
};

export default function ReputationIcon({ size = '81', theme = 'dark' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 81 81"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="5.97656"
        y="66.2266"
        width="10.2857"
        height="10.2857"
        fill={theme === 'dark' ? '#E6E6E6' : '#171717'}
      />
      <rect
        x="20.1211"
        y="54.6562"
        width="10.2857"
        height="21.8571"
        fill={theme === 'dark' ? '#E6E6E6' : '#171717'}
      />
      <rect
        x="35.5488"
        y="40.5117"
        width="10.2857"
        height="36"
        fill={theme === 'dark' ? '#E6E6E6' : '#171717'}
      />
      <rect
        x="50.9766"
        y="45.6562"
        width="9"
        height="30.8571"
        fill={theme === 'dark' ? '#E6E6E6' : '#171717'}
      />
      <rect
        x="65.1211"
        y="30.2266"
        width="9"
        height="46.2857"
        fill={theme === 'dark' ? '#E6E6E6' : '#171717'}
      />
      <path
        d="M39.1918 20.4521L40.9913 22.289L5.97768 55.298L4.69264 54.0105L39.1918 20.4521Z"
        fill={theme === 'dark' ? '#E6E6E6' : '#171717'}
      />
      <rect
        x="66.8066"
        y="12.5469"
        width="2.57143"
        height="27.2995"
        transform="rotate(45.1181 66.8066 12.5469)"
        fill={theme === 'dark' ? '#E6E6E6' : '#171717'}
      />
      <rect
        x="51.0664"
        y="31.8086"
        width="2.57143"
        height="16.4016"
        transform="rotate(135.885 51.0664 31.8086)"
        fill={theme === 'dark' ? '#E6E6E6' : '#171717'}
      />
      <path
        d="M69.458 9.00333L73.4087 8.249L71.4546 14.3026L70.7776 16.8317L63.9985 10.2213L69.458 9.00333Z"
        fill={theme === 'dark' ? '#E6E6E6' : '#171717'}
      />
    </svg>
  );
}
