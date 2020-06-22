<script>
  /*
      {
        "temp": 13.96,
        "feels_like": 9.71,
        "weather": [
          {
            "icon": "10n"
          }
        ],
      },
   */

  /*
    clear
    few clouds
    clouds
    broken clouds
    shower
    rain
    thunderstorm
    snow
    mist
   */

  const dummyData = {
    "lat": 48.21,
    "lon": 16.36,
    "timezone": "Europe/Vienna",
    "timezone_offset": 7200,
    "hourly": [
      {
        "dt": 1592841600,
        "temp": 24.29,
        "feels_like": 20.35,
        "pressure": 1017,
        "humidity": 44,
        "dew_point": 11.27,
        "clouds": 59,
        "wind_speed": 6.19,
        "wind_deg": 339,
        "weather": [
          {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04d"
          }
        ]
      },
      {
        "dt": 1592845200,
        "temp": 23.59,
        "feels_like": 20.51,
        "pressure": 1017,
        "humidity": 51,
        "dew_point": 12.87,
        "clouds": 53,
        "wind_speed": 5.67,
        "wind_deg": 337,
        "weather": [
          {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04d"
          }
        ]
      },
      {
        "dt": 1592848800,
        "temp": 22.35,
        "feels_like": 19.71,
        "pressure": 1019,
        "humidity": 58,
        "dew_point": 13.69,
        "clouds": 43,
        "wind_speed": 5.42,
        "wind_deg": 335,
        "weather": [
          {
            "id": 802,
            "main": "Clouds",
            "description": "scattered clouds",
            "icon": "03d"
          }
        ]
      },
      {
        "dt": 1592852400,
        "temp": 20.81,
        "feels_like": 18.64,
        "pressure": 1019,
        "humidity": 65,
        "dew_point": 14,
        "clouds": 4,
        "wind_speed": 4.9,
        "wind_deg": 327,
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ]
      },
      {
        "dt": 1592856000,
        "temp": 19.77,
        "feels_like": 17.34,
        "pressure": 1020,
        "humidity": 70,
        "dew_point": 14.15,
        "clouds": 0,
        "wind_speed": 5.35,
        "wind_deg": 323,
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ]
      },
      {
        "dt": 1592859600,
        "temp": 18.98,
        "feels_like": 16.58,
        "pressure": 1020,
        "humidity": 72,
        "dew_point": 13.99,
        "clouds": 0,
        "wind_speed": 5.14,
        "wind_deg": 319,
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ]
      },
      {
        "dt": 1592863200,
        "temp": 18.41,
        "feels_like": 16.13,
        "pressure": 1020,
        "humidity": 74,
        "dew_point": 13.79,
        "clouds": 0,
        "wind_speed": 4.92,
        "wind_deg": 315,
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ]
      },
      {
        "dt": 1592866800,
        "temp": 17.86,
        "feels_like": 15.58,
        "pressure": 1021,
        "humidity": 75,
        "dew_point": 13.55,
        "clouds": 0,
        "wind_speed": 4.76,
        "wind_deg": 312,
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ]
      },
      {
        "dt": 1592870400,
        "temp": 17.43,
        "feels_like": 15.14,
        "pressure": 1021,
        "humidity": 75,
        "dew_point": 13.14,
        "clouds": 0,
        "wind_speed": 4.58,
        "wind_deg": 311,
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ]
      },
      {
        "dt": 1592874000,
        "temp": 17.02,
        "feels_like": 14.52,
        "pressure": 1021,
        "humidity": 76,
        "dew_point": 12.78,
        "clouds": 0,
        "wind_speed": 4.79,
        "wind_deg": 310,
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ]
      },
      {
        "dt": 1592877600,
        "temp": 16.37,
        "feels_like": 13.91,
        "pressure": 1021,
        "humidity": 79,
        "dew_point": 12.75,
        "clouds": 0,
        "wind_speed": 4.72,
        "wind_deg": 307,
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ]
      },
      {
        "dt": 1592881200,
        "temp": 15.8,
        "feels_like": 13.34,
        "pressure": 1021,
        "humidity": 80,
        "dew_point": 12.44,
        "clouds": 0,
        "wind_speed": 4.56,
        "wind_deg": 309,
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ]
      },
      {
        "dt": 1592884800,
        "temp": 15.68,
        "feels_like": 12.98,
        "pressure": 1021,
        "humidity": 79,
        "dew_point": 12.06,
        "clouds": 2,
        "wind_speed": 4.77,
        "wind_deg": 315,
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ]
      },
      {
        "dt": 1592888400,
        "temp": 16.34,
        "feels_like": 13.36,
        "pressure": 1021,
        "humidity": 76,
        "dew_point": 12.26,
        "clouds": 3,
        "wind_speed": 5.19,
        "wind_deg": 320,
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ]
      },
      {
        "dt": 1592892000,
        "temp": 17.53,
        "feels_like": 14.32,
        "pressure": 1022,
        "humidity": 72,
        "dew_point": 12.62,
        "clouds": 6,
        "wind_speed": 5.66,
        "wind_deg": 326,
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ]
      },
      {
        "dt": 1592895600,
        "temp": 18.97,
        "feels_like": 15.33,
        "pressure": 1022,
        "humidity": 64,
        "dew_point": 12.18,
        "clouds": 34,
        "wind_speed": 6.08,
        "wind_deg": 331,
        "weather": [
          {
            "id": 802,
            "main": "Clouds",
            "description": "scattered clouds",
            "icon": "03d"
          }
        ]
      },
      {
        "dt": 1592899200,
        "temp": 20.35,
        "feels_like": 15.82,
        "pressure": 1022,
        "humidity": 52,
        "dew_point": 10.24,
        "clouds": 19,
        "wind_speed": 6.6,
        "wind_deg": 334,
        "weather": [
          {
            "id": 801,
            "main": "Clouds",
            "description": "few clouds",
            "icon": "02d"
          }
        ]
      },
      {
        "dt": 1592902800,
        "temp": 21.3,
        "feels_like": 16.36,
        "pressure": 1022,
        "humidity": 45,
        "dew_point": 9.08,
        "clouds": 13,
        "wind_speed": 6.7,
        "wind_deg": 337,
        "weather": [
          {
            "id": 801,
            "main": "Clouds",
            "description": "few clouds",
            "icon": "02d"
          }
        ]
      },
      {
        "dt": 1592906400,
        "temp": 21.98,
        "feels_like": 17.25,
        "pressure": 1022,
        "humidity": 45,
        "dew_point": 9.77,
        "clouds": 9,
        "wind_speed": 6.63,
        "wind_deg": 339,
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ]
      },
      {
        "dt": 1592910000,
        "temp": 22.72,
        "feels_like": 18.04,
        "pressure": 1022,
        "humidity": 44,
        "dew_point": 10.12,
        "clouds": 7,
        "wind_speed": 6.68,
        "wind_deg": 341,
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ]
      },
      {
        "dt": 1592913600,
        "temp": 23.1,
        "feels_like": 18.59,
        "pressure": 1021,
        "humidity": 44,
        "dew_point": 10.5,
        "clouds": 6,
        "wind_speed": 6.58,
        "wind_deg": 342,
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ]
      },
      {
        "dt": 1592917200,
        "temp": 23.28,
        "feels_like": 19.09,
        "pressure": 1021,
        "humidity": 46,
        "dew_point": 11.08,
        "clouds": 0,
        "wind_speed": 6.45,
        "wind_deg": 342,
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ]
      },
      {
        "dt": 1592920800,
        "temp": 23.24,
        "feels_like": 19.17,
        "pressure": 1021,
        "humidity": 47,
        "dew_point": 11.38,
        "clouds": 0,
        "wind_speed": 6.4,
        "wind_deg": 343,
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ]
      },
      {
        "dt": 1592924400,
        "temp": 22.86,
        "feels_like": 18.96,
        "pressure": 1021,
        "humidity": 48,
        "dew_point": 11.45,
        "clouds": 0,
        "wind_speed": 6.15,
        "wind_deg": 342,
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ]
      },
      {
        "dt": 1592928000,
        "temp": 22.21,
        "feels_like": 18.75,
        "pressure": 1021,
        "humidity": 50,
        "dew_point": 11.44,
        "clouds": 0,
        "wind_speed": 5.52,
        "wind_deg": 339,
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ]
      },
      {
        "dt": 1592931600,
        "temp": 21.24,
        "feels_like": 18.14,
        "pressure": 1021,
        "humidity": 53,
        "dew_point": 11.34,
        "clouds": 0,
        "wind_speed": 5,
        "wind_deg": 337,
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ]
      },
      {
        "dt": 1592935200,
        "temp": 19.88,
        "feels_like": 16.97,
        "pressure": 1021,
        "humidity": 55,
        "dew_point": 10.8,
        "clouds": 0,
        "wind_speed": 4.45,
        "wind_deg": 335,
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ]
      },
      {
        "dt": 1592938800,
        "temp": 18.51,
        "feels_like": 15.72,
        "pressure": 1022,
        "humidity": 58,
        "dew_point": 10.16,
        "clouds": 0,
        "wind_speed": 4.08,
        "wind_deg": 334,
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ]
      },
      {
        "dt": 1592942400,
        "temp": 17.66,
        "feels_like": 15.2,
        "pressure": 1023,
        "humidity": 59,
        "dew_point": 9.6,
        "clouds": 0,
        "wind_speed": 3.41,
        "wind_deg": 328,
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ]
      },
      {
        "dt": 1592946000,
        "temp": 16.88,
        "feels_like": 14.55,
        "pressure": 1023,
        "humidity": 60,
        "dew_point": 9.24,
        "clouds": 0,
        "wind_speed": 3.04,
        "wind_deg": 324,
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ]
      },
      {
        "dt": 1592949600,
        "temp": 16.16,
        "feels_like": 14.13,
        "pressure": 1023,
        "humidity": 62,
        "dew_point": 9.04,
        "clouds": 0,
        "wind_speed": 2.54,
        "wind_deg": 318,
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ]
      },
      {
        "dt": 1592953200,
        "temp": 15.44,
        "feels_like": 13.55,
        "pressure": 1023,
        "humidity": 65,
        "dew_point": 9.05,
        "clouds": 0,
        "wind_speed": 2.35,
        "wind_deg": 309,
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ]
      },
      {
        "dt": 1592956800,
        "temp": 14.84,
        "feels_like": 12.83,
        "pressure": 1023,
        "humidity": 68,
        "dew_point": 9.18,
        "clouds": 1,
        "wind_speed": 2.55,
        "wind_deg": 299,
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ]
      },
      {
        "dt": 1592960400,
        "temp": 14.33,
        "feels_like": 12.21,
        "pressure": 1023,
        "humidity": 71,
        "dew_point": 9.16,
        "clouds": 7,
        "wind_speed": 2.77,
        "wind_deg": 297,
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ]
      },
      {
        "dt": 1592964000,
        "temp": 13.83,
        "feels_like": 11.46,
        "pressure": 1023,
        "humidity": 72,
        "dew_point": 8.95,
        "clouds": 3,
        "wind_speed": 3.03,
        "wind_deg": 301,
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ]
      },
      {
        "dt": 1592967600,
        "temp": 13.37,
        "feels_like": 10.86,
        "pressure": 1023,
        "humidity": 72,
        "dew_point": 8.61,
        "clouds": 2,
        "wind_speed": 3.07,
        "wind_deg": 305,
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ]
      },
      {
        "dt": 1592971200,
        "temp": 13.51,
        "feels_like": 10.83,
        "pressure": 1023,
        "humidity": 70,
        "dew_point": 8.3,
        "clouds": 2,
        "wind_speed": 3.21,
        "wind_deg": 306,
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ]
      },
      {
        "dt": 1592974800,
        "temp": 14.65,
        "feels_like": 11.73,
        "pressure": 1023,
        "humidity": 65,
        "dew_point": 8.18,
        "clouds": 1,
        "wind_speed": 3.55,
        "wind_deg": 315,
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ]
      },
      {
        "dt": 1592978400,
        "temp": 16.01,
        "feels_like": 13.01,
        "pressure": 1023,
        "humidity": 61,
        "dew_point": 8.62,
        "clouds": 1,
        "wind_speed": 3.79,
        "wind_deg": 325,
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ]
      },
      {
        "dt": 1592982000,
        "temp": 17.47,
        "feels_like": 14.58,
        "pressure": 1023,
        "humidity": 58,
        "dew_point": 9.35,
        "clouds": 0,
        "wind_speed": 3.86,
        "wind_deg": 330,
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ]
      },
      {
        "dt": 1592985600,
        "temp": 18.96,
        "feels_like": 16.06,
        "pressure": 1022,
        "humidity": 54,
        "dew_point": 9.56,
        "clouds": 0,
        "wind_speed": 3.99,
        "wind_deg": 335,
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ]
      },
      {
        "dt": 1592989200,
        "temp": 20.41,
        "feels_like": 17.42,
        "pressure": 1022,
        "humidity": 47,
        "dew_point": 9.05,
        "clouds": 0,
        "wind_speed": 3.86,
        "wind_deg": 337,
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ]
      },
      {
        "dt": 1592992800,
        "temp": 21.29,
        "feels_like": 18.24,
        "pressure": 1022,
        "humidity": 46,
        "dew_point": 9.3,
        "clouds": 0,
        "wind_speed": 4.12,
        "wind_deg": 337,
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ]
      },
      {
        "dt": 1592996400,
        "temp": 21.29,
        "feels_like": 17.98,
        "pressure": 1022,
        "humidity": 48,
        "dew_point": 10.12,
        "clouds": 14,
        "wind_speed": 4.73,
        "wind_deg": 340,
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10d"
          }
        ],
        "rain": {
          "1h": 0.23
        }
      },
      {
        "dt": 1593000000,
        "temp": 21.37,
        "feels_like": 18.62,
        "pressure": 1021,
        "humidity": 49,
        "dew_point": 10.41,
        "clouds": 24,
        "wind_speed": 4.08,
        "wind_deg": 336,
        "weather": [
          {
            "id": 801,
            "main": "Clouds",
            "description": "few clouds",
            "icon": "02d"
          }
        ]
      },
      {
        "dt": 1593003600,
        "temp": 22.16,
        "feels_like": 19.65,
        "pressure": 1021,
        "humidity": 48,
        "dew_point": 10.66,
        "clouds": 4,
        "wind_speed": 3.9,
        "wind_deg": 336,
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10d"
          }
        ],
        "rain": {
          "1h": 0.19
        }
      },
      {
        "dt": 1593007200,
        "temp": 22.07,
        "feels_like": 19.57,
        "pressure": 1021,
        "humidity": 49,
        "dew_point": 11.04,
        "clouds": 4,
        "wind_speed": 3.98,
        "wind_deg": 342,
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10d"
          }
        ],
        "rain": {
          "1h": 0.41
        }
      },
      {
        "dt": 1593010800,
        "temp": 21.95,
        "feels_like": 19.62,
        "pressure": 1021,
        "humidity": 50,
        "dew_point": 11.21,
        "clouds": 10,
        "wind_speed": 3.81,
        "wind_deg": 334,
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10d"
          }
        ],
        "rain": {
          "1h": 0.28
        }
      }
    ]
  };

  const hours = dummyData.hourly.slice(0, 12);

  function getStyle(temperature) {
    if (temperature > 49) {
      temperature = 49;
    } else if (temperature < -50) {
      temperature = -50;
    }
    return `background-color:var(--color-${Math.round(temperature)});`;
  }
</script>


<main>
  <h1>Weather Duck</h1>
  <form method="get" id="ddgSearch" action="https://duckduckgo.com/">
    <input type="text" name="q" placeholder="Search…" aria-label="Search on DuckDuckGo"/>
  </form>

  <ul>
    {#each hours as { temp, feels_like, weather }, i}
      <li style="{getStyle(feels_like)}">
        {Math.round(feels_like)}
      </li>
    {/each}

  </ul>
</main>
