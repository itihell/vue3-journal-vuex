<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div
    class="entry-containet mb-3 pointer p-2"
    @click="$router.push({name:'entry',params:{id:10}})"
  >
    <div class="entry-title d-flex">
      <span class="text-success fs-5 fw-bold">15</span>
      <span class="mx-1 fs-5">Julio</span>
      <span class="mx-2 fw-light">2022, Sabado</span>
    </div>
    <div
      class="entry-description"
    >Proident excepteur excepteur in ea et sunt deserunt minim. Elit velit laborum amet elit. Magna nostrud irure ad et sint anim. Reprehenderit et ullamco mollit aute tempor occaecat aliqua exercitation deserunt voluptate culpa culpa irure sunt. Lorem ipsum ipsum ut esse officia nulla fugiat ullamco veniam enim magna. Irure eu duis cillum deserunt consequat ut Lorem ad cillum aute sint pariatur dolore ex.</div>
  </div>
</template>
<style lang="scss" scoped>
.entry-containet {
  border-bottom: 1px solid #2c3e50;
  transition: 0.2s all ease-in;

  &:hover {
    background-color: lighten($color: grey, $amount: 45);
    transition: 0.2s all ease-in;
  }

  .entry-description {
    font-size: 12px;
  }
}
</style>