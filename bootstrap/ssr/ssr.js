import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import "react";
import { createInertiaApp } from "@inertiajs/react";
import ReactDOMServer from "react-dom/server";
import createServer from "@inertiajs/react/server";
const Welcome = () => {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("h1", { children: "Welcome" }),
    /* @__PURE__ */ jsx("p", { children: "Hello Tan, welcome to your first Inertia app!" })
  ] });
};
const __vite_glob_0_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Welcome
}, Symbol.toStringTag, { value: "Module" }));
createServer((page) => {
  return createInertiaApp({
    page,
    render: ReactDOMServer.renderToString,
    resolve: (name) => {
      const pages = /* @__PURE__ */ Object.assign({ "./Pages/welcome.jsx": __vite_glob_0_0 });
      return pages[`./Pages/${name}.jsx`];
    },
    setup: ({ App, props }) => /* @__PURE__ */ jsx(App, { ...props })
  });
});
