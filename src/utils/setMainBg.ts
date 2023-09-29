import sunBg from '../../assets/summer-bg.jpg';
import rainBg from '../../assets/rainy-bg.jpg';
import snowBg from '../../assets/winter-bg.jpg';
import { ThemeType } from '../types';

const setMainBg = (themeType: ThemeType = 'sun') => {
  switch (themeType) {
    case 'rain':
      document.body.style.background = `url(${rainBg})`;
      break;
    case 'snow':
      document.body.style.background = `url(${snowBg})`;
      break;
    default:
      document.body.style.background = `url(${sunBg})`;
  }
};

export default setMainBg;
