import { extendTheme } from "@chakra-ui/react";

const styles = {
    global: {
        "html, body": {
            fontSize: "1.5rem",
        },
    },
};

const fonts = {
    heading: "sans-serif",
    body: "Menlo, Consolas, Monaco, Liberation Mono, Lucida Console, monospace;",
};

const theme = extendTheme({
    fonts,
    styles
});

export default theme;
