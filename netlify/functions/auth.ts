import { Handler, HandlerEvent, HandlerContext } from '@netlify/functions';
import fetch from 'node-fetch';

const clientId = 1254574731831152;
const redirectUri = 'https://oddwoods.netlify.app/auth';
const API_ENDPOINT = `https://api.instagram.com/oauth/access_token`;

const handler: Handler = async (
  event: HandlerEvent,
  context: HandlerContext
) => {
  const { code } = JSON.parse(event.body || "{ code: '' }");

  const body = {
    client_id: clientId,
    client_secret: '7f42852a3ea0d244d9109d60c0c381b2',
    code,
    grant_type: 'authorization_code',
    redirect_uri: redirectUri,
  };

  const params = new URLSearchParams();
  params.append('client_id', `${body.client_id}`);
  params.append('client_secret', body.client_secret);
  params.append('code', body.code);
  params.append('grant_type', body.grant_type);
  params.append('redirect_uri', body.redirect_uri);

  const response = await fetch(API_ENDPOINT, {
    method: 'POST',
    body: params,
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
      accept: 'application/json',
    },
  });

  if (response.ok) {
    const responseBody = (await response.json()) as {
      access_token: string;
      user_id: string;
    };

    return {
      statusCode: 200,
      body: JSON.stringify({
        data: {
          accessToken: responseBody.access_token,
          userId: responseBody.user_id,
          code,
        },
      }),
    };
  }

  return {
    statusCode: response.status || 500,
    statusText: response.statusText,
    body: JSON.stringify({
      error: response.statusText,
      request: body,
    }),
  };
};

export { handler };
