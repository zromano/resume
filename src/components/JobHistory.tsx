import React from 'react';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

interface TabPanelProps {
    children?: React.ReactNode;
    index: any;
    value: any;
}

function TabPanel(props: TabPanelProps) {
    const {children, value, index} = props;

    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`scrollable-force-tabpanel-${index}`}
            aria-labelledby={`scrollable-force-tab-${index}`}
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

const JobHistory: React.FC = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    };

    return (
        <div>
            <h1>Work History</h1>
            <AppBar position="static" color="transparent">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    variant="scrollable"
                    scrollButtons={true}
                    aria-label="scrollable tabs of previous jobs"
                    textColor="inherit"
                >
                    <Tab label="Smartsheet" {...a11yProps(0)} />
                    <Tab label="Boeing" {...a11yProps(1)} />
                    <Tab label="Ford" {...a11yProps(2)} />
                    <Tab label="Caterpillar" {...a11yProps(3)} />
                </Tabs>
            </AppBar>


            <TabPanel value={value} index={0}>
                <h2>Smartsheet</h2>
                <h4>Full Stack SDE</h4>
                <div className="work-company-role-duration">December 2020-Present</div>
                <p>Development & Design:</p>
                <ul>
                    <li>Designed/led full-stack development of ‘deactivate user’ feature as an alternative to deleting them</li>
                    <li>Created a DynamoDB table to store privacy related policies based on a user’s domain name</li>
                    <li>Analyzed service performance with Locust to enable service to reach 4,000+ requests per second</li>
                    <li>Improved caching and use of replicas to reduce load on database by over 10 million reads per hour</li>
                    <li>Led an effort to upgrade essential company-wide libraries to Java 17 and SpringBoot 3</li>
                </ul>
                <p>DevOps:</p>
                <ul>
                    <li>Profiled memory/CPU utilization to determine optimal Kubernetes pod and JVM sizing</li>
                    <li>Established a testing strategy that enabled high-frequency and high-confidence deploys</li>
                    <li>Created a tool that automatically creates a pull request to update our dependencies to latest version</li>
                </ul>
                <p>Teaching:</p>
                <ul>
                    <li>Taught and encouraged modern Java/Spring practices and became the ‘go-to’ SpringBoot developer</li>
                    <li>Mentored an intern and guided them on improving the SCIM interface with Azure Active Directory</li>
                    <li>Introduced team to build technologies such as Gradle and Liquibase to improve pipeline speeds</li>
                </ul>
            </TabPanel>

            <TabPanel value={value} index={1}>
                <h2>Boeing</h2>
                <h4>Full Stack Developer</h4>
                <div className="work-company-role-duration">August 2017-December 2020</div>
                <p>Development:</p>
                <ul>
                    <li>Built a website to securely track COVID-19 cases in under 24 hours</li>
                    <li>Co–produced an app to optimize purchasing that discovered $1 billion in unrealized savings</li>
                    <li>Utilized Spring Security and OAuth2 to properly authenticate and authorize users</li>
                    <li>Co-developed an app that generates GitLab-CI pipelines to test and deploy existing apps</li>
                </ul>
                <p>DevOps:</p>
                <ul>
                    <li>Established scalable Selenium browser tests that must pass prior to deployment</li>
                    <li>Identified and resolved over 150 bugs in production by adding SonarQube and Coverity</li>
                    <li>Created a code review process for a team of 15 developers that previously did not do them</li>
                    <li>Implemented Blue/Green deploys so that applications can be released with zero downtime</li>
                    <li>Introduced a team to persistent chat and set up webhooks for live alerting of failures</li>
                </ul>
                <p>Teaching:</p>
                <ul>
                    <li>Utilized paired programming to teach modern development practices for 1500+ hours</li>
                    <li>Taught Extreme Programming principles such as Test-Driven Development and CI/CD</li>
                    <li>Facilitated courses to train developers on deploying software to the cloud</li>
                </ul>
            </TabPanel>

            <TabPanel value={value} index={2}>
                <h2>Ford</h2>
                <h4>Engine Test Team Intern</h4>
                <div className="work-company-role-duration">May 2016-August 2016</div>
                <ul>
                    <li>Designed a simulation of engine compression in MatLab to help identify faulty engines</li>
                </ul>
            </TabPanel>

            <TabPanel value={value} index={3}>
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
