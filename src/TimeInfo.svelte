<script>
  export let unixTime;

  function extractHour() {
    return new Date(unixTime * 1000).getHours();
  }
</script>

<style>
  span {
    display: flex;
  }

  sup {
    margin-left: .125rem;
  }
</style>

<span>
  {extractHour()}
  <sup>00</sup>
</span>
