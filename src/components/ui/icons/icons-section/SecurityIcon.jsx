import PropTypes from 'prop-types';

SecurityIcon.propTypes = {
  size: PropTypes.string,
  theme: PropTypes.string,
};

export default function SecurityIcon({ size = '81', theme = 'dark' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 81 81"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M40.2536 3.51172C40.2351 3.53281 40.2166 3.55387 40.1979 3.57487M40.1979 3.57487C34.7102 9.74519 20.4327 12.0826 13.9591 12.4801C12.4535 32.6884 14.9432 56.2863 40.2536 75.5117C64.1783 57.3043 68.6961 32.966 66.548 12.4801C60.8094 12.6074 47.5054 11.0045 40.1979 3.57487Z"
        stroke={theme === 'dark' ? '#E6E6E6' : '#171717'}
        strokeWidth="3"
      />
      <rect
        x="27.1113"
        y="32.8809"
        width="26.4131"
        height="19.2338"
        rx="1"
        fill={theme === 'dark' ? '#E6E6E6' : '#171717'}
      />
      <rect
        x="37.6738"
        y="40.9707"
        width="5.29408"
        height="7.5084"
        fill={theme === 'dark' ? '#171717' : '#E6E6E6'}
      />
      <ellipse
        cx="40.3198"
        cy="39.5282"
        rx="4.58547"
        ry="4.6024"
        fill={theme === 'dark' ? '#171717' : '#E6E6E6'}
      />
      <path
        d="M30.6106 30.9738C30.1932 26.5177 31.513 17.6055 40.1308 17.6055C49.1756 17.451 50.488 26.4533 50.0136 30.9738"
        stroke={theme === 'dark' ? '#E6E6E6' : '#171717'}
        strokeWidth="2"
      />
    </svg>
  );
}
