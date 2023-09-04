import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ImageRoutes from "./routes/routes";
import Spinner from "./component/Listing/Spinner";

function App() {
  return (
    <Router>
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/*" element={<ImageRoutes />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
