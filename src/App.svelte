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
    'lat': 48.21,
    'lon': 16.36,
    'timezone': 'Europe/Vienna',
    'timezone_offset': 7200,
    'hourly': [
      {
        'dt': 1592683200,
        'temp': 13.96,
        'feels_like': 9.71,
        'pressure': 1015,
        'humidity': 87,
        'dew_point': 11.83,
        'clouds': 75,
        'wind_speed': 6.89,
        'wind_deg': 310,
        'weather': [
          {
            'id': 501,
            'main': 'Rain',
            'description': 'moderate rain',
            'icon': '10n'
          }
        ],
        'rain': {
          '1h': 2.39
        }
      },
      {
        'dt': 1592686800,
        'temp': 14.34,
        'feels_like': 10.12,
        'pressure': 1015,
        'humidity': 87,
        'dew_point': 12.21,
        'clouds': 87,
        'wind_speed': 7,
        'wind_deg': 305,
        'weather': [
          {
            'id': 501,
            'main': 'Rain',
            'description': 'moderate rain',
            'icon': '10n'
          }
        ],
        'rain': {
          '1h': 3.33
        }
      },
      {
        'dt': 1592690400,
        'temp': 14.52,
        'feels_like': 10.57,
        'pressure': 1015,
        'humidity': 88,
        'dew_point': 12.56,
        'clouds': 95,
        'wind_speed': 6.77,
        'wind_deg': 299,
        'weather': [
          {
            'id': 501,
            'main': 'Rain',
            'description': 'moderate rain',
            'icon': '10n'
          }
        ],
        'rain': {
          '1h': 3.8
        }
      },
      {
        'dt': 1592694000,
        'temp': 14.65,
        'feels_like': 10.76,
        'pressure': 1015,
        'humidity': 89,
        'dew_point': 12.86,
        'clouds': 98,
        'wind_speed': 6.83,
        'wind_deg': 297,
        'weather': [
          {
            'id': 502,
            'main': 'Rain',
            'description': 'heavy intensity rain',
            'icon': '10n'
          }
        ],
        'rain': {
          '1h': 5.15
        }
      },
      {
        'dt': 1592697600,
        'temp': 14.69,
        'feels_like': 10.92,
        'pressure': 1016,
        'humidity': 89,
        'dew_point': 12.9,
        'clouds': 100,
        'wind_speed': 6.67,
        'wind_deg': 300,
        'weather': [
          {
            'id': 502,
            'main': 'Rain',
            'description': 'heavy intensity rain',
            'icon': '10n'
          }
        ],
        'rain': {
          '1h': 4.53
        }
      },
      {
        'dt': 1592701200,
        'temp': 14.73,
        'feels_like': 11.08,
        'pressure': 1015,
        'humidity': 89,
        'dew_point': 12.96,
        'clouds': 100,
        'wind_speed': 6.52,
        'wind_deg': 303,
        'weather': [
          {
            'id': 501,
            'main': 'Rain',
            'description': 'moderate rain',
            'icon': '10n'
          }
        ],
        'rain': {
          '1h': 3.24
        }
      },
      {
        'dt': 1592704800,
        'temp': 14.69,
        'feels_like': 11.03,
        'pressure': 1015,
        'humidity': 88,
        'dew_point': 12.89,
        'clouds': 100,
        'wind_speed': 6.43,
        'wind_deg': 305,
        'weather': [
          {
            'id': 501,
            'main': 'Rain',
            'description': 'moderate rain',
            'icon': '10n'
          }
        ],
        'rain': {
          '1h': 2.63
        }
      },
      {
        'dt': 1592708400,
        'temp': 14.56,
        'feels_like': 10.88,
        'pressure': 1015,
        'humidity': 89,
        'dew_point': 12.8,
        'clouds': 100,
        'wind_speed': 6.48,
        'wind_deg': 303,
        'weather': [
          {
            'id': 501,
            'main': 'Rain',
            'description': 'moderate rain',
            'icon': '10d'
          }
        ],
        'rain': {
          '1h': 2.86
        }
      },
      {
        'dt': 1592712000,
        'temp': 14.46,
        'feels_like': 10.65,
        'pressure': 1015,
        'humidity': 88,
        'dew_point': 12.64,
        'clouds': 100,
        'wind_speed': 6.54,
        'wind_deg': 303,
        'weather': [
          {
            'id': 501,
            'main': 'Rain',
            'description': 'moderate rain',
            'icon': '10d'
          }
        ],
        'rain': {
          '1h': 1.98
        }
      },
      {
        'dt': 1592715600,
        'temp': 14.3,
        'feels_like': 10.24,
        'pressure': 1015,
        'humidity': 87,
        'dew_point': 12.32,
        'clouds': 100,
        'wind_speed': 6.76,
        'wind_deg': 303,
        'weather': [
          {
            'id': 501,
            'main': 'Rain',
            'description': 'moderate rain',
            'icon': '10d'
          }
        ],
        'rain': {
          '1h': 1.69
        }
      },
      {
        'dt': 1592719200,
        'temp': 14.2,
        'feels_like': 10.11,
        'pressure': 1015,
        'humidity': 87,
        'dew_point': 12.15,
        'clouds': 100,
        'wind_speed': 6.76,
        'wind_deg': 304,
        'weather': [
          {
            'id': 501,
            'main': 'Rain',
            'description': 'moderate rain',
            'icon': '10d'
          }
        ],
        'rain': {
          '1h': 1.6
        }
      },
      {
        'dt': 1592722800,
        'temp': 14.22,
        'feels_like': 10,
        'pressure': 1016,
        'humidity': 86,
        'dew_point': 12,
        'clouds': 100,
        'wind_speed': 6.87,
        'wind_deg': 304,
        'weather': [
          {
            'id': 501,
            'main': 'Rain',
            'description': 'moderate rain',
            'icon': '10d'
          }
        ],
        'rain': {
          '1h': 1.28
        }
      },
      {
        'dt': 1592726400,
        'temp': 14.21,
        'feels_like': 10,
        'pressure': 1016,
        'humidity': 85,
        'dew_point': 11.88,
        'clouds': 100,
        'wind_speed': 6.78,
        'wind_deg': 304,
        'weather': [
          {
            'id': 500,
            'main': 'Rain',
            'description': 'light rain',
            'icon': '10d'
          }
        ],
        'rain': {
          '1h': 0.69
        }
      },
      {
        'dt': 1592730000,
        'temp': 14.07,
        'feels_like': 9.7,
        'pressure': 1016,
        'humidity': 85,
        'dew_point': 11.71,
        'clouds': 100,
        'wind_speed': 6.95,
        'wind_deg': 303,
        'weather': [
          {
            'id': 500,
            'main': 'Rain',
            'description': 'light rain',
            'icon': '10d'
          }
        ],
        'rain': {
          '1h': 0.89
        }
      },
      {
        'dt': 1592733600,
        'temp': 13.92,
        'feels_like': 9.42,
        'pressure': 1016,
        'humidity': 85,
        'dew_point': 11.52,
        'clouds': 100,
        'wind_speed': 7.08,
        'wind_deg': 303,
        'weather': [
          {
            'id': 500,
            'main': 'Rain',
            'description': 'light rain',
            'icon': '10d'
          }
        ],
        'rain': {
          '1h': 0.86
        }
      },
      {
        'dt': 1592737200,
        'temp': 13.77,
        'feels_like': 9.03,
        'pressure': 1016,
        'humidity': 84,
        'dew_point': 11.19,
        'clouds': 100,
        'wind_speed': 7.28,
        'wind_deg': 301,
        'weather': [
          {
            'id': 500,
            'main': 'Rain',
            'description': 'light rain',
            'icon': '10d'
          }
        ],
        'rain': {
          '1h': 0.73
        }
      },
      {
        'dt': 1592740800,
        'temp': 13.97,
        'feels_like': 9.44,
        'pressure': 1016,
        'humidity': 83,
        'dew_point': 11.17,
        'clouds': 100,
        'wind_speed': 6.99,
        'wind_deg': 300,
        'weather': [
          {
            'id': 500,
            'main': 'Rain',
            'description': 'light rain',
            'icon': '10d'
          }
        ],
        'rain': {
          '1h': 0.23
        }
      },
      {
        'dt': 1592744400,
        'temp': 14.29,
        'feels_like': 9.96,
        'pressure': 1016,
        'humidity': 82,
        'dew_point': 11.36,
        'clouds': 100,
        'wind_speed': 6.75,
        'wind_deg': 298,
        'weather': [
          {
            'id': 500,
            'main': 'Rain',
            'description': 'light rain',
            'icon': '10d'
          }
        ],
        'rain': {
          '1h': 0.33
        }
      },
      {
        'dt': 1592748000,
        'temp': 14.67,
        'feels_like': 10.58,
        'pressure': 1016,
        'humidity': 81,
        'dew_point': 11.53,
        'clouds': 100,
        'wind_speed': 6.49,
        'wind_deg': 294,
        'weather': [
          {
            'id': 500,
            'main': 'Rain',
            'description': 'light rain',
            'icon': '10d'
          }
        ],
        'rain': {
          '1h': 0.21
        }
      },
      {
        'dt': 1592751600,
        'temp': 15.85,
        'feels_like': 11.94,
        'pressure': 1016,
        'humidity': 78,
        'dew_point': 12.14,
        'clouds': 100,
        'wind_speed': 6.48,
        'wind_deg': 299,
        'weather': [
          {
            'id': 804,
            'main': 'Clouds',
            'description': 'overcast clouds',
            'icon': '04d'
          }
        ]
      },
      {
        'dt': 1592755200,
        'temp': 16.35,
        'feels_like': 12.61,
        'pressure': 1015,
        'humidity': 75,
        'dew_point': 12.08,
        'clouds': 100,
        'wind_speed': 6.19,
        'wind_deg': 305,
        'weather': [
          {
            'id': 804,
            'main': 'Clouds',
            'description': 'overcast clouds',
            'icon': '04d'
          }
        ]
      },
      {
        'dt': 1592758800,
        'temp': 16.19,
        'feels_like': 12.63,
        'pressure': 1016,
        'humidity': 74,
        'dew_point': 11.7,
        'clouds': 100,
        'wind_speed': 5.78,
        'wind_deg': 305,
        'weather': [
          {
            'id': 804,
            'main': 'Clouds',
            'description': 'overcast clouds',
            'icon': '04d'
          }
        ]
      },
      {
        'dt': 1592762400,
        'temp': 16.26,
        'feels_like': 12.32,
        'pressure': 1016,
        'humidity': 69,
        'dew_point': 10.66,
        'clouds': 100,
        'wind_speed': 5.92,
        'wind_deg': 305,
        'weather': [
          {
            'id': 804,
            'main': 'Clouds',
            'description': 'overcast clouds',
            'icon': '04d'
          }
        ]
      },
      {
        'dt': 1592766000,
        'temp': 16.12,
        'feels_like': 11.78,
        'pressure': 1017,
        'humidity': 68,
        'dew_point': 10.24,
        'clouds': 100,
        'wind_speed': 6.35,
        'wind_deg': 304,
        'weather': [
          {
            'id': 804,
            'main': 'Clouds',
            'description': 'overcast clouds',
            'icon': '04n'
          }
        ]
      },
      {
        'dt': 1592769600,
        'temp': 15.84,
        'feels_like': 11.39,
        'pressure': 1017,
        'humidity': 70,
        'dew_point': 10.44,
        'clouds': 100,
        'wind_speed': 6.57,
        'wind_deg': 303,
        'weather': [
          {
            'id': 804,
            'main': 'Clouds',
            'description': 'overcast clouds',
            'icon': '04n'
          }
        ]
      },
      {
        'dt': 1592773200,
        'temp': 15.43,
        'feels_like': 10.73,
        'pressure': 1017,
        'humidity': 71,
        'dew_point': 10.4,
        'clouds': 100,
        'wind_speed': 6.86,
        'wind_deg': 301,
        'weather': [
          {
            'id': 500,
            'main': 'Rain',
            'description': 'light rain',
            'icon': '10n'
          }
        ],
        'rain': {
          '1h': 0.12
        }
      },
      {
        'dt': 1592776800,
        'temp': 15.78,
        'feels_like': 11.09,
        'pressure': 1017,
        'humidity': 69,
        'dew_point': 10.18,
        'clouds': 99,
        'wind_speed': 6.81,
        'wind_deg': 299,
        'weather': [
          {
            'id': 804,
            'main': 'Clouds',
            'description': 'overcast clouds',
            'icon': '04n'
          }
        ]
      },
      {
        'dt': 1592780400,
        'temp': 16.02,
        'feels_like': 11.41,
        'pressure': 1017,
        'humidity': 68,
        'dew_point': 10.2,
        'clouds': 96,
        'wind_speed': 6.7,
        'wind_deg': 303,
        'weather': [
          {
            'id': 804,
            'main': 'Clouds',
            'description': 'overcast clouds',
            'icon': '04n'
          }
        ]
      },
      {
        'dt': 1592784000,
        'temp': 15.97,
        'feels_like': 11.47,
        'pressure': 1017,
        'humidity': 68,
        'dew_point': 10.22,
        'clouds': 94,
        'wind_speed': 6.52,
        'wind_deg': 304,
        'weather': [
          {
            'id': 804,
            'main': 'Clouds',
            'description': 'overcast clouds',
            'icon': '04n'
          }
        ]
      },
      {
        'dt': 1592787600,
        'temp': 16.07,
        'feels_like': 11.5,
        'pressure': 1017,
        'humidity': 67,
        'dew_point': 10.17,
        'clouds': 84,
        'wind_speed': 6.57,
        'wind_deg': 304,
        'weather': [
          {
            'id': 803,
            'main': 'Clouds',
            'description': 'broken clouds',
            'icon': '04n'
          }
        ]
      },
      {
        'dt': 1592791200,
        'temp': 16.12,
        'feels_like': 11.38,
        'pressure': 1017,
        'humidity': 66,
        'dew_point': 9.94,
        'clouds': 88,
        'wind_speed': 6.75,
        'wind_deg': 306,
        'weather': [
          {
            'id': 804,
            'main': 'Clouds',
            'description': 'overcast clouds',
            'icon': '04n'
          }
        ]
      },
      {
        'dt': 1592794800,
        'temp': 16.22,
        'feels_like': 11.22,
        'pressure': 1017,
        'humidity': 65,
        'dew_point': 9.66,
        'clouds': 92,
        'wind_speed': 7.06,
        'wind_deg': 307,
        'weather': [
          {
            'id': 804,
            'main': 'Clouds',
            'description': 'overcast clouds',
            'icon': '04d'
          }
        ]
      },
      {
        'dt': 1592798400,
        'temp': 16.31,
        'feels_like': 10.86,
        'pressure': 1017,
        'humidity': 63,
        'dew_point': 9.33,
        'clouds': 94,
        'wind_speed': 7.57,
        'wind_deg': 306,
        'weather': [
          {
            'id': 804,
            'main': 'Clouds',
            'description': 'overcast clouds',
            'icon': '04d'
          }
        ]
      },
      {
        'dt': 1592802000,
        'temp': 16.3,
        'feels_like': 10.73,
        'pressure': 1017,
        'humidity': 64,
        'dew_point': 9.62,
        'clouds': 95,
        'wind_speed': 7.82,
        'wind_deg': 307,
        'weather': [
          {
            'id': 804,
            'main': 'Clouds',
            'description': 'overcast clouds',
            'icon': '04d'
          }
        ]
      },
      {
        'dt': 1592805600,
        'temp': 16.46,
        'feels_like': 11.17,
        'pressure': 1018,
        'humidity': 66,
        'dew_point': 10.14,
        'clouds': 95,
        'wind_speed': 7.66,
        'wind_deg': 308,
        'weather': [
          {
            'id': 804,
            'main': 'Clouds',
            'description': 'overcast clouds',
            'icon': '04d'
          }
        ]
      },
      {
        'dt': 1592809200,
        'temp': 16.95,
        'feels_like': 11.91,
        'pressure': 1018,
        'humidity': 65,
        'dew_point': 10.54,
        'clouds': 100,
        'wind_speed': 7.39,
        'wind_deg': 310,
        'weather': [
          {
            'id': 804,
            'main': 'Clouds',
            'description': 'overcast clouds',
            'icon': '04d'
          }
        ]
      },
      {
        'dt': 1592812800,
        'temp': 17.41,
        'feels_like': 12.84,
        'pressure': 1018,
        'humidity': 65,
        'dew_point': 10.81,
        'clouds': 100,
        'wind_speed': 6.9,
        'wind_deg': 311,
        'weather': [
          {
            'id': 804,
            'main': 'Clouds',
            'description': 'overcast clouds',
            'icon': '04d'
          }
        ]
      },
      {
        'dt': 1592816400,
        'temp': 17.85,
        'feels_like': 13.52,
        'pressure': 1018,
        'humidity': 64,
        'dew_point': 11.13,
        'clouds': 100,
        'wind_speed': 6.63,
        'wind_deg': 315,
        'weather': [
          {
            'id': 804,
            'main': 'Clouds',
            'description': 'overcast clouds',
            'icon': '04d'
          }
        ]
      },
      {
        'dt': 1592820000,
        'temp': 18.72,
        'feels_like': 14.72,
        'pressure': 1018,
        'humidity': 62,
        'dew_point': 11.52,
        'clouds': 100,
        'wind_speed': 6.3,
        'wind_deg': 326,
        'weather': [
          {
            'id': 804,
            'main': 'Clouds',
            'description': 'overcast clouds',
            'icon': '04d'
          }
        ]
      },
      {
        'dt': 1592823600,
        'temp': 18.77,
        'feels_like': 15.38,
        'pressure': 1018,
        'humidity': 63,
        'dew_point': 11.73,
        'clouds': 100,
        'wind_speed': 5.54,
        'wind_deg': 327,
        'weather': [
          {
            'id': 804,
            'main': 'Clouds',
            'description': 'overcast clouds',
            'icon': '04d'
          }
        ]
      },
      {
        'dt': 1592827200,
        'temp': 19.29,
        'feels_like': 16.08,
        'pressure': 1018,
        'humidity': 61,
        'dew_point': 11.81,
        'clouds': 100,
        'wind_speed': 5.29,
        'wind_deg': 332,
        'weather': [
          {
            'id': 804,
            'main': 'Clouds',
            'description': 'overcast clouds',
            'icon': '04d'
          }
        ]
      },
      {
        'dt': 1592830800,
        'temp': 20.23,
        'feels_like': 16.21,
        'pressure': 1018,
        'humidity': 55,
        'dew_point': 11.11,
        'clouds': 99,
        'wind_speed': 6.16,
        'wind_deg': 343,
        'weather': [
          {
            'id': 804,
            'main': 'Clouds',
            'description': 'overcast clouds',
            'icon': '04d'
          }
        ]
      },
      {
        'dt': 1592834400,
        'temp': 22.02,
        'feels_like': 17.64,
        'pressure': 1018,
        'humidity': 51,
        'dew_point': 11.53,
        'clouds': 88,
        'wind_speed': 6.89,
        'wind_deg': 344,
        'weather': [
          {
            'id': 804,
            'main': 'Clouds',
            'description': 'overcast clouds',
            'icon': '04d'
          }
        ]
      },
      {
        'dt': 1592838000,
        'temp': 22.69,
        'feels_like': 18.26,
        'pressure': 1018,
        'humidity': 47,
        'dew_point': 11.11,
        'clouds': 68,
        'wind_speed': 6.71,
        'wind_deg': 347,
        'weather': [
          {
            'id': 803,
            'main': 'Clouds',
            'description': 'broken clouds',
            'icon': '04d'
          }
        ]
      },
      {
        'dt': 1592841600,
        'temp': 22.22,
        'feels_like': 18.62,
        'pressure': 1018,
        'humidity': 51,
        'dew_point': 11.79,
        'clouds': 62,
        'wind_speed': 5.86,
        'wind_deg': 344,
        'weather': [
          {
            'id': 803,
            'main': 'Clouds',
            'description': 'broken clouds',
            'icon': '04d'
          }
        ]
      },
      {
        'dt': 1592845200,
        'temp': 21.89,
        'feels_like': 18.72,
        'pressure': 1019,
        'humidity': 54,
        'dew_point': 12.45,
        'clouds': 50,
        'wind_speed': 5.48,
        'wind_deg': 343,
        'weather': [
          {
            'id': 802,
            'main': 'Clouds',
            'description': 'scattered clouds',
            'icon': '03d'
          }
        ]
      },
      {
        'dt': 1592848800,
        'temp': 20.86,
        'feels_like': 18.62,
        'pressure': 1019,
        'humidity': 61,
        'dew_point': 13.22,
        'clouds': 42,
        'wind_speed': 4.56,
        'wind_deg': 338,
        'weather': [
          {
            'id': 802,
            'main': 'Clouds',
            'description': 'scattered clouds',
            'icon': '03d'
          }
        ]
      },
      {
        'dt': 1592852400,
        'temp': 19.67,
        'feels_like': 18.25,
        'pressure': 1020,
        'humidity': 70,
        'dew_point': 14.13,
        'clouds': 0,
        'wind_speed': 3.86,
        'wind_deg': 331,
        'weather': [
          {
            'id': 800,
            'main': 'Clear',
            'description': 'clear sky',
            'icon': '01n'
          }
        ]
      }
    ]
  };

  const hours = dummyData.hourly.slice(0, 12);

  function calculateColorIndex(nonNegativeTemperature) {
    return Math.floor((nonNegativeTemperature + 1.5) / 3);
  }

  function getStyle(temperature) {
    const backgroundColorIndex = temperature >= 0 ?
        calculateColorIndex(temperature) :
        -1 * calculateColorIndex(-1 * temperature);

    return `background-color:var(--color-${backgroundColorIndex});`;
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
