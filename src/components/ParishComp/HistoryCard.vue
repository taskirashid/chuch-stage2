<template>
    <div class="text-editor">

      
    <vue-editor v-model="content" :editorToolbar="customToolbar"></vue-editor>



      <!-- <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem a voluptatem magni consequuntur perferendis vitae debitis commodi nobis vero praesentium? Consectetur recusandae eius maxime facilis hic suscipit nobis alias.Condimentum id venenatis a condimentum vitae. Nisl rhoncus mattis rhoncus urna neque viverra justo. Massa tempor nec feugiat nisl pretium. Lacus sed turpis tincidunt id aliquet risus. Mauris nunc congue nisi vitae suscipit tellus mauris. Mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus. Bibendum neque egestas congue quisque egestas diam. Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Arcu dictum varius duis at consectetur lorem. Tortor pretium viverra suspendisse potenti nullam ac tortor. Faucibus interdum posuere lorem ipsum dolor sit amet. Vitae proin sagittis nisl rhoncus mattis. Tincidunt ornare massa eget egestas purus viverra accumsan.</h6> -->
    </div>
</template>

<script>
import { VueEditor } from "vue2-editor";

export default {
  components: {
    VueEditor
  },
}

</script>

<style scoped>

.text-editor{
  margin: 30px 0px 30px 0px;
}

/* h6{
    font-size: 1.3rem;
    font-weight: 400;
    line-height: 2rem;
} */


</style>