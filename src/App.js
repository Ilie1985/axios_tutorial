import React from "react";
import Title from "./components/Title";
import FirstRequest from "./examples/1stRequest";
import Headers from "./examples/headers";
import PostRequest from "./examples/postRequest";
import GlobalInstance from "./examples/global-Instance";
import "./axios/global"

function App() {
  return (
    <main>
      <Title />
      <br />
      <br />
      <hr />
      <FirstRequest />
      <br />
      <br />
      <hr />
      <Headers/>
      <br />
      <br />
      <hr />
      <PostRequest/>
      <br />
      <br />
      <hr />
      <GlobalInstance/>
      <br />
      <br />
      <hr />
    </main>
  );
}

export default App;
