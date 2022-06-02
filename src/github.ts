import { issue } from './index';
import { GITHUB_PAT, GITHUB_OWNER, GITHUB_REPO } from './app_configuration';
import { Octokit, RestEndpointMethodTypes } from '@octokit/rest';

export type GHCreateIssueResponse = RestEndpointMethodTypes['issues']['create']['response'];

const octokit = new Octokit({
    auth: GITHUB_PAT,
    userAgent: 'mitchinson.dev ghIssuesCreator',
});

export const createGHIssue = async (issue: issue, defaultIssueBody: string) => {
    console.log(`📝 - Creating issue: ${issue.title}`);
    return octokit.rest.issues
        .create({
            owner: GITHUB_OWNER,
            repo: GITHUB_REPO,
            title: issue.title,
            body: defaultIssueBody,
        })
        .then((res) => {
            console.log(`📝 - Created issue: ${res.data.title}`);
            return res.data.number;
        });
};
