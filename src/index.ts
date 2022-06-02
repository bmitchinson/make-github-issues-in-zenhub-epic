import { issues, defaultIssueBody } from './issues_to_create.json';
type issue = typeof issues[0];

////////////////////////////////////////////
// refactor: move to file
const createGHIssue = async (issue: issue): Promise<issue> => {
    console.log(`📝 - Creating issue: ${issue.title}`);
    // todo: actually use github api
    return Promise.resolve().then(() => {
        console.log(`📝 - Created issue: ${issue.title}`);
        // todo: return what zh needs to assign epic
        return issue;
    });
};

////////////////////////////////////////////
// refactor: move to file
const assignZHEpic = async (issue: issue): Promise<void> => {
    // todo: use zh to assign epic
    console.log(`🏔  - Assigning ${issue.title}`);
    Promise.resolve().then(() => {
        console.log(`🏔  - ${issue.title} assigned to epic`);
    });
};

////////////////////////////////////////////
// todo: verify zenhub epic exists before creating issues to assign to it
// refactor: move to file

////////////////////////////////////////////
// import json file
issues.forEach((issue) => {
    createGHIssue(issue)
        .then(assignZHEpic)
        .then(() => {
            console.log(`✅ - ${issue.title} Successfully Created + Assigned`);
        })
        .catch((e) => {
            console.error('❌ - Error creating issue:', e);
        });
});
