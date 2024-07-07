<script setup>
</script>

<template>
  <header class="fixed top-0 z-50 w-full">
    <NavBar />
  </header>
  <section id="inicio">
    <div class="absolute h-[100dvh] w-full bg-black bg-no-repeat opacity-30 lg:max-h-[1080px]"></div> <!-- Dark overlay -->
    <div class="flex h-[100dvh] items-center bg-[url('./assets/bg-main.png')] bg-cover bg-center bg-no-repeat lg:max-h-[1080px]">
      <div class="z-10 flex flex-col gap-10 text-white max-sm:mx-[7%] max-sm:max-w-[80%] sm:mx-[10%] md:max-w-[60%] lg:mx-[15%] lg:max-w-[35%]">
        <h1 class="font-montserrat font-bold leading-snug max-md:text-[2.0em] md:text-[2.5em]">SOLUÇÕES DIGITAIS AO SEU ALCANCE</h1>
        <p class="font-montserrat text-sm leading-relaxed">Quando o assunto é encontrar maneiras de aumentar sua visibilidade no cenário digital, nós estamos preparados para lhe ajudar!</p>
        <div class="mt-3 flex h-9 w-full justify-start">
          <Button class="h-[50px] w-[180px] fill-apollo text-center text-xs/7 font-bold" label="SAIBA MAIS"></Button>
        </div>
      </div>
    </div>
  </section> <!-- Início -->
  <section id="servicos">
    <div class="w-full bg-[#F1F1F1] p-4 pt-12">
      <h2 class="text-darken mb-11 w-full text-center text-[2em] font-bold">Como podemos te ajudar?</h2>
      <div class="grid min-h-[300px] gap-14 md:grid-cols-3 md:gap-5">
        <div class="rounded-xl bg-white p-6 text-center shadow-xl">
          <div class="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full bg-white shadow-lg shadow-[rgb(193,193,193)]">
            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="#fab511" viewBox="0 0 16 16">
              <path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13a.5.5 0 0 1 0 1 .5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1-.46-.302l-.761-1.77a2 2 0 0 0-.453-.618A5.98 5.98 0 0 1 2 6m6-5a5 5 0 0 0-3.479 8.592c.263.254.514.564.676.941L5.83 12h4.342l.632-1.467c.162-.377.413-.687.676-.941A5 5 0 0 0 8 1"/>
            </svg>
          </div>
          <h1 class="text-darken mb-3 text-xl font-bold lg:px-14">DESIGN DIGITAL</h1>
          <p class="px-4 text-gray-500">As suas ideias transformadas em artes digitais que poderão ser transformadas em materiais impressos, divulgações e tudo mais que chame atenção para seu negócio.</p>
        </div>
        <div class="rounded-xl bg-white p-6 text-center shadow-xl">
          <div class="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full bg-white shadow-lg shadow-[#C1C1C1]">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#fab511" viewBox="0 0 16 16">
              <path d="M5 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4m4-2.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5M9 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4A.5.5 0 0 1 9 8m1 2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5"/>
              <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zM1 4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H8.96q.04-.245.04-.5C9 10.567 7.21 9 5 9c-2.086 0-3.8 1.398-3.984 3.181A1 1 0 0 1 1 12z"/>
            </svg>
          </div>
          <h1 class="text-darken mb-3 text-xl font-bold lg:px-14">IDENTIDADE VISUAL</h1>
          <p class="px-4 text-gray-500">Conecte seu público à sua marca, através de materiais que irão expressar as missões e valores do seu negócio.</p>
        </div>
        <div class="rounded-xl bg-white p-6 text-center shadow-xl">
          <div class="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full bg-white shadow-lg shadow-[#C1C1C1]">
            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="#fab511" viewBox="0 0 16 16">
              <path d="M13 2.5a1.5 1.5 0 0 1 3 0v11a1.5 1.5 0 0 1-3 0v-.214c-2.162-1.241-4.49-1.843-6.912-2.083l.405 2.712A1 1 0 0 1 5.51 15.1h-.548a1 1 0 0 1-.916-.599l-1.85-3.49-.202-.003A2.014 2.014 0 0 1 0 9V7a2.02 2.02 0 0 1 1.992-2.013 75 75 0 0 0 2.483-.075c3.043-.154 6.148-.849 8.525-2.199zm1 0v11a.5.5 0 0 0 1 0v-11a.5.5 0 0 0-1 0m-1 1.35c-2.344 1.205-5.209 1.842-8 2.033v4.233q.27.015.537.036c2.568.189 5.093.744 7.463 1.993zm-9 6.215v-4.13a95 95 0 0 1-1.992.052A1.02 1.02 0 0 0 1 7v2c0 .55.448 1.002 1.006 1.009A61 61 0 0 1 4 10.065m-.657.975 1.609 3.037.01.024h.548l-.002-.014-.443-2.966a68 68 0 0 0-1.722-.082z"/>
            </svg>
          </div>
          <h1 class="text-darken mb-3 text-xl font-bold lg:px-14">MARKETING DIGITAL</h1>
          <p class="px-4 text-gray-500">Em um mundo cada vez mais conectado, a presença digital do seu negócio é componente essencial em seu planejamento de marketing.</p>
        </div>
      </div>
      <div class="mt-10 grid min-h-[300px] gap-14 md:grid-cols-3 md:gap-5 lg:mt-[5rem]">
        <div class="rounded-xl bg-white p-6 text-center shadow-xl">
          <div class="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full bg-white shadow-lg shadow-[#C1C1C1]">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#fab511" class="bi bi-phone" viewBox="0 0 16 16">
              <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
              <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
            </svg>
          </div>
          <h1 class="text-darken mb-3 text-xl font-bold lg:px-14">MÍDIAS DIGITAIS</h1>
          <p class="px-4 text-gray-500">Estar sempre próximo do seu público é um fator crucial no desenvolvimento de qualquer estratégia de marketing.</p>
        </div>
        <div class="rounded-xl bg-white p-6 text-center shadow-xl">
          <div class="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full bg-white shadow-lg shadow-[#C1C1C1]">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#fab511" class="bi bi-c-circle" viewBox="0 0 16 16">
              <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.146 4.992c-1.212 0-1.927.92-1.927 2.502v1.06c0 1.571.703 2.462 1.927 2.462.979 0 1.641-.586 1.729-1.418h1.295v.093c-.1 1.448-1.354 2.467-3.03 2.467-2.091 0-3.269-1.336-3.269-3.603V7.482c0-2.261 1.201-3.638 3.27-3.638 1.681 0 2.935 1.054 3.029 2.572v.088H9.875c-.088-.879-.768-1.512-1.729-1.512"/>
            </svg>
          </div>
          <h1 class="text-darken mb-3 text-xl font-bold lg:px-14">CRIAÇÃO DE MARCAS</h1>
          <p class="px-4 text-gray-500">Traduza toda a personalidade do seu negócio em um logotipo único, de forma que sempre será lembrado.</p>
        </div>
        <div class="rounded-xl bg-white p-6 text-center shadow-xl">
          <div class="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full bg-white shadow-lg shadow-[#C1C1C1]">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#fab511" class="bi bi-badge-ad-fill" viewBox="0 0 16 16">
              <path d="M11.35 8.337c0-.699-.42-1.138-1.001-1.138-.584 0-.954.444-.954 1.239v.453c0 .8.374 1.248.972 1.248.588 0 .984-.44.984-1.2zm-5.413.237-.734-2.426H5.15l-.734 2.426h1.52z"/>
              <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm6.209 6.32c0-1.28.694-2.044 1.753-2.044.655 0 1.156.294 1.336.769h.053v-2.36h1.16V11h-1.138v-.747h-.057c-.145.474-.69.804-1.367.804-1.055 0-1.74-.764-1.74-2.043v-.695zm-4.04 1.138L3.7 11H2.5l2.013-5.999H5.9L7.905 11H6.644l-.47-1.542H4.17z"/>
            </svg>
          </div>
          <h1 class="text-darken mb-3 text-xl font-bold lg:px-14">SEO</h1>
          <p class="px-4 text-gray-500">Bom posicionamento nas buscas em motores de busca, ajudam o seu negócio a se destacar em meio aos concorrentes.</p>
        </div>
      </div>
    </div>
  </section> <!-- Serviços -->
  <section id="portfolio">
    
  </section>
</template>

<style scoped>

</style>
