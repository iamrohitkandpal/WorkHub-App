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
  {
    path: "/admin/companies",
    element: <Companies />,
  },
  {
    path: "/admin/companies/create",
    element: <CreateCompany />,
  },
  {
    path: "/admin/companies/:id",
    element: <SetupCompany />,
  },
  {
    path: "/admin/jobs",
    element: <AdminJobs />,
  },
  {
    path: "/admin/jobs/create",
    element: <PostJob />,
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
