import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import "/styles/cssReset.css";
import "/styles/index.scss";

import Render from "../render/render";

createRoot(document.getElementById("root")).render(
  <StrictMode>
   <Render></Render>

  </StrictMode>
);
