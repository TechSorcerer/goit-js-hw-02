function formatMessage(message, maxLength) {
  if (message.length <= maxLength) {
    console.log(message);
  } else {
    console.log(message.slice(0, maxLength) + '...');
  }
}

formatMessage('Curabitur ligula sapien', 16); // "Curabitur ligula..."
formatMessage('Curabitur ligula sapien', 23); // "Curabitur ligula sapien"
formatMessage('Vestibulum facilisis purus nec', 20); // "Vestibulum facilisis..."
formatMessage('Vestibulum facilisis purus nec', 30); // "Vestibulum facilisis purus nec"
formatMessage('Nunc sed turpis a felis in nunc fringilla', 15); // "Nunc sed turpis..."
formatMessage('Nunc sed turpis a felis in nunc fringilla', 41); // "Nunc sed turpis a felis in nunc fringilla"
