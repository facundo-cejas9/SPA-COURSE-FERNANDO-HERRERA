import { Route, Routes } from "react-router-dom";

import { LoginPage } from "../Auth/pages/LoginPage";
import { AppRoutes } from "../Heroes/Routes/AppRoutes";

function AppRouter() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/*" element={ <AppRoutes /> } />
        
      </Routes>
    </>
  );
}

export default AppRouter;
