import "./styles.css";
import { Router, Outlet, ReactLocation } from "react-location";
import CreateCard from "./CreateCard";
// import { useState } from "react";
import CardShowcase from "./CardShowcase";

const location = new ReactLocation();

export default function App() {
  // const [formData, setFormData] = useState({
  //   fullName: "",
  //   aboutMe: "",
  //   githubURL: "",
  //   twitterURL: "",
  //   favouriteBooks: "",
  //   HTML: false,
  //   CSS: false,
  //   JS: false,
  //   Git: false,
  //   React: false,
  //   NodeJS: false
  // });

  const routes = [
    {
      path: "/",
      // element: <CreateCard formData={formData} setFormData={setFormData} />
      element: <CreateCard />
    },
    {
      path: "showcase",
      // element: <CardShowcase formData={formData} />
      element: <CardShowcase />
    }
  ];

  return (
    <Router routes={routes} location={location}>
      <div>
        {/* HEADER AND NAVIGATION BAR */}
        <Outlet />
        {/* FOOTER */}
      </div>
    </Router>
  );
}
