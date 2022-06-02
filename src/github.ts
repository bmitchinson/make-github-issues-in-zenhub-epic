import { issue } from './index';

export const createGHIssue = async (
    issue: issue,
    defaultIssueBody: string,
): Promise<issue> => {
    console.log(`📝 - Creating issue: ${issue.title}`);
    // todo: actually use github api
    return Promise.resolve().then(() => {
        console.log(`📝 - Created issue: ${issue.title}`);
        // todo: return what zh needs to assign epic
        return issue;
    });
};
