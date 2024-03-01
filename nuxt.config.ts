// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    '@nuxt/content'
  ],
  app: {
    head: {
      meta: [
        { name: 'title', content: '添加物スキャナー' },
        { name: 'description', content: '添加物スキャナーはどんな食品添加物が使われているか簡単に調べられるアプリです。食品の添加物ラベルを読み取り、その内容をAI技術を活用して自動的に認識し、分析結果を表示します。' },
        // Open Graph
        { property: 'og:url', content: 'https://foodadditive.app' },
        { property: 'og:title', content: '添加物スキャナー' },
        { property: 'og:description', content: '添加物スキャナーはどんな食品添加物が使われているか簡単に調べられるアプリです。食品の添加物ラベルを読み取り、その内容をAI技術を活用して自動的に認識し、分析結果を表示します。' },
        { property: 'og:image', content: 'https://foodadditive.app/ogp_image.jpg' },
        // Twitter Card
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@takasqr' },
        { name: 'twitter:creator', content: '@takasqr' },
        // サムネイル指定
        { name: 'thumbnail', content: 'https://foodadditive.app/ogp_image.jpg' }
      ],
      script: [
        {
          innerHTML: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                      })(window,document,'script','dataLayer','${process.env.GTM_ID}');` 
        }
      ],
      noscript: [
        {
          innerHTML: `<iframe src="https://www.googletagmanager.com/ns.html?id=${process.env.GTM_ID}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          tagPosition: 'bodyOpen'
        }
      ]
    }
  }
})
