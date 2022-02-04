import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    navBar: {
        backgroundColor: '#173F5F !important',
        color: '#FFF',
        justifyContent: 'center',
    },
    profilePic: {
        borderRadius: '50%',
        height: '170px',
        border: '0.3rem solid #aeb2b5',
    },
    profileDetails: {
        fontSize: 32,
        fontWeight: 700,
        color: '#FFF',
        alignContent: 'center',
        justifyContent: 'center',
        display: 'flex',
    },
    profileSubDetails: {
        fontSize: 16,
        fontWeight: 500,
        color: '#FFF',
        alignContent: 'center',
        justifyContent: 'center',
        display: 'flex',
    },
    socialIconBackground: {
        backgroundColor: '#aeb2b5',
        borderRadius: '50%',
        height: '35px',
        width: '35px',
        '&:hover': {
            backgroundColor: '#E98973',
        },
        minHeight: '0 !important',
        minWidth: '0 !important',
    },
    socialIcon: {
        height: '23px',
        width: '23px',
        fill: '#FFF',        
        '&:hover': {
            fill: '#FFF',
        },
    },
    button: {
        minHeight: '0 !important',
        minWidth: '0 !important',
        fontSize: '14px',  
        color: '#FFF',
        fontWeight: '800 !important', 
        fill: '#FFF',        
        '&:hover': {
            fill: '#FFF',
        },     
    },
    divider: {
        backgroundColor: '#FFF',
    },
    navBarList: {
        color: '#aeb2b5 !important',
        justifyContent: 'center',
        '&:hover': {
            fill: '#E98973 !important',
            color: '#FFF !important',
            backgroundColor: '#173F5F',
            '& $navBarIcon': {
                fill: '#E98973 !important',
                color: '#E98973 !important',
                backgroundColor: '#173F5F',
            },
        },
    },
    navBarIcon: {
        color: '#FFF',
        justifyContent: 'center',
    },
    navBarListItem: {
        justifyContent: 'center',
        paddingTop: '5px',
        paddingRight: '10px',
        fontSize: 16,
    },

    headNames: {
        fontSize: 40,
        color: '#E98973',
        fontWeight: 'bold',
    },
    allContent: {
        fontSize: 16,
        color: '#000',
    },
    a: {
        color: '#E98973',
        '&:hover': {
          color: '#173F5F',
        },
        textDecoration: 'none',
    },

    Container: {
        placeContent: 'center',
        display: 'flex',
        flexDirection: 'column',
    },

    headNames2: {
        fontSize: 25,
        color: '#E98973',
        fontWeight: 'bold',
    },
    newsContent: {
        fontSize: 16,
        color: '#000',
    },
    newsIcon1: {
        color: '#FFD700',
        paddingRight: 3,
        '& svg': {
          fontSize: 18,
        },
    },
    newsIcon: {
        color: '#173F5F',
        paddingRight: 3,
        '& svg': {
          fontSize: 18,
        },
    },
    bold: {
        color: '#000',
    },

    cardMediaImage: {
        width: '300px',
        transition: 'transform 0.15s ease-in-out',
        '&:hover': {
            transform: 'scale3d(1.05, 1.05, 1)',
        },
    },
    title: {
        fontSize: 25,
        color: '#173F5F',
        fontWeight: 'bold',
    },
    authors: {
        fontSize: 16,
        color: '#000',
    },
    keywords: {
        backgroundColor: '#ededed',
        textTransform: 'capitalize !important',
        height: '19px',
        width: 'auto',
        color: '#E98973',
        fontSize: '11px',
        pointerEvents: 'none',
        '&:disabled': {
            backgroundColor: '#ededed',
        },
        '&:hover': {
            backgroundColor: '#ededed',
        },
    },
    paperIcons: {
        color: '#FFD700',
        padding: 1,
        '& svg': {
          fontSize: 10,
        },
    },
    publicationIcons: {
        color: '#E98973',
        paddingRight: 1,
        '& svg': {
          fontSize: 10,
        },
    },
    publicationContent: {
        fontSize: 16,
    },
    publicationLink: {
        color: '#173F5F',
        '&:hover': {
          color: '#173F5F',
        },
    },
    researchPaper: {
        alignContent: 'center',
        alignItems: 'center',
    },

    creativeImage: {
        border: '3px',
        borderColor: '#000',
        transition: 'transform 0.15s ease-in-out',
        '&:hover': {
            transform: 'scale3d(1.05, 1.05, 1)',
        },
    },

    cvbutton: {
        backgroundColor: '#173F5F',
        height: '50px',
        width: '100px',
        color: '#FFF',
        fontWeight: '800 !important',        
        '&:hover': {
            backgroundColor: '#173F5F !important',
            color: '#E98973'
        },     
    },
    contactIcon: {
        marginTop: '5px',
        marginRight: '5px',
        color: '#FFD700',
        display: 'flex',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        '& svg': {
          fontSize: 26,
        },
    },
    contactsa: {
        color: '#173F5F',
        '&:hover': {
          color: '#E98973',
        },
    },
}));

export default useStyles;