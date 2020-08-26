<script>
  import TemperatureInfo from './TemperatureInfo.svelte';
  import TimeInfo from './TimeInfo.svelte';
  import WeatherIcon from './WeatherIcon.svelte';
  import {onMount} from 'svelte';

  export let url;

  let hourData = [];

  onMount(async () => {
    const res = await fetch(url);
    const weatherData = await res.json();
    const rawHourData = weatherData.hourly;
    const currentTime = new Date(rawHourData[0].dt * 1000).getHours();

    hourData = rawHourData.slice(0, 48 - currentTime + 1);
  });
</script>

<style>
  ul {
    display: flex;
    position: relative;
    flex-direction: column;
    flex-grow: 1;
    margin: 1rem 0 1.5rem;
    padding: 0;
    overflow-y: auto;
  }

  li {
    display: flex;
    justify-content: space-between;
    align-items: center;

    flex-shrink: 0;
    margin: auto 1rem;
    padding: 0.5rem 0.5rem;

    list-style: none;

    border-bottom: solid 1px var(--third-gray);
  }

  @media (min-width: 900px) {
    ul {
      flex-direction: row;
      margin: 0;
      padding: 0 calc(calc(100% - calc(1200px + 6rem)) / 2);
    }

    li {
      margin: auto 0;
      padding: 0 3.6rem 6rem;
      flex-direction: column;
      border-bottom: none;
    }
  }
</style>

<ul>
  {#each hourData as hour, i}
    <li>
      <TimeInfo unixTime="{hour.dt}"/>
      <WeatherIcon iconCode="{hour.weather[0].icon}"/>
      <TemperatureInfo temperature="{hour.feels_like}"/>
    </li>
  {/each}
</ul>
