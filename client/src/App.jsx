import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { Suspense, useEffect } from 'react';
// import components
import Layout from './components/Layout.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import PageNotFound from './pages/PageNotFound.jsx';
import { AlertProvider } from './contexts/AlertContext.jsx';
import Alert from './components/Alert.jsx';
import PrivateRoute from './utils/PrivateRoute.jsx';
import ForgotPasswordRequest from './pages/ForgotPasswordRequest.jsx';
import ForgotPassword from './pages/ForgotPassword.jsx';
import VerifyUser from './pages/VerifyUser.jsx';
import JobForm from './pages/AddJob.jsx';
import LayoutUser from './components/LayoutUser.jsx';
import ViewJobs from './pages/ViewJobs.jsx';


// import lazy components
const JobDashboard = React.lazy(() => import('./pages/ViewJobs.jsx'));
const Login = React.lazy(() => import('./pages/Login.jsx'));
const Signup = React.lazy(() => import('./pages/Signup.jsx'));



function App() {


  return (
    <>
      {/* wrapping app in alert to send on screen notification */}
      <AlertProvider>
        {/* use alert component to show alert / notification */}
        <Alert />
        <Router>
          <Suspense fallback={<h1>Loading...</h1>}>
            <Routes>
              <Route element={<Layout />} >
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/forgotPasswordRequest" element={<ForgotPasswordRequest />} />
                <Route path="/forgotPassword/:token" element={<ForgotPassword />} />
                <Route path="/verify/:token" element={<VerifyUser />} />
              </Route>

              <Route element={<LayoutUser />} >
                <Route
                  path="/viewJobs"
                  element={<PrivateRoute element={<ViewJobs />} />}
                />
                <Route
                  path="/createJob"
                  element={<PrivateRoute element={<JobForm />} />}
                />
              </Route>

              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </Suspense>
        </Router >
      </AlertProvider>
    </>
  )
}

export default App
