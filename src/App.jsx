import { useState } from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Recipe from "./pages/Recipe";

// Layout component to include Header and routed content
const Layout = ({ onSearch }) => {
  return (
    <div className="app">
      <Header onSearch={onSearch} />
      <Outlet /> {/* Renders child routes */}
    </div>
  );
};

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const router = createBrowserRouter([
    {
      element: <Layout onSearch={handleSearch} />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/recipe/:id",
          element: <Recipe />
        }
      ]
    }
  ]);

  return <RouterProvider router={router} />;
};

export default App;