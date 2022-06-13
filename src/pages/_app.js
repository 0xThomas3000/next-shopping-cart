import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Component {...pageProps} name="Tuan" age={35}>
      <h1 className="font-bold text-3xl">This is a &quot;Children prop&quot;</h1>
    </Component>
  );
}

export default MyApp;
