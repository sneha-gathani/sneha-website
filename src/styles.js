import { makeStyles } from '@material-ui/core/styles';
// e98973
const useStyles = makeStyles((theme) => ({
    mfpContainer: {
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)', // Center the modal horizontally and vertically
        width: '100%',
        height: '100%',
        maxWidth: '1200px', // Adjust as needed
        maxHeight: '1000px', // Adjust as needed
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000,
        border: 'none !important',
      },
      mfpContent: {
        margin: '10px !important',
        position: 'relative',
        maxWidth: '95%', // Adjust as needed for the image size relative to screen
        maxHeight: '95%', // Adjust as needed for the image size relative to screen
        '& .mfp-close': {
          position: 'absolute',
          padding: theme.spacing(1),
          backgroundColor: 'rgba(255, 255, 255, 0.5)',
          border: 'none',
          cursor: 'pointer',
          zIndex: 10,
        },
        '& figure': {
          margin: 5,
          '& img': {
            maxWidth: '90%',
            maxHeight: '90%',
            display: 'block',
            margin: '5',
          },
          '& figcaption': {
            textAlign: 'center',
            marginTop: theme.spacing(1),
          },
        },
        '& .mfp-bottom-bar': {
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          color: 'white',
          padding: theme.spacing(1),
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          '& .mfp-title': {
            flex: 1,
          },
        },
    },

    pill: {
        display: 'flex',
        alignItems: 'center',
        backgroundColor: 'lightgray',
        borderRadius: '999px',
        padding: '2px 8px',
        color: 'gray', 
        '&:hover': { 
            backgroundColor: '#DF825F', 
            color: 'white', 
            '& .MuiSvgIcon-root': { 
                color: 'white !important', 
            }, 
            '& a': { 
                color: 'white !important', 
            }, 
        }, 
    },
    pillTarget: {
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#DF825F',
        borderRadius: '999px',
        padding: '2px 8px',
        color: '#FFF',
    },
    icon: {
        fontSize: '16px !important',
        color: 'gray',
        marginRight: '-22px',
    },
    iconTarget: {
        fontSize: '16px !important',
        color: 'white',
        marginRight: '-22px',
    },
    title: {
        fontSize: '22px',
        lineHeight: 1.2,
        color: '#173F5F',
        fontWeight: 850,
    },
    titleHide: {
        fontSize: '22px',
        lineHeight: 1.2,
        color: '#FFF',
        fontWeight: 850,
    },
    subtitle: {
        fontSize: '16px',
        fontFamily: 'Avenir',
        color: 'gray',
        lineHeight: 1.2,
    },
    subtitleHide: {
        fontSize: '16px',
        fontFamily: 'Avenir',
        color: '#FFF',
        lineHeight: 1.2,
    },
    authors: {
        paddingTop: '5px',
        fontSize: '16px',
        lineHeight: 1.2,
        color: '#000',
    },
    authorsHide: {
        fontSize: '16px',
        lineHeight: 1.2,
        color: '#FFF',
    },
    iconPill: {
        display: 'flex', 
        alignItems: 'center', 
        textDecoration: 'none !important', 
        color: 'gray !important',
    },




    navBar: {
        // backgroundColor: '#173F5F !important',
        backgroundColor: '#033f63 !important',
        color: '#FFF',
        justifyContent: 'center',
        height: '100vh',
        width: '17vw',
    },
    profilePic: {
        borderRadius: '50%',
        height: '21vh',
        border: '0.3rem solid lightgrey',
        '&:hover': {
            border: '0.3em solid #DF825F',
        },
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
        fontSize: '15px',
        fontWeight: 500,
        color: '#FFF',
        alignContent: 'center',
        justifyContent: 'center',
        display: 'flex',
    },
    socialIconBackground: {
        backgroundColor: '#aeb2b5',
        borderRadius: '50%',
        height: '45px',
        width: '45px',
        '&:hover': {
            backgroundColor: '#DF825F',
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
        fontSize: '22px',  
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
            fill: '#DF825F !important',
            color: '#FFF !important',
            // backgroundColor: '#173F5F',
            backgroundColor: '#033f63',
            '& $navBarIcon': {
                fill: '#DF825F !important',
                color: '#DF825F !important',
                // backgroundColor: '#173F5F',
                backgroundColor: '#033f63',
            },
        },
    },
    navBarIcon: {
        color: '#FFF',
        justifyContent: 'center',
    },
    navBarListItem: {
        justifyContent: 'center',
        paddingTop: '0.5vh',
        fontSize: 16,
    },

    headNames: {
        fontSize: 40,
        color: '#DF825F',
        fontWeight: 'bold',
    },
    allContent: {
        fontSize: '14px !important',
        color: '#000',
    },
    a: {
        color: '#DF825F',
        '&:hover': {
        //   color: '#173F5F',
          color: '#033f63',
        },
        textDecoration: 'none',
    },

    Container: {
        placeContent: 'center',
        alignContent: 'center',
        display: 'flex',
        flexDirection: 'column',
        width: '82vw',
        margin: '0px',
    },

    headNames2: {
        fontSize: 25,
        color: '#DF825F',
        fontWeight: 'bold',
    },
    newsContent: {
        fontSize: '14px',
        color: '#000',
    },
    newsIcon1: {
        color: '#DFB15B',
        paddingRight: 3,
        '& svg': {
          fontSize: 18,
        },
    },
    newsIcon: {
        // color: '#173F5F',
        color: '#DFB15B',
        paddingRight: 3,
        '& svg': {
          fontSize: 18,
        },
    },
    bold: {
        color: '#000',
        fontSize: '14px',
    },

    publicationImage: {
        transition: 'transform 0.15s ease-in-out',
        '&:hover': {
            transform: 'scale3d(1.05, 1.05, 1)',
        },
        height: 175,
        width: '100%',
        objectPosition: 'center',
        alignItems: 'center',
        objectFit: 'contain',
    },
    cardMediaImage: {
        width: '350px',
        transition: 'transform 0.15s ease-in-out',
        '&:hover': {
            transform: 'scale3d(1.05, 1.05, 1)',
        },
    },
    keywords: {
        backgroundColor: '#ededed',
        textTransform: 'capitalize !important',
        height: '19px',
        width: 'auto',
        color: '#DF825F',
        fontSize: '11px',
        pointerEvents: 'none',
        '&:disabled': {
            backgroundColor: '#ededed',
        },
        '&:hover': {
            backgroundColor: '#ededed',
        },
    },
    publicationIcons: {
        color: '#DF825F !important',
        fontSize: '16px !important',
    },
    paperIcons: {
        color: '#DF825F',
        padding: 1,
        '& svg': {
          fontSize: 10,
        },
    },
    // publicationIcons: {
    //     color: '#DF825F',
    //     paddingRight: 1,
    //     fontSize: '20px',
    //     '& svg': {
    //       fontSize: 8,
    //     },
    // },
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
            color: '#DF825F'
        },     
    },
    contactIcon: {
        marginTop: '5px',
        marginRight: '5px',
        color: '#DF825F',
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
          color: '#DF825F',
        },
    },
}));

export default useStyles;

