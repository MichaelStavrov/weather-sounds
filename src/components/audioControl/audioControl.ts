import sunAudio from '../../../assets/sounds/summer.mp3';
import rainAudio from '../../../assets/sounds/rain.mp3';
import snowAudio from '../../../assets/sounds/winter.mp3';
import { ThemeType } from '../../types';

const audioElem = document.createElement('audio');
const sounds: Record<ThemeType, string> = {
  sun: sunAudio,
  rain: rainAudio,
  snow: snowAudio,
};

const audioContol = (themeType: ThemeType = 'sun', play?: string) => {
  audioElem.src = sounds[themeType];

  if (play === 'true') {
    audioElem.play();
  } else {
    audioElem.pause();
  }

  return audioElem;
};

export default audioContol;
