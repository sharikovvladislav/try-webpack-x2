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
async function main () {
  console.log(await getPackageJson()); 
  welcome(`World ${2**4}`);
}
main();
 