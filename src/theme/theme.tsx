import { defineStyleConfig, extendTheme } from "@chakra-ui/react";

const styles = {
    global: {
        html: {
            color: "#031F19"
        },
        body: {
            margin: "20px",
            bg: 'radial-gradient(circle, #D3FDED 50%, #BDF1E1FF 100%)'
        },
        p: {
            fontSize: "4em",
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
