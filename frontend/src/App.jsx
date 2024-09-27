import "./App.css";
import Signup from "./components/auth/Signup";
import Login from "./components/auth/Login";
import Home from "./components/Home";
import Jobs from "./components/jobs";
import Browse from "./components/Browse";
import Profile from "./components/Profile";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import JobDescription from "./components/JobDescription";
import Companies from "./components/admin/Companies";
import CreateCompany from './components/admin/CreateCompany';
import SetupCompany from "./components/admin/SetupCompany";
import AdminJobs from './components/admin/AdminJobs';
import PostJob from "./components/admin/PostJob";
import Applicants from "./components/admin/Applicants";
import Protected from "./components/admin/Protection";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/jobs",
    element: <Jobs />,
  },
  {
    path: "/description/:id",
    element: <JobDescription />,
  },
  {
    path: "/browse",
    element: <Browse />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  // Admin Routes
  {
    path: "/admin/companies",
    element: <Protected><Companies /></Protected>,
  },
  {
    path: "/admin/companies/create",
    element: <Protected><CreateCompany /></Protected>,
  },
  {
    path: "/admin/companies/:id",
    element: <Protected><SetupCompany /></Protected>,
  },
  {
    path: "/admin/jobs",
    element: <Protected><AdminJobs /></Protected>,
  },
  {
    path: "/admin/jobs/create",
    element: <Protected><PostJob /></Protected>,
  },
  {
    path: "/admin/jobs/:id/applicants",
    element: <Protected><Applicants /></Protected>,
  },
]);
function App() {
  // const [count, setCount] = useState(0)
  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
}

export default App;
