import { Provider } from "react-redux";
import App from "./App";

import { createRoot } from "react-dom/client";
import { store } from "./store/store";

const root = createRoot(document.getElementById("root"));
root.render(
    <Provider store={store}>

<App />
    </Provider>
);
