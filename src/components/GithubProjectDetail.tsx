import React from 'react';
import {Fab} from "@material-ui/core";
import GitHubIcon from '@material-ui/icons/GitHub';

type GithubProjectDetailProps = {
    projectName: string,
    description: string,
    url: string,
}

const GithubProjectDetail: React.FC<GithubProjectDetailProps> = (props: GithubProjectDetailProps) => {
    return (
        <div className="projects-detail">
            <div className="projects-detail__title">{props.projectName}</div>
            <p className="projects-detail__text">{props.description}</p>
            <a className="projects-detail__button" href={props.url} target="_blank" rel="noopener noreferrer">
                <Fab size="small" variant="extended" aria-label="like" >
                    <GitHubIcon className="projects-detail__icon" />
                    View Code
                </Fab>
            </a>
        </div>
    )
};
export {GithubProjectDetail};