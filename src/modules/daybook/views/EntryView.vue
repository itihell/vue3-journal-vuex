<template>
  <div class="entry-title d-flex justify-content-between p-2">
    <div class>
      <span class="text-success fs-3 fw-bold">15</span>
      <span class="mx-1 fs-3">Julio</span>
      <span class="mx-2 fs-4 fw-light">2022, Sabado</span>
    </div>

    <div>
      <button class="btn btn-danger mx-2">
        Borrar
        <i class="fas fa-trash-alt"></i>
      </button>

      <button class="btn btn-primary">
        Subir archivo
        <i class="fas fa-upload"></i>
      </button>
    </div>
  </div>

  <hr />

  <div class="d-flex flex-column px-3 h-75">
    <textarea placeholder="Que paso hoy...?"></textarea>
  </div>

  <Fab icon="fa-save" />

  <img
    src="https://i.blogs.es/04ac6a/2560_3000/1366_2000.jpeg"
    alt="Dragon ball image"
    class="img-thumbnail"
  />
</template>

<script>
import { defineAsyncComponent } from '@vue/runtime-core'
export default {
components:{
    Fab:defineAsyncComponent(()=>import('../components/Fab.vue'))
}
}
</script>

<style lang="scss" scoped>
textarea {
  border: none;
  font-size: 20px;
  height: 100%;

  &:focus {
    outline: none;
  }
}

img {
  width: 200px;
  position: fixed;
  bottom: 150px;
  right: 20px;
  box-shadow: 0px 5px 10px rgba($color: #000000, $alpha: 0.2);
}
</style>