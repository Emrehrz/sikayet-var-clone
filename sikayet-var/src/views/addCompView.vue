<template>
    <main
        class="inline-flex flex-col items-center bg-gradient-to-tl from-green-700 to bg-blue-400 h-screen w-screen overflow-x-hidden overflow-y-auto">

        <nav class="inline-flex w-full h-12 md:h-20 shadow-lg mb-6">

            <h1 class=" text-emerald-900 m-4 text-sm md:text-2xl font-extrabold hidden md:flex "><router-link
                    to="/">Şikayet
                    Var
                </router-link></h1>

            <ul
                class="md:my-auto mt-2  w-full md:w-fit h-fit md:ml-auto  text-xs md:text-lg font-semibold inline-flex gap-7 md:gap-36 ">

                <li class="flex md:hidden"><router-link to="/"> <svg width="28" data-name="Layer 1"
                            viewBox="0 0 512 512">
                            <path
                                d="M44.5,238H84V462.471a7.961,7.961,0,0,0,8.111,7.764L415.8,473h.074a7.941,7.941,0,0,0,5.695-2.081A7.536,7.536,0,0,0,424,465.471V238h43.5a8.041,8.041,0,0,0,5.245-14.1L261.519,40.5a8,8,0,0,0-10.482-.011L39.263,223.879A8.05,8.05,0,0,0,44.5,238ZM302,456.417l-90-.841V354h90Zm106,.979-90-.831V345.882A7.724,7.724,0,0,0,310.209,338H203.514c-4.418,0-7.514,3.463-7.514,7.882V455.427l-96-.882V238H408ZM256.267,57.194,446.084,222H65.958Z" />
                        </svg> <span class="bg-blue-400 text-green-500">/</span> </router-link></li>

                <li class="flex md:hidden"><router-link to="/profile"><svg width="30" height="30" viewBox="0 0 101 101">
                            <path
                                d="M50.4 54.5c10.1 0 18.2-8.2 18.2-18.2S60.5 18 50.4 18s-18.2 8.2-18.2 18.2 8.1 18.3 18.2 18.3zm0-31.7c7.4 0 13.4 6 13.4 13.4s-6 13.4-13.4 13.4S37 43.7 37 36.3s6-13.5 13.4-13.5zM18.8 83h63.4c1.3 0 2.4-1.1 2.4-2.4 0-12.6-10.3-22.9-22.9-22.9H39.3c-12.6 0-22.9 10.3-22.9 22.9 0 1.3 1.1 2.4 2.4 2.4zm20.5-20.5h22.4c9.2 0 16.7 6.8 17.9 15.7H21.4c1.2-8.9 8.7-15.7 17.9-15.7z" />
                        </svg></router-link></li>

                <li class="flex md:hidden"><router-link to="/addComp"><svg width="28" height="28"
                            viewBox="0 0 6.615 6.615">
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