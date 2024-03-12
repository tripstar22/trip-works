// * third party library imports *
import PropTypes from 'prop-types';

// * mui imports *
import Button from '@mui/material/Button';

function ButtonLink(props) {
  const {
    children,
    className,
    href,
    rel,
    target,
  } = props;

  return (
    <Button
      className={className}
      href={href}
      rel={rel}
      target={target}
    >
      {children}
    </Button>
  );
}

ButtonLink.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string,
  href: PropTypes.string,
  rel: PropTypes.string,
  target: PropTypes.string,
};

ButtonLink.defaultProps = {
  className: null,
  href: null,
  rel: null,
  target: null,
};

export default ButtonLink;
