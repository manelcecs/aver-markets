// js imports
import React from "react";
import Layout from "../containers/Layout";
import Header from "./Header";
import Markets from "../containers/Markets";

// assets imports
import '../styles/_global.scss'

const App = () => {
    return (
        <Layout>
            <Header />
            <Markets /> 
        </Layout>
    );
}

export default App;