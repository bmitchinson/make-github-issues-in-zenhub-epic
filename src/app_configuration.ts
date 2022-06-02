import 'dotenv/config';
import * as env from 'env-var';

export const GITHUB_PAT = env.get('GITHUB_PAT').required().asString();
