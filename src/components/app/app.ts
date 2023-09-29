import container from '../container';
import setMainBg from '../../utils/setMainBg';
import './app.scss';

const app = (): HTMLElement => {
  setMainBg();

  const layout = document.createElement('div');
  layout.classList.add('layout');

  const contentContainer = container();

  layout.appendChild(contentContainer);

  return layout;
};

export default app;
