<script>
  export let greetings;

  function greeting() {
    const currentHour = new Date().getHours();

    if (currentHour < 5) {
      return greetings.night;
    } else if (currentHour < 11) {
      return greetings.morning;
    } else if (currentHour < 17) {
      return greetings.day;
    } else if (currentHour < 23) {
      return greetings.evening;
    } else {
      return greetings.night;
    }
  }
</script>

<style>
  section {
    padding: 1rem;
  }

  h1 {
    margin: 0;
    padding: 0;
  }

  form {
    display: flex;
    position: relative;
    margin-top: 1rem;
  }

  input {
    width: 100%;
    padding: .5rem;

    color: var(--black);
    background-color: var(--white);
    border: 1px solid var(--gray);
    border-radius: 2px;
    box-shadow: inset 0 .05rem .125rem var(--third-gray);

    font-size: 1rem;
    line-height: 1.5;
  }

  input:hover {
    border-color: var(--black);
  }

  input:active,
  input:focus {
    border-color: var(--black);
    box-shadow: 0 0 0 .15rem var(--third-gray);
    outline: 0;
  }

  button {
    position: absolute;
    right: 0.5rem;
    top: 0.5rem;

    height: var(--icon-size);
    width: var(--icon-size);
    margin: 0;
    padding: 0;

    background-color: var(--white);
    border: transparent;
    border-radius: 50px;
    box-shadow: none;

    cursor: pointer;
    outline: none;
  }

  button:hover,
  button:active,
  button:focus {
    background-color: var(--third-gray);
  }

  button:hover > svg,
  button:active > svg,
  button:focus > svg {
    stroke-width: 1.5;
  }

  button:active,
  button:focus {
    box-shadow: 0 0 0 .3rem var(--half-gray);
  }

  @media (min-width: 900px) {
    section {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      justify-content: flex-end;

      margin-left: auto;
      margin-right: auto;
      width: 100%;
      max-width: 750px;
      padding-top: 6rem;
    }

    h1 {
      font-size: 3.5rem;
    }

    form {
      margin-top: 2rem;
    }

    input {
      padding: .5rem .75rem;
      border-radius: 4px;
      font-size: 1.25rem;
    }

    input:active,
    input:focus {
      box-shadow: 0 0 0 .2rem var(--third-gray);
    }

    button {
      top: .75rem;
      right: .75rem;
    }
  }
</style>

<section>
  <h1>{greeting()}</h1>
  <form method="get" id="search-form" action="https://duckduckgo.com/" autocomplete="off">
    <input type="text" name="q" aria-label="Search on DuckDuckGo" autofocus/>
    <button>
      <!-- Feather Icon, https://feathericons.com -->
      <svg xmlns="http://www.w3.org/2000/svg">
        <circle cx="11" cy="11" r="8"></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
      </svg>
    </button>
  </form>
</section>
