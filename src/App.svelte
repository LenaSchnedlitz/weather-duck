<script>
  import SearchForm from './SearchForm.svelte';
  import WeatherReport from './WeatherReport.svelte';

  export let apiUrl;
  export let apiKey;
  export let apiLocation;
  export let greetings;
</script>

<SearchForm greetings="{greetings}"/>

<WeatherReport url="{`${apiUrl}&appid=${apiKey}&${apiLocation}`}"/>
