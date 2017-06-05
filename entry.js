import welcome from './welcome';

const requestPackageJson = () => {
  return fetch('/package.json')
    .then(response => {
      return response.json();
    });
}
const getPackageJson = async () => {
  const result = await requestPackageJson();
  console.log(result);
};
console.log(getPackageJson()); 

welcome(`World ${1+2}`);