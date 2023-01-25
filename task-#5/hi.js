async function sendMessage(chatId, message) {
  const token = '5983082868:AAE6s5wVZuRN4HzBZeXcAVrhpUtW9dYn5tc';
  const url = `https://api.telegram.org/bot${token}/sendMessage`;
  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ chat_id: chatId, text: message })
  };
  
  const response = await fetch(url, options);
  const json = await response.json();
  
  if (!json.ok) {
    throw new Error(json.description);
  }
}


sendMessage(CHAT_ID, 'HIIII!!!!!');
sendMessage(CHAT_ID, 'HIIII!!!!!');
sendMessage(CHAT_ID, 'HIIII!!!!!');
sendMessage(CHAT_ID, 'HIIII!!!!!');
sendMessage(CHAT_ID, 'HIIII!!!!!');
sendMessage(CHAT_ID, 'HIIII!!!!!');
sendMessage(CHAT_ID, 'HIIII!!!!!');