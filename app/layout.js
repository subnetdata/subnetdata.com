import './globals.css';

export const metadata = {
  title: 'Subnet Data Services | Boise, Idaho',
  description: 'Subnet Data Services provides practical IT support, infrastructure, and security services in Boise, Idaho.',
  icons: {
    icon: '/assets/favicon/favicon.ico',
    apple: '/assets/favicon/apple-touch-icon.png'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css"
          integrity="sha512-dTfge/zgoMYpP7QbHy4gWMEGsbsdZeCXz7irItjcC3sPUFtf0kuFbDz/ixG7ArTxmDjLXDmezHubeNikyKGVyQ=="
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css"
        />
        <link rel="stylesheet" href="/assets/css/main.css" />
      </head>
      <body className="site">
        <div id="wrap" className="site-content">{children}</div>
      </body>
    </html>
  );
}
