import { issue } from './index';

export const assignZHEpic = async (issue: issue): Promise<void> => {
    // todo: use zh to assign epic
    console.log(`🏔  - Assigning ${issue.title}`);
    Promise.resolve().then(() => {
        console.log(`🏔  - ${issue.title} assigned to epic`);
    });
};

export const validateZHEpicExists = async (issueID: number): Promise<void> => {
    Promise.resolve().then(() => {
        // todo: use zh to check epic
        console.log(`🏔  - Epic ID: ${issueID} exists`);
    });
};
