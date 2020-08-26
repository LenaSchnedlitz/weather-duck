<script>
  import TemperatureInfo from './TemperatureInfo.svelte';
  import TimeInfo from './TimeInfo.svelte';
  import WeatherIcon from './WeatherIcon.svelte';

  const dummyData = {
    'lat': 48.21,
    'lon': 16.36,
    'timezone': 'Europe/Vienna',
    'timezone_offset': 7200,
    'hourly': [
      {
        'dt': 1598436000,
        'temp': 26.88,
        'feels_like': 21.67,
        'pressure': 1011,
        'humidity': 34,
        'dew_point': 9.71,
        'clouds': 100,
        'visibility': 10000,
        'wind_speed': 7.39,
        'wind_deg': 277,
        'weather': [
          {
            'id': 804,
            'main': 'Clouds',
            'description': 'overcast clouds',
            'icon': '04d'
          }
        ],
        'pop': 0
      },
      {
        'dt': 1598439600,
        'temp': 26.77,
        'feels_like': 21.79,
        'pressure': 1012,
        'humidity': 39,
        'dew_point': 11.67,
        'clouds': 100,
        'visibility': 10000,
        'wind_speed': 7.85,
        'wind_deg': 277,
        'weather': [
          {
            'id': 804,
            'main': 'Clouds',
            'description': 'overcast clouds',
            'icon': '04d'
          }
        ],
        'pop': 0
      },
      {
        'dt': 1598443200,
        'temp': 27.47,
        'feels_like': 23.22,
        'pressure': 1013,
        'humidity': 42,
        'dew_point': 13.43,
        'clouds': 87,
        'visibility': 10000,
        'wind_speed': 7.59,
        'wind_deg': 275,
        'weather': [
          {
            'id': 804,
            'main': 'Clouds',
            'description': 'overcast clouds',
            'icon': '04d'
          }
        ],
        'pop': 0
      },
      {
        'dt': 1598446800,
        'temp': 28.25,
        'feels_like': 24.07,
        'pressure': 1012,
        'humidity': 42,
        'dew_point': 14.13,
        'clouds': 8,
        'visibility': 10000,
        'wind_speed': 7.83,
        'wind_deg': 272,
        'weather': [
          {
            'id': 800,
            'main': 'Clear',
            'description': 'clear sky',
            'icon': '01d'
          }
        ],
        'pop': 0.02
      },
      {
        'dt': 1598450400,
        'temp': 28.07,
        'feels_like': 23.26,
        'pressure': 1012,
        'humidity': 41,
        'dew_point': 13.59,
        'clouds': 3,
        'visibility': 10000,
        'wind_speed': 8.47,
        'wind_deg': 271,
        'weather': [
          {
            'id': 800,
            'main': 'Clear',
            'description': 'clear sky',
            'icon': '01d'
          }
        ],
        'pop': 0.06
      },
      {
        'dt': 1598454000,
        'temp': 27.96,
        'feels_like': 22.57,
        'pressure': 1011,
        'humidity': 38,
        'dew_point': 12.69,
        'clouds': 1,
        'visibility': 10000,
        'wind_speed': 8.72,
        'wind_deg': 273,
        'weather': [
          {
            'id': 800,
            'main': 'Clear',
            'description': 'clear sky',
            'icon': '01d'
          }
        ],
        'pop': 0.06
      },
      {
        'dt': 1598457600,
        'temp': 27.28,
        'feels_like': 21.7,
        'pressure': 1012,
        'humidity': 36,
        'dew_point': 11.21,
        'clouds': 1,
        'visibility': 10000,
        'wind_speed': 8.39,
        'wind_deg': 274,
        'weather': [
          {
            'id': 800,
            'main': 'Clear',
            'description': 'clear sky',
            'icon': '01d'
          }
        ],
        'pop': 0.07
      },
      {
        'dt': 1598461200,
        'temp': 25.88,
        'feels_like': 20.16,
        'pressure': 1013,
        'humidity': 36,
        'dew_point': 9.72,
        'clouds': 1,
        'visibility': 10000,
        'wind_speed': 8.11,
        'wind_deg': 271,
        'weather': [
          {
            'id': 800,
            'main': 'Clear',
            'description': 'clear sky',
            'icon': '01d'
          }
        ],
        'pop': 0.07
      },
      {
        'dt': 1598464800,
        'temp': 24.25,
        'feels_like': 19.64,
        'pressure': 1014,
        'humidity': 39,
        'dew_point': 9.71,
        'clouds': 1,
        'visibility': 10000,
        'wind_speed': 6.42,
        'wind_deg': 276,
        'weather': [
          {
            'id': 800,
            'main': 'Clear',
            'description': 'clear sky',
            'icon': '01n'
          }
        ],
        'pop': 0.07
      },
      {
        'dt': 1598468400,
        'temp': 23.03,
        'feels_like': 18.61,
        'pressure': 1015,
        'humidity': 41,
        'dew_point': 9.14,
        'clouds': 0,
        'visibility': 10000,
        'wind_speed': 6.03,
        'wind_deg': 280,
        'weather': [
          {
            'id': 800,
            'main': 'Clear',
            'description': 'clear sky',
            'icon': '01n'
          }
        ],
        'pop': 0
      },
      {
        'dt': 1598472000,
        'temp': 21.78,
        'feels_like': 16.91,
        'pressure': 1015,
        'humidity': 42,
        'dew_point': 8.36,
        'clouds': 0,
        'visibility': 10000,
        'wind_speed': 6.39,
        'wind_deg': 282,
        'weather': [
          {
            'id': 800,
            'main': 'Clear',
            'description': 'clear sky',
            'icon': '01n'
          }
        ],
        'pop': 0
      },
      {
        'dt': 1598475600,
        'temp': 20.83,
        'feels_like': 16.53,
        'pressure': 1016,
        'humidity': 46,
        'dew_point': 9.01,
        'clouds': 0,
        'visibility': 10000,
        'wind_speed': 5.75,
        'wind_deg': 285,
        'weather': [
          {
            'id': 800,
            'main': 'Clear',
            'description': 'clear sky',
            'icon': '01n'
          }
        ],
        'pop': 0
      },
      {
        'dt': 1598479200,
        'temp': 20.12,
        'feels_like': 15.74,
        'pressure': 1016,
        'humidity': 48,
        'dew_point': 8.95,
        'clouds': 0,
        'visibility': 10000,
        'wind_speed': 5.86,
        'wind_deg': 283,
        'weather': [
          {
            'id': 800,
            'main': 'Clear',
            'description': 'clear sky',
            'icon': '01n'
          }
        ],
        'pop': 0
      },
      {
        'dt': 1598482800,
        'temp': 19.44,
        'feels_like': 14.67,
        'pressure': 1017,
        'humidity': 49,
        'dew_point': 8.63,
        'clouds': 2,
        'visibility': 10000,
        'wind_speed': 6.31,
        'wind_deg': 286,
        'weather': [
          {
            'id': 800,
            'main': 'Clear',
            'description': 'clear sky',
            'icon': '01n'
          }
        ],
        'pop': 0
      },
      {
        'dt': 1598486400,
        'temp': 18.78,
        'feels_like': 14.13,
        'pressure': 1017,
        'humidity': 53,
        'dew_point': 9.15,
        'clouds': 16,
        'visibility': 10000,
        'wind_speed': 6.33,
        'wind_deg': 291,
        'weather': [
          {
            'id': 801,
            'main': 'Clouds',
            'description': 'few clouds',
            'icon': '02n'
          }
        ],
        'pop': 0
      },
      {
        'dt': 1598490000,
        'temp': 18.2,
        'feels_like': 13.59,
        'pressure': 1017,
        'humidity': 55,
        'dew_point': 9.13,
        'clouds': 87,
        'visibility': 10000,
        'wind_speed': 6.28,
        'wind_deg': 291,
        'weather': [
          {
            'id': 804,
            'main': 'Clouds',
            'description': 'overcast clouds',
            'icon': '04n'
          }
        ],
        'pop': 0
      },
      {
        'dt': 1598493600,
        'temp': 17.85,
        'feels_like': 13.17,
        'pressure': 1017,
        'humidity': 56,
        'dew_point': 8.97,
        'clouds': 85,
        'visibility': 10000,
        'wind_speed': 6.36,
        'wind_deg': 289,
        'weather': [
          {
            'id': 804,
            'main': 'Clouds',
            'description': 'overcast clouds',
            'icon': '04n'
          }
        ],
        'pop': 0
      },
      {
        'dt': 1598497200,
        'temp': 17.61,
        'feels_like': 12.86,
        'pressure': 1017,
        'humidity': 56,
        'dew_point': 8.9,
        'clouds': 90,
        'visibility': 10000,
        'wind_speed': 6.37,
        'wind_deg': 287,
        'weather': [
          {
            'id': 804,
            'main': 'Clouds',
            'description': 'overcast clouds',
            'icon': '04n'
          }
        ],
        'pop': 0
      },
      {
        'dt': 1598500800,
        'temp': 17.29,
        'feels_like': 12.68,
        'pressure': 1017,
        'humidity': 58,
        'dew_point': 9.01,
        'clouds': 92,
        'visibility': 10000,
        'wind_speed': 6.25,
        'wind_deg': 285,
        'weather': [
          {
            'id': 804,
            'main': 'Clouds',
            'description': 'overcast clouds',
            'icon': '04n'
          }
        ],
        'pop': 0
      },
      {
        'dt': 1598504400,
        'temp': 17.37,
        'feels_like': 12.72,
        'pressure': 1017,
        'humidity': 57,
        'dew_point': 9.02,
        'clouds': 94,
        'visibility': 10000,
        'wind_speed': 6.24,
        'wind_deg': 286,
        'weather': [
          {
            'id': 804,
            'main': 'Clouds',
            'description': 'overcast clouds',
            'icon': '04d'
          }
        ],
        'pop': 0
      },
      {
        'dt': 1598508000,
        'temp': 18.14,
        'feels_like': 13.42,
        'pressure': 1018,
        'humidity': 55,
        'dew_point': 9.06,
        'clouds': 94,
        'visibility': 10000,
        'wind_speed': 6.42,
        'wind_deg': 288,
        'weather': [
          {
            'id': 804,
            'main': 'Clouds',
            'description': 'overcast clouds',
            'icon': '04d'
          }
        ],
        'pop': 0
      },
      {
        'dt': 1598511600,
        'temp': 19.34,
        'feels_like': 14.51,
        'pressure': 1018,
        'humidity': 51,
        'dew_point': 9.11,
        'clouds': 11,
        'visibility': 10000,
        'wind_speed': 6.57,
        'wind_deg': 289,
        'weather': [
          {
            'id': 801,
            'main': 'Clouds',
            'description': 'few clouds',
            'icon': '02d'
          }
        ],
        'pop': 0
      },
      {
        'dt': 1598515200,
        'temp': 20.64,
        'feels_like': 16.14,
        'pressure': 1017,
        'humidity': 47,
        'dew_point': 9.07,
        'clouds': 47,
        'visibility': 10000,
        'wind_speed': 6.09,
        'wind_deg': 288,
        'weather': [
          {
            'id': 802,
            'main': 'Clouds',
            'description': 'scattered clouds',
            'icon': '03d'
          }
        ],
        'pop': 0
      },
      {
        'dt': 1598518800,
        'temp': 22,
        'feels_like': 17.38,
        'pressure': 1017,
        'humidity': 43,
        'dew_point': 8.94,
        'clouds': 54,
        'visibility': 10000,
        'wind_speed': 6.23,
        'wind_deg': 287,
        'weather': [
          {
            'id': 803,
            'main': 'Clouds',
            'description': 'broken clouds',
            'icon': '04d'
          }
        ],
        'pop': 0
      },
      {
        'dt': 1598522400,
        'temp': 23.17,
        'feels_like': 18.71,
        'pressure': 1016,
        'humidity': 39,
        'dew_point': 8.69,
        'clouds': 60,
        'visibility': 10000,
        'wind_speed': 5.86,
        'wind_deg': 283,
        'weather': [
          {
            'id': 803,
            'main': 'Clouds',
            'description': 'broken clouds',
            'icon': '04d'
          }
        ],
        'pop': 0
      },
      {
        'dt': 1598526000,
        'temp': 24.12,
        'feels_like': 19.63,
        'pressure': 1016,
        'humidity': 36,
        'dew_point': 8.41,
        'clouds': 67,
        'visibility': 10000,
        'wind_speed': 5.79,
        'wind_deg': 284,
        'weather': [
          {
            'id': 803,
            'main': 'Clouds',
            'description': 'broken clouds',
            'icon': '04d'
          }
        ],
        'pop': 0
      },
      {
        'dt': 1598529600,
        'temp': 24.85,
        'feels_like': 20.74,
        'pressure': 1016,
        'humidity': 34,
        'dew_point': 8.15,
        'clouds': 71,
        'visibility': 10000,
        'wind_speed': 5.17,
        'wind_deg': 283,
        'weather': [
          {
            'id': 803,
            'main': 'Clouds',
            'description': 'broken clouds',
            'icon': '04d'
          }
        ],
        'pop': 0
      },
      {
        'dt': 1598533200,
        'temp': 25.17,
        'feels_like': 21.43,
        'pressure': 1015,
        'humidity': 33,
        'dew_point': 8.04,
        'clouds': 76,
        'visibility': 10000,
        'wind_speed': 4.59,
        'wind_deg': 284,
        'weather': [
          {
            'id': 803,
            'main': 'Clouds',
            'description': 'broken clouds',
            'icon': '04d'
          }
        ],
        'pop': 0
      },
      {
        'dt': 1598536800,
        'temp': 24.92,
        'feels_like': 21.33,
        'pressure': 1015,
        'humidity': 34,
        'dew_point': 8.17,
        'clouds': 88,
        'visibility': 10000,
        'wind_speed': 4.45,
        'wind_deg': 287,
        'weather': [
          {
            'id': 804,
            'main': 'Clouds',
            'description': 'overcast clouds',
            'icon': '04d'
          }
        ],
        'pop': 0.04
      },
      {
        'dt': 1598540400,
        'temp': 24.53,
        'feels_like': 21.25,
        'pressure': 1015,
        'humidity': 35,
        'dew_point': 8.45,
        'clouds': 92,
        'visibility': 10000,
        'wind_speed': 4.04,
        'wind_deg': 291,
        'weather': [
          {
            'id': 804,
            'main': 'Clouds',
            'description': 'overcast clouds',
            'icon': '04d'
          }
        ],
        'pop': 0.05
      },
      {
        'dt': 1598544000,
        'temp': 23.88,
        'feels_like': 21.13,
        'pressure': 1014,
        'humidity': 38,
        'dew_point': 8.98,
        'clouds': 94,
        'visibility': 10000,
        'wind_speed': 3.51,
        'wind_deg': 291,
        'weather': [
          {
            'id': 804,
            'main': 'Clouds',
            'description': 'overcast clouds',
            'icon': '04d'
          }
        ],
        'pop': 0.05
      },
      {
        'dt': 1598547600,
        'temp': 22.64,
        'feels_like': 20.4,
        'pressure': 1014,
        'humidity': 43,
        'dew_point': 9.64,
        'clouds': 95,
        'visibility': 10000,
        'wind_speed': 3.04,
        'wind_deg': 289,
        'weather': [
          {
            'id': 804,
            'main': 'Clouds',
            'description': 'overcast clouds',
            'icon': '04d'
          }
        ],
        'pop': 0.05
      },
      {
        'dt': 1598551200,
        'temp': 21.37,
        'feels_like': 19.63,
        'pressure': 1015,
        'humidity': 47,
        'dew_point': 9.75,
        'clouds': 96,
        'visibility': 10000,
        'wind_speed': 2.39,
        'wind_deg': 280,
        'weather': [
          {
            'id': 804,
            'main': 'Clouds',
            'description': 'overcast clouds',
            'icon': '04n'
          }
        ],
        'pop': 0.01
      },
      {
        'dt': 1598554800,
        'temp': 20.44,
        'feels_like': 18.93,
        'pressure': 1015,
        'humidity': 50,
        'dew_point': 9.95,
        'clouds': 100,
        'visibility': 10000,
        'wind_speed': 2.09,
        'wind_deg': 292,
        'weather': [
          {
            'id': 804,
            'main': 'Clouds',
            'description': 'overcast clouds',
            'icon': '04n'
          }
        ],
        'pop': 0
      },
      {
        'dt': 1598558400,
        'temp': 19.7,
        'feels_like': 18.59,
        'pressure': 1015,
        'humidity': 54,
        'dew_point': 10.23,
        'clouds': 99,
        'visibility': 10000,
        'wind_speed': 1.7,
        'wind_deg': 304,
        'weather': [
          {
            'id': 804,
            'main': 'Clouds',
            'description': 'overcast clouds',
            'icon': '04n'
          }
        ],
        'pop': 0
      },
      {
        'dt': 1598562000,
        'temp': 18.97,
        'feels_like': 18.27,
        'pressure': 1015,
        'humidity': 57,
        'dew_point': 10.39,
        'clouds': 98,
        'visibility': 10000,
        'wind_speed': 1.17,
        'wind_deg': 306,
        'weather': [
          {
            'id': 804,
            'main': 'Clouds',
            'description': 'overcast clouds',
            'icon': '04n'
          }
        ],
        'pop': 0
      },
      {
        'dt': 1598565600,
        'temp': 18.31,
        'feels_like': 18.14,
        'pressure': 1014,
        'humidity': 60,
        'dew_point': 10.5,
        'clouds': 87,
        'visibility': 10000,
        'wind_speed': 0.47,
        'wind_deg': 290,
        'weather': [
          {
            'id': 804,
            'main': 'Clouds',
            'description': 'overcast clouds',
            'icon': '04n'
          }
        ],
        'pop': 0
      },
      {
        'dt': 1598569200,
        'temp': 17.81,
        'feels_like': 17.67,
        'pressure': 1014,
        'humidity': 62,
        'dew_point': 10.51,
        'clouds': 79,
        'visibility': 10000,
        'wind_speed': 0.43,
        'wind_deg': 300,
        'weather': [
          {
            'id': 803,
            'main': 'Clouds',
            'description': 'broken clouds',
            'icon': '04n'
          }
        ],
        'pop': 0
      },
      {
        'dt': 1598572800,
        'temp': 17.55,
        'feels_like': 17.58,
        'pressure': 1014,
        'humidity': 63,
        'dew_point': 10.46,
        'clouds': 81,
        'visibility': 10000,
        'wind_speed': 0.19,
        'wind_deg': 120,
        'weather': [
          {
            'id': 803,
            'main': 'Clouds',
            'description': 'broken clouds',
            'icon': '04n'
          }
        ],
        'pop': 0
      },
      {
        'dt': 1598576400,
        'temp': 17.35,
        'feels_like': 16.94,
        'pressure': 1013,
        'humidity': 63,
        'dew_point': 10.33,
        'clouds': 54,
        'visibility': 10000,
        'wind_speed': 0.74,
        'wind_deg': 125,
        'weather': [
          {
            'id': 803,
            'main': 'Clouds',
            'description': 'broken clouds',
            'icon': '04n'
          }
        ],
        'pop': 0
      },
      {
        'dt': 1598580000,
        'temp': 17.2,
        'feels_like': 16.42,
        'pressure': 1013,
        'humidity': 63,
        'dew_point': 10.21,
        'clouds': 34,
        'visibility': 10000,
        'wind_speed': 1.22,
        'wind_deg': 125,
        'weather': [
          {
            'id': 802,
            'main': 'Clouds',
            'description': 'scattered clouds',
            'icon': '03n'
          }
        ],
        'pop': 0
      },
      {
        'dt': 1598583600,
        'temp': 17.13,
        'feels_like': 16.16,
        'pressure': 1012,
        'humidity': 62,
        'dew_point': 9.98,
        'clouds': 39,
        'visibility': 10000,
        'wind_speed': 1.37,
        'wind_deg': 127,
        'weather': [
          {
            'id': 802,
            'main': 'Clouds',
            'description': 'scattered clouds',
            'icon': '03n'
          }
        ],
        'pop': 0
      },
      {
        'dt': 1598587200,
        'temp': 16.88,
        'feels_like': 15.64,
        'pressure': 1012,
        'humidity': 62,
        'dew_point': 9.76,
        'clouds': 40,
        'visibility': 10000,
        'wind_speed': 1.66,
        'wind_deg': 127,
        'weather': [
          {
            'id': 802,
            'main': 'Clouds',
            'description': 'scattered clouds',
            'icon': '03n'
          }
        ],
        'pop': 0
      },
      {
        'dt': 1598590800,
        'temp': 17.57,
        'feels_like': 15.87,
        'pressure': 1012,
        'humidity': 60,
        'dew_point': 9.81,
        'clouds': 50,
        'visibility': 10000,
        'wind_speed': 2.38,
        'wind_deg': 134,
        'weather': [
          {
            'id': 802,
            'main': 'Clouds',
            'description': 'scattered clouds',
            'icon': '03d'
          }
        ],
        'pop': 0
      },
      {
        'dt': 1598594400,
        'temp': 18.17,
        'feels_like': 16.2,
        'pressure': 1012,
        'humidity': 59,
        'dew_point': 10.09,
        'clouds': 57,
        'visibility': 10000,
        'wind_speed': 2.89,
        'wind_deg': 140,
        'weather': [
          {
            'id': 803,
            'main': 'Clouds',
            'description': 'broken clouds',
            'icon': '04d'
          }
        ],
        'pop': 0
      },
      {
        'dt': 1598598000,
        'temp': 18.56,
        'feels_like': 16.82,
        'pressure': 1011,
        'humidity': 59,
        'dew_point': 10.45,
        'clouds': 100,
        'visibility': 10000,
        'wind_speed': 2.71,
        'wind_deg': 131,
        'weather': [
          {
            'id': 804,
            'main': 'Clouds',
            'description': 'overcast clouds',
            'icon': '04d'
          }
        ],
        'pop': 0
      },
      {
        'dt': 1598601600,
        'temp': 20.92,
        'feels_like': 19.02,
        'pressure': 1011,
        'humidity': 53,
        'dew_point': 11.25,
        'clouds': 100,
        'visibility': 10000,
        'wind_speed': 3.16,
        'wind_deg': 146,
        'weather': [
          {
            'id': 804,
            'main': 'Clouds',
            'description': 'overcast clouds',
            'icon': '04d'
          }
        ],
        'pop': 0
      },
      {
        'dt': 1598605200,
        'temp': 23.82,
        'feels_like': 21.9,
        'pressure': 1010,
        'humidity': 46,
        'dew_point': 11.73,
        'clouds': 100,
        'visibility': 10000,
        'wind_speed': 3.41,
        'wind_deg': 155,
        'weather': [
          {
            'id': 804,
            'main': 'Clouds',
            'description': 'overcast clouds',
            'icon': '04d'
          }
        ],
        'pop': 0
      }
    ]
  };

  const hours = dummyData.hourly.slice(0, 12);
</script>

<style>
  ul {
    display: flex;
    position: relative;
    flex-direction: column;
    flex-grow: 1;
    margin: 1rem 0 1.5rem;
    padding: 0;
    overflow-y: auto;
  }

  li {
    display: flex;
    justify-content: space-between;
    align-items: center;

    flex-shrink: 0;
    margin: auto 1rem;
    padding: 0.5rem 0.5rem;

    list-style: none;

    border-bottom: solid 1px var(--third-gray);
  }

  @media (min-width: 900px) {
    ul {
      flex-direction: row;
      margin: 0;
      padding: 0 calc(calc(100% - calc(1200px + 6rem)) / 2);
    }

    li {
      margin: auto 0;
      padding: 0 3.6rem 6rem;
      flex-direction: column;
      border-bottom: none;
    }
  }
</style>

<ul>
  {#each hours as hour, i}
    <li>
      <TimeInfo unixTime="{hour.dt}"/>
      <WeatherIcon iconCode="{hour.weather[0].icon}"/>
      <TemperatureInfo temperature="{hour.feels_like}"/>
    </li>
  {/each}
</ul>
