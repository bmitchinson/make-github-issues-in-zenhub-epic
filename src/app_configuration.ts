import 'dotenv/config';
import * as env from 'env-var';

export const GITHUB_PAT = env.get('GITHUB_PAT').required().asString();
export const GITHUB_OWNER = env.get('GITHUB_OWNER').required().asString();
export const GITHUB_REPO = env.get('GITHUB_REPO').required().asString();

export const ZENHUB_REPO_ID = env
    .get('ZENHUB_REPO_ID')
    .required()
    .asIntPositive();
export const ZENHUB_EPIC_ID = env
    .get('ZENHUB_EPIC_ID')
    .required()
    .asIntPositive();
export const ZENHUB_TOKEN = env.get('ZENHUB_TOKEN').required().asString();
