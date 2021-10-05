import { ref } from 'vue'
import axios from 'axios'

const githubData = ref([])
const apiUrl = ref('')
const userName = ref('')

const searchUser = async () => {
  apiUrl.value = 'https://api.github.com/users/'
  const finalUrl = apiUrl.value + userName.value
  axios.get(finalUrl)
  .then(function (response) {
    // handle success
    githubData.value = response.data
    console.log(githubData);
    console.log(finalUrl)
  })
  .catch(function (error) {
    // handle error
    console.log(error);
    console.log(finalUrl)
  })
}

const useSearch = () => {
  return {
    searchUser,
    githubData,
    userName
  }
}

export default useSearch