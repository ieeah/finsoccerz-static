export default {
  title: 'Smart*Soccerz',
  description: 'Un sottotitolo in italiano',
  base: '/finsoccerz-static/',
  lang: 'it-IT',
  themeConfig: {
    logo: '/logo.svg',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Giocatori', link: '/players/it/' },
      { 
        text: 'Partite', 
        items: [
          { text: '2024', link: '/posts/it/2024/' },
          { text: '2025', link: '/posts/it/2025/' }
        ]
      }
    ],
    sidebar: {
      '/players/': [
        {
          text: 'Giocatori',
          items: [
            { text: 'Cesko', link: '/players/it/cesko' },
            { text: 'Samogginho', link: '/players/it/samogginho' },
            { text: 'Coletta', link: '/players/it/coletta' },
            { text: 'Portier', link: '/players/it/portier' },
            { text: 'Borelli', link: '/players/it/borelli' },
            { text: 'Issimo', link: '/players/it/issimo' },
            { text: 'Azzalin', link: '/players/it/azzalin' },
            { text: 'Zeffiro', link: '/players/it/zeffiro' },
            { text: 'Cadoro', link: '/players/it/cadoro' },
            { text: 'Zingales', link: '/players/it/zingales' },
            { text: 'Ciccio', link: '/players/it/ciccio' },
            { text: 'Andrea', link: '/players/it/andrea' },
            { text: 'Lollo', link: '/players/it/lollo' },
            { text: 'Silvestri', link: '/players/it/silvestri' },
            { text: 'Alex', link: '/players/it/tanke' }
          ]
        }
      ],
      '/posts/': [
        {
          text: '2024',
          collapsed: false,
          items: [
            { text: 'Dicembre', link: '/posts/it/2024/12/' }
          ]
        },
        {
          text: '2025',
          collapsed: false,
          items: [
            { text: 'Febbraio', link: '/posts/it/2025/02/' },
            { text: 'Marzo', link: '/posts/it/2025/03/' },
            { text: 'Aprile', link: '/posts/it/2025/04/' },
            { text: 'Settembre', link: '/posts/it/2025/09/' }
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/ieeah' }
    ],
    footer: {
      message: 'Smart*Soccerz - Un sito per il calcetto di Finmatica',
      copyright: 'Copyright © 2024-present'
    }
  }
}
