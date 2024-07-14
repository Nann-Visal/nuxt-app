<template>
  <div>
      <!-- start header -->
      <Header />
      <!-- end   header -->

      <div class="container lg:grid lg:grid-cols-12 lg:gap-10">

        <!-- start sidebar -->
        <Sidebar class="sticky top-[65px] hidden h-[calc(100vh-65px)] py-5 lg:col-span-3 lg:block" />
        <!-- end   sidebar -->
         
        <!-- start main section -->
        <main class="py-5 lg:col-span-6">
            <StatusCard />
            <NewCustomer />
            <SalesChart />
            <RecentOrders />
        </main>
        <!-- end  main section -->

        <!-- start profile info -->
        <div class="hidden py-5 lg:col-span-3 lg:block">
            <ProfileInfo />
            <hr class="my-5" />
            <Reminders />
        </div>
        <!-- end profile info -->
       
      </div>
  </div>
</template>
