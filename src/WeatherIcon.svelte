<script>
  export let iconCode;

  function getIconId() {
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
</style>

<svg>
  <use xlink:href="weather.svg#{getIconId()}"></use>
</svg>
