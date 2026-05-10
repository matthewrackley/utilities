
import axios from 'axios';


const key = '4d40fa88f0c628fe57dd151572239948';
const site = "https://leak-lookup.com/api/search";
const queries = ["email_address", "username", "ipaddress", "phone", "domain", "password", "fullname"];
const args = process.argv.slice(2);
function handleArgs(...params: string[]) {
  const handledArgs = {
    type: '',
    query: ''
  }
  if (queries.includes(params[0])) {
    handledArgs.type = params[0];
    handledArgs.query = params[1];
  }
  return handledArgs;
}
(async function accessLeak(key = '4d40fa88f0c628fe57dd151572239948') {
  const data = { type: handleArgs(...args).type, query: handleArgs(...args).query, key } as FullLeakLookup;
  await axios.post(site, data, { data, headers: { ...data } }).then(response => {
    console.log('DATA:', response.data);
  }).catch(error => {
    console.error('ERROR:', error);
  })
})()
