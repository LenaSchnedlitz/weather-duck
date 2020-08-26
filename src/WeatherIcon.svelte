<script>
  export let iconCode;

  function iconId() {
    switch (iconCode) {
      case "01d":
        return "sun";
      case "01n":
        return "moon";
      case "02d":
        return "sun";
      case "02n":
        return "moon";
      case "03d":
      case "03n":
      case "04d":
      case "04n":
        return "cloud";
      case "09d":
      case "09n":
        return "cloud-drizzle";
      case "10d":
      case "10n":
        return "cloud-rain";
      case "11d":
      case "11n":
        return "cloud-lightning";
      case "13d":
      case "13n":
        return "cloud-snow";
      case "50d":
      case "50n":
        return "mist";
    }
  }
</script>

<style>
  @media (min-width: 900px) {
    svg {
      width: 96px;
      height: 96px;
      stroke-width: .3;
      padding: .5rem 0 2rem;
    }
  }
</style>

<svg viewBox="0 0 24 24">
  <use xlink:href="weather.svg#{iconId()}"></use>
</svg>
