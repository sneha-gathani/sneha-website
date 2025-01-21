import React, { useEffect, useState } from 'react';
import { Typography, Box, Button, Card, CardMedia, CardContent, Container, CssBaseline, Divider, Drawer, Grid, Icon, IconButton, List, ListItem, ListItemIcon, ListItemText, Modal, ThemeProvider } from '@material-ui/core';
import { Person, Visibility, Receipt, CollectionsBookmark, ColorLens, Contacts, GitHub, Email, LinkedIn, School } from '@material-ui/icons';

import { CardActions, Link } from '@mui/material';
import AddAlertIcon from '@mui/icons-material/AddAlert';
import InboxIcon from '@mui/icons-material/Inbox';
import MovieIcon from '@mui/icons-material/Movie';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import CodeIcon from '@mui/icons-material/Code';
import DoneAllIcon from '@mui/icons-material/DoneAll';

import DescriptionIcon from '@mui/icons-material/Description';
import CampaignIcon from '@mui/icons-material/Campaign';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import FindReplaceIcon from '@mui/icons-material/FindReplace';
import theme from './theme.js';
import useStyles from './styles';
import InterestsIcon from '@mui/icons-material/Interests';
import CelebrationIcon from '@mui/icons-material/Celebration';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import InfoIcon from '@mui/icons-material/Info';
import Aos from 'aos';
import 'aos/dist/aos.css'; 

const drawerWidth = '30vw';

