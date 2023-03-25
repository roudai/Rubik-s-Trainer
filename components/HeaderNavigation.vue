<template>
  <nav class="d-flex">
    <details class="details-reset details-overlay">
      <summary
        class="Header-link px-3 d-flex flex-items-center"
        aria-haspopup="true"
      >
        3x3x3 <i-ic-sharp-arrow-drop-down />
      </summary>

      <div class="SelectMenu">
        <div class="SelectMenu-modal">
          <div class="SelectMenu-list">
            <button class="SelectMenu-item" role="menuitem">
              <nuxt-link to="/333/oll">OLL</nuxt-link>
            </button>
            <button class="SelectMenu-item" role="menuitem">
              <nuxt-link to="/333/pll">PLL</nuxt-link>
            </button>
            <button class="SelectMenu-item" role="menuitem">
              <nuxt-link to="/333/coll">COLL</nuxt-link>
            </button>
          </div>
        </div>
      </div>
    </details>

    <details class="details-reset details-overlay">
      <summary
        class="Header-link px-3 d-flex flex-items-center"
        aria-haspopup="true"
      >
        Megaminx <i-ic-sharp-arrow-drop-down />
      </summary>

      <div class="SelectMenu">
        <div class="SelectMenu-modal">
          <div class="SelectMenu-list">
            <button class="SelectMenu-item" role="menuitem">
              <nuxt-link to="/megaminx/oll">OLL</nuxt-link>
            </button>
            <button class="SelectMenu-item" role="menuitem">
              <nuxt-link to="/megaminx/pll">PLL</nuxt-link>
            </button>
          </div>
        </div>
      </div>
    </details>
  </nav>
</template>
