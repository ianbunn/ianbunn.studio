import { defineStyleConfig, extendTheme } from "@chakra-ui/react";

const styles = {
    global: {
        body: {
            margin: "20px",
        },
        p: {
            fontSize: "5em",
            width: "100%",
        }
    },
};

const fonts = {
    heading: `'LEMONMILK Bold'`,
    body: `'Repsodent'`,
};

const  Heading = defineStyleConfig( {
    baseStyle: {
        fontWeight: "bold",
    },
    sizes: {
        xl: {
            fontSize: "4em",
        },
        lg: {
            fontSize: "2em",
        },
        md: {
            fontSize: "1em",
        },
    },
});

const theme = extendTheme({
    styles,
    fonts,
    components: {
        Heading
    }
});

export default theme;
