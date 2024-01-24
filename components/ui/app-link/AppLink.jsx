/* next.js imports */
import Link from 'next/link';

/* third party library imports */
import PropTypes from 'prop-types';

function AppLink(props) {
  const { children } = props;
  return (
    <Link
      aria-label={props.ariaLabel}
      className={props.className}
      data-target={props.dataTarget}
      href={props.href}
      onClick={props.onClick}
      rel={props.rel}
      target={props.target}
    >
      {children}
    </Link>
  );
}

AppLink.propTypes = {
  ariaLabel: PropTypes.string,
  children: PropTypes.any.isRequired,
  className: PropTypes.string,
  dataTarget: PropTypes.string,
  href: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  rel: PropTypes.string,
  target: PropTypes.string,
};

export default AppLink;
