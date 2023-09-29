import sun from '../../../assets/icons/sun.svg';
import rain from '../../../assets/icons/cloud-rain.svg';
import snow from '../../../assets/icons/cloud-snow.svg';
import pause from '../../../assets/icons/pause.svg';
import setMainBg from '../../utils/setMainBg';
import audioContol from '../audioControl';
import { ThemeType } from '../../types';
import './content.scss';

const themeTypes: ThemeType[] = ['sun', 'rain', 'snow'];
const icons: Record<ThemeType, string> = { sun, rain, snow };

let currentTheme: ThemeType = 'sun';

const content = () => {
  const themes = document.createElement('div');
  themes.classList.add('themes');
  themes.dataset.playing = 'false';

  themeTypes.forEach((themeType) => {
    const themeItem = document.createElement('button');
    themeItem.classList.add('themeItem');
    themeItem.classList.add(`${themeType}`);
    themeItem.id = themeType;

    const span = document.createElement('span');

    span.style.background = `url(${icons[themeType]})`;
    span.classList.add('icon');
    themeItem.appendChild(span);

    themes.appendChild(themeItem);
  });

  themes.addEventListener('click', (e) => {
    const container = e.currentTarget as HTMLElement;
    const selectedItem = e.target as HTMLElement;

    const buttons = Array.from(container.childNodes) as HTMLElement[];

    if (selectedItem) {
      const selectedTheme = selectedItem.id as ThemeType;

      if (currentTheme === selectedTheme) {
        themes.dataset.playing =
          themes.dataset.playing === 'false' ? 'true' : 'false';
      } else if (themes.dataset.playing === 'false') {
        themes.dataset.playing = 'true';
      }

      buttons.forEach((button) => {
        if (button.id !== selectedTheme) {
          if (button.firstChild) {
            (button.firstChild as HTMLElement).style.background = `url(${
              icons[button.id as ThemeType]
            })`;
          }
        }
      });

      const seletedIcon = selectedItem.firstChild as HTMLElement;
      if (
        currentTheme === selectedTheme &&
        themes.dataset.playing === 'false'
      ) {
        seletedIcon.style.background = `url(${icons[selectedTheme]})`;
      } else {
        seletedIcon.style.background = `url(${pause})`;
      }

      currentTheme = selectedTheme;

      setMainBg(currentTheme);
      audioContol(currentTheme, themes.dataset.playing);
    }
  });

  return themes;
};

export default content;