const App = () => {
    const classes = useStyles();

    useEffect(() =>{
        Aos.init({duration: 1000});
    }, []);  

    const [enlarged, setEnlarged] = useState(false);
    const [selectedImage, setSelectedImage] = useState('');

    const toggleEnlarge = (imageName) => {
        setSelectedImage(imageName);
        setEnlarged(!enlarged);

    };

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
                    <Card style={{ flexDirection: 'column', boxShadow: 'none', backgroundColor: '#033f63' }}>
                        <CardMedia style={{ display: 'flex', justifyContent: 'center', alignContent: 'center' }}>
                            <img src={require('./img/sneha.png')} alt="Sneha Gathani" className={classes.profilePic}/>
                        </CardMedia>
                        <CardContent>
                            <Typography className={classes.profileDetails}>
                                Sneha Gathani
                            </Typography>
                            <Typography className={classes.profileSubDetails}>
                                Ph.D. Candidate
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
                                <Button label="CV" className={classes.socialIconBackground} href="https://drive.google.com/file/d/1S3wEJNWWKtJnaR5xBfcu7KZsE7_0bfmR/view?usp=sharing">
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
                            const anchor = document.querySelector('#research')
                            anchor.scrollIntoView({ behavior: 'smooth', block: 'start' })
                        }}
                        >
                            <ListItem button key='Ongoing Research Projects' className={classes.navBarList}>
                                <ListItemIcon className={classes.navBarIcon}>
                                    <CollectionsBookmark />
                                </ListItemIcon>
                                <ListItemText primary='Ongoing Projects' className={classes.navBarListItem} />
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

                <Box component="main" sx={{ flexGrow: 1, bgcolor: '#FFF', paddingLeft: '18vw', width: '100vw', marginLeft: 0, }}>
                    <Container maxWidth="xl" id="about_me" className={classes.Container} style={{ margin: 0, padding: 0, height: '100vh', width: '80vw', }}>
                        <Typography className={classes.headNames}>Hi, I am Sneha Gathani!</Typography>
                        <Typography className={classes.allContent}>
                            I am a 5<sup>th</sup> year Ph.D. candidate at the <a href="https://www.cs.umd.edu/" target="_blank" rel="noreferrer" className={classes.a}>University of Maryland, College Park</a>, 
                            advised by <a href="https://www.zcliu.org/" target="_blank" rel="noreferrer" className={classes.a}>Dr. Leo Zhicheng Liu</a>. I am a part of the 
                            <a href="https://hdi.cs.umd.edu/" target="_blank" rel="noreferrer" className={classes.a}> Human-Data Interaction Group</a> and <a href="https://hcil.umd.edu/" target="_blank" rel="noreferrer"className={classes.a}>HCIL</a>. My research focuses on understanding the <i style={{ color: '#033f63', }}>data-driven decision-making</i> processes of <i style={{ color: '#033f63', }}>users in the business domain</i> and developing <i style={{ color: '#033f63', }}>augmented advanced analytics systems and tooling</i> for better supporting future decision-making solutions.
                        </Typography>
                        <Typography style={{ display: 'block', }}>{'\n'}</Typography>
                        <Typography className={classes.allContent}>
                            I graduated with a Master's in Computer Science also from the University of Maryland in May 2020. During Master's, I worked with <a href="https://www.cs.umd.edu/~leilani/bio.html" target="_blank" rel="noreferrer" className={classes.a}>Prof. 
                            Leilani Battle</a> as part of the <a href="https://battle-data-lab.cs.umd.edu/" target="_blank" rel="noreferrer" className={classes.a}>BAttle Data Lab (BAD Lab)</a> at the intersection of data visualization, databases, 
                            and HCI. Prior to grad school, I completed my Bachelors in Computer Engineering from <a href="https://pict.edu/?__cf_chl_captcha_tk__=035092ebe160b7b8d5fedd48ab431de1066b92f9-1591140710-0-AWYC-6QkN1egyq9RJfAjWGMhla9poOxNHhCZDL7-iZBS5yYT3ghX65o0JQ2-O_iNKjRj-1YsWuQzvjOeZv_cxCyBa6q85iZsFqdeKlaXHF9o9-NjFx7KOmcIf_zXb2wqYbQvj8aKgc_tM_8HMnPbVZSKWpO_WOebfvblSJ1EZU_81TqcNtUjSZEA5l-aFKnhK7J-l1PbbxLpdy8lZlg34IViBZE1bOTmyxVgsTWT0oS-SCb_WNPAAfyd6Wa4-ucV2Rttf5Oy_XXQXBLstMQ2fH2mniwTTJ5CaHXbfJtPM9kMg7A8pDuYgs5RoAksrGIxUelTMIx_m2nT8xHWY-tqMcBAqup7FUR8HVDjM7rC0FsnVK4nFuBqipibQtyVV7eAQ0LmzdR1R4Mok9NPzJlr4YDMfDwMBihFb6V57EKO5JFoLBjEzr0j27Kw0HKruAofvpdrRNF3RIvYMimQJrlQwYT3eCQYe5Sv6t3UQyGYBN_2" target="_blank" rel="noreferrer" className={classes.a}>
                            University of Pune, India</a> with a focus in Computer Science.
                        </Typography>
                        <Typography style={{ display: 'block' }}>{'\n'}</Typography>
                        <Divider style={{ marginTop: '25px', marginBottom: '25px', }} />

                        <Typography className={classes.headNames2}>News</Typography>
                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                            <AddAlertIcon className={classes.noteIcon} />
                            <Typography className={classes.note}>I am on the job market, actively looking for research or engineering positions starting in Summer 2025. If you have any opportunities or would like to discuss potential collaborations, please feel free to reach out!</Typography>
                        </div>
                        <div style={{ marginLeft: '15px', marginTop: '8px', }}>
                            <div style={{ display: 'flex', flexDirection: 'row' }}>
                                <CampaignIcon className={classes.newsIcon1} />
                                <Typography className={classes.newsContent}><b className={classes.bold}>January 2025 </b><a href="https://drive.google.com/file/d/17YuJyzvy-rG5Y687Z6RomViVYB45M1Gz/view?usp=sharing" target="_blank" rel="noreferrer" className={classes.a}>Work</a> accepted</Typography>
                                <CelebrationIcon className={classes.newsIcon1} />
                                <Typography className={classes.newsContent} style={{ alignContent: 'center', }}>at CHI 2025!</Typography>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'row' }}>
                                <CampaignIcon className={classes.newsIcon1} />
                                <Typography className={classes.newsContent}><b className={classes.bold}>August 2024 </b>Completed summer internship at <a href="https://www.microsoft.com/en-us/research/group/vida/" target="_blank" rel="noreferrer" className={classes.a}>Microsoft Research</a></Typography>
                                <InterestsIcon className={classes.newsIcon1} />
                                <Typography className={classes.newsContent} style={{ alignContent: 'center', }}>and continuing to work on the project. Targeting submission to UIST 2025!</Typography>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'row' }}>
                                <CampaignIcon className={classes.newsIcon1} />
                                <Typography className={classes.newsContent}><b className={classes.bold}>June 2024 </b>Previous summer internship work at <a href="https://research.tableau.com/" target="_blank" rel="noreferrer" className={classes.a}>Salesforce/Tableau Research</a> is accepted </Typography>
                                <AutoAwesomeIcon className={classes.newsIcon1} />
                                <Typography className={classes.newsContent} style={{ alignContent: 'center', }}>at VIS 2024 as a short paper!</Typography>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'row' }}>
                                <CampaignIcon className={classes.newsIcon1} />
                                <Typography className={classes.newsContent}><b className={classes.bold}>May 2024 </b>Advanced to being a PhD Candidate</Typography>
                                <CelebrationIcon className={classes.newsIcon1} />
                                <Typography className={classes.newsContent} style={{ alignContent: 'center', }}>!!</Typography>
                            </div>
                        </div>
                    </Container>

                    {/* Research Interests section */}
                    <Container className={classes.Container} maxWidth="xl" id="research_interests" style={{ margin: 0, padding: 0, height: '100vh', width: 'auto', }}>
                        <Typography className={classes.headNames}>Research Interests</Typography>
                        <Typography className={classes.allContent} style={{ marginLeft: '5px', marginTop: '4vh', marginBottom: '4vh', }}>
                        My research focuses at the intersection of data and visual analytics, human-computer interaction, and business. I aim to empower users in the business domain, such as stakeholders like 
                        marketing, sales, product, and operations managers, as well as technical data scientists and analysts, to make better data-driven decisions.
                        <br /><br />
                        With the vast availability, easy accessibility, and low cost of data, businesses are increasingly using it to achieve business objectives like maximizing sales, increasing ROI, minimizing 
                        churn rate, etc. They employ exploratory data analysis to gain insights from various data like customer interactions and product data. However, exploratory data analysis alone is 
                        insufficient for comprehensive data-driven decision-making. It offers limited interactivity, preventing users from fully assessing the impact of various scenarios on their business objectives.
                        The constraints of human cognition also limit the ability to evaluate complex, competing objectives, and communicate trade-offs for the proposed decision strategies. Effective 
                        decision-making requires domain knowledge that is often overlooked in performing only exploratory data analysis. Therefore, a new approach is needed to empower users to relate the data 
                        directly to business objectives.
                        <br /><br />
                        My research addresses this via (1) <i>understanding</i> the data-driven decision-making processes of users in the business domain, (2) developing <i>enhanced</i> augmented advanced 
                        analytics systems like enabling what-if analysis and scenario modeling, and (3) <i>providing</i> support for future decision-making solutions, like specification-language-based tooling.
                        {/* However, a significant challenge lies in bridging the gap between these powerful automated and analytic tools and the users who wield them. Existing visualization
                        and interactive tools, while valuable in explaining, diagnosing, and refining underlying black box engines and models, often prove excessively complex and technical for end-users who lack a background
                        in computer scientists, machine learning expertise, or statistics. Nonetheless, they have the domain knowledge and experience that is crucial for their business decisions. Therefore, there is a pressing
                        need to develop guided, understandable, interpretable, and usable approaches that cater to the unique needs and expertise of business users. Bearing this motivation, I am interested in <i>conducting
                        rigorous studies and developing techniques and interactive systems that have potential to make advanced analytics accessible to a wide audience of business professionals, thereby enabling them to make
                        data-informed decisions and drive meaningful business outcomes through data</i>. */}
                        </Typography>
                        <div data-aos="fade-up" style={{ display: 'flex', justifyContent: 'center', }}>
                            <img className={classes.creativeImage} src={require('./img/research_interests.png')} alt="" width="1000px" />
                        </div>
                    </Container>

                    {/* Publications Section */}
                    <Container maxWidth="xl" className={classes.Container} id="publications" style={{ margin: 0, padding: 0, width: '80vw', height: 'auto', paddingBottom: '50px', }}>
                        <Typography className={classes.headNames}>Publications</Typography>
                        <Container className="cover-wrapper cover-wrapper-3-col l-page">
                            <Grid container spacing={4}>
                                {/* This is where I am */}
                            <Grid item xs={12} md={4}>
                                    {/* Paper 1 */}
                                    <Card style={{ outlineStyle: 'solid', outlineColor: 'lightgrey', outlineWidth: 1, boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', }}>
                                        <CardMedia component="img" image={require('./img/ds.png')} onClick={() => toggleEnlarge('./img/ds.png')} className={classes.publicationImage} />
                                        <CardContent>
                                            <Typography className={classes.title}>
                                                What-if Analysis for Business Professionals: Current Practices and Future Opportunities
                                            </Typography>
                                            <Typography className={classes.authors}>
                                                <b className={classes.bold}>Sneha Gathani</b>, Zhicheng Liu, Peter J. Haas, Çağatay Demiralp
                                            </Typography>
                                            <Typography sx={{ fontSize: '16px', display: 'flex', alignItems: 'center' }} style={{ paddingTop: '5px', }}>
                                                <AutoAwesomeIcon sx={{ fontSize: '16px', color: '#DF825F', }} /><b style={{ fontSize: '16px', fontWeight: 'bold', marginLeft: '4px' }}>CHI 2025</b>
                                            </Typography>
                                            <Typography className={classes.subtitle} style={{ paddingTop: '16px', }}>
                                                A two-part user study with business professionals to (1) examine existing what-if analysis techniques employed, tools used, and challenges faced, and (2) evaluate their
                                                practical use of representative what-if analysis techniques identified in the first study.
                                                <Typography className={classes.subtitleHide}>This is hidden, this is hidde</Typography>
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            {/* <Box className={classes.pill}>
                                                <LinkIcon className={classes.icon} />
                                                <Link href="/papers/groot" className={classes.iconPill}>
                                                    <Icon className="fas fa-link" sx={{ fontSize: '16px', color: 'gray', marginRight: '4px' }} aria-hidden="true" />
                                                    <Typography>Project</Typography>
                                                </Link>
                                            </Box> */}
                                            <Box className={classes.pill}>
                                                <DescriptionIcon className={classes.icon} />
                                                <Link href="https://drive.google.com/file/d/17YuJyzvy-rG5Y687Z6RomViVYB45M1Gz/view?usp=sharing" className={classes.iconPill}>
                                                    <Icon className="fas fa-pdf" sx={{ fontSize: '16px', color: 'gray', marginRight: '4px' }} aria-hidden="true" />
                                                    <Typography>PDF</Typography>
                                                </Link>
                                            </Box>
                                            <Box className={classes.pill}>
                                                <PlayArrowIcon className={classes.icon} />
                                                <Link href="https://drive.google.com/file/d/1TOITEO4pbwm8SJGaVG8LGGp1zBZ5TG-w/view?usp=sharing" className={classes.iconPill}>
                                                    <Icon className="fas fa-pdf" sx={{ fontSize: '16px', color: 'gray', marginRight: '4px' }} aria-hidden="true" />
                                                    <Typography>Demo</Typography>
                                                </Link>
                                            </Box>
                                            {/* <Box className={classes.pill}>
                                                <MovieIcon className={classes.icon} />
                                                <Link href="https://www.youtube.com/watch?v=5O_zfoG4xOo&t=3160s" className={classes.iconPill}>
                                                    <Icon className="fas fa-pdf" sx={{ fontSize: '16px', color: 'gray', marginRight: '4px' }} aria-hidden="true" />
                                                    <Typography>Talk</Typography>
                                                </Link>
                                            </Box> */}
                                        </CardActions>
                                    </Card>
                                </Grid>
                                
                                <Grid item xs={12} md={4}>
                                    {/* Paper 1 */}
                                    <Card style={{ outlineStyle: 'solid', outlineColor: 'lightgrey', outlineWidth: 1, boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', }}>
                                        <CardMedia component="img" image={require('./img/groot.png')} onClick={() => toggleEnlarge('./img/groot.png')} className={classes.publicationImage} />
                                        <CardContent>
                                            <Typography className={classes.title}>
                                                Groot: A System for Editing and Configuring Automated Data Insights
                                            </Typography>
                                            <Typography className={classes.authors}>
                                                <b className={classes.bold}>Sneha Gathani</b>, Anamaria Crisan, Vidya Setlur, Arjun Srinivasan
                                            </Typography>
                                            <Typography sx={{ fontSize: '16px', display: 'flex', alignItems: 'center' }} style={{ paddingTop: '5px', }}>
                                                <AutoAwesomeIcon sx={{ fontSize: '16px', color: '#DF825F', }} /><b style={{ fontSize: '16px', fontWeight: 'bold', marginLeft: '4px' }}>VIS 2024 Short Paper</b>
                                            </Typography>
                                            <Typography className={classes.subtitle} style={{ paddingTop: '16px', }}>
                                                A prototype system that allows users to proactively specify and refine automated data insights.
                                                <Typography className={classes.subtitleHide}>This is hidden, this is hidden, this is hidden, this is hidden, this is hidden,  this is hidden, this is hidden  this is hidden, this is hidden,  this is hidden, this is hidden.</Typography>
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            {/* <Box className={classes.pill}>
                                                <LinkIcon className={classes.icon} />
                                                <Link href="/papers/groot" className={classes.iconPill}>
                                                    <Icon className="fas fa-link" sx={{ fontSize: '16px', color: 'gray', marginRight: '4px' }} aria-hidden="true" />
                                                    <Typography>Project</Typography>
                                                </Link>
                                            </Box> */}
                                            <Box className={classes.pill}>
                                                <DescriptionIcon className={classes.icon} />
                                                <Link href="https://drive.google.com/file/d/13KKpXSgdOLvOknn0Uwo49H13qav7YUCp/view?usp=sharing" className={classes.iconPill}>
                                                    <Icon className="fas fa-pdf" sx={{ fontSize: '16px', color: 'gray', marginRight: '4px' }} aria-hidden="true" />
                                                    <Typography>PDF</Typography>
                                                </Link>
                                            </Box>
                                            <Box className={classes.pill}>
                                                <PlayArrowIcon className={classes.icon} />
                                                <Link href="" className={classes.iconPill}>
                                                    <Icon className="fas fa-pdf" sx={{ fontSize: '16px', color: 'gray', marginRight: '4px' }} aria-hidden="true" />
                                                    <Typography>Demo</Typography>
                                                </Link>
                                            </Box>
                                            <Box className={classes.pill}>
                                                <MovieIcon className={classes.icon} />
                                                <Link href="https://www.youtube.com/watch?v=5O_zfoG4xOo&t=3160s" className={classes.iconPill}>
                                                    <Icon className="fas fa-pdf" sx={{ fontSize: '16px', color: 'gray', marginRight: '4px' }} aria-hidden="true" />
                                                    <Typography>Talk</Typography>
                                                </Link>
                                            </Box>
                                        </CardActions>
                                    </Card>
                                </Grid>

                                <Grid item xs={12} md={4}>
                                    {/* Paper 2 */}
                                    <Card style={{ outlineStyle: 'solid', outlineColor: 'lightgrey', outlineWidth: 1, boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', }}>
                                        <CardMedia component="img" image={require('./img/grammatic_embeddings.png')} onClick={() => toggleEnlarge('./img/grammatic_embeddings.png')} className={classes.publicationImage}/>
                                        <CardContent>
                                            <Typography className={classes.title}>
                                                A Grammar-Based Approach for Applying Visualization Taxonomies to Interaction Logs
                                            </Typography>
                                            <Typography className={classes.authors}>
                                                <b className={classes.bold}>Sneha Gathani</b>, Shayan Monadjemi, Alvitta Ottley, Leilani Battle
                                            </Typography>
                                            <Typography sx={{ fontSize: '16px', display: 'flex', alignItems: 'center' }} style={{ paddingTop: '5px', }}>
                                                <AutoAwesomeIcon sx={{ fontSize: '16px', color: '#DF825F', }} /><b style={{ fontSize: '16px', fontWeight: 'bold', marginLeft: '4px' }}>EuroVis 2022</b>
                                            </Typography>
                                            <Typography className={classes.subtitle} style={{ paddingTop: '16px', }}>
                                                Reformulating theoretical visualization task taxonomies as regular grammars to make them more actionable for empirical interaction log analysis.
                                                <Typography className={classes.subtitleHide}>This  this is hidden, this is hidden  this is hidden, this is hidden  this is hidden, this is hidden  this is hidden, this is hidden</Typography>
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            {/* <Box className={classes.pill}>
                                                <LinkIcon className={classes.icon} />
                                                <Link href="/papers/interaction_logs" className={classes.iconPill}>
                                                    <Icon className="fas fa-link" sx={{ fontSize: '16px', color: 'gray', marginRight: '4px' }} aria-hidden="true" />
                                                    <Typography>Project</Typography>
                                                </Link>
                                            </Box> */}
                                            <Box className={classes.pill}>
                                                <DescriptionIcon className={classes.icon} />
                                                <Link href="https://arxiv.org/pdf/2201.03740.pdf" className={classes.iconPill}>
                                                    <Icon className="fas fa-pdf" sx={{ fontSize: '16px', color: 'gray', marginRight: '4px' }} aria-hidden="true" />
                                                    <Typography>PDF</Typography>
                                                </Link>
                                            </Box>
                                            <Box className={classes.pill}>
                                                <MovieIcon className={classes.icon} />
                                                <Link href="https://www.youtube.com/watch?v=t7PVqvh0iQ4&list=PLSlLplD3pBWjPUtD5sU8qPmCkN_nn8ZZj&t=3105s" className={classes.iconPill}>
                                                    <Icon className="fas fa-pdf" sx={{ fontSize: '16px', color: 'gray', marginRight: '4px' }} aria-hidden="true" />
                                                    <Typography>Talk</Typography>
                                                </Link>
                                            </Box>
                                            <Box className={classes.pill}>
                                                <CodeIcon className={classes.icon} />
                                                <Link href="https://osf.io/s3ucr/?view_only=aa0d8632ad1c4fe09faea9869fd5b977" className={classes.iconPill}>
                                                    <Icon className="fas fa-pdf" sx={{ fontSize: '16px', color: 'gray', marginRight: '4px' }} aria-hidden="true" />
                                                    <Typography>Code</Typography>
                                                </Link>
                                            </Box>
                                        </CardActions>
                                    </Card>
                                </Grid>

                            </Grid>

                            <Grid container spacing={4}>

                                <Grid item xs={12} md={4}>
                                    {/* Paper 3 */}
                                    <Card style={{ outlineStyle: 'solid', outlineColor: 'lightgrey', outlineWidth: 1, boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', }}>
                                        <CardMedia component="img" image={require('./img/functionalities.png')} onClick={() => toggleEnlarge('./img/functionalities.png')} className={classes.publicationImage}/>
                                        <CardContent>
                                            <Typography className={classes.title}>
                                                Augmenting Decision Making via Interactive What-If Analysis<Typography className={classes.titleHide}>Hello this is hidden</Typography>
                                            </Typography>
                                            <Typography className={classes.authors}>
                                                <b className={classes.bold}>Sneha Gathani</b>, Madelon Hulsebos, James Gale, Peter J. Haas, Çağatay Demiralp
                                            </Typography>
                                            <Typography sx={{ fontSize: '16px', display: 'flex', alignItems: 'center' }} style={{ paddingTop: '5px', }}>
                                                <AutoAwesomeIcon sx={{ fontSize: '16px', color: '#DF825F', }} /><b style={{ fontSize: '16px', fontWeight: 'bold', marginLeft: '4px' }}>CIDR 2022</b>
                                            </Typography>
                                            <Typography className={classes.subtitle} style={{ paddingTop: '16px', }}>
                                                Understanding the purpose of business data analysis and operationalizing it within an interactive visual data analysis system, SystemD, to enable business users to experiment with the data by asking what-if questions.
                                            </Typography>
                                            <Typography className={classes.subtitleHide}>This  this is hidden, this is hidden  this is hidden, this is hidden  this is hidden, this is hidden</Typography>
                                        </CardContent>
                                        <CardActions>
                                            <Box className={classes.pill}>
                                                <DescriptionIcon className={classes.icon} />
                                                <Link href="https://www.cidrdb.org/cidr2022/papers/p49-gathani.pdf" className={classes.iconPill}>
                                                    <Icon className="fas fa-pdf" sx={{ fontSize: '16px', color: 'gray', marginRight: '4px' }} aria-hidden="true" />
                                                    <Typography>PDF</Typography>
                                                </Link>
                                            </Box>
                                            <Box className={classes.pill}>
                                                <PlayArrowIcon className={classes.icon} />
                                                <Link href="https://drive.google.com/file/d/1PZqyPjd99-HmsTDXZOJzEVVJJIHMSO82/view?usp=sharing" className={classes.iconPill}>
                                                    <Icon className="fas fa-pdf" sx={{ fontSize: '16px', color: 'gray', marginRight: '4px' }} aria-hidden="true" />
                                                    <Typography>Demo</Typography>
                                                </Link>
                                            </Box>
                                            <Box className={classes.pill}>
                                                <MovieIcon className={classes.icon} />
                                                <Link href="https://www.youtube.com/watch?v=an-oTVQzHT0" className={classes.iconPill}>
                                                    <Icon className="fas fa-pdf" sx={{ fontSize: '16px', color: 'gray', marginRight: '4px' }} aria-hidden="true" />
                                                    <Typography>Talk</Typography>
                                                </Link>
                                            </Box>
                                        </CardActions>
                                    </Card>
                                </Grid>

                                <Grid item xs={12} md={4}>
                                    {/* Paper 4 */}
                                    <Card style={{ outlineStyle: 'solid', outlineColor: 'lightgrey', outlineWidth: 1, boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', }}>
                                        <CardMedia component="img" image={require('./img/sigmaTyper.png')} onClick={() => toggleEnlarge('./img/sigmaTyper.png')} className={classes.publicationImage}/>
                                        <CardContent>
                                            <Typography className={classes.title}>
                                                Making Table Understanding Work in Practice<Typography className={classes.titleHide}>helloooooo auehfoaehfoaih</Typography>
                                            </Typography>
                                            <Typography className={classes.authors}>
                                                Madelon Hulsebos, <b className={classes.bold}>Sneha Gathani</b>, James Gale , Isil Dillig, Paul Groth, Çağatay Demiralp
                                            </Typography>
                                            <Typography sx={{ fontSize: '16px', display: 'flex', alignItems: 'center' }} style={{ paddingTop: '5px', }}>
                                                <AutoAwesomeIcon sx={{ fontSize: '16px', color: '#DF825F', }} /><b style={{ fontSize: '16px', fontWeight: 'bold', marginLeft: '4px' }}>CIDR 2022 Abstract</b>
                                            </Typography>
                                            <Typography className={classes.subtitle} style={{ paddingTop: '16px', }}>
                                                Learning what do we need for table understanding models to work in practice and develop the SigmaTyper system to infer labeling functions from table based on user's feedback.
                                                <Typography className={classes.subtitleHide} style={{ paddingTop: '20px', }}>hellloooo this is this is hidden  this is hidden, this is hidden the hiding text</Typography>
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <Box className={classes.pill}>
                                                <DescriptionIcon className={classes.icon} />
                                                <Link href="https://www.cidrdb.org/cidr2022/papers/a48-hulsebos.pdf" className={classes.iconPill}>
                                                    <Icon className="fas fa-pdf" sx={{ fontSize: '16px', color: 'gray', marginRight: '4px' }} aria-hidden="true" />
                                                    <Typography>PDF</Typography>
                                                </Link>
                                            </Box>
                                            <Box className={classes.pill}>
                                                <MovieIcon className={classes.icon} />
                                                <Link href="https://www.youtube.com/watch?v=-BE5rWNMXnU" className={classes.iconPill}>
                                                    <Icon className="fas fa-pdf" sx={{ fontSize: '16px', color: 'gray', marginRight: '4px' }} aria-hidden="true" />
                                                    <Typography>Talk</Typography>
                                                </Link>
                                            </Box>
                                        </CardActions>
                                    </Card>
                                </Grid>

                                <Grid item xs={12} md={4}>
                                    {/* Paper 5 */}
                                    <Card style={{ outlineStyle: 'solid', outlineColor: 'lightgrey', outlineWidth: 1, boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', }}>
                                        <CardMedia component="img" image={require('./img/debugging.png')} onClick={() => toggleEnlarge('./img/debugging.png')} className={classes.publicationImage}/>
                                        <CardContent>
                                            <Typography className={classes.title}>
                                                Debugging Database Queries: A Survey of Tools, Techniques, and Users
                                            </Typography>
                                            <Typography className={classes.authors}>
                                                <b className={classes.bold}>Sneha Gathani</b>, Peter Lim, Leilani Battle
                                                <Typography className={classes.authorsHide}>Hello, this is hidden</Typography>
                                            </Typography>
                                            <Typography sx={{ fontSize: '16px', display: 'flex', alignItems: 'center' }} style={{ paddingTop: '5px', }}>
                                                <AutoAwesomeIcon sx={{ fontSize: '16px', color: '#DF825F', }} /><b style={{ fontSize: '16px', fontWeight: 'bold', marginLeft: '4px' }}>CHI 2020</b>
                                            </Typography>
                                            <Typography className={classes.subtitle} style={{ paddingTop: '16px', }}>
                                                Interdisciplinary literature review and interview study to help understand database debugging strategies.
                                                <Typography className={classes.subtitleHide} style={{ paddingTop: '20px', }}>hellloooo this is the hiding text this is hidden  this is hidden, this is hidden hellloooo this is the hiding text hellloooo this is the hiding text</Typography>
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <Box className={classes.pill}>
                                                <DescriptionIcon className={classes.icon} />
                                                <Link href="https://homes.cs.washington.edu/~leibatt/static/papers/gathani_debugging_CHI_2020.pdf" className={classes.iconPill}>
                                                    <Icon className="fas fa-pdf" sx={{ fontSize: '16px', color: 'gray', marginRight: '4px' }} aria-hidden="true" />
                                                    <Typography>PDF</Typography>
                                                </Link>
                                            </Box>
                                            <Box className={classes.pill}>
                                                <MovieIcon className={classes.icon} />
                                                <Link href="https://www.youtube.com/watch?v=auCLjsBi6zE" className={classes.iconPill}>
                                                    <Icon className="fas fa-pdf" sx={{ fontSize: '16px', color: 'gray', marginRight: '4px' }} aria-hidden="true" />
                                                    <Typography>Talk</Typography>
                                                </Link>
                                            </Box>
                                        </CardActions>
                                    </Card>
                                </Grid>
                            </Grid>

                            <Modal open={enlarged} onClose={() => toggleEnlarge('')}>
                                <Box className={classes.mfpContainer}>
                                {selectedImage && (<CardMedia component="img" image={require(`${selectedImage}`)} className={classes.mfpContent} />)}
                                </Box>
                            </Modal>
                        </Container>
                    </Container>

                    {/* Research section */}
                    <Container maxWidth="xl" className={classes.Container} id="research" style={{ margin: 0, padding: 0, height: 'auto', width: '80vw', paddingTop: '75px', }}>
                        <Typography className={classes.headNames}>Ongoing Projects</Typography>
                        <Box sx={{ flexGrow: 1, }} className={classes.researchPaper} style={{ marginBottom: '3vh', outlineStyle: 'solid', outlineColor: 'lightgrey', outlineWidth: 1, boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', }}>
                            <Grid container spacing={2} style={{ paddingLeft: '1vw', alignItems: 'center', }}>
                                <Grid item style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignContent: 'center', alignItems: 'center', }}>
                                    <CardMedia
                                        component="img"
                                        image={require('./img/overview.png')}
                                        className={classes.cardMediaImage}
                                    />
                                </Grid>
                                <Grid item xs={12} sm container>
                                <Grid item xs container direction="column" spacing={2} style={{ justifyContent: 'center', }}>
                                    <CardContent sx={{ flex: '1 0 auto' }}>
                                        <Typography className={classes.title}>
                                            Praxa: A Standardized Approach to What-If Analysis
                                        </Typography>
                                        <Typography className={classes.authors}>
                                            <b className={classes.bold}>Sneha Gathani</b>, Peter J. Haas, Çağatay Demiralp, Zhicheng Liu
                                        </Typography>
                                        <div style={{ display: 'flex', flexDirection: 'row', paddingTop: '5px', alignItems: 'center', }}>
                                            <Box className={classes.pillTarget}>
                                                <FindReplaceIcon className={classes.iconTarget} />
                                                <Icon className="fas fa-pdf" sx={{ fontSize: '16px', color: 'white', marginRight: '4px' }} aria-hidden="true" />
                                                <Typography>Under Revision → Target: TVCG 2025</Typography>
                                            </Box>
                                        </div>
                                        <Typography style={{ marginTop: '1vh', color: 'gray', }}>
                                            What-if analysis is a pivotal technique employed across various domains like business, healthcare, finance, and machine learning to facilitate data-informed decision-making.
                                            It empowers users to simulate various data scenarios and predict outcomes based on hypothetical data modifications. However, conducting what-if analysis presents several
                                            challenges: 1) a lack of conceptual understanding of the components involved, limiting its transferability across different domains, and 2) the absence of dedicated tools
                                            and libraries for what-if analysis, leading to ad hoc workflows and implementation hurdles such as redundant coding efforts. To address these challenges, we introduce
                                            Praxa, a standardized framework for what-if analysis informed from examining 62 what-if analysis use cases in the literature. We then operationalize this framework using a
                                            JSON-based declarative language, Praxa Specification Language (PSL). These contributions aim to improve the consistency, reusability, and replicability of what-if analysis
                                            workflows across diverse datasets and domains. We demonstrate PSL's expressiveness through use cases from three diverse application domains of business,
                                            machine learning, and healthcare informatics. Finally, we discuss its potential future applications, such as facilitating feedback loops between end-users and analysts,
                                            improving analysis accuracy through integration with recommendation libraries, and supporting decision-making by enabling the inspection of decision patterns and
                                            optimization of decision paths.
                                        </Typography>
                                    </CardContent> 
                                </Grid>
                                </Grid>
                            </Grid>
                        </Box>
                        <Divider />

                        <Box sx={{ flexGrow: 1, }} className={classes.researchPaper} style={{ marginBottom: '3vh', outlineStyle: 'solid', outlineColor: 'lightgrey', outlineWidth: 1, boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', }}>
                            <Grid container spacing={2} style={{ paddingLeft: '1vw', }}>
                                <Grid item style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignContent: 'center', alignItems: 'center', }}>
                                    {/* <CardMedia
                                        component="img"
                                        image={require('./img/methodology.png')}
                                        className={classes.cardMediaImage}
                                    /> */}
                                </Grid>
                                <Grid item xs={12} sm container>
                                <Grid item xs container direction="column" spacing={2} style={{ justifyContent: 'center', }}>
                                    <CardContent sx={{ flex: '1 0 auto' }}>
                                        <Typography className={classes.title}>
                                            Recommend-o-Matic: Facilitating Analysts Create Interactive Explanations of Decisions and their Trade-Offs
                                        </Typography>
                                        {/* <Typography className={classes.authors}>
                                            <b className={classes.bold}>Sneha Gathani</b>, Zhicheng Liu, Dan Marshall, Steven Drucker
                                        </Typography> */}
                                        <div style={{ display: 'flex', flexDirection: 'row', paddingTop: '5px', alignItems: 'center', }}>
                                            <Box className={classes.pillTarget}>
                                                <FindReplaceIcon className={classes.iconTarget} />
                                                <Icon className="fas fa-pdf" sx={{ fontSize: '16px', color: 'white', marginRight: '4px' }} aria-hidden="true" />
                                                <Typography>Under Progress → Target: UIST 2025</Typography>
                                            </Box>
                                            {/* <Box className={classes.pill} style={{ marginLeft: '5px', }}>
                                                <InboxIcon className={classes.icon} />
                                                <Link href="https://arxiv.org/pdf/2212.13643" className={classes.iconPill}>
                                                    <Icon className="fas fa-pdf" sx={{ fontSize: '16px', color: 'gray', marginRight: '4px' }} aria-hidden="true" />
                                                    <Typography>ArXiv</Typography>
                                                </Link>
                                            </Box> */}
                                        </div>
                                        <Typography style={{ marginTop: '1vh', color: 'gray', }}>
                                            Developing a domain-specific language (DSL) to empower data analysts to quickly and easily generate interactive documents consisting of text, 
                                            visualizations, interactions, and annotations to effectively communicate the explanations of recommended decisions and their associated trade-offs to stakeholders.
                                        </Typography>
                                    </CardContent> 
                                </Grid>
                                </Grid>
                            </Grid>
                        </Box>
                    </Container>

                    {/* Other projects */}
                    <Container maxWidth="xl" className={classes.Container} id="research" style={{ margin: 0, padding: 0, height: 'auto', width: '80vw',  paddingTop: '25px', }}>
                        <Typography className={classes.headNames} style={{ fontSize: '30px', }}>Others</Typography>
                        <Box sx={{ flexGrow: 1, }} className={classes.researchPaper} style={{ marginBottom: '3vh', outlineStyle: 'solid', outlineColor: 'lightgrey', outlineWidth: 1, boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', }}>
                            <Grid container spacing={2} style={{ paddingLeft: '1vw', }}>
                                <Grid item style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignContent: 'center', alignItems: 'center', marginTop: '2vh', marginBottom: '2vh', }}>
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
                                        <Typography style={{ marginTop: '1vh', marginBottom: '2vh', color: 'gray', }}>
                                            Visualization design studies are notoriously difficult to design effectively. Though existing models highlight the major pitfalls, their guidance is not as
                                            user-friendly for individuals new to design studies. We present an <i>updated design study model</i> providing step-by-step guidelines, concrete examples, and
                                            discussion of differences and similarities between design studies in eight different domains.  To demonstrate the value of our model and guidelines, we apply them
                                            in the security domain to help fledgling analysts <i>reverse engineer</i> (RE) Android applications (apps) for potential security and privacy vulnerabilities.
                                            Through our design study, we develop <i>TraceInspector</i>, an interactive visualization tool that integrates both static and dynamic Android app data, connects
                                            relevant temporal event sequences and method dependencies, and executes app code in a single visualization interface. Finally, we evaluate TraceInspector with nine
                                            RE users and find that the tool eases the learning of RE tasks for novice RE users, validating our synthesized design study guidance.
                                        </Typography>
                                        <Box className={classes.pill} style={{ width: '60px', }}>
                                            <DescriptionIcon className={classes.icon} />
                                            <Link href="https://drive.google.com/file/d/1wPjqrtSqSTJWVGJisJJTFrJ7BJKeBBIH/view?usp=sharing" className={classes.iconPill}>
                                                <Icon className="fas fa-pdf" sx={{ fontSize: '16px', color: 'gray', marginRight: '4px' }} aria-hidden="true" />
                                                <Typography>PDF</Typography>
                                            </Link>
                                        </Box>
                                    </CardContent>
                                </Grid>
                                </Grid>
                            </Grid>
                        </Box>
                    </Container>

                    {/* Creative section */}
                    <Container maxWidth="xl" id="creative" style={{ margin: 0, padding: 0, height: 'auto', paddingTop: '75px', }}>
                        <Typography className={classes.headNames}>Creative</Typography>
                            <Grid item xs={12} style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                                <Box sx={{ m: 2, border: 2, borderColor: '#000' }}>
                                    <img src={require('./img/sunflower.jpeg')} alt="" height="350px" className={classes.creativeImage} />
                                </Box>
                                <Box sx={{ m: 2, border: 2, borderColor: '#000' }}>
                                    <img src={require('./img/tower.png')} alt="" width="515px" className={classes.creativeImage} />
                                </Box>
                            </Grid>
                            <Grid item xs={12} style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                                <Box sx={{ m: 2, border: 2, borderColor: '#000' }}>
                                    <img src={require('./img/ieee.png')} alt="" width="250px" className={classes.creativeImage} />
                                </Box>
                                <Box sx={{ m: 2, border: 2, borderColor: '#000' }}>
                                    <img src={require('./img/tedx.png')} alt="" width="250px" className={classes.creativeImage} />
                                </Box>
                                <Box sx={{ m: 2, border: 2, borderColor: '#000' }}>
                                    <img src={require('./img/cry.png')} alt="" width="350px" className={classes.creativeImage} />
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
                            {/* <Divider style={{ marginTop: '10vh', marginBottom: '5vh', }} /> */}
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
                                        <Button target="_blank" rel="noreferrer" href="https://drive.google.com/file/d/1S3wEJNWWKtJnaR5xBfcu7KZsE7_0bfmR/view?usp=sharing" className={classes.cvbutton}>
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
