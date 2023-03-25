<template>
  <nav class="menu animated overlay-navigation" aria-label="navigation">
    <div style="position: relative">
      <div
        class="menu-item d-flex flex-items-center flex-justify-between"
        @click="subMenu333 = !subMenu333"
      >
        <div class="d-flex flex-items-center">
          <span class="cubing-icon event-333 mr-2"></span>
          3x3x3
        </div>
        <i-ic-sharp-arrow-drop-down
          v-show="!subMenu333"
          class="mr-2"
          style="width: 18px; height: 18px"
        />
        <i-ic-sharp-arrow-drop-up
          v-show="subMenu333"
          class="mr-2"
          style="width: 18px; height: 18px"
        />
      </div>
      <nav
        v-show="subMenu333"
        class="SideNav color-bg-default border-top py-2 pl-6 animated"
      >
        <div class="SideNav-subItem">
          <nuxt-link to="/333/oll">OLL</nuxt-link>
        </div>
        <div class="SideNav-subItem">
          <nuxt-link to="/333/pll">PLL</nuxt-link>
        </div>
        <div class="SideNav-subItem">
          <nuxt-link to="/333/coll">COLL</nuxt-link>
        </div>
      </nav>

      <div
        class="menu-item d-flex flex-items-center flex-justify-between"
        @click="subMenuMegaminx = !subMenuMegaminx"
      >
        <div class="d-flex flex-items-center">
          <span class="cubing-icon event-minx mr-2"></span>
          Megaminx
        </div>
        <i-ic-sharp-arrow-drop-down
          v-show="!subMenuMegaminx"
          class="mr-2"
          style="width: 18px; height: 18px"
        />
        <i-ic-sharp-arrow-drop-up
          v-show="subMenuMegaminx"
          class="mr-2"
          style="width: 18px; height: 18px"
        />
      </div>
      <nav
        v-show="subMenuMegaminx"
        class="SideNav color-bg-default border-top py-2 pl-6 animated"
      >
        <div class="SideNav-subItem">
          <nuxt-link to="/megaminx/oll">OLL</nuxt-link>
        </div>
        <div class="SideNav-subItem">
          <nuxt-link to="/megaminx/pll">PLL</nuxt-link>
        </div>
      </nav>

      <div
        class="menu-item d-flex flex-items-center"
        @click="router.push('/account')"
      >
        <i-ic-round-account-circle class="mr-2" />
        Account
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
const router = useRouter()

const subMenu333 = ref<boolean>(false)
const subMenuMegaminx = ref<boolean>(false)
</script>

<style scoped>
.animated {
  animation-name: fade-in;
  animation-duration: 0.15s;
  animation-timing-function: ease-in-out;
}

.overlay-navigation {
  z-index: 30;
  height: 100%;
  width: 100%;
  padding-bottom: 65px;
  position: fixed;
  overflow-y: auto;
}
</style>
