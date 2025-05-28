// vite.config.js
export default {
  define: {
    'import.meta.env.PUBLIC_RUTDOC_ASSISTANT_ID': JSON.stringify(process.env.RUTDOC_ASSISTANT_ID),
    'import.meta.env.PUBLIC_RUTDOC_API_KEY': JSON.stringify(process.env.RUTDOC_API_KEY),
  }
};
