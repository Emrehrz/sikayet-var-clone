<template>
    <main
        class="inline-flex flex-col items-center bg-gradient-to-tl from-green-700 to bg-green-400 h-screen w-screen overflow-x-hidden overflow-y-auto">

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

        <div
            class="inline-flex flex-col gap-12 bg-slate-500 rounded-md w-screen md:w-11/12 h-fit shadow-lg text-center text-white font-bold md:text-2xl mb-8 p-6">
            <h1 class="text-3xl">Şikayetinizi eklerken dikkat etmeniz gerekenler
                <hr class="mx-auto bg-slate-300 rounded-lg h-1 mt-2 w-10/12">
            </h1>
            <h1 class="hover:tracking-widest duration-150">Cümlelerinizin açık ve anlaşılır olmasına dikkat edin.
            </h1>
            <h1 @mouseover="isVisible = !isVisible">Yazım ve imla kurallarına uymaya özen göserin. <span
                    v-if="isVisible">.!?</span></h1>
            <h1>Lorem ipsum dolor sit amet consectetur.</h1>
            <h1>Lorem ipsum dolor sit amet consectetur.</h1>
            <h1>Lorem ipsum dolor sit amet consectetur.</h1>


        </div>

        <div
            class=" inline-flex flex-col gap-12 bg-white opacity-70 rounded-md w-11/12 h-fit text-slate-800 md:text-2xl font-bold mb-6 p-6">
            <h1 class="">Şikayet başlığı: </h1>
            <input class=" border-4 rounded-md w-2/5 border-slate-400" placeholder="Maksimum oniki kelime yazın."
                type="text">
            <h1>Şikayetçi olduğunuz firmanın adı:</h1>
            <input class=" border-4 rounded-md w-2/5 border-slate-400" type="text">
            <h1>Şikayetinizin içeriği:</h1>
            <textarea class=" border-4 rounded-md w-3/5 h-40 border-slate-400" type="text"
                placeholder="300 karakteri geçmeyecek şekilde şikayetinizi yazınız." maxlength="300"></textarea>
            <button class="h-fit ml-auto bg-slate-300 rounded-lg p-2" type="submit">Gönder</button>
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