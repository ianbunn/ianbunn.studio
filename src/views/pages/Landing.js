import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Copyright from '../components/Copyright';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Quote from '../components/Quote'

import './Landing.css'

// THEME STYLE
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        backgroundColor: '#070e14',
        color: '#dee5ea'
    },
    main: {
        marginTop: theme.spacing(8),
        marginBottom: theme.spacing(2),
    },
    footer: {
        padding: theme.spacing(3, 2),
        marginTop: 'auto',
        backgroundColor: '#dee5ea'
    },
    mainheader: {
        color: '#80ff56',
        fontFamily: ['Rubik Mono One', 'sans-serif']
    }
}));

export default function Landing() {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CssBaseline />
            <Container component="main" className={classes.main} maxWidth="sm">
                <Typography variant="h2" component="h1" gutterBottom>
                    <span className={classes.mainheader}>Ian Bunn {' <dot> '} studio</span>
                </Typography>
                <Typography variant="h5" component="h2" gutterBottom>
                    {'This is where I collect my madness,'}<br></br>{'from software engineering to growing cilantro.'}
                </Typography>
                <Quote />
                <Typography variant="body1">Enter at your own risk</Typography>
                {/* LINK TO DEV.TO PROFILE */}
                <Link color="inherit" href="https://dev.to/irb___">
                    <Button style={{ marginTop: 20 }} variant="contained">Dev.to Profile</Button>
                </Link>
            </Container>
            <footer className={classes.footer}>
                <Container maxWidth="sm">
                    <Typography variant="body1">
                    </Typography>
                    <Copyright />
                </Container>
            </footer>
        </div>
    );
}