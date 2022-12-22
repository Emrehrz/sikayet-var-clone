<template>
  <main class="bg-gradient-to-tl from-green-700 to bg-green-400 h-screen overflow-y-auto">

    <nav class="inline-flex w-full  bg-green-300 shadow-md ">

      <h1 class=" text-emerald-900 text-sm md:text-2xl rounded-md md:p-3 font-extrabold ">Şikayet Var</h1>

      <ul class="my-auto w-fit h-fit ml-auto text-xs md:text-lg font-semibold inline-flex md:gap-14">
        <li class="bg-transparent hover:bg-green-400 cursor-pointer py-2 px-4 rounded-md duration-200 transition">Ana
          sayfa
        </li>
        <li class="bg-transparent hover:bg-green-400 cursor-pointer py-2 px-4 rounded-md duration-200 transition">
          Profilim
        </li>
        <li class="bg-transparent hover:bg-green-400 cursor-pointer py-2 px-4 rounded-md duration-200 transition">
          Şikayet
          Ekle</li>

        <div class=" rounded-md h-fit py-2 ">
          <input class="" type="text" placeholder="Firma, şikayet başlığı...">
          <button class="bg-gray-400 px-3 rounded-md">Ara</button>

        </div>
      </ul>

    </nav>

    <div
      class="inline-flex border-2 card  bg-green-500 font-semibold border-white mt-12 rounded-lg gap-4 w-10/12 shadow-lg">
      
      <div class="w-3/12 bg-white mx-auto">
        <img class="w-36 rounded-lg m-2" src="../assets/teamsPP.jpg" alt="">
        <h2 class="">Emre HORUZ</h2>
        <h2 class="">11/12/2022</h2>
      </div>

      <div class="inline-flex flex-col w-auto my-auto h-64">
        <h1 class="mt-4 mx-auto font-bold md:text-xl">Şikayetçiyim Lorem ipsum dolor sit amet.</h1>
        <p class="mt-4 mx-auto overflow-hidden w-8/12 text-center">Lorem ipsum dolor sit, amet consectetur adipisicing
          elit. Doloremque voluptas accusamus, porro beatae
          recusandae architecto sit suscipit, laudantium commodi praesentium odio enim placeat voluptate assumenda
          mollitia inventore nihil, impedit magni!</p>
      </div>

    </div>
    <div
      class="inline-flex border-2 card  bg-green-500 font-semibold border-white mt-12 rounded-lg gap-4 w-10/12 shadow-lg">
      
      <div class="w-3/12 bg-white mx-auto">
        <img class="w-36 rounded-lg m-2" src="../assets/teamsPP.jpg" alt="">
        <h2 class="">Emre HORUZ</h2>
        <h2 class="">11/12/2022</h2>
      </div>

      <div class="inline-flex flex-col w-auto my-auto h-64">
        <h1 class="mt-4 mx-auto font-bold md:text-xl">Şikayetçiyim Lorem ipsum dolor sit amet.</h1>
        <p class="mt-4 mx-auto overflow-hidden w-8/12 text-center">Lorem ipsum dolor sit, amet consectetur adipisicing
          elit. Doloremque voluptas accusamus, porro beatae
          recusandae architecto sit suscipit, laudantium commodi praesentium odio enim placeat voluptate assumenda
          mollitia inventore nihil, impedit magni!</p>
      </div>

    </div>
    <div
      class="inline-flex border-2 card  bg-green-500 font-semibold border-white mt-12 rounded-lg gap-4 w-10/12 shadow-lg">
      
      <div class="w-3/12 bg-white mx-auto">
        <img class="w-36 rounded-lg m-2" src="../assets/teamsPP.jpg" alt="">
        <h2 class="">Emre HORUZ</h2>
        <h2 class="">11/12/2022</h2>
      </div>

      <div class="inline-flex flex-col w-auto my-auto h-64">
        <h1 class="mt-4 mx-auto font-bold md:text-xl">Şikayetçiyim Lorem ipsum dolor sit amet.</h1>
        <p class="mt-4 mx-auto overflow-hidden w-8/12 text-center">Lorem ipsum dolor sit, amet consectetur adipisicing
          elit. Doloremque voluptas accusamus, porro beatae
          recusandae architecto sit suscipit, laudantium commodi praesentium odio enim placeat voluptate assumenda
          mollitia inventore nihil, impedit magni!</p>
      </div>

    </div>

  </main>

</template>

<script>
// @ is an alias to /src

export default {
  name: "HomeView",
  components: {},
};
</script>
