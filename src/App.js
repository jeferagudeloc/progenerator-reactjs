import './App.css';

import React from "react";
import {
  BrowserRouter
} from "react-router-dom";

import { Layout } from './components/layout/Layout';
import { AuthProvider } from './context/AuthProvider';

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <Layout />
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
