import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    container: {
        width: '100%',
        display: 'flex',
        marginTop: theme.spacing(10),
        padding: theme.spacing(5),
        justifyContent: 'center',
    },
    loginBox: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        padding: theme.spacing(2),
    },
    input: {
        marginTop: theme.spacing(2),
    },
    link: {
        textDecoration: 'none',
        display: 'block',
        marginTop: theme.spacing(3),
    },
}));

export default useStyles;
