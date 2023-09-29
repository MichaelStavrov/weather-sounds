const header = () => {
  const title = document.createElement('h1');
  title.innerText = 'Weather sounds';
  title.classList.add('title');

  return title;
};

export default header;
