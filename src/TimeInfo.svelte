<script>
  export let unixTime;

  function hour() {
    return new Date(unixTime * 1000).getHours();
  }
</script>

<style>
  span {
    display: flex;
    width: 2.5rem;
  }

  sup {
    margin-left: .125rem;
  }
</style>

<span>
  {hour()}
  <sup>00</sup>
</span>
