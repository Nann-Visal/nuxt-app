<template>
  <section class="mt-5">
    <h3 class="font-bold">New Customers</h3>
    <div class="mt-5 flex w-full items-start gap-6 overflow-x-auto rounded-lg border bg-background px-5 py-5 scrollbar-thin scrollbar-thumb-input scrollbar-thumb-rounded-md">
      <div class="flex shrink-0 flex-col items-center gap-2">
        <button class="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
          <Icon name="heroicons:plus" class="h-5 w-5" />
        </button>
        <div>
          <p class="text-sm font-semibold">Add</p>
        </div>
      </div>
      <template v-for="(n,i) in data" :key="i" >
        <div class="flex shrink-0 flex-col items-center gap-2">
            <img 
              :src="n.picture.thumbnail" 
              :alt="n.name.first" 
              class="w-10 h-10 rounded-full object-cover" />
            <div class="text-center">
              <p class="text-sm font-semibold">{{ n.name.first }}{{ n.name.last }}</p>
              <p class="text-xs text-muted-foreground">10 mins ago</p>
            </div>
        </div>
      </template>
    </div>
  </section>
</template>

<script lang="ts" setup>
  const {data} = await useAsyncData(
    'new-customers',
    () => $fetch("https://randomuser.me/api/?results=20"),
    {
      default: () => [],
      transform: (data: any) => data.results
    }
  )
</script>