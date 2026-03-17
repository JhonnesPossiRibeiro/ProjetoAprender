import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { PageLetras } from "../pages/Letras";
import { PageSilabas } from "../pages/Silabas";
import { PagePalavras } from "../pages/Palavras";
import Layout from "../components/layout/Index";

const AppRoutes = () =>{
  const router = createBrowserRouter([
      {
        path: "/",
        element: <Layout />,       
        children:[
          { path: "/", element: <PageLetras /> },
          { path: "Silabas", element: <PageSilabas /> },
          { path: "Palavras", element: <PagePalavras /> }
        ]  
      },
       {
        path: "*",
        element: <p>404 não existe</p>,
      },
    ]);
  return(
        <RouterProvider router={router} />
    )
}

export default AppRoutes