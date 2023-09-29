import app from './components/app';

const root = document.getElementById('root') as HTMLDivElement;
const container = app();

root.appendChild(container);

export {};
