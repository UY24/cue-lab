import "@styles/global.css";

import Nav from "@components/Nav";

export const metadata = {
  title: "Cue Lab",
  description: "Share and explore AI prompts for endless inspiration",
};

const RootLayout = ({ children }) => (
  <html lang="en">
    <body>
        <div className="main">
          <div className="gradient" />
        </div>

        <main className="app">
          <Nav />
          {children}
        </main>
    </body>
  </html>
);

export default RootLayout;
