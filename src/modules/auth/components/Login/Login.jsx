import React from 'react';
import { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));


export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const classes = useStyles();

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <form className={classes.form} noValidate>
                    <TextField
                        variant="outlined"
                        label="Email"
                        value={email}
                        fullWidth
                        margin="normal"
                        onChange={event => setEmail(event.target.value)}
                    />
                    <TextField
                        autoComplete="current-password"
                        variant="outlined"
                        type="password"
                        label="Password"
                        value={password}
                        margin="normal"
                        fullWidth
                        onChange={event => setPassword(event.target.value)}
                    />
                </form>
            </div>

        </Container>
    )
}