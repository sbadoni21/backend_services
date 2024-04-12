const { google } = require('googleapis');

class Token {
  static async getToken() {
    try {
      const token = {
        type: 'service_account',
      project_id: process.env.GOOGLE_PROJECT_ID,
      private_key_id: process.env.GOOGLE_PRIVATE_KEY_ID,
      private_key: process.env.GOOGLE_PRIVATE_KEY,
      client_email: process.env.GOOGLE_CLIENT_EMAIL,
      client_id: process.env.GOOGLE_CLIENT_ID,
      token_uri:  process.env.TOKEN_URI,
      auth_uri: process.env.AUTH_URI,
      auth_provider_x509_cert_url: process.env.AUTH_PROVIDER_X509_CERT_URL,
      client_x509_cert_url: process.env.CLIENT_X509_CERT_URL,
      universe_domain: process.env.UNIVERSAL_DOMAIN
      };

      const { client_email, private_key } = token;
      const auth = new google.auth.GoogleAuth({
        credentials: {
          client_email,
          private_key
        },
        scopes: ['https://www.googleapis.com/auth/firebase.messaging']
      });

      const accessToken = await auth.getAccessToken();
      return accessToken.token;
    } catch (error) {
      throw new Error(`Failed to get access token: ${error.message}`);
    }
  }
}

module.exports = Token;
