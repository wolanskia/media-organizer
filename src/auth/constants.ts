export const clientId = '1254574731831152';
export const redirectUri = 'https://oddwoods.netlify.app/auth';

export interface UserSession {
  code: string;
  accessToken: string;
  userId: string;
}
