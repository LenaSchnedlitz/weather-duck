<script>
  export let temperature;

  function backgroundColor() {
    if (temperature > 49) {
      temperature = 49;
    } else if (temperature < -50) {
      temperature = -50;
    }
    return `var(--color-${Math.round(temperature)})`;
  }

  /**
   * Returns black or white depending on contrast.
   */
  function color() {
    if (-32 <= temperature <= -18 || 35 <= temperature) {
      return '#fff';
    }
    return '#111';
  }
</script>

<style>
  div {
    padding: .5rem;
    line-height: 1rem;
    height: 1rem;
    border-radius: 2px;
  }

  @media (min-width: 900px) {
    div {
      width: 1.5rem;
      height: 1.5rem;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 6rem;
      padding: .45rem .4rem .55rem .6rem;
    }
  }
</style>

<div style="background-color:{backgroundColor()};color:{color()};">
  {Math.round(temperature)}°
</div>
