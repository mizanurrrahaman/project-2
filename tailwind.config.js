tailwind.config = {
    theme: {
      extend: {
        colors: {
          'primary': '#0D0D0D',
        
        },
          maxWidth: {
            'container': '1280px',
          },
          fontFamily: {
           'robotocondenced' : " 'Roboto Condensed', sans-serif;",
          },
          backgroundImage: {
            'banner': "url('images/banner.jpg')",
             overlay: 'linear-gradient(40deg, #060606 16.68%, rgba(0,0,0,0.2) 96.44%);',
             Upcoming: 'linear-gradient(110deg, #A54E2B -53.83%, #DC9853 62.61%);',
            'visitbg': "url('images/Background.jpg')",
             blog:   'linear-gradient(110deg, #A54E2B -53.83%, #DC9853 62.61%);',
            
             
          },
          fontSize: {
           'size': '64px',
          },
          extend: {
            rotate: {
              'rotate': '180deg',
            }
          }
      }
    }
}
  