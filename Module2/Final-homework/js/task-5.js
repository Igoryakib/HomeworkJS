const checkForSpam = function (message) {
  const string = message.toLowerCase();
  const word1 = "spam";
  const word2 = "sale";

  if (string.includes(word1) || string.includes(word2)) {

    console.log("Це спам -", string);
    return; 
  }

   console.log('Це не спам - ', string)
};

checkForSpam('Latest technology news');

checkForSpam('JavaScript weekly newsletter');

checkForSpam('Get best sale offers now!');

checkForSpam('[SPAM] How to earn fast money?');
