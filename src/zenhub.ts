import { GHCreateIssueResponse } from './github';

export const assignZHEpic = async ({
    data: { title, id },
}: GHCreateIssueResponse): Promise<void> => {
    // todo: use zh to assign epic
    console.log(`🏔  - Assigning ${title}`);
    Promise.resolve().then(() => {
        console.log(`🏔  - ${title} assigned to epic`);
    });
};

export const validateZHEpicExists = async (epicID: number): Promise<void> => {
    Promise.resolve().then(() => {
        // todo: use zh to check epic
        console.log(`🏔  - Epic ID: ${epicID} exists`);
    });
};
