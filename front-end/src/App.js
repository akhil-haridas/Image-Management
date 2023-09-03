import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import ImageRoutes from "./routes/routes";

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/*" element={<ImageRoutes />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
