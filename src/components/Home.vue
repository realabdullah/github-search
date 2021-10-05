<template>
  <div class="form">
    <h1>GitHub Search</h1>
    <form @submit.prevent="searchIt">
      <input type="text" placeholder="GitHub Username" v-model="userName">
      <button>Search</button>
    </form>

    <div class="count">
      <h2>All Results: {{ users.length }}</h2>
    </div>

    <div class="before">
      <div class="info" v-for="user in users">
        <div class="first">
          <img :src="user.avatar_url" alt="avatar_url">
          <div class="first-one">
            <h3>{{ user.name }}</h3>
            <p class="login">{{ user.login }}</p>
            <p>{{ user.created_at }}</p>
          </div>
        </div>
        <p class="bio">{{ user.bio }}</p>
        <div class="second">
          <p>Repos: <span>{{ user.public_repos }}</span></p>
          <p>Followers: <span>{{ user.followers }}</span></p>
          <p>Following: <span>{{ user.following }}</span></p>
        </div>
        <div class="third">
          <p>Location: <span>{{ user.location }}</span></p>
          <p>Twitter: <span>{{ user.twitter_username }}</span></p>
          <p>Blog: <span>{{ user.blog }}</span></p>
        </div>
      </div>
    </div>

    <div class="info">
      <div class="first">
        <img :src="githubData.avatar_url" alt="avatar_url">
        <div class="first-one">
          <h3>{{ githubData.name }}</h3>
          <p class="login">{{ githubData.login }}</p>
          <p>{{ githubData.created_at }}</p>
        </div>
      </div>
      <p class="bio">{{ githubData.bio }}</p>
      <div class="second">
        <p>Repos: <span>{{ githubData.public_repos }}</span></p>
        <p>Followers: <span>{{ githubData.followers }}</span></p>
        <p>Following: <span>{{ githubData.following }}</span></p>
      </div>
      <div class="third">
        <p>Location: <span>{{ githubData.location }}</span></p>
        <p>Twitter: <span>{{ githubData.twitter_username }}</span></p>
        <p>Blog: <span>{{ githubData.blog }}</span></p>
      </div>
    </div>
  </div>
</template>

<script>
import { onBeforeMount, ref } from 'vue'
import axios from 'axios'
import useSearch from '../composables/searchUser'

export default {
  setup() {
    const { userName, searchUser, githubData } = useSearch()
    const users = ref([])

    const searchIt = async () => {
      await searchUser()
    }

    onBeforeMount(() => {
      axios.get('https://api.github.com/users?per_page=200&page=1')
      .then(function (response) {
        // handle success
        users.value = response.data
        console.log(beforeUsers)
      })
      .catch(function (error) {
        // handle error
        console.log(error)
      })
    })

    return {
      userName,
      searchIt,
      githubData,
      users
    }
  }
}
</script>

<style>
.count {
  margin-top: 40px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
}

.before {
  margin-top: 10px;
  display: flex;
  align-items: stretch;
  flex-wrap: wrap;
  justify-content: center;
}

.before .info {
  margin: 20px;
}

.form {
  padding: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

form {
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px;
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  background-color: rgba(17, 25, 40, 0.75);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.125);
  box-shadow:
    2.8px 2.8px 2.2px rgba(0, 0, 0, 0.02),
    6.7px 6.7px 5.3px rgba(0, 0, 0, 0.028),
    12.5px 12.5px 10px rgba(0, 0, 0, 0.035),
    22.3px 22.3px 17.9px rgba(0, 0, 0, 0.042),
    41.8px 41.8px 33.4px rgba(0, 0, 0, 0.05),
    100px 100px 80px rgba(0, 0, 0, 0.07)
  ;
}

form input {
  padding: 20px;
  border: none;
  background: transparent;
  border-bottom: 2px solid #fff;
}

form input:active {
  border: none;
}

form input:focus {
  border: none;
}

button {
  margin-left: 20px;
 padding: 1.3em 3em;
 font-size: 12px;
 text-transform: uppercase;
 letter-spacing: 2.5px;
 font-weight: 500;
 color: #000;
 background-color: #fff;
 border: none;
 border-radius: 45px;
 box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
 transition: all 0.3s ease 0s;
 cursor: pointer;
 outline: none;
}

button:hover {
 background-color: #9013fe;
 box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
 color: #fff;
 transform: translateY(-7px);
}

button:active {
 transform: translateY(-1px);
}

.info {
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 50px;
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  background-color: rgba(17, 25, 40, 0.75);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.125);
  box-shadow:
    2.8px 2.8px 2.2px rgba(0, 0, 0, 0.02),
    6.7px 6.7px 5.3px rgba(0, 0, 0, 0.028),
    12.5px 12.5px 10px rgba(0, 0, 0, 0.035),
    22.3px 22.3px 17.9px rgba(0, 0, 0, 0.042),
    41.8px 41.8px 33.4px rgba(0, 0, 0, 0.05),
    100px 100px 80px rgba(0, 0, 0, 0.07)
  ;
}

.info .first {
  display: flex;
  align-items: center;
  justify-content: center;
}

.info .first img {
  width: 100px;
  border-radius: 50px;
  margin-right: 30px;
}

.first-one {
  text-align: left;
}

.first-one .login {
  color: #9013fe;
}

.first-one p {
  margin-top: 10px;
}

.bio {
  padding: 20px 10px;
}

.second {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 20px;
  border-radius: 20px;
  background-color: #7815cf;
}

.second p {
  color: #e0dcdc;
  padding: 10px;
}

.second p span {
  color: #fff;
}

.third {
  margin-top: 20px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: column;
}

.third p {
  color: #e0dcdc;
  padding: 10px;
}

.third p span {
  color: #fff;
}

@media(max-width: 650px) {
  .before {
    flex-direction: column;
    flex-wrap: no-wrap;
    align-items: center;
    justify-content: center;
  }

  .form {
    padding: 20px;
  }
}
</style>