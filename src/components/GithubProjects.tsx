import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {GithubProjectDetail} from "./GithubProjectDetail";
import {LinearProgress} from "@material-ui/core";

const GithubProjects: React.FC = () => {
    const [projectDetails, setProjectDetails] = useState<any>(undefined);

    useEffect(() => {
        axios.get('https://api.github.com/users/zromano24/repos')
            .then((response) => {
                setProjectDetails(response.data);
            }).catch((error) => {
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
                        url={projectDetails.html_url}
                    />
                </li>
            ));
        }
    };

    return (
        <>
            <h2>Projects</h2>
            <ul className="projects">
                {getProjectDetails()}
            </ul>
        </>
    )
};
export {GithubProjects};