<template>
    <main class="bg-gradient-to-tl from-green-700 to bg-green-400 h-screen overflow-y-auto">

        <nav class="inline-flex w-full h-12 md:h-20 shadow-lg mb-6">

            <h1 class=" text-emerald-900 m-4 text-sm md:text-2xl font-extrabold hidden md:flex "><a
                    href="http://localhost:8080/">Şikayet Var</a></h1>

            <ul
                class="my-auto w-full md:w-fit h-fit ml-auto text-xs md:text-lg font-semibold inline-flex gap-4 md:gap-14">

                <li class="flex md:hidden"> <a href="http://localhost:8080/">Ana ikon</a></li>
                <li class="flex md:hidden"><a href="http://localhost:8080/profile"> Profil ikon</a></li>
                <li class="flex md:hidden"><a href="http://localhost:8080/addComp">Ekle ikon</a></li>

                <li
                    class="bg-transparent hover:text-white cursor-pointer  px-4 rounded-md duration-200 transition hidden md:flex">
                    <a href="http://localhost:8080/">Ana
                        sayfa</a>
                </li>
                <li
                    class="bg-transparent hover:text-white cursor-pointer  px-4 rounded-md duration-200 transition hidden md:flex">
                    <a href="http://localhost:8080/profile">Profilim</a>
                </li>
                <li
                    class="bg-transparent hover:text-white cursor-pointer  px-4 rounded-md duration-200 transition hidden md:flex">
                    <a href="http://localhost:8080/addComp">Şikayet Ekle</a>
                </li>

                <div class="inline-flex mt-2 rounded-md h-6">
                    <input class="rounded-lg" type="text" placeholder="Firma, şikayet başlığı...">
                    <button class="bg-gray-400 px-3 rounded-md">Ara</button>

                </div>
            </ul>

        </nav>

        <div
            class="inline-flex flex-wrap  gap-8 md:gap-24 border-2 border-green-200 shadow-lg bg-white w-full rounded-lg text-slate-500 text-lg md:text-2xl font-bold p-4 mb-8">

            <div class="inline-flex md:flex-col gap-2 ">
                <img src="../assets/teamsPP.jpg" class="w-32 md:w-48 rounded-md">
                <div class="w-fit inline-flex flex-col gap-2 text-base ">

                    <h1 class="mx-auto">Kişisel bilgiler
                        <hr class=" md:flex h-1 mt-2 mb-2 bg-green-500 opacity-40">
                    </h1>
                    <h1>Emre HORUZ</h1>
                    <h1>Eposta: horuzemre007@gmail.com</h1>

                </div>
            </div>

            <div class="inline-flex flex-wrap gap-8 md:gap-24 mt-2 mx-auto text-center w-fit h-fit">
                <h1>Toplam şikayet sayısı:
                    <hr class="hidden md:flex h-1 mt-2 mb-2 bg-green-500 opacity-40"> <span
                        class="md:text-6xl">123</span>
                </h1>
                <h1>Çözülen şikayet sayısı:
                    <hr class="hidden md:flex h-1 mt-2 mb-2 bg-green-500 opacity-40"> <span
                        class="md:text-6xl">123</span>
                </h1>

                <h1>Bekleyen şikayet sayısı:
                    <hr class="hidden md:flex h-1 mt-2 mb-2 bg-green-500 opacity-40"> <span
                        class="md:text-6xl">123</span>
                </h1>
                <div class="inline-flex mt-4 md:flex-col gap-12">
                    <button @click="compVis = !compVis"
                        class="bg-slate-200 h-fit p-2 rounded-lg hover:bg-green-300 duration-200 ease-linear">Şikayetlerimi
                        göster</button>
                    <a class="bg-slate-200 h-fit p-2 rounded-lg hover:bg-green-300 duration-200 ease-linear"
                        href="http://localhost:8080/addComp">Şikayet yaz</a>
                </div>
            </div>
        </div>

        <div v-if="compVis" class="">
            <div
                class="inline-flex ml-8 w-10/12 md:w-8/12 md:h-56 border-2 md:ml-52  bg-green-500 font-semibold border-white mb-6 rounded-lg gap-4 shadow-lg ">

                <div class="w-3/12 mx-auto md:ml-2">
                    <img class="w-36 rounded-lg m-2" src="../assets/teamsPP.jpg" alt="">
                    <h2 class="">Emre HORUZ</h2>
                    <h2 class="">11/12/2022</h2>
                </div>

                <div class="bg-white max-h-56 inline-flex flex-col w-auto my-auto h-64 rounded-lg opacity-90">
                    <h1 class="mt-4 mx-auto font-bold md:text-xl">Şikayetçiyim Lorem ipsum dolor sit amet.</h1>
                    <p class=" w-8/12 max-h-52 mt-4 mx-auto md:overflow-hidden overflow-y-scroll  text-black ">Lorem
                        ipsum
                        dolor
                        sit, amet consectetur adipisicing
                        elit. Doloremque voluptas accusamus, porro beatae
                        recusandae architecto sit suscipit, laudantium commodi praesentium odio enim placeat voluptate
                        assumenda
                        mollitia inventore nihil, impedit magni!</p>
                    <div class="inline-flex md:gap-2 ml-8 mr-auto mt-4 md:mt-auto mb-2 relative w-fit ">
                        <div class="text-center inline-flex w-6 h-6 shadow-lg rounded-md bg-red-500">
                            <i class="far fa-chart-bar "></i>
                        </div>
                        <h1 class="text-slate-600">Çözüm bekliyor... </h1>
                        <h1 class="text-slate-600">/ Facebook</h1>
                    </div>
                </div>
            </div>

        </div>
    </main>
</template>

<script>
import { Ref } from 'vue';

export default {
    data() {
        return {
            compVis: false,
        }
    }

}
</script>