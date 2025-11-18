// Send message function
function sendMessage() {
  const input = document.getElementById("userInput");
  const message = input.value.trim();

  if (message === "") return;

  // Add user message to chat
  addMessage(message, "user");

  // Clear input
  input.value = "";

  // Show typing indicator
  showTyping();

  // Send message to Flask backend
  fetch("https://<RENDER-BACKEND-URL>/get_response", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    mode: "cors",
    body: "msg=" + encodeURIComponent(message),
  })
    .then((response) => response.json())
    .then((data) => {
      hideTyping();
      addMessage(data.response, "bot");
    })
    .catch((error) => {
      hideTyping();
      addMessage(
        "Sorry, I'm having trouble connecting. Please try again.",
        "bot"
      );
      console.error("Error:", error);
    });
}

// Add message to chat
function addMessage(text, sender) {
  const chatContainer = document.getElementById("chatContainer");
  const messageDiv = document.createElement("div");
  messageDiv.className = `${sender}-message message`;

  // Convert markdown-like formatting to HTML
  let formattedText = text
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
    .replace(/\n/g, "<br>")
    .replace(/• /g, "• ");

  messageDiv.innerHTML = `<div class="bubble">${formattedText}</div>`;
  chatContainer.appendChild(messageDiv);

  // Scroll to bottom
  chatContainer.scrollTop = chatContainer.scrollHeight;
}

// Send suggested question
function sendSuggestion(text) {
  document.getElementById("userInput").value = text;
  sendMessage();
}

// Show typing indicator
function showTyping() {
  document.getElementById("typingIndicator").style.display = "block";
}

// Hide typing indicator
function hideTyping() {
  document.getElementById("typingIndicator").style.display = "none";
}

// Initialize
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("userInput").focus();
});
