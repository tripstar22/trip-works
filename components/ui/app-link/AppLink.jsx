// * next.js imports *
import Link from 'next/link';

// * third party library imports *
import PropTypes from 'prop-types';

function AppLink(props) {
  const {
    ariaLabel,
    children,
    className,
    dataTarget,
    href,
    onClick,
    rel,
    target,
  } = props;

  return (
    <Link
      aria-label={ariaLabel}
      className={className}
      data-target={dataTarget}
      href={href}
      onClick={onClick}
      rel={rel}
      target={target}
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

AppLink.defaultProps = {
  ariaLabel: 'link',
  className: null,
  dataTarget: null,
  onClick: null,
  rel: null,
  target: null,
};

export default AppLink;
