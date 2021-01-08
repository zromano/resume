import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {GithubProjectDetail} from "./GithubProjectDetail";
import {LinearProgress} from "@material-ui/core";

const GithubProjects: React.FC = () => {
    const [projectDetails, setProjectDetails] = useState<any>(undefined);

    useEffect(() => {
        axios.get('https://api.github.com/users/zromano/repos')
            .then((response) => {
                setProjectDetails(response.data);
            }).catch(() => {
                setProjectDetails('invalid');
            }
        );
    }, []);

    const getProjectDetails = () => {
        if (projectDetails === undefined) {
            return (
                <div className="projects__loading">
                    <LinearProgress/>
                </div>
            );
        } else if (projectDetails === 'invalid') {
            return (<p>Error connecting to GitHub!</p>)
        } else {
            // @ts-ignore todo fix
            return projectDetails.map((projectDetails: any) => (
                <li
                    key={projectDetails.id}
                    className="projects__item"
                >
                    <GithubProjectDetail
                        projectName={projectDetails.name}
                        description={projectDetails.description}
                        githubUrl={projectDetails.html_url}
                        numStars={projectDetails.stargazers_count}
                        numForks={projectDetails.forks_count}
                        language={projectDetails.language}
                        homePage={projectDetails.homepage}
                    />
                </li>
            ));
        }
    };

    return (
        <>
            <h1>Projects</h1>
            <ul className="projects">
                {getProjectDetails()}
            </ul>
        </>
    )
};
export {GithubProjects};
