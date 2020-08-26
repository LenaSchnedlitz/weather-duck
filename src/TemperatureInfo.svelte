<script>
  export let temperature;

  function getBackgroundColor() {
    if (temperature > 49) {
      temperature = 49;
    } else if (temperature < -50) {
      temperature = -50;
    }
    return `var(--color-${Math.round(temperature)})`;
  }

  /**
   * Returns color (black or white) with higher contrast.
   */
  function getColor() {
    if (-32 <= temperature <= -18 || 35 <= temperature) {
      return 'var(--white)';
    }
    return 'var(--black)';
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

<div style="background-color:{getBackgroundColor()};color:{getColor()}">
  {Math.round(temperature)}°
</div>
