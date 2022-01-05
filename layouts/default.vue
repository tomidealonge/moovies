<template>
  <div>
    <link
      rel="preload"
      as="style"
      href="../assets/fonts/dmsans-regular.woff2"
      crossorigin="anonymous"
      onload="this.rel='stylesheet'"
    />
    <link
      rel="preload"
      as="style"
      href="../assets/fonts/frunchy.woff"
      crossorigin="anonymous"
      onload="this.rel='stylesheet'"
    />
    <Nuxt />
    <OverlayComponent />
  </div>
</template>

<script>
export default {};
</script>
