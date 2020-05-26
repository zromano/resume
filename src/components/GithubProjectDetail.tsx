import React from 'react';
import colors from "./GithubLanguageColors";
import {Icon} from "@iconify/react"
import githubFork from "@iconify/icons-octicon/repo-forked"
import githubStar from "@iconify/icons-octicon/star"
import githubIcon from "@iconify/icons-octicon/mark-github"
import linkExternal from '@iconify/icons-octicon/link-external';


type GithubProjectDetailProps = {
    projectName: string,
    description: string,
    githubUrl: string,
    numStars: number,
    numForks: number,
    language?: string,
    homePage?: string,
}

const GithubProjectDetail: React.FC<GithubProjectDetailProps> = (props: GithubProjectDetailProps) => {
    return (
        <div className="projects-detail">
            <div className="projects-detail__title">{props.projectName}</div>
            <p className="projects-detail__text">{props.description}</p>
            <div className="projects-detail__github">
                <div className="projects-detail__github-left">
                    {props.language && (
                        <div className="projects-detail__github-language projects-detail__github-info">
                            <span
                                className="projects-detail__github-language-dot"
                                style={{backgroundColor: (colors as any)[props.language!].color}}
                            />
                            {props.language}
                        </div>
                    )}
                    <div className="projects-detail__github-info">
                        <Icon icon={githubStar}/>
                        {props.numStars}
                    </div>
                    <div className="projects-detail__github-info">
                        <Icon icon={githubFork}/>
                        {props.numForks}
                    </div>
                </div>
                <div className="projects-detail__github-right">
                    {props.homePage && (
                        <a href={props.homePage} target="_blank" rel="noopener noreferrer">
                            <Icon icon={linkExternal}/>
                        </a>
                    )}
                    <a href={props.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Icon icon={githubIcon}/>
                    </a>
                </div>
            </div>
        </div>
    )
};
export {GithubProjectDetail};