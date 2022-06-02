import fetch from 'node-fetch';

import {
    ZENHUB_TOKEN,
    ZENHUB_REPO_ID,
    ZENHUB_EPIC_ID,
} from './app_configuration';

const ZenHubURL = 'https://api.zenhub.com';
const requestEndpoint = `${ZenHubURL}/p1/repositories/${ZENHUB_REPO_ID}/epics/${ZENHUB_EPIC_ID}/update_issues`;
const reqHeaders = {
    'X-Authentication-Token': ZENHUB_TOKEN,
    'Content-Type': 'application/json',
};

export const assignIssuesToEpic = async (issueIDs: number[]) => {
    const issuesToAdd = issueIDs.map((id) => ({
        repo_id: ZENHUB_REPO_ID,
        issue_number: id,
    }));
    const body = JSON.stringify({ add_issues: issuesToAdd, remove_issues: [] });

    console.log(`🏔  - Assigning issues to epic`);
    return fetch(requestEndpoint, {
        method: 'post',
        headers: reqHeaders,
        body,
    }).then((res) => {
        if (res.status !== 200) {
            console.error(res);
            throw Error('Problem assigning to epic with ZenHub API');
        }
    });
};

// export const validateZHEpicExists = async (epicID: number): Promise<void> => {
//     Promise.resolve().then(() => {
//         // todo: use zh to check epic
//         console.log(`🏔  - Epic ID: ${epicID} exists`);
//     });
// };
