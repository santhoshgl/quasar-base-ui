<template>
  <q-radio
    v-model="radioValue"
    :disable="disable"
    :val="val"
    :label="label"
  >
    <slot></slot>
  </q-radio>
</template>

<script setup>
  import { computed } from 'vue';

  const props = defineProps({
    modelValue: {
      type: [String, Number, null],
      required: true
    },
    disable: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      default: ''
    },
    val: {
      type: [String, Number],
      required: true
    },
    size: {
      type: String,
      default: '20px'
    }
  });

  const emits = defineEmits(['update:modelValue']);

  const radioValue = computed({
    get() {
      return props.modelValue;
    },
    set(value) {
      emits('update:modelValue', value);
    }
  });
</script>

<style lang="scss" scoped>
  .q-radio {
    :deep(.q-radio__inner) {
      font-size: v-bind(size);
      width: 1.4em;
      height: 1.4em;
      color: $secondary;

      &.q-radio__inner--truthy {
        .q-radio__bg {
          color: $secondary;
          background-color: $secondary-50;
          border-radius: 100%;
        }
      }

      .q-radio__bg {
        color: $grey-200;
        width: 1em;
        height: 1em;
        top: 0.2em;
        left: 0.2em;
      }
    }
  }
</style>
