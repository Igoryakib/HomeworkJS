const calculateEngravingPrice = function (message, pricePerWord) {
  const array = message.split(' ');
  const total = array.length * pricePerWord;
  return total;
};

console.log( 'Загальна ціна слів - ',
    calculateEngravingPrice(
      'Proin sociis natoque et magnis parturient montes mus',
      10,
    ),
  );

  console.log( 'Загальна ціна слів -',
    calculateEngravingPrice(
      'Proin sociis natoque et magnis parturient montes mus',
      20,
    ),
  );

  console.log( 'Загальна ціна слів -',
    calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40),
  );
  
  console.log( 'Загальна ціна слів -',
    calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20),
  );
