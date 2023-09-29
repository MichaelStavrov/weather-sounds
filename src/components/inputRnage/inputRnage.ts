const inputRange = (audioElem: HTMLAudioElement) => {
  const input = document.createElement('input');
  input.type = 'range';
  input.min = '0';
  input.max = '1';
  input.step = '0.05';
  input.value = '0.5';
  audioElem.volume = +input.value;

  input.oninput = (e) => {
    const value = (e.target as HTMLInputElement).value;
    audioElem.volume = +value;
  };

  return input;
};

export default inputRange;
