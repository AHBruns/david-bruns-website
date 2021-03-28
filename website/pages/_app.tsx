import * as nextApp from "next/app";
import "../styles.css";

const App = (props: nextApp.AppProps) => {
  return <props.Component {...props.pageProps} />;
};

export default App;
