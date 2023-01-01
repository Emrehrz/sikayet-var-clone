<template>
    <div class="bg-gradient-to-tl from-green-700 to bg-blue-400 min-h-screen m-auto">
        <nav>
            <ul class="inline-flex mb-16">
                <li class="text-gray-200 text-2xl font-bold font-mono mt-4 ml-4">Şikayet Var</li>
            </ul>
        </nav>

        <div v-if="logVis" class="m-auto max-w-xs mt-16">
            <form class="bg-white shadow-md  px-8 p-8 pb-9 m-auto border-2 border-stone-400 rounded-xl">
                <div class="inline-flex flex-row gap-4 w-full text-sm font-bold text-slate-600 mb-4">
                    <h1>Üye değil misiniz?</h1>
                    <button @click="regVis = true, logVis = false"
                        class="bg-gray-600 w-fit px-4 py-2 rounded-md text-center text-white ml-auto">Üye olun</button>
                </div>
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                        Kullanıcı Adı
                    </label>
                    <input
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="username" type="text" placeholder="Kullanıcı Adı">
                </div>
                <div class="mb-6">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                        Şifre
                    </label>
                    <input
                        class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        id="password" type="Şifre" placeholder="******************">
                    <p class="text-red-500 text-xs italic">Lütfen şifrenizi giriniz.</p>
                </div>
                <div class="flex items-center justify-between">
                    <router-link
                        class="bg-blue-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline border-gray-700"
                        to="/">Giriş Yap</router-link>
                    <a class="inline-block align-baseline font-bold text-sm text-green-500 hover:text-green-700 "
                        href="#">
                        Şifreni mi unuttun?
                    </a>
                </div>

            </form>
            <div
                class="bg-white p-4 rounded-lg inline-grid grid-flow-col mb-5 gap-4 mt-5 w-full h-fit text-base font-bold text-slate-600">
                <h1>Şikayet var üyesi firma mısınız ?</h1>
                <button @click="regVis = false, logVis = false, staffVis = true"
                    class="ml-auto bg-gray-600 w-fit px-4 py-3 rounded-md text-center text-white ">Firma
                    Girişi</button>
            </div>
            <p class="text-center text-white font-semibold text-xs">
                &copy;2022 Şikayet Var Corp. All rights reserved.
            </p>
        </div>
        <div v-if="regVis" class="m-auto max-w-xs mt-16">
            <form class="bg-white shadow-md  px-8 p-8 pb-9 m-auto border-2 border-stone-400 rounded-xl">
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
                        E-mail
                    </label>
                    <input
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="email" type="text" placeholder="E-mail">
                </div>
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                        Kullanıcı Adı
                    </label>
                    <input
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="username" type="text" placeholder="Kullanıcı Adı">
                </div>
                <div class="mb-6">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                        Şifre
                    </label>
                    <input
                        class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        id="password" type="Şifre" placeholder="******************">
                    <p class="text-red-500 text-xs italic">Lütfen şifrenizi giriniz.</p>
                </div>
                <div class="flex items-center justify-between">
                    <button @click="regVis = false, logVis = true"
                        class="bg-green-500 hover:bg-green-700 ml-auto text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline border-gray-700"
                        type="button">
                        Kaydol
                    </button>

                </div>
            </form>
            <p class="text-center text-white font-semibold text-xs">
                &copy;2022 Şikayet Var Corp. All rights reserved.
            </p>
        </div>
        <div v-if="staffVis" class="m-auto max-w-xs mt-16">
            <form class="bg-white shadow-md  px-8 p-8 pb-9 m-auto border-2 border-stone-400 rounded-xl">

                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                        Personel Adı
                    </label>
                    <input
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="username" type="text" placeholder="Personel Adı">
                </div>
                <div class="mb-6">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                        Şifre
                    </label>
                    <input
                        class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        id="password" type="Şifre" placeholder="******************">
                    <p class="text-red-500 text-xs italic">Lütfen şifrenizi giriniz.</p>
                </div>
                <div class="flex items-center justify-between">
                    <router-link to="/staff"
                        class="bg-blue-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline border-gray-700"
                        type="button">
                        Giriş Yap
                    </router-link>
                    <a class="inline-block align-baseline font-bold text-sm text-green-500 hover:text-green-700 "
                        href="#">
                        Şifreni mi unuttun?
                    </a>
                </div>

            </form>
            <p class="text-center text-white font-semibold text-xs">
                &copy;2022 Şikayet Var Corp. All rights reserved.
            </p>
        </div>


    </div>

</template>
  
<script>
import router from '@/router';

export default {
    name: "logRegView",
    components: {},
    data() {
        return {
            logVis: true,
            regVis: false,
            staffVis: false,

        }
    }
};
</script>
  