<template>
  <q-icon
    :name="iconData"
    v-bind="$attrs"
  >
    <slot />
  </q-icon>
</template>

<script setup>
  import { getIconData } from 'src/utils/helpers';
  import { computed } from 'vue';

  const props = defineProps({
    icon: {
      type: Object,
      required: true
    },
    stroke: {
      type: String,
      default: 'currentColor'
    },
    strokeWidth: {
      type: Number,
      default: 2
    },
    fill: {
      type: String,
      default: 'none'
    }
  });

  const iconData = computed(() => {
    return getIconData({
      icon: props.icon,
      stroke: props.stroke,
      strokeWidth: props.strokeWidth,
      fill: props.fill
    });
  });
</script>
