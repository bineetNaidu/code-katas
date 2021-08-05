function multipleOf3or5 (number) {
  let res = 0;

  for(let i = 0; i < number; i++){
    if( i % 3 === 0 || i % 5 === 0 ){
      res += i;
    };
  };

  return res;
};


console.log(multipleOf3or5(10));
