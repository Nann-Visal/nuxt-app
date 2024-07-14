<template>
  <header  class="sticky top-0 z-20 border-b bg-background/75 backdrop-blur">
    <div class="container flex h-16 items-center justify-between">

      <div class="flex items-center gap-3">
        <button
            @click="isOpen = true"
            aria-label="Open menu"
            class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border bg-background lg:hidden"
          > <span class="sr-only">Button used to open menu</span>
          <Icon name="heroicons:bars-2" />
        </button>
        <img src="/icon.svg" alt="nuxt" class="h-7 w-7 object-contain " />
        <NuxtLink  class="text-xl font-bold" to="/">Zii/Nuxt </NuxtLink>
      </div>

      <div class="flex items-center gap-5">
        <button 
          class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border bg-background"
          @click="toggleTheme"
          aria-label="Toggle Theme">
          <Icon name="heroicons:sun" class="h-5 w-5" />
        </button>
        <HMenu as="div" class="relative">
            <HMenuButton           
              class="flex h-9 w-9 items-center justify-center overflow-hidden rounded-full border bg-background"
              >
              <Img 
                src="https://randomuser.me/api/portraits/med/men/75.jpg" 
                alt="Logged in User"
                class="w-full h-full" />
            </HMenuButton>
            <TransitionScale :scale="0.8" origin="top right">
              <HMenuItems 
                class="absolute right-0 z-10 mt-3 w-48 rounded-md border bg-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                <div class="border-b px-3 py-1 5 text-sm">
                  <p class="font-semibold">Hello John</p>
                  <a 
                    href="mailto:johndose@test.com"
                    class="leading-none text-muted-foreground"
                    >
                    johndose@test.com
                  </a>
                </div>
                <div class="p-1">
                    <template v-for="(p,i) in profileMenuItems" :key="i">
                      <HMenuItem v-if="!p.divider" v-slot="{active}">
                        <button :class="[active && 'bg-muted']" class="inline-flex w-full items-center rounded-md p-2 font-medium text-sm">
                          <div class="flex items-center gap-4">
                            <Icon v-if="p.icon" :name="p.icon" class="h-5 w-5 text-muted-foreground"/>
                            <p class="truncate">{{ p.title }}</p>
                          </div>
                        </button>
                      </HMenuItem>
                      <hr v-if="p.divider" class="my-1">
                    </template>
                </div>
              </HMenuItems>
            </TransitionScale>
        </HMenu>
      </div>

    </div>
    <MobileMenu v-model="isOpen" />
  </header>
</template>

<script lang="ts" setup>

    const mode = useColorMode();
    const toggleTheme = () => {
      mode.value = mode.value === 'light' ? 'dark' : 'light';
    }
    const profileMenuItems = [
      {title : "Profile", icon: "uil:user-circle"},
      {title : "Billing", icon: "mdi:invoice-text-send-outline"},
      {title : "Settings", icon: "ic:round-settings"},
      {title : "Team members", icon: "grommet-icons:group"},
      {title : "Sales", icon: "icon-park-outline:sales-report"},
      {divider: true},
      {title : 'Logout', icon: "ri:logout-box-r-line"}
    ];

    const isOpen = ref(false);
</script>