import React, { useEffect } from 'react';
import { Typography, Box, Button, Card, CardMedia, CardContent, Container, CssBaseline, Divider, Drawer, Grid, IconButton, List, ListItem, ListItemIcon, ListItemText, ThemeProvider } from '@material-ui/core';
import { Person, Visibility, Receipt, CollectionsBookmark, ColorLens, Contacts, GitHub, Email, LinkedIn, School } from '@material-ui/icons';
import CampaignIcon from '@mui/icons-material/Campaign';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import SearchIcon from '@mui/icons-material/Search';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import ShortTextIcon from '@mui/icons-material/ShortText';
import theme from './theme.js';
import useStyles from './styles';
import ArticleIcon from '@mui/icons-material/Article';
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import CelebrationIcon from '@mui/icons-material/Celebration';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import InfoIcon from '@mui/icons-material/Info';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import Aos from 'aos';
import 'aos/dist/aos.css'; 
// import snehaProfileImg from './img/sneha.png';

const drawerWidth = '30vw';

const App = () => {
    const classes = useStyles();

    useEffect(() =>{
        Aos.init({duration: 1000});
    }, []);

    const bull = (
        <Box
          component="span"
          sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
        >
          •
        </Box>
      );    

    return (
        <ThemeProvider theme={theme} style={{ width: '100% !important', overflowX: 'hidden', }}>
            <Box sx={{ display: 'flex', width: '100% !important', overflowX: 'hidden', overflowY: 'auto', }}>
                <CssBaseline />
                <Drawer
                    sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                        height: '100vh',
                    }
                    }}
                    variant="permanent"
                    anchor="center"
                    classes={{paper: classes.navBar}}
                >
                    <Card style={{ flexDirection: 'column', boxShadow: 'none', backgroundColor: '#173F5F' }}>
                        <CardMedia style={{ display: 'flex', justifyContent: 'center', alignContent: 'center' }}>
                            <img src={require('./img/sneha.png')} alt="Sneha Gathani" className={classes.profilePic}/>
                        </CardMedia>
                        <CardContent>
                            <Typography className={classes.profileDetails}>
                                Sneha Gathani
                            </Typography>
                            <Typography className={classes.profileSubDetails}>
                                Ph.D. Student
                            </Typography>
                            <Typography className={classes.profileSubDetails}>
                                Department of Computer Science
                            </Typography>
                            <Typography className={classes.profileSubDetails}>
                                University of Maryland, College Park
                            </Typography>
                            <div style={{ display: 'flex', justifyContent: 'space-evenly', paddingTop: '1.5vh', }}>
                                <IconButton aria-label="Email" className={classes.socialIconBackground} href="mailto:sgathani@umd.edu">
                                    <Email className={classes.socialIcon} />
                                </IconButton>
                                <IconButton aria-label="GitHub" className={classes.socialIconBackground} href="https://github.com/sneha-gathani">
                                    <GitHub className={classes.socialIcon} />
                                </IconButton>
                                <IconButton aria-label="LinkedIn" className={classes.socialIconBackground} href="https://www.linkedin.com/in/sneha-gathani/">
                                    <LinkedIn className={classes.socialIcon} />
                                </IconButton>
                                <IconButton aria-label="Google Scholar" className={classes.socialIconBackground} href="https://scholar.google.com/citations?user=n3f44dkAAAAJ&hl=en">
                                    <School className={classes.socialIcon} />
                                </IconButton>
                                <Button label="CV" className={classes.socialIconBackground} href="https://drive.google.com/file/d/1lOs2vZMD9Pq4OMSVjVN2pyml3VWcyany/view?usp=sharing">
                                    <Typography className={classes.button}>CV</Typography>
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                    <Divider className={classes.divider} />
                    <List>
                        <div 
                            style={{"cursor":"pointer"}} 
                            onClick={() => {
                            const anchor = document.querySelector('#about_me')
                            anchor.scrollIntoView({ behavior: 'smooth', block: 'start' })
                        }}
                        >
                            <ListItem button key='About Me' className={classes.navBarList}>
                                <ListItemIcon className={classes.navBarIcon}>
                                    <Person />
                                </ListItemIcon>
                                <ListItemText primary='About Me' className={classes.navBarListItem} />
                            </ListItem>
                        </div>
                        <div 
                            style={{"cursor":"pointer"}} 
                            onClick={() => {
                            const anchor = document.querySelector('#publications')
                            anchor.scrollIntoView({ behavior: 'smooth', block: 'start' })
                        }}
                        >
                            <ListItem button key='Publications' className={classes.navBarList}>
                                <ListItemIcon className={classes.navBarIcon}>
                                    <Receipt />
                                </ListItemIcon>
                                <ListItemText primary='Publications' className={classes.navBarListItem} />
                            </ListItem>
                        </div>
                        <div 
                            style={{"cursor":"pointer"}} 
                            onClick={() => {
                            const anchor = document.querySelector('#research_interests')
                            anchor.scrollIntoView({ behavior: 'smooth', block: 'start' })
                        }}
                        >
                            <ListItem button key='Research Interests' className={classes.navBarList}>
                                <ListItemIcon className={classes.navBarIcon}>
                                    <Visibility />
                                </ListItemIcon>
                                <ListItemText primary='Research Interests' className={classes.navBarListItem} />
                            </ListItem>
                        </div>
                        <div 
                            style={{"cursor":"pointer"}} 
                            onClick={() => {
                            const anchor = document.querySelector('#research')
                            anchor.scrollIntoView({ behavior: 'smooth', block: 'start' })
                        }}
                        >
                            <ListItem button key='Research' className={classes.navBarList}>
                                <ListItemIcon className={classes.navBarIcon}>
                                    <CollectionsBookmark />
                                </ListItemIcon>
                                <ListItemText primary='Research' className={classes.navBarListItem} />
                            </ListItem>
                        </div>
                        <div 
                            style={{"cursor":"pointer"}} 
                            onClick={() => {
                            const anchor = document.querySelector('#creative')
                            anchor.scrollIntoView({ behavior: 'smooth', block: 'start' })
                        }}
                        >
                            <ListItem button key='Creative' className={classes.navBarList}>
                                <ListItemIcon className={classes.navBarIcon}>
                                    <ColorLens />
                                </ListItemIcon>
                                <ListItemText primary='Creative' className={classes.navBarListItem} />
                            </ListItem>
                        </div>
                        <div 
                            style={{"cursor":"pointer"}} 
                            onClick={() => {
                            const anchor = document.querySelector('#contact')
                            anchor.scrollIntoView({ behavior: 'smooth', block: 'start' })
                        }}
                        >
                            <ListItem button key='Contact' className={classes.navBarList}>
                                <ListItemIcon className={classes.navBarIcon}>
                                    <Contacts />
                                </ListItemIcon>
                                <ListItemText primary='Contact' className={classes.navBarListItem} />
                            </ListItem>
                        </div>
                    </List>
                </Drawer>
                <Box
                    component="main"
                    sx={{ flexGrow: 1, bgcolor: '#FFF', paddingLeft: '17.5vw', width: '100vw', marginLeft: 0, }}
                >
                    <Container maxWidth="xl" id="about_me" className={classes.Container} style={{ margin: 0, padding: 0, height: '100vh', width: '82vw', }}>
                        <Typography className={classes.headNames}>Hi, I am Sneha Gathani!</Typography>
                        <Typography className={classes.allContent}>
                            I am a 3<sup>rd</sup> year Ph.D. student at the <a href="https://www.cs.umd.edu/" target="_blank" rel="noreferrer" className={classes.a}>University of Maryland, College Park (UMD)</a>, advised 
                            by <a href="https://www.zcliu.org/" target="_blank" rel="noreferrer" className={classes.a}>Prof. Zhicheng Liu</a>. I am a part of the <a href="https://hdi.cs.umd.edu/" target="_blank" rel="noreferrer" className={classes.a}> Human-Data Interaction 
                            Group</a> and <a href="https://hcil.umd.edu/" target="_blank" rel="noreferrer"className={classes.a}>HCIL</a>. My research interests lie in the space of <i>interactive visual data analysis systems, 
                            interactive visual data-driven decision-making systems, visual systems fostering trust in AI models, and human-centered AI</i>.
                        </Typography>
                        <Typography style={{ display: 'block', }}>{'\n'}</Typography>
                        <Typography className={classes.allContent}>
                            I graduated with a Master's in Computer Science also from UMD in May 2020. During Master's, I worked with <a href="https://www.cs.umd.edu/~leilani/bio.html" target="_blank" rel="noreferrer" className={classes.a}>Prof. 
                            Leilani Battle</a> as part of the <a href="https://battle-data-lab.cs.umd.edu/" target="_blank" rel="noreferrer" className={classes.a}>BAttle Data Lab (BAD Lab)</a> at the intersection of Data Visualization, Databases 
                            and HCI. Prior to grad school, I completed my Bachelors in Computer Engineering from <a href="https://pict.edu/?__cf_chl_captcha_tk__=035092ebe160b7b8d5fedd48ab431de1066b92f9-1591140710-0-AWYC-6QkN1egyq9RJfAjWGMhla9poOxNHhCZDL7-iZBS5yYT3ghX65o0JQ2-O_iNKjRj-1YsWuQzvjOeZv_cxCyBa6q85iZsFqdeKlaXHF9o9-NjFx7KOmcIf_zXb2wqYbQvj8aKgc_tM_8HMnPbVZSKWpO_WOebfvblSJ1EZU_81TqcNtUjSZEA5l-aFKnhK7J-l1PbbxLpdy8lZlg34IViBZE1bOTmyxVgsTWT0oS-SCb_WNPAAfyd6Wa4-ucV2Rttf5Oy_XXQXBLstMQ2fH2mniwTTJ5CaHXbfJtPM9kMg7A8pDuYgs5RoAksrGIxUelTMIx_m2nT8xHWY-tqMcBAqup7FUR8HVDjM7rC0FsnVK4nFuBqipibQtyVV7eAQ0LmzdR1R4Mok9NPzJlr4YDMfDwMBihFb6V57EKO5JFoLBjEzr0j27Kw0HKruAofvpdrRNF3RIvYMimQJrlQwYT3eCQYe5Sv6t3UQyGYBN_2" target="_blank" rel="noreferrer" className={classes.a}>
                            University of Pune, India</a> with a focus in Computer Science.
                        </Typography>
                        <Typography style={{ display: 'block' }}>{'\n'}</Typography>
                        <Divider style={{ marginTop: '25px', marginBottom: '25px', }} />
                        <Typography className={classes.headNames2}>News</Typography>
                        <div style={{ marginLeft: '15px', }}>
                            <div style={{ display: 'flex', flexDirection: 'row' }}>
                                <CampaignIcon className={classes.newsIcon} />
                                <Typography className={classes.newsContent}><b className={classes.bold}>September 2022 </b>Awared scholarship to attend GHC 2022</Typography>
                                <CelebrationIcon className={classes.newsIcon1} />
                                <Typography className={classes.newsContent}>in-person</Typography>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'row' }}>
                                <CampaignIcon className={classes.newsIcon} />
                                <Typography className={classes.newsContent}><b className={classes.bold}>September 2022 </b>One full paper</Typography>
                                <ReceiptLongIcon className={classes.newsIcon1} />
                                <Typography> submitted to CHI 2023 in collaboration with <a href="https://www.sigmacomputing.com/" target="_blank" rel="noreferrer" className={classes.a}>Sigma Computing Inc.</a></Typography>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'row' }}>
                                <CampaignIcon className={classes.newsIcon} />
                                <Typography className={classes.newsContent}><b className={classes.bold}>September 2022 </b>Research continuing with</Typography>
                                <PrecisionManufacturingIcon className={classes.newsIcon1} />
                                <Typography> at <a href="https://www.sigmacomputing.com/" target="_blank" rel="noreferrer" className={classes.a}>Sigma Computing Inc.</a> through the Fall 2022 semester</Typography>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'row' }}>
                                <CampaignIcon className={classes.newsIcon} />
                                <Typography className={classes.newsContent}><b className={classes.bold}>June 2022 </b>Presented</Typography>
                                <RecordVoiceOverIcon className={classes.newsIcon1} />
                                <Typography className={classes.newsContent}>EuroVis 2022 paper in Rome, Italy in-person</Typography>
                            </div>
                        </div>
                    </Container>

                    {/* Publications section */}
                    <Container maxWidth="xl" className={classes.Container} id="publications" style={{ margin: 0, padding: 0, width: '82vw', height: 'auto' }}>
                        <Typography className={classes.headNames}>Publications</Typography>
                        <Grid container xs={11} style={{ marginBottom: '1.5vh', }}>
                            <Grid item xs container direction="column" spacing={4} style={{ justifyContent: 'center', }}>
                                <CardContent sx={{ flex: '1 0 auto' }}>
                                    <Typography className={classes.title}>
                                        A Grammatic Approach to Applying Visualization Taxonomies to Interaction Logs
                                    </Typography>
                                    <Typography className={classes.authors}>
                                        <b className={classes.bold}>Sneha Gathani</b>, Shayan Monadjemi, Alvitta Ottley, Leilani Battle
                                    </Typography>
                                    <Box sx={{ display: 'flex', flexDirection: 'row', marginTop: '0.5vh', marginBottom: '0.5vh', }}>
                                        <Button className={classes.keywords} disable>
                                            Visualization Taxonomies
                                        </Button>
                                        {bull}
                                        <Button className={classes.keywords} disable>
                                            Regular Languages
                                        </Button>
                                        {bull}
                                        <Button className={classes.keywords} disable>
                                            Interaction Log Analysis
                                        </Button>
                                        {bull}
                                        <Button className={classes.keywords} disable>
                                            Framework
                                        </Button>
                                    </Box>
                                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                                        <AutoAwesomeIcon className={classes.paperIcons} />
                                        <Typography>
                                            <i><b className={classes.bold}>EuroVis 2022</b> Eurographics Working Group on Data Visualization </i><b>| </b> 
                                        </Typography>
                                        <ArticleIcon className={classes.paperIcons} />
                                        <Typography>
                                            <i>Full Paper</i>
                                        </Typography>
                                    </div>
                                    <div style={{ display: 'flex', flexDirection: 'row', marginTop: '1vh', }}>
                                        <div style={{ display: 'flex', flexDirection: 'row', marginRight: '0.5vw', }}>
                                            <PictureAsPdfIcon className={classes.publicationIcons} />
                                            <a href="https://arxiv.org/pdf/2201.03740.pdf" target="_blank" rel="noreferrer" className={classes.publicationLink}><Typography className={classes.publicationContent}>Paper</Typography></a>
                                        </div>
                                        <div style={{ display: 'flex', flexDirection: 'row', marginRight: '0.5vw', }}>
                                            <SearchIcon className={classes.publicationIcons} />
                                            <a href="https://arxiv.org/abs/2201.03740#:~:text=A%20Programmatic%20Approach%20to%20Applying%20Visualization%20Taxonomies%20to%20Interaction%20Logs,-Sneha%20Gathani%2C%20Shayan&text=Researchers%20collect%20large%20amounts%20of,motivations%2C%20intuitions%2C%20and%20goals." target="_blank" rel="noreferrer" className={classes.publicationLink}><Typography className={classes.publicationContent}>DOI</Typography></a>
                                        </div>
                                        <div style={{ display: 'flex', flexDirection: 'row', marginRight: '0.5vw', }}>
                                            <RecordVoiceOverIcon className={classes.publicationIcons} />
                                            <a href="https://www.youtube.com/watch?v=t7PVqvh0iQ4&list=PLSlLplD3pBWjPUtD5sU8qPmCkN_nn8ZZj&t=3105s" target="_blank" rel="noreferrer" className={classes.publicationLink}><Typography className={classes.publicationContent}>Talk</Typography></a>
                                        </div>
                                        <div style={{ display: 'flex', flexDirection: 'row', marginLeft: '0.5vw', }}>
                                            <GitHub className={classes.publicationIcons} />
                                            <a href="https://tinyurl.com/regular-grammar-taxonomies" target="_blank" rel="noreferrer" className={classes.publicationLink}><Typography className={classes.publicationContent}>Code</Typography></a>
                                        </div>
                                    </div>
                                </CardContent>
                            </Grid>
                            <Grid item style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignContent: 'center', alignItems: 'center', }}>
                            <CardMedia
                                component="img"
                                image={require('./img/mapping_process.png')}
                                className={classes.cardMediaImage}
                            />
                            </Grid>
                        </Grid>
                        <Divider />

                        <Grid container xs={11} style={{ marginBottom: '1.5vh', marginTop: '1.5vh', }}>
                            <Grid item xs container direction="column" spacing={4} style={{ justifyContent: 'center', }}>
                                <CardContent sx={{ flex: '1 0 auto' }}>
                                    <Typography className={classes.title}>
                                        Augmenting Decision Making via Interactive What-If Analysis
                                    </Typography>
                                    <Typography className={classes.authors}>
                                        <b className={classes.bold}>Sneha Gathani</b>, Madelon Hulsebos, James Gale , Peter J. Haas, Çağatay Demiralp
                                    </Typography>
                                    <Box sx={{ display: 'flex', flexDirection: 'row',  marginTop: '0.5vh', marginBottom: '0.5vh', }}>
                                        <Button className={classes.keywords} disable>
                                            Business Data Analysis
                                        </Button>
                                        {bull}
                                        <Button className={classes.keywords} disable>
                                            Data-driven Decision Making
                                        </Button>
                                        {bull}
                                        <Button className={classes.keywords} disable>
                                            Driver Importance Analysis
                                        </Button>
                                        {bull}
                                        <Button className={classes.keywords} disable>
                                            Sensitivity Analysis
                                        </Button>
                                        {bull}
                                        <Button className={classes.keywords} disable>
                                            Goal Inversion (Seeking) Analysis
                                        </Button>
                                        {bull}
                                        <Button className={classes.keywords} disable>
                                            Constrained Analysis
                                        </Button>
                                    </Box>
                                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                                        <AutoAwesomeIcon className={classes.paperIcons} />
                                        <Typography>
                                            <i><b className={classes.bold}>CIDR 2022</b> Conference on Innovative Data Systems Research </i><b>| </b> 
                                        </Typography>
                                        <ArticleIcon className={classes.paperIcons} />
                                        <Typography>
                                            <i>Full Paper</i>
                                        </Typography>
                                    </div>
                                    <div style={{ display: 'flex', flexDirection: 'row', marginTop: '1vh', }}>
                                        <div style={{ display: 'flex', flexDirection: 'row', marginRight: '0.5vw', }}>
                                            <PictureAsPdfIcon className={classes.publicationIcons} />
                                            <a href="https://arxiv.org/pdf/2109.06160.pdf" target="_blank" rel="noreferrer" className={classes.publicationLink}><Typography className={classes.publicationContent}>Paper</Typography></a>
                                        </div>
                                        <div style={{ display: 'flex', flexDirection: 'row', marginRight: '0.5vw', }}>
                                            <SearchIcon className={classes.publicationIcons} />
                                            <a href="https://arxiv.org/abs/2109.06160" target="_blank" rel="noreferrer" className={classes.publicationLink}><Typography className={classes.publicationContent}>DOI</Typography></a>
                                        </div>
                                        <div style={{ display: 'flex', flexDirection: 'row', marginRight: '0.5vw', }}>
                                            <VideoLibraryIcon className={classes.publicationIcons} />
                                            <a href="https://drive.google.com/file/d/1PZqyPjd99-HmsTDXZOJzEVVJJIHMSO82/view?usp=sharing" target="_blank" rel="noreferrer" className={classes.publicationLink}><Typography className={classes.publicationContent}>Video</Typography></a>
                                        </div>
                                        <div style={{ display: 'flex', flexDirection: 'row', marginLeft: '0.5vw', }}>
                                            <RecordVoiceOverIcon className={classes.publicationIcons} />
                                            <a href="https://www.youtube.com/watch?v=an-oTVQzHT0" target="_blank" rel="noreferrer" className={classes.publicationLink}><Typography className={classes.publicationContent}>Talk</Typography></a>
                                        </div>
                                    </div>
                                </CardContent> 
                            </Grid>
                            <Grid item style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignContent: 'center', alignItems: 'center'}}>
                                <CardMedia
                                    component="img"
                                    image={require('./img/functionalities.png')}
                                    className={classes.cardMediaImage}
                                />
                            </Grid>
                        </Grid>
                        <Divider />

                        <Grid container xs={11} style={{ marginBottom: '1.5vh', marginTop: '1.5vh', }}>
                            <Grid item xs container direction="column" spacing={4} style={{ justifyContent: 'center', }}>
                                <CardContent sx={{ flex: '1 0 auto' }}>
                                    <Typography className={classes.title}>
                                        Making Table Understanding Work in Practice
                                    </Typography>
                                    <Typography className={classes.authors}>
                                        Madelon Hulsebos, <b className={classes.bold}>Sneha Gathani</b>, James Gale , Isil Dillig, Paul Groth, Çağatay Demiralp
                                    </Typography>
                                    <Box sx={{ display: 'flex', flexDirection: 'row', marginTop: '0.5vh', marginBottom: '0.5vh', }}>
                                        <Button className={classes.keywords} disable>
                                            Semantic Column Type Detection
                                        </Button>
                                        {bull}
                                        <Button className={classes.keywords} disable>
                                            Table Understanding
                                        </Button>
                                        {bull}
                                        <Button className={classes.keywords} disable>
                                            Framework
                                        </Button>
                                    </Box>
                                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                                    <AutoAwesomeIcon className={classes.paperIcons} />
                                        <Typography>
                                            <i><b className={classes.bold}>CIDR 2022</b> Conference on Innovative Data Systems Research </i><b>| </b> 
                                        </Typography>
                                        <ShortTextIcon className={classes.paperIcons} />
                                        <Typography>
                                            <i>Abstract</i>
                                        </Typography>
                                    </div>
                                    <div style={{ display: 'flex', flexDirection: 'row', marginTop: '1vh', }}>
                                        <div style={{ display: 'flex', flexDirection: 'row', marginRight: '0.5vw', }}>
                                            <PictureAsPdfIcon className={classes.publicationIcons} />
                                            <a href="https://arxiv.org/pdf/2109.05173.pdf" target="_blank" rel="noreferrer" className={classes.publicationLink}><Typography className={classes.publicationContent}>Paper</Typography></a>
                                        </div>
                                        <div style={{ display: 'flex', flexDirection: 'row', marginRight: '0.5vw', }}>
                                            <SearchIcon className={classes.publicationIcons} />
                                            <a href="https://arxiv.org/abs/2109.05173" target="_blank" rel="noreferrer" className={classes.publicationLink}><Typography className={classes.publicationContent}>DOI</Typography></a>
                                        </div>
                                        <div style={{ display: 'flex', flexDirection: 'row', marginRight: '0.5vw', }}>
                                            <VideoLibraryIcon className={classes.publicationIcons} />
                                            <a href="https://drive.google.com/file/d/1sTrM7vI2o82tMFcHJRgcMpPlU1y0GRlt/view?usp=sharing" target="_blank" rel="noreferrer" className={classes.publicationLink}><Typography className={classes.publicationContent}>Video</Typography></a>
                                        </div>
                                        <div style={{ display: 'flex', flexDirection: 'row', marginLeft: '0.5vw', }}>
                                            <RecordVoiceOverIcon className={classes.publicationIcons} />
                                            <a href="https://www.youtube.com/watch?v=-BE5rWNMXnU" target="_blank" rel="noreferrer" className={classes.publicationLink}><Typography className={classes.publicationContent}>Talk</Typography></a>
                                        </div>
                                    </div>
                                </CardContent> 
                            </Grid>
                            <Grid item style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignContent: 'center', alignItems: 'center', }}>
                                <CardMedia
                                    component="img"
                                    image={require('./img/SigmaTyper.png')}
                                    className={classes.cardMediaImage}
                                />
                            </Grid>
                        </Grid>
                        <Divider />

                        <Grid container xs={11} style={{ marginBottom: '1.5vh', marginTop: '1.5vh', }}>
                            <Grid item xs container direction="column" spacing={4} style={{ justifyContent: 'center', }}>
                                <CardContent sx={{ flex: '1 0 auto' }}>
                                    <Typography className={classes.title}>
                                        Debugging Database Queries: A Survey of Tools, Techniques, and Users
                                    </Typography>
                                    <Typography className={classes.authors}>
                                        <b className={classes.bold}>Sneha Gathani</b>, Peter Lim, Leilani Battle
                                    </Typography>
                                    <Box sx={{ display: 'flex', flexDirection: 'row', marginBottom: '0.5vh', marginTop: '0.5vh', }}>
                                        <Button className={classes.keywords} disable>
                                            Debugging Database Queries
                                        </Button>
                                        {bull}
                                        <Button className={classes.keywords} disable>
                                            Inter-disciplinary Literature Review
                                        </Button>
                                        {bull}
                                        <Button className={classes.keywords} disable>
                                            Interview Study
                                        </Button>
                                        {bull}
                                        <Button className={classes.keywords} disable>
                                            New Design Guidelines
                                        </Button>
                                    </Box>
                                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                                        <AutoAwesomeIcon className={classes.paperIcons} />
                                        <Typography>
                                            <i><b className={classes.bold}>CHI 2020</b> SIGCHI Conference on Human Factors in Computer Systems </i><b>| </b> 
                                        </Typography>
                                        <ArticleIcon className={classes.paperIcons} />
                                        <Typography>
                                            <i>Full Paper</i>
                                        </Typography>
                                    </div>
                                    <div style={{ display: 'flex', flexDirection: 'row', marginTop: '1vh', }}>
                                        <div style={{ display: 'flex', flexDirection: 'row', marginRight: '0.5vw', }}>
                                            <PictureAsPdfIcon className={classes.publicationIcons} />
                                            <a href="https://homes.cs.washington.edu/~leibatt/static/papers/gathani_debugging_CHI_2020.pdf" target="_blank" rel="noreferrer" className={classes.publicationLink}><Typography className={classes.publicationContent}>Paper</Typography></a>
                                        </div>
                                        <div style={{ display: 'flex', flexDirection: 'row', marginRight: '0.5vw', }}>
                                            <SearchIcon className={classes.publicationIcons} />
                                            <a href="https://dl.acm.org/doi/10.1145/3313831.3376485" target="_blank" rel="noreferrer" className={classes.publicationLink}><Typography className={classes.publicationContent}>DOI</Typography></a>
                                        </div>
                                        <div style={{ display: 'flex', flexDirection: 'row', marginLeft: '0.5vw', }}>
                                            <RecordVoiceOverIcon className={classes.publicationIcons} />
                                            <a href="https://www.youtube.com/watch?v=auCLjsBi6zE" target="_blank" rel="noreferrer" className={classes.publicationLink}><Typography className={classes.publicationContent}>Talk</Typography></a>
                                        </div>
                                    </div>
                                </CardContent> 
                            </Grid>
                            <Grid item style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignContent: 'center', alignItems: 'center', }}>
                                <CardMedia
                                    component="img"
                                    image={require('./img/Debugging.png')}
                                    className={classes.cardMediaImage}
                                />
                            </Grid>
                        </Grid>
                        <Divider style={{ marginBottom: '15vh' }} />
                    </Container>

                    {/* Research Interests section */}
                    <Container className={classes.Container} maxWidth="xl" id="research_interests" style={{ margin: 0, padding: 0, height: 'auto', }}>
                        <Typography className={classes.headNames}>Research Interests</Typography>
                        <Typography className={classes.allContent} style={{ marginLeft: '5px', marginTop: '4vh', marginBottom: '4vh', }}>
                            My research seeks to understand how business users <i>comprehend machine learning models</i>, (e.g., regression models that predict sales, profit, customer acquisition cost, customer retention rate, etc.), <i>enhance their trust in the model predictions</i> and <i>promote their engagement with the models</i>. Business users such as sales, operations, or accounts managers leverage large customer interaction data with the product to plan decisions for future quarters for goals like increasing customer retention, hypothesizing an ideal customer journey formula, etc. With easy and affordable access to large data via cloud computing, business users have shown keen interest in using machine learning models to help guide their decisions. Although various visualization and interactive tools have been developed to explain, diagnose and refine machine learning models, these techniques are too complex and technical for business users to use because they are not computer scientists, ML experts, or statisticians. Therefore, there has been an increased need for understanding and interpreting machine learning models to ensure that business users develop an appropriate trust in them, that is don’t misuse (overuse or over-trust) or reject (underuse or under-trust) them. 
                            Bearing this motivation, I am interested in <i>conducting studies and building techniques and systems that have potential to reach a broad audience of business users</i>.
                        </Typography>
                        <div data-aos="fade-up" style={{ display: 'flex', justifyContent: 'center', }}>
                            <img className={classes.creativeImage} src={require('./img/research_interest.png')} alt="" width="1000px" />
                        </div>
                        <Divider style={{ marginBottom: '5vh', marginTop: '10vh' }} />
                    </Container>

                    {/* Research section */}
                    <Container maxWidth="xl" className={classes.Container} id="research" style={{ margin: 0, padding: 0, height: 'auto', }}>
                        <Typography className={classes.headNames}>Selected Research Projects</Typography>
                        <Box sx={{ flexGrow: 1, }} className={classes.researchPaper} style={{ marginBottom: '2vh', }}>
                            <Grid container spacing={2} style={{ paddingLeft: '1vw', }}>
                                <Grid item style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignContent: 'center', alignItems: 'center', }}>
                                    <CardMedia
                                        component="img"
                                        image={require('./img/methodology.png')}
                                        className={classes.cardMediaImage}
                                    />
                                </Grid>
                                <Grid item xs={12} sm container>
                                <Grid item xs container direction="column" spacing={2} style={{ justifyContent: 'center', }}>
                                    <CardContent sx={{ flex: '1 0 auto' }}>
                                        <Typography className={classes.title}>
                                            Predictive and Prescriptive Analytics in Business Decision Making: Needs and Concerns
                                        </Typography>
                                        <Typography className={classes.authors}>
                                            <b className={classes.bold}>Sneha Gathani</b>, Zhicheng Liu, Peter J. Haas, Çağatay Demiralp
                                        </Typography>
                                        <Box style={{ display: 'flex', flexDirection: 'row', marginTop: '0.5vh', marginBottom: '0.5vh', }}>
                                            <Button className={classes.keywords} disable>
                                                Enterprise Analysis System
                                            </Button>
                                            {bull}
                                            <Button className={classes.keywords} disable>
                                                Interactive Visual System
                                            </Button>
                                            {bull}
                                            <Button className={classes.keywords} disable>
                                                What-If Analysis
                                            </Button>
                                            {bull}
                                            <Button className={classes.keywords} disable>
                                                Evaluation Study
                                            </Button>
                                        </Box>
                                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                                            <ManageSearchIcon className={classes.paperIcons} />
                                            <Typography>
                                                <i><b className={classes.bold}>Under Review: CHI 2023</b> SIGCHI Conference on Human Factors in Computer Systems </i><b>| </b> 
                                            </Typography>
                                            <ArticleIcon className={classes.paperIcons} />
                                            <Typography>
                                                <i>Full Paper</i>
                                            </Typography>
                                        </div>
                                        <Typography style={{ marginTop: '1vh', marginBottom: '2vh', }}>
                                        Previous research on business decision making identifies challenges of information overload and lack of effective tools to perform data-driven analysis. However, there is little systematic understanding of the goals and decisions of business users, the nature of data, tools, and processes used in their decision making, and their experiences, needs, and challenges of using predictive and prescriptive analytics (PPA).
                                        In response, we conduct a two-part user study with 22 professional business users to understand their decision making process and feedback on using PPA. Business users primarily rely on manual methods, thus unable to cope with increasing data sizes and complexities and making fast decisions. While they desire PPA to inform decision making, they have concerns about readying data for analysis, interpreting risk factors of predictions, tying domain expertise and knowledge to predictions, and capturing volatile ecological and market conditions. Based on our findings, we suggest research directions for future business analytics systems.
                                        </Typography>
                                    </CardContent> 
                                </Grid>
                                </Grid>
                            </Grid>
                        </Box>
                        <Divider />

                        <Box sx={{ flexGrow: 1, }} className={classes.researchPaper} style={{ marginBottom: '2vh', }}>
                            <Grid container spacing={2} style={{ paddingLeft: '1vw', }}>
                                <Grid item style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignContent: 'center', alignItems: 'center', }}>
                                    <CardMedia
                                        component="img"
                                        image={require('./img/grammatic_embeddings.png')}
                                        className={classes.cardMediaImage}
                                        style={{ marginBottom: '2vh', }}
                                    />
                                    <CardMedia
                                        component="img"
                                        image={require('./img/mapping_process.png')}
                                        className={classes.cardMediaImage}
                                    />
                                </Grid>
                                <Grid item xs={12} sm container>
                                <Grid item xs container direction="column" spacing={2} style={{ justifyContent: 'center', }}>
                                    <CardContent sx={{ flex: '1 0 auto' }}>
                                        <Typography className={classes.title}>
                                            A Grammatic Approach to Applying Visualization Taxonomies to Interaction Logs
                                        </Typography>
                                        <Typography className={classes.authors}>
                                            <b className={classes.bold}>Sneha Gathani</b>, Shayan Monadjemi, Alvitta Ottley, Leilani Battle
                                        </Typography>
                                        <Box style={{ display: 'flex', flexDirection: 'row', marginTop: '0.5vh', marginBottom: '0.5vh', }}>
                                            <Button className={classes.keywords} disable>
                                                Visualization Taxonomies
                                            </Button>
                                            {bull}
                                            <Button className={classes.keywords} disable>
                                                Regular Languages
                                            </Button>
                                            {bull}
                                            <Button className={classes.keywords} disable>
                                                Interaction Log Analysis
                                            </Button>
                                            {bull}
                                            <Button className={classes.keywords} disable>
                                                Framework
                                            </Button>
                                        </Box>
                                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                                            <AutoAwesomeIcon className={classes.paperIcons} />
                                            <Typography>
                                                <i><b className={classes.bold}>EuroVis 2022</b> Eurographics Working Group on Data Visualization </i><b>| </b> 
                                            </Typography>
                                            <ArticleIcon className={classes.paperIcons} />
                                            <Typography>
                                                <i>Full Paper</i>
                                            </Typography>
                                        </div>
                                        <Typography style={{ marginTop: '1vh', marginBottom: '2vh', }}>
                                        Researchers collect large amounts of user interaction data with the goal of mapping user’s workflows and behaviors to their higher-level motivations, intuitions, and goals. Although the visual analytics community has proposed numerous taxonomies to facilitate this mapping process, no formal methods exist for systematically applying these existing theories to user interaction logs.
                                        This paper seeks to bridge the gap between visualization task taxonomies and interaction log data by making the taxonomies more actionable for interaction log analysis. To achieve this, we leverage structural parallels between how people express themselves through interactions and language by reformulating existing theories as <i>regular grammars</i>.
                                        We represent interactions as <i>terminals</i> within a regular grammar, similar to the role of individual words in a language, and patterns of interactions or <i>non-terminals</i> as regular expressions over these terminals to capture common language patterns.
                                        To demonstrate our approach, we generate <i>regular grammars</i> for seven visualization taxonomies and develop code to apply them to three interaction log datasets.
                                        In analyzing our results, we find that existing taxonomies at the low-level (i.e., terminals) show mixed results in expressing multiple interaction log datasets, and taxonomies at the high-level (i.e., regular expressions) have limited expressiveness, due to primarily two challenges: inconsistencies in interaction log dataset granularity and structure, and under-expressiveness of certain terminals.
                                        Based on our findings, we suggest new research directions for the visualization community for augmenting existing taxonomies, developing new ones, and building better interaction log recording processes to facilitate the data-driven development of user behavior taxonomie.
                                        </Typography>
                                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                                            <div style={{ display: 'flex', flexDirection: 'row', marginRight: '0.5vw', }}>
                                                <PictureAsPdfIcon className={classes.publicationIcons} />
                                                <a href="https://arxiv.org/pdf/2201.03740.pdf" target="_blank" rel="noreferrer" className={classes.publicationLink}><Typography className={classes.publicationContent}>Paper</Typography></a>
                                            </div>
                                            <div style={{ display: 'flex', flexDirection: 'row', marginRight: '0.5vw', }}>
                                                <SearchIcon className={classes.publicationIcons} />
                                                <a href="https://arxiv.org/abs/2201.03740#:~:text=A%20Programmatic%20Approach%20to%20Applying%20Visualization%20Taxonomies%20to%20Interaction%20Logs,-Sneha%20Gathani%2C%20Shayan&text=Researchers%20collect%20large%20amounts%20of,motivations%2C%20intuitions%2C%20and%20goals." target="_blank" rel="noreferrer" className={classes.publicationLink}><Typography className={classes.publicationContent}>DOI</Typography></a>
                                            </div>
                                            <div style={{ display: 'flex', flexDirection: 'row', marginLeft: '0.5vw', }}>
                                                <GitHub className={classes.publicationIcons} />
                                                <a href="https://tinyurl.com/regular-grammar-taxonomies" target="_blank" rel="noreferrer" className={classes.publicationLink}><Typography className={classes.publicationContent}>Code</Typography></a>
                                            </div>
                                        </div>
                                    </CardContent> 
                                </Grid>
                                </Grid>
                            </Grid>
                        </Box>
                        <Divider />

                        <Box sx={{ flexGrow: 1, }} className={classes.researchPaper} style={{ marginTop: '2vh', marginBottom: '2vh', }}>
                            <Grid container spacing={2} style={{ paddingLeft: '1vw', }}>
                                <Grid item style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignContent: 'center', alignItems: 'center', }}>
                                    <CardMedia
                                        component="img"
                                        image={require('./img/functionalities.png')}
                                        className={classes.cardMediaImage}
                                        style={{ paddingTop: '3vh', }}
                                    />
                                    <CardMedia
                                        component="img"
                                        image={require('./img/systemd.png')}
                                        className={classes.cardMediaImage}
                                        style={{ paddingTop: '2vh', }}
                                    />
                                </Grid>
                                <Grid item xs={12} sm container>
                                <Grid item xs container direction="column" spacing={2} style={{ justifyContent: 'center', }}>
                                    <CardContent sx={{ flex: '1 0 auto' }}>
                                        <Typography className={classes.title}>
                                            Augmenting Decision Making via Interactive What-If Analysis
                                        </Typography>
                                        <Typography className={classes.authors}>
                                            <b className={classes.bold}>Sneha Gathani</b>, Madelon Hulsebos, James Gale , Peter J. Haas, Çağatay Demiralp
                                        </Typography>
                                        <Box style={{ display: 'flex', flexDirection: 'row', marginTop: '0.5vh', marginBottom: '0.5vh', }}>
                                            <Button className={classes.keywords} disable>
                                                Business Data Analysis
                                            </Button>
                                            {bull}
                                            <Button className={classes.keywords} disable>
                                                Data-driven Decision Making
                                            </Button>
                                            {bull}
                                            <Button className={classes.keywords} disable>
                                                Driver Importance Analysis
                                            </Button>
                                            {bull}
                                            <Button className={classes.keywords} disable>
                                                Sensitivity Analysis
                                            </Button>
                                            {bull}
                                            <Button className={classes.keywords} disable>
                                                Goal Inversion (Seeking) Analysis
                                            </Button>
                                            {bull}
                                            <Button className={classes.keywords} disable>
                                               Constrained Analysis
                                            </Button>
                                        </Box>
                                        <div style={{ display: 'flex', flexDirection: 'row', }}>
                                            <AutoAwesomeIcon className={classes.paperIcons} />
                                            <Typography>
                                                <i><b className={classes.bold}>CIDR 2022</b> Conference on Innovative Data Systems Research </i><b>| </b> 
                                            </Typography>
                                            <ArticleIcon className={classes.paperIcons} />
                                            <Typography>
                                                <i>Full Paper</i>
                                            </Typography>
                                        </div>
                                        <Typography style={{ marginTop: '1vh', marginBottom: '2vh', }}>
                                        The fundamental goal of business data analysis is to improve business decisions using data. Business users such as sales, marketing, product, or operations managers often make decisions to achieve key performance indicator (KPI) goals such as increasing customer retention, decreasing cost, and increasing sales. To discover the relationship between data attributes hypothesized to be drivers and those corresponding to KPIs of interest, business users currently need to perform lengthy exploratory analyses, considering multitudes of combinations and scenarios, slicing, dicing, and transforming the data accordingly. For example, analyzing customer retention across quarters of the year or suggesting optimal media channels across strata of customers. However, the increasing complexity of datasets combined with the cognitive limitations of humans makes it challenging to carry over multiple hypotheses, even for simple datasets. Therefore mentally performing such analyses is hard. Existing commercial tools either provide partial solutions whose effectiveness remains unclear or fail to cater to business users.
                                        <Typography style={{ display: 'block', }}>{'\n'}</Typography>
                                        Here we argue for four functionalities that we believe are necessary to enable business users to interactively learn and reason about the relationships (functions) between sets of data attributes, facilitating data-driven decision making. We implement these functionalities in SystemD, an interactive visual analysis system enabling business users to experiment with the data by asking <i>what-if</i> questions. We evaluate the system through three business use cases: marketing mix modeling analysis, customer retention analysis, and deal closing analysis, and report on feedback from multiple business users. Overall, business users find SystemD intuitive and useful for quick testing and validation of their hypotheses around interested KPI as well as in making effective and fast data-driven decisions.
                                        </Typography>
                                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                                            <div style={{ display: 'flex', flexDirection: 'row', marginRight: '0.5vw', }}>
                                                <PictureAsPdfIcon className={classes.publicationIcons} />
                                                <a href="https://arxiv.org/pdf/2109.06160.pdf" target="_blank" rel="noreferrer" className={classes.publicationLink}><Typography className={classes.publicationContent}>Paper</Typography></a>
                                            </div>
                                            <div style={{ display: 'flex', flexDirection: 'row', marginRight: '0.5vw', }}>
                                                <SearchIcon className={classes.publicationIcons} />
                                                <a href="https://arxiv.org/abs/2109.06160" target="_blank" rel="noreferrer" className={classes.publicationLink}><Typography className={classes.publicationContent}>DOI</Typography></a>
                                            </div>
                                            <div style={{ display: 'flex', flexDirection: 'row', marginRight: '0.5vw', }}>
                                                <VideoLibraryIcon className={classes.publicationIcons} />
                                                <a href="https://drive.google.com/file/d/1PZqyPjd99-HmsTDXZOJzEVVJJIHMSO82/view?usp=sharing" target="_blank" rel="noreferrer" className={classes.publicationLink}><Typography className={classes.publicationContent}>Video</Typography></a>
                                            </div>
                                            <div style={{ display: 'flex', flexDirection: 'row', marginLeft: '0.5vw', }}>
                                                <RecordVoiceOverIcon className={classes.publicationIcons} />
                                                <a href="https://www.youtube.com/watch?v=an-oTVQzHT0" target="_blank" rel="noreferrer" className={classes.publicationLink}><Typography className={classes.publicationContent}>Talk</Typography></a>
                                            </div>
                                        </div>
                                    </CardContent> 
                                </Grid>
                                </Grid>
                            </Grid>
                        </Box>
                        <Divider />

                        <Box sx={{ flexGrow: 1, }} className={classes.researchPaper} style={{ marginBottom: '2vh', marginTop: '2vh', }}>
                            <Grid container spacing={2} style={{ paddingLeft: '1vw', }}>
                                <Grid item style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignContent: 'center', alignItems: 'center', }}>
                                    <CardMedia
                                        component="img"
                                        image={require('./img/domain.png')}
                                        className={classes.cardMediaImage}
                                        style={{ width: '150px', }}
                                    />
                                    <CardMedia
                                        component="img"
                                        image={require('./img/traceinspector.png')}
                                        className={classes.cardMediaImage}
                                        style={{ paddingTop: '1vh', }}
                                    />
                                </Grid>
                                <Grid item xs={12} sm container>
                                <Grid item xs container direction="column" spacing={2} style={{ justifyContent: 'center', }}>
                                    <CardContent sx={{ flex: '1 0 auto' }}>
                                        <Typography className={classes.title}>
                                            A Model and Application for Cross-Domain Visualization System Design
                                        </Typography>
                                        <Typography className={classes.authors}>
                                            <b className={classes.bold}>Sneha Gathani</b>, Kartik Krishnan, Daniel Votipka, Kristopher Micinski , Jeffrey Foster, Michelle Mazurek, Leilani Battle
                                        </Typography>
                                        <Box sx={{ display: 'flex', flexDirection: 'row', marginTop: '0.5vh', marginBottom: '0.5vh', }}>
                                            <Button className={classes.keywords} disable>
                                                Design Study Model
                                            </Button>
                                            {bull}
                                            <Button className={classes.keywords} disable>
                                                Reverse Engineering
                                            </Button>
                                            {bull}
                                            <Button className={classes.keywords} disable>
                                                Security and PL Experts
                                            </Button>
                                            {bull}
                                            <Button className={classes.keywords} disable>
                                                Interactive Visualization System
                                            </Button>
                                        </Box>
                                        <Typography style={{ marginTop: '1vh', marginBottom: '2vh', }}>
                                        Visualization design studies are notoriously difficult to design effectively. Though existing models highlight the major pitfalls, their guidance is not as user-friendly for individuals new to design studies. We present an <i>updated design study model</i> providing step-by-step guidelines, concrete examples, and discussion of differences and similarities between design studies in eight different domains.  To demonstrate the value of our model and guidelines, we apply them in the security domain to help fledgling analysts <i>reverse engineer</i> (RE) Android applications (apps) for potential security and privacy vulnerabilities. Through our design study, we develop <i>TraceInspector</i>, an interactive visualization tool that integrates both static and dynamic Android app data, connects relevant temporal event sequences and method dependencies, and executes app code in a single visualization interface. Finally, we evaluate TraceInspector with nine RE users and find that the tool eases the learning of RE tasks for novice RE users, validating our synthesized design study guidance.
                                        </Typography>
                                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                                            <div style={{ display: 'flex', flexDirection: 'row', marginRight: '0.5vh', }}>
                                                <PictureAsPdfIcon className={classes.publicationIcons} />
                                                <a href="https://drive.google.com/file/d/1wPjqrtSqSTJWVGJisJJTFrJ7BJKeBBIH/view?usp=sharing" target="_blank" rel="noreferrer" className={classes.publicationLink}><Typography className={classes.publicationContent}>Paper</Typography></a>
                                            </div>
                                        </div>
                                    </CardContent> 
                                </Grid>
                                </Grid>
                            </Grid>
                        </Box>
                        <Divider />

                        <Box sx={{ flexGrow: 1, }} className={classes.researchPaper} style={{ marginTop: '12px', marginBottom: '12px', }}>
                            <Grid container spacing={2} style={{ paddingLeft: '15px', }}>
                                <Grid item style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignContent: 'center', alignItems: 'center', }}>
                                    <CardMedia
                                        component="img"
                                        image={require('./img/Debugging.png')}
                                        className={classes.cardMediaImage}
                                        style={{ paddingTop: '40px', }}
                                    />
                                </Grid>
                                <Grid item xs={12} sm container>
                                <Grid item xs container direction="column" spacing={2} style={{ justifyContent: 'center', }}>
                                    <CardContent sx={{ flex: '1 0 auto' }}>
                                        <Typography className={classes.title}>
                                            Debugging Database Queries: A Survey of Tools, Techniques, and Users
                                        </Typography>
                                        <Typography className={classes.authors}>
                                            <b className={classes.bold}>Sneha Gathani</b>, Peter Lim, Leilani Battle
                                        </Typography>
                                        <Box sx={{ display: 'flex', flexDirection: 'row', marginTop: '0.5vh', marginBottom: '0.5vh', }}>
                                            <Button className={classes.keywords} disable>
                                                Debugging Database Queries
                                            </Button>
                                            {bull}
                                            <Button className={classes.keywords} disable>
                                                Inter-disciplinary Literature Review
                                            </Button>
                                            {bull}
                                            <Button className={classes.keywords} disable>
                                                Interview Study
                                            </Button>
                                            {bull}
                                            <Button className={classes.keywords} disable>
                                                New Design Guidelines
                                            </Button>
                                        </Box>
                                        <div style={{ display: 'flex', flexDirection: 'row', }}>
                                            <AutoAwesomeIcon className={classes.paperIcons} />
                                            <Typography>
                                                <i><b className={classes.bold}>CHI 2020</b> SIGCHI Conference on Human Factors in Computer Systems </i><b>| </b> 
                                            </Typography>
                                            <ArticleIcon className={classes.paperIcons} />
                                            <Typography>
                                                <i>Full Paper</i>
                                            </Typography>
                                        </div>
                                        <Typography style={{ marginTop: '1vh', marginBottom: '2vh', }}>
                                            Database management systems (or DBMSs) have been around for decades, and yet are still difficult to use, particularly when trying to identify and fix errors in user programs (or queries).
                                            We seek to understand what methods have been proposed to help people debug database queries, and whether these techniques have ultimately been adopted by DBMSs (and users). We conducted an interdisciplinary review of 112 papers and tools from the <i>database, visualization</i> and <i>HCI communities</i>. To better understand whether academic and industry approaches are meeting the needs of users, we interviewed
                                            20 database users (and some designers), and found surprising results. In particular, there seems to be a wide gulf between user's debugging strategies and the functionality implemented in existing DBMSs, as well as proposed in the literature. In response, we propose new design guidelines to help system designers to build features that more closely match users debugging strategies.
                                        </Typography>
                                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                                            <div style={{ display: 'flex', flexDirection: 'row', marginRight: '0.5vw', }}>
                                                <PictureAsPdfIcon className={classes.publicationIcons} />
                                                <a href="https://homes.cs.washington.edu/~leibatt/static/papers/gathani_debugging_CHI_2020.pdf" target="_blank" rel="noreferrer" className={classes.publicationLink}><Typography className={classes.publicationContent}>Paper</Typography></a>
                                            </div>
                                            <div style={{ display: 'flex', flexDirection: 'row', marginRight: '0.5vw', }}>
                                                <SearchIcon className={classes.publicationIcons} />
                                                <a href="https://dl.acm.org/doi/10.1145/3313831.3376485" target="_blank" rel="noreferrer" className={classes.publicationLink}><Typography className={classes.publicationContent}>DOI</Typography></a>
                                            </div>
                                            <div style={{ display: 'flex', flexDirection: 'row', marginLeft: '0.5vw', }}>
                                                <RecordVoiceOverIcon className={classes.publicationIcons} />
                                                <a href="https://www.youtube.com/watch?v=auCLjsBi6zE" target="_blank" rel="noreferrer" className={classes.publicationLink}><Typography className={classes.publicationContent}>Talk</Typography></a>
                                            </div>
                                        </div>
                                    </CardContent> 
                                </Grid>
                                </Grid>
                            </Grid>
                        </Box>
                        <Divider style={{ marginBottom: '10vh', }} />
                    </Container>

                    {/* Creative section */}
                    <Container maxWidth="xl" id="creative" style={{ margin: 0, padding: 0, height: 'auto' }}>
                        <Typography className={classes.headNames}>Creative</Typography>
                            <Grid item xs={12} style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                                <Box sx={{ m: 2, border: 2, borderColor: '#000' }}>
                                    <img src={require('./img/sunflower.jpeg')} alt="" height="500px" className={classes.creativeImage} />
                                </Box>
                                <Box sx={{ m: 2, border: 2, borderColor: '#000' }}>
                                    <img src={require('./img/tower.png')} alt="" width="735px" className={classes.creativeImage} />
                                </Box>
                            </Grid>
                            <Grid item xs={12} style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                                <Box sx={{ m: 2, border: 2, borderColor: '#000' }}>
                                    <img src={require('./img/ieee.png')} alt="" width="300px" className={classes.creativeImage} />
                                </Box>
                                <Box sx={{ m: 2, border: 2, borderColor: '#000' }}>
                                    <img src={require('./img/tedx.png')} alt="" width="300px" className={classes.creativeImage} />
                                </Box>
                                <Box sx={{ m: 2, border: 2, borderColor: '#000' }}>
                                    <img src={require('./img/cry.png')} alt="" width="400px" className={classes.creativeImage} />
                                </Box>
                            </Grid>
                            <Grid item xs={12} style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                                <Box sx={{ m: 2, border: 2, borderColor: '#000' }}>
                                    <img src={require('./img/stippling.jpg')} alt="" width="350px" className={classes.creativeImage} />
                                </Box>
                                <Box sx={{ m: 2, border: 2, borderColor: '#000' }}>
                                    <img src={require('./img/vase.jpeg')} alt="" width="207px" className={classes.creativeImage} />
                                </Box>
                                <Box sx={{ m: 2, border: 2, borderColor: '#000' }}>
                                    <img src={require('./img/mosac.jpg')} alt="" width="350px" className={classes.creativeImage} />
                                </Box>
                                <Box sx={{ m: 2, border: 2, borderColor: '#000' }}>
                                    <img src={require('./img/lines.jpg')} alt="" width="350px" className={classes.creativeImage} />
                                </Box>
                            </Grid>
                            <Divider style={{ marginTop: '10vh', marginBottom: '5vh', }} />
                    </Container>

                    {/* Contact section */}
                    <Container maxWidth="xl" id="contact" className={classes.Container} style={{ margin: 0, padding: 0, height: '100vh' }}>
                        <Typography className={classes.headNames}>Contact</Typography>
                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>
                            <div style={{ marginLeft: '15px', display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', marginTop: '25px', }}>
                                <div style={{ display: 'flex', flexDirection: 'row' }}>
                                    <LocationOnIcon className={classes.contactIcon} />
                                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                                        <Typography className={classes.headNames2}>Location</Typography>
                                        <Typography className={classes.newsContent}>
                                            Room 2112, 
                                        </Typography>
                                        <Typography className={classes.newsContent}>
                                            The Brendan Iribe Center for Computer Science and Engineering,
                                        </Typography>
                                        {/* <Typography style={{ display: 'block', }}>{'\n'}</Typography> */}
                                        <Typography className={classes.newsContent}>
                                            8125 Paint Branch Dr
                                        </Typography>
                                        {/* <Typography style={{ display: 'block', }}>{'\n'}</Typography> */}
                                        <Typography className={classes.newsContent}>
                                            College Park, MD 20740
                                        </Typography>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'row' }}>
                                    <InfoIcon className={classes.contactIcon} />
                                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                                        <Typography className={classes.headNames2}>Read my CV</Typography>
                                        <Button target="_blank" rel="noreferrer" href="https://drive.google.com/file/d/1lOs2vZMD9Pq4OMSVjVN2pyml3VWcyany/view?usp=sharing" className={classes.cvbutton}>
                                            CV
                                        </Button>  
                                    </div>
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'row' }}>
                                    <AlternateEmailIcon className={classes.contactIcon} />
                                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                                        <Typography className={classes.headNames2}>Email</Typography>
                                        <Typography className={classes.newsContent}>
                                            <a href="mailto:sgathani@umd.edu" className={classes.contactsa}>sgathani [AT] umd [DOT] edu</a>
                                        </Typography>
                                    </div>
                                </div>
                            </div>
                            <div data-aos="fade-up">
                                <img src={ require('./img/sneha.jpg') } alt="" style={{ border: '0.2rem solid #FFD700', }} />
                            </div>
                        </div>
                    </Container>
                </Box>
            </Box>
        </ThemeProvider>
    );
}

export default App;
