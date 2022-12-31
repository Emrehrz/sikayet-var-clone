<template>
    <main class="bg-gradient-to-tl from-green-700 to bg-blue-400 h-screen overflow-y-auto">

        <nav class="inline-flex w-full h-12 md:h-20 shadow-lg mb-6">

            <h1 class=" text-emerald-900 m-4 text-md md:text-2xl font-extrabold "><router-link
                    to="/staff">Şikayet
                    Var
                </router-link></h1>

        </nav>

        <div
            class="inline-flex flex-wrap  gap-8 md:gap-24 border-2 border-blue-200 shadow-lg bg-white w-full rounded-lg text-slate-500 text-lg md:text-2xl font-bold p-4 mb-8">

            <div class="inline-flex md:flex-col gap-2 ">
                <h1>Firma:
                    <hr class=" md:flex h-1 mt-2 mb-2 bg-green-500 opacity-40">Turkcell
                </h1>
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
                <div class="inline-flex mt-4 md:flex-col gap-12 flex-wrap">
                    <button @click="compVis = !compVis"
                        class="bg-slate-200 h-fit p-2 rounded-lg hover:bg-green-300 duration-200 ease-linear"> Açılan
                        şikayetleri göster</button>
                    <div class="inline-flex mt-2 rounded-md h-12 w-fit bg-white border-2 border-gray-600">
                        <input class="rounded-lg " type="text" placeholder="Şikayetleri ara">
                        <button class="px-3 rounded-md"><svg width="15" id="Layer_1" x="0" y="0" version="1.1"
                                viewBox="0 0 29 29" xml:space="preserve">
                                <circle cx="11.854" cy="11.854" r="9" fill="none" stroke="#000" stroke-miterlimit="10"
                                    stroke-width="2" />
                                <path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-miterlimit="10" stroke-width="2" d="M18.451 18.451l7.695 7.695" />
                            </svg></button>

                    </div>
                </div>
            </div>
        </div>

        <div v-if="compVis" class="">
            <div
                class="inline-flex ml-8 w-10/12 md:w-8/12 md:h-56 border-2 md:ml-52  bg-blue-400 font-semibold border-white mb-6 rounded-lg gap-4 shadow-lg">

                <div class="w-3/12 mx-auto ml-2 md:ml-2 ">
                    <img class="w-36 rounded-lg ml-0 m-2" src="../assets/1.jpg" alt="">
                    <h2 class="">Emre HORUZ</h2>
                    <h2 class="">11/12/2022</h2>
                </div>

                <div class="bg-white max-h-56 inline-flex flex-col w-auto my-auto h-64 rounded-lg opacity-90 overflow-y-auto">
                    <h1 class="mt-4 ml-4 md:mx-auto font-bold md:text-xl">Şikayetçiyim Lorem ipsum dolor sit amet.</h1>
                    <p class=" w-8/12 max-h-52 h-fit mt-4 mx-auto md:overflow-hidden  text-black ">Lorem
                        ipsum dolor
                        sit, amet consectetur adipisicing
                        elit. Doloremque voluptas accusamus, porro beatae
                        recusandae architecto sit suscipit, laudantium commodi praesentium odio enim placeat voluptate
                        assumenda
                        mollitia inventore nihil, impedit magni!</p>
                    <div class="inline-flex md:gap-2 ml-8 mr-auto mt-4 md:mt-auto mb-2 relative w-fit ">
                        <div class="text-center inline-flex md:w-6 md:h-6 shadow-lg rounded-md bg-red-500">
                            <i class="far fa-chart-bar "></i>
                        </div>
                        <h1 class="text-slate-600"> <span>Çözüm bekliyor... </span> <span
                                class="hidden md:inline-block">/</span>
                            Turkcell</h1>

                    </div>
                    <div class= "bg-slate-200 mx-auto w-full ">
                        <h1 class="m-auto mb-4" >Şikayeti cevaplama:</h1>
                        <input class="rounded-lg m-auto mb-4" type="text" name="" id="">
                        <button class="rounded-lg p-2 bg-slate-600 mb-4">Şikayeti cevapla</button>
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