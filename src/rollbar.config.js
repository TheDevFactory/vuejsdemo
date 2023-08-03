// rollbar.config.js
export default {
  accessToken: '74892bde67dc43ddba7c7e13880725ef',
  captureUncaught: true,
  captureUnhandledRejections: true,
  payload: {
    environment: 'dev',
    client: {
      javascript: {
        code_version: '1.0.0',
      }
    }
  },
};