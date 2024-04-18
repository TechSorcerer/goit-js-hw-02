function getShippingCost(country) {
  let price;
  switch (country) {
    case 'China':
      price = 100;
      console.log(`Shipping to ${country} will cost ${price} credits`);
      break;
    case 'Chile':
      price = 250;
      console.log(`Shipping to ${country} will cost ${price} credits`);
      break;
    case 'Australia':
      price = 170;
      console.log(`Shipping to ${country} will cost ${price} credits`);
      break;
    case 'Jamaica':
      price = 120;
      console.log(`Shipping to ${country} will cost ${price} credits`);
      break;
    default:
      console.log('Sorry, there is no delivery to your country');
  }
}

getShippingCost('Australia'); // "Shipping to Australia will cost 170 credits"
getShippingCost('Germany'); // "Sorry, there is no delivery to your country"
getShippingCost('China'); // "Shipping to China will cost 100 credits"
getShippingCost('Chile'); // "Shipping to Chile will cost 250 credits"
getShippingCost('Jamaica'); // "Shipping to Jamaica will cost 120 credits"
getShippingCost('Sweden'); // "Sorry, there is no delivery to your country"
