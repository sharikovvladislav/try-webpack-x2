import welcome from './welcome';

const getter = async () => {
  const result = await fetch('http://google.com');
  console.log(result);
  return result;
};

console.log(getter()); 

welcome(`World ${1+2}`);