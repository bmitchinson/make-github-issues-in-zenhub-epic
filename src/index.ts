import { issues, defaultIssueBody } from './issues_to_create.json';
import { createGHIssue } from './github';
import { assignIssuesToEpic } from './zenhub';

export type issue = typeof issues[0];

// todo: check gh credentials against desired repo
// todo: check zenhub credentials against desired workspace

// todo: finish validateZHEpicExists
// validateZHEpicExists(zenhubEpicID).then(() => {
// todo: a blocking describe and confirm changes step
// todo: import md file as default body

const createIssuesQueue = [] as Promise<number>[];
const createAllIssues = async () => Promise.all(createIssuesQueue);
issues.forEach((issue) => {
    createIssuesQueue.push(createGHIssue(issue, defaultIssueBody));
});

createAllIssues()
    .then(assignIssuesToEpic)
    .then(() => console.log('✅ - Issues created + assigned correctly'))
    .catch((e) => console.error('❌', e));
