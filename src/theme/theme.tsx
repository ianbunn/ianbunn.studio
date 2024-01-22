import { extendTheme } from "@chakra-ui/react";

const styles = {
    global: {
        "html, body": {
            fontSize: "2.5rem",
        },
    },
};

const fonts = {
    heading: `'LEMONMILK Bold'`,
    body: `'Repsodent'`,
};

const theme = extendTheme({
    fonts,
    styles
});

export default theme;
