<script setup>
</script>

<template>
  <header class="fixed top-0 z-50 w-full">
    <NavBar />
  </header>
  <div class="w-full h-[100dvh] bg-black bg-no-repeat opacity-30 absolute"></div>
  <!-- Hero Section -->
  <div class="flex items-center h-[100dvh] bg-cover bg-[url('./assets/bg-main.png')] bg-center bg-no-repeat">
    
    <div class="text-white mx-6 flex flex-col gap-4 mt-12 z-50">
      <h1 class="text-3xl font-bold leading-snug">SOLUÇÕES DIGITAIS AO SEU ALCANCE</h1>
      <p class="text-[11px] leading-relaxed">Quando o assunto é encontrar maneiras de aumentar sua visibilidade no cenário digital, nós estamos preparados para lhe ajudar!</p>
      <div class="w-full flex justify-center h-9 mt-3">
        <Button class="w-[125px] text-xs/7 text-center fill-apollo" label="SAIBA MAIS"></Button>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
