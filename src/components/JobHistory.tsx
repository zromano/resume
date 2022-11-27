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
                <ul>
                    <li>Designed and led full-stack development to allow users to be deactivated instead of deleted</li>
                    <li>Improved caching and use of replicas to reduce load on primary DB by over 10M reads/hr</li>
                    <li>Established daily SonarQube scans resulting in 7% improvement in code coverage</li>
                    <li>Utilized Terraform to automate the creation of SQS queues in AWS</li>
                    <li>Introduced team to newer build technologies such as Gradle and Liquibase on new service</li>
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
