import React from 'react';
import {makeStyles, Theme} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

interface TabPanelProps {
    children?: React.ReactNode;
    index: any;
    value: any;
}

function TabPanel(props: TabPanelProps) {
    const {children, value, index, ...other} = props;

    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`scrollable-force-tabpanel-${index}`}
            aria-labelledby={`scrollable-force-tab-${index}`}
            {...other}
        >
            <Box p={3}>{children}</Box>
        </Typography>
    );
}

function a11yProps(index: any) {
    return {
        id: `scrollable-force-tab-${index}`,
        'aria-controls': `scrollable-force-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        flexGrow: 1,
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
}));

const JobHistory: React.FC = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <AppBar position="static" color="default">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="scrollable"
                    scrollButtons="on"
                    aria-label="scrollable force tabs example"
                >
                    <Tab label="Full Stack Dev" {...a11yProps(0)} />
                    <Tab label="Data Analyst" {...a11yProps(1)} />
                    <Tab label="Systems Engineer" {...a11yProps(2)} />
                    <Tab label="Internships" {...a11yProps(3)} />
                </Tabs>
            </AppBar>


            <TabPanel value={value} index={0}>
                <h2>Boeing</h2>
                <h4>Full Stack Developer</h4>
                <div className="work-company-role-duration">March 2019-Present</div>
                <ul>
                    <li>Paired with developers from across the company to teach modern development practices</li>
                    <li>Facilitated courses to train developers on how to deploy software to the cloud</li>
                    <li>Followed Extreme Programming principles such as Test-Driven Development and CI/CD</li>
                    <li>
                        Co-developed an app that generates pipelines to build, test, and deploy apps to the cloud
                    </li>
                    <li>Utilized Spring Security and OAuth2 to properly authenticate and authorize users</li>
                    <li>Built several highly available and scalable apps and Restful APIs</li>
                    <li>
                        Co–developed an app to optimize purchasing that discovered $1.5 billion in unrealized
                        savings and has already saved over $5 million annually
                    </li>
                </ul>

            </TabPanel>

            <TabPanel value={value} index={1}>
                <h2>Boeing</h2>
                <h4>Data Analyst – Program Management Analytics Team</h4>
                <div className="work-company-role-duration">June 2018-March 2019</div>
                <ul>
                    <li>Created a website using .NET Core to host real-time visualizations</li>
                    <li>Visualized data in Tableau that eliminated hundreds of charting hours annually</li>
                    <li>Designed a risk management analytics package for commercial and defense products</li>
                    <li>
                        Connected engineering, production, and supply chain data to provide metrics on part changes
                        all the way from design to installation
                    </li>
                    <li>Awarded organization project of the year</li>
                </ul>
            </TabPanel>

            <TabPanel value={value} index={2}>
                <h2>Boeing</h2>
                <h4>Systems Engineer - Risk Management</h4>
                <div className="work-company-role-duration">August 2017-June 2018</div>
                <ul>
                    <li>Managed risks, issues, and opportunities for a team of 300+ people</li>
                    <li>Maintained proper risk mitigation plans for teams and individual engineers</li>
                    <li>Educated executives every week about the current level of risk on the 777X</li>
                    <li>Eliminated 90 engineer hours quarterly by implementing report automation using VBA</li>
                    <li>Used R to aide a data analytics team by compressing several large data exports</li>
                </ul>
            </TabPanel>

            <TabPanel value={value} index={3}>
                <h2>Ford</h2>
                <h4>Engine Test Team Intern</h4>
                <div className="work-company-role-duration">May 2016-August 2016</div>
                <ul>
                    <li>Designed a simulation of engine compression in MatLab to help identify faulty engines</li>
                </ul>
                <h2>Caterpillar</h2>
                <h4>Design Team Student Practicum</h4>
                <div className="work-company-role-duration">May 2015-November 2015</div>
                <ul>
                    <li>Created simulated stress models to predict part failure</li>
                </ul>
            </TabPanel>
        </div>
    );
};
export {JobHistory}