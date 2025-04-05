import React from "react";
import WelcomePage from "./screens/welcomePage";
import SignInPage from "./screens/signInPage";
import CreateAccount from "./screens/createAccount";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AccountSetting from "./screens/accountSetting";
const App=()=>{
  return  <><Routes>
    <Route path="/" element={<WelcomePage />}/>
  <Route path="/signInPage" element={<SignInPage />}/>
  <Route path="/createAccount" element={<CreateAccount />}/>
  <Route path="/accountSetting" element={<AccountSetting />}/>
</Routes></>
}

export default App