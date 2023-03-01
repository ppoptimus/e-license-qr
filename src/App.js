import React from "react";
import { Routes, Route, useSearchParams, BrowserRouter } from "react-router-dom";
import LicenseInfo from "./license-info";
import Receipt from "./receipt";

const App = () => {
  const [queryParameters] = useSearchParams();
  console.log(queryParameters.get("type"));
  console.log(queryParameters.get("ref"));

  const showDisplayName = () => {
    if(queryParameters.get("type")==='info'){
      return <LicenseInfo/>
    }
    else if(queryParameters.get("type")==='receipt'){
      return <Receipt/>
    }
  }
  return (
    <Routes>
      <Route path="/" element={showDisplayName()} />
    </Routes>
  );
};

export default App;
