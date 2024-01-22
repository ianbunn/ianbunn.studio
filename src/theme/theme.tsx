import { defineStyleConfig, extendTheme } from "@chakra-ui/react";

const styles = {
    global: {
        body: {
            margin: "20px",
            padding: "20px",
        },
        p: {
            fontSize: "65px",
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
            fontSize: "75px",
        },
        lg: {
            fontSize: "50px",
        },
        md: {
            fontSize: "25px",
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
