// js imports
import React from "react";
import Layout from "../containers/Layout";
import Header from "./Header";
import Events from "../containers/Events";

// assets imports
import "../styles/_global.scss";

const contextSchema = {
  owner_keypair: null,
  connection: null,
  client: null,
};
export const appContext = React.createContext(contextSchema);

const App = () => {
  return (
    <Layout>
      <Header />
      <Events />
    </Layout>
  );
};

export default App;
