import colors from './colors';

const gradientGenerator = (color1, color2) => {

  return 'linear-gradient(135deg, ' + color1 + ' 0%, ' + color2 + ' 100%);'
};

const gradients = {
  'gradientDefault': gradientGenerator(colors['blueDark'], colors['blueLight']),
};

export default gradients;
