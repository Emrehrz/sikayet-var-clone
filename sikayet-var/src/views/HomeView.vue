<template>
  <main class="bg-gradient-to-tl from-green-700 to bg-blue-400 h-screen overflow-y-auto">

    <nav class="inline-flex w-full h-12 md:h-20 shadow-lg mb-6">

      <h1 class=" text-emerald-900 m-4 text-sm md:text-2xl font-extrabold hidden md:flex "><router-link to="/">Şikayet
          Var
        </router-link></h1>

      <ul
        class="md:my-auto mt-2  w-full md:w-fit h-fit ml-2 md:ml-auto text-xs md:text-lg font-semibold inline-flex gap-7 md:gap-14">

        <li class="flex md:hidden"><router-link to="/"> <svg width="28" data-name="Layer 1" viewBox="0 0 512 512">
              <path
                d="M44.5,238H84V462.471a7.961,7.961,0,0,0,8.111,7.764L415.8,473h.074a7.941,7.941,0,0,0,5.695-2.081A7.536,7.536,0,0,0,424,465.471V238h43.5a8.041,8.041,0,0,0,5.245-14.1L261.519,40.5a8,8,0,0,0-10.482-.011L39.263,223.879A8.05,8.05,0,0,0,44.5,238ZM302,456.417l-90-.841V354h90Zm106,.979-90-.831V345.882A7.724,7.724,0,0,0,310.209,338H203.514c-4.418,0-7.514,3.463-7.514,7.882V455.427l-96-.882V238H408ZM256.267,57.194,446.084,222H65.958Z" />
            </svg> <span class="bg-blue-400 text-green-500">/</span> </router-link></li>

        <li class="flex md:hidden"><router-link to="/profile"><svg width="30" height="30" viewBox="0 0 101 101">
              <path
                d="M50.4 54.5c10.1 0 18.2-8.2 18.2-18.2S60.5 18 50.4 18s-18.2 8.2-18.2 18.2 8.1 18.3 18.2 18.3zm0-31.7c7.4 0 13.4 6 13.4 13.4s-6 13.4-13.4 13.4S37 43.7 37 36.3s6-13.5 13.4-13.5zM18.8 83h63.4c1.3 0 2.4-1.1 2.4-2.4 0-12.6-10.3-22.9-22.9-22.9H39.3c-12.6 0-22.9 10.3-22.9 22.9 0 1.3 1.1 2.4 2.4 2.4zm20.5-20.5h22.4c9.2 0 16.7 6.8 17.9 15.7H21.4c1.2-8.9 8.7-15.7 17.9-15.7z" />
            </svg></router-link></li>

        <li class="flex md:hidden"><router-link to="/addComp"><svg width="28" height="28" viewBox="0 0 6.615 6.615">
              <path
                d="M5.15.53H5.14a.132.132 0 0 0-.08.037L.826 4.801a.132.132 0 0 0-.035.061L.527 5.921a.132.132 0 0 0 .127.164h5.293c.192.017.192-.281 0-.264H1.731c.031-.002.055-.028.076-.039L6.04 1.55a.132.132 0 0 0 0-.187L5.246.567A.132.132 0 0 0 5.15.529zm.002.319.608.607-4.113 4.113-.811.203.203-.81Z"
                color="#000" font-family="sans-serif" font-weight="400" overflow="visible"
                paint-order="markers fill stroke"
                style="line-height:normal;font-variant-ligatures:normal;font-variant-position:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-alternates:normal;font-feature-settings:normal;text-indent:0;text-align:start;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000;text-transform:none;text-orientation:mixed;shape-padding:0;isolation:auto;mix-blend-mode:normal" />
            </svg></router-link></li>

        <li
          class="bg-transparent hover:text-white cursor-pointer  px-4 rounded-md duration-200 transition hidden md:flex">
          <router-link to="/"> Ana
            sayfa</router-link>
        </li>
        <li
          class="bg-transparent hover:text-white cursor-pointer  px-4 rounded-md duration-200 transition hidden md:flex">
          <router-link to="/profile">Profilim</router-link>
        </li>
        <li
          class="bg-transparent hover:text-white cursor-pointer  px-4 rounded-md duration-200 transition hidden md:flex">
          <router-link to="/addComp">Şikayet Yaz</router-link>
        </li>

        <div class="inline-flex mt-2 rounded-md h-6 mr-2 bg-white border-2 border-gray-600">
          <input v-model="searchPayload" class="rounded-lg" id="search" type="search"
            placeholder="Firma, şikayet başlığı...">
          <button class="px-3 rounded-md"><svg width="15" id="Layer_1" x="0" y="0" version="1.1" viewBox="0 0 29 29"
              xml:space="preserve">
              <circle cx="11.854" cy="11.854" r="9" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="2" />
              <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"
                stroke-width="2" d="M18.451 18.451l7.695 7.695" />
            </svg></button>

        </div>
      </ul>
    </nav>

    <div
      class="inline-flex ml-8 w-10/12 md:w-8/12 md:h-56 border-2 md:ml-52 bg-gradient-to-tl bg-blue-400  from-green-700 to font-semibold border-white mb-6 rounded-lg gap-4 shadow-lg"
      v-for="sikayet in filteredItems" :key="sikayet.code">

      <div class="w-3/12 mx-auto ml-2 md:ml-2 ">
        <img class="w-36 rounded-lg ml-0 m-2" src="../assets/1.jpg"  >
        <h2 class="">{{ sikayet.name }}</h2>
        <h2 class="">{{ sikayet.date }}</h2>
      </div>

      <div class="bg-white max-h-56 inline-flex flex-col w-auto my-auto h-64 rounded-lg opacity-90">
        <h1 class="mt-4 ml-4 md:mx-auto font-bold md:text-xl">{{ sikayet.title }}</h1>
        <p class=" w-8/12 max-h-52 mt-4 mx-auto md:overflow-hidden overflow-y-scroll  text-black ">Lorem ipsum dolor
          sit, amet consectetur adipisicing
          elit. Doloremque voluptas accusamus, porro beatae
          recusandae architecto sit suscipit, laudantium commodi praesentium odio enim placeat voluptate assumenda
          mollitia inventore nihil, impedit magni!</p>  
        <div class="inline-flex md:gap-2 ml-8 mr-auto mt-4 md:mt-auto mb-2 relative w-fit ">
          <div class="text-center inline-flex md:w-6 md:h-6 shadow-lg rounded-md bg-red-500">
            <i class="far fa-chart-bar "></i>
          </div>
          <h1 class="text-slate-600"> <span>Çözüm bekliyor... </span> <span class="hidden md:inline-block">/</span>
            Turkcell</h1>
        </div>
      </div>
    </div>


  </main>

</template>

<script>

import * as data from "./sikayetler"

export default {
  name: "HomeView",
  components: {},
  data: function () {
    return {
      filteredItems: [],
      photos: [],
      searchPayload: '',
    }
     
  },
  watch: {
    searchPayload: function () {
      this.filteredItems = data.sikayetler.filter((sikayet) => sikayet.title.toLowerCase().includes(this.searchPayload.toLowerCase()),
      )
    },
  },
  created: function () {
    this.filteredItems = data.sikayetler
    this.photos = data.sikayetler.photo
  },
};
</script>
