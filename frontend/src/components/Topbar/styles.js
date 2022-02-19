import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    appBar: {
        backgroundColor: theme.palette.topbar.main,
        height: '50px',
    },
    logo: {
        height: '40px',
        marginRight: theme.spacing(1),
    },
    title: {
        cursor: 'pointer',
        fontSize: '1.2em',
        fontWeight: 'bold',
        textDecoration: 'none',
        color: theme.palette.text.title,
        '&:hover': {
            color: theme.palette.primary.wite,
            textDecoration: 'none',
        },
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    link: {
        color: theme.palette.text.white,
        textDecoration: 'none',
        fontWeight: 'bold',
        cursor: 'pointer',
        '&:hover': {
            textDecoration: 'none',
        },
        textAlign: 'center',
    },
    welcomeText: {
        color: theme.palette.text.primary,
    },
}));

export default useStyles;
