import "../styles/globals.css";
import Head from "next/head";
// THE NOTIFICATION PACKAGE SETTINGS
import "react-toastify/dist/ReactToastify.css";
// THE QUILL EDITOR
import "react-quill/dist/quill.snow.css";
import { ToastContainer, toast } from "react-toastify";
import Layout from "../components/Layout.jsx";
function MyApp({ Component, pageProps }) {
  console.log("THIS COMPONENT IS RAN FIRST");
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.3.1/css/all.css"
          integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU"
          crossOrigin="anonymous"
        />
      </Head>
      <ToastContainer />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
