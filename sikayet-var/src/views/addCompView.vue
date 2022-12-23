<template>
    <main class="bg-gradient-to-tl from-green-700 to bg-green-400 h-screen overflow-y-auto">

        <nav class="inline-flex w-screen h-12 md:h-20 shadow-lg mb-6">

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
        <div class="inline-flex md:flex-col flex-wrap h-3/4 w-full">
            <div
                class="inline-flex flex-col gap-12 bg-slate-500 rounded-md w-3/4 md:w-1/2 mx-auto h-full shadow-lg text-center text-white font-bold md:text-2xl p-6">
                <h1 class="text-3xl">Şikayetinizi eklerken dikkat etmeniz gerekenler
                    <hr class="mx-auto bg-slate-300 rounded-lg h-1 mt-2 w-10/12">
                </h1>
                <h1 class="hover:tracking-widest duration-150">Cümlelerinizin açık ve anlaşılır olmasına dikkat edin.
                </h1>
                <h1 @mouseover="isVisible = !isVisible">Yazım ve imla kurallarına uymaya özen göserin. <span
                        v-if="isVisible">.!?</span></h1>
                <h1>Lorem ipsum dolor sit amet consectetur.</h1>


            </div>

            <div class=" inline-flex flex-col gap-12 bg-white opacity-60 rounded-md w-3/4 mx-auto h-full  text-slate-800 md:text-2xl font-bold p-6">
                <h1 class="">Şikayet başlığı: </h1>
                <input class="border-2 rounded-md w-3/5 border-black" type="text">

            </div>

        </div>
    </main>

</template>

<script>
export default {
    data() {
        return {
            isVisible: false,
        }
    }
}
</script>