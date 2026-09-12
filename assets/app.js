// Smart Journey Kids - Main App Script
const WHATSAPP_NUMBER = "94785011108"; // Phone: 0785011108

// WhatsApp Order Handler
function orderWhatsApp(itemTitle, itemPrice, itemSKU) {
  const message = `*--- SMART JOURNEY KIDS NEW ORDER ---*\n\n` +
                  `📦 *Item:* ${itemTitle}\n` +
                  `🏷️ *SKU:* ${itemSKU}\n` +
                  `💰 *Price:* LKR ${itemPrice}/=\n\n` +
                  `Hello! I would like to order this learning kit. Please let me know the payment and delivery details. Thank you!`;
  
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
}

// Current Year in Footer
document.addEventListener('DOMContentLoaded', () => {
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Mobile Menu Toggle
  const menuBtn = document.querySelector('.menu');
  const nav = document.querySelector('.nav');
  if (menuBtn && nav) {
    menuBtn.addEventListener('click', () => {
      nav.classList.toggle('open');
    });
  }
});