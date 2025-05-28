// rutdoc-embed.js

// Inject OpenAI Chat Widget with secure config
window.rutdocConfig = {
  assistantId: import.meta.env.PUBLIC_RUTDOC_ASSISTANT_ID,
  apiKey: import.meta.env.PUBLIC_RUTDOC_API_KEY,
  autoOpenMessage: "Got scent questions? Ask RutDoc™.",
  position: "bottom-right",
  theme: {
    primaryColor: "#1a1a1a",
    accentColor: "#e63946",
    title: "RutDoc™"
  },
  welcomeMessage: "Got scent questions? I'm RutDoc™.",
  avatarUrl: "https://rutdoc-vercel.vercel.app/rutdoc-avatar.png"
};

// Load OpenAI Widget Script
document.addEventListener("DOMContentLoaded", function () {
  const script = document.createElement("script");
  script.src = "https://cdn.jsdelivr.net/npm/@openai/chat-widget@latest";
  script.defer = true;
  document.body.appendChild(script);
});
