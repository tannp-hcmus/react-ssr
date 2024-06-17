import { createInertiaApp } from "@inertiajs/react";
import ReactDOMServer from "react-dom/server";
import createServer from "@inertiajs/react/server";

createServer((page) => {
    return createInertiaApp({
        page,
        render: ReactDOMServer.renderToString,
        resolve: name => {
            const pages = import.meta.glob('./Pages/**/*.jsx', { eager: true })
            return pages[`./Pages/${name}.jsx`]
        },
        setup: ({ App, props }) => <App {...props} />,
    });
});