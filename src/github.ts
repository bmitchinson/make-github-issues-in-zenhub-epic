import { issue } from './index';
import { repo, owner } from './issues_to_create.json';
import { GITHUB_PAT } from './app_configuration';
import { Octokit, RestEndpointMethodTypes } from '@octokit/rest';

export type GHCreateIssueResponse = RestEndpointMethodTypes['issues']['create']['response'];

const octokit = new Octokit({
    auth: GITHUB_PAT,
    userAgent: 'mitchinson.dev ghIssuesCreator',
});

export const createGHIssue = async (
    issue: issue,
    defaultIssueBody: string,
): Promise<GHCreateIssueResponse> => {
    console.log(`📝 - Creating issue: ${issue.title}`);
    return octokit.rest.issues
        .create({
            repo,
            owner,
            title: issue.title,
            body: defaultIssueBody,
        })
        .then((res) => {
            console.log(`📝 - Created issue: ${res.data.title}`);
            return res;
        });
};
