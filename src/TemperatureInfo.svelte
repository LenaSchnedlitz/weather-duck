<script>
  export let temperature;

  function getStyle() {
    if (temperature > 49) {
      temperature = 49;
    } else if (temperature < -50) {
      temperature = -50;
    }
    return `background-color:var(--color-${Math.round(temperature)});`;
  }
</script>

<style>
  div {
    padding: 0.5rem;
    line-height: 1rem;
    height: 1rem;
    border-radius: 2px;
  }
</style>

<div style="{getStyle()}">
  {Math.round(temperature)}°
</div>
