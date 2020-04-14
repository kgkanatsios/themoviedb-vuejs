<template>
  <div class="w-1/5 flex my-1 p-1">
    <div class="w-1/4 pr-1">
      <img :src="imageChecker(actor.profile_path)" :alt="actor.name" />
    </div>
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
