import {
    issues,
    defaultIssueBody,
    zenhubEpicID,
} from './issues_to_create.json';
import { createGHIssue } from './github';
import { assignZHEpic, validateZHEpicExists } from './zenhub';

export type issue = typeof issues[0];

validateZHEpicExists(zenhubEpicID).then(() => {
    // todo: a blocking describe and confirm changes step
    //   body abbreviate since they'll be lon...
    issues.forEach((issue) => {
        createGHIssue(issue, defaultIssueBody)
            .then(assignZHEpic)
            .then(() => {
                console.log(
                    `✅ - ${issue.title} Successfully Created + Assigned`,
                );
            })
            .catch((e) => {
                console.error('❌ - Error creating issue:', e);
            });
    });
});
