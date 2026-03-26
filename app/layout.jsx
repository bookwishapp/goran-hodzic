import './globals.css';

export const metadata = {
  title: 'Goran Hodzic Art',
  description: 'Art, Design, and Creative Works by Goran Hodzic',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}