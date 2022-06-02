import { issues, defaultIssueBody } from './issues_to_create.json';

const createGHIssue = async (issue: typeof issues[0]) => {
    console.log('📝 Creating issue:', issue.title);
};

const assignZHEpic = async () => {
    Promise.resolve();
};

// import json file
issues.forEach((issue) => {
    createGHIssue(issue)
        .then(assignZHEpic)
        .then(() => {
            console.log(`✅ ${issue.title} Successfully Created`);
        })
        .catch((e) => {
            console.error('❌ Error creating issue:', e);
        });
});
