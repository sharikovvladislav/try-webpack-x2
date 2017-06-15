import welcome from '../welcome';

const requestPackageJson = () => {
  return fetch('main.bundle.js');
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
 