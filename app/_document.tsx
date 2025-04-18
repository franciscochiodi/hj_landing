import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="es">
      <Head>
        {/* Preload critical resources */}
        <link
          rel="preload"
          href="/images/hero-dj.jpg"
          as="image"
          type="image/jpeg"
        />
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
          crossOrigin="anonymous"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        
        {/* Meta tags for better SEO and performance */}
        <meta name="theme-color" content="#000824" />
        <meta name="description" content="House Journey - Experiencias musicales y culturales" />
        
        {/* Critical CSS could be inlined here */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
} 