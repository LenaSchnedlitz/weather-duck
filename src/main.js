import App from './App.svelte';

const app = new App({
  target: document.body,
  props: {
    apiUrl: 'https://api.openweathermap.org/data/2.5/onecall?exclude=current,minutely,daily&units=metric',
    apiKey: 'TODO',
    apiLocation: 'lat=48.210033&lon=16.363449',
    greetings: {
      morning: 'Guten Morgen!',
      day: 'Hi.',
      evening: 'Schönen Abend!',
      night: 'Gute Nacht.'
    }
  }
});

export default app;