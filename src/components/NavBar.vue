<template>
  <nav
    class="nav w-screen z-20 text-black"
    :class="ishome ? '' : 'shadow-2xl bg-gray-800'"
  >
    <div class="left">
      <span class="font-light text-3xl">
        RGV
        <span class="font-semibold">League</span>
      </span>
    </div>
    <div class="center">
      <views-link class="link" to="/">Home</views-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
  props: {
    ishome: {
      type: Boolean,
      default: true,
    },
  },
}
</script>
