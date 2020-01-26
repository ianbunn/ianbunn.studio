import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

export default class Copyright extends Component {
    render() {
        return (
            <Typography variant="body2" color="textSecondary">
                {'Made by '}
                <Link color="inherit" href="http://ianbunn.studio/">
                    irb___
                </Link>{' '}
                {' © 2020 with 💚'}
            </Typography>
        )
    }
}