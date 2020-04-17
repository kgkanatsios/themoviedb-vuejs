<template>
  <div class="w-1/5 flex my-1 p-1">
    <clazy-load
      :src="imageChecker(actor.profile_path)"
      loadedClass="w-1/4 pr-1"
      loadingClass="w-1/4 pr-1"
    >
      <img :src="imageChecker(actor.profile_path)" :alt="actor.name" />
      <div slot="placeholder" class="flex justify-center h-full">
        <font-awesome-icon
          icon="spinner"
          class="fa-spin text-teal-500 m-auto text-xl"
        ></font-awesome-icon>
      </div>
    </clazy-load>
    <div class="w-3/4 text-sm pl-1">
      <span class="font-bold">{{ actor.name }}</span>
      <span v-if="emptyStringChecker(actor.character)" class="italic">
        as {{ actor.character }}</span
      >
    </div>
  </div>
</template>

<script>
import { imageChecker, emptyStringChecker } from "@/mixins";
export default {
  name: "ActorPreview",
  props: ["actor"],
  mixins: [imageChecker, emptyStringChecker]
};
</script>

<style></style>
