import audioContol from '../audioControl/audioControl';
import content from '../content/content';
import header from '../header/header';
import inputRange from '../inputRnage/inputRnage';
import './container.scss';

const container = () => {
  const contentContainer = document.createElement('div');
  contentContainer.classList.add('contentContainer');

  const title = header();
  const audioElem = audioContol();
  const input = inputRange(audioElem);
  const themes = content();

  contentContainer.appendChild(title);
  contentContainer.appendChild(themes);
  contentContainer.appendChild(input);

  return contentContainer;
};

export default container;
