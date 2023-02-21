<template>
  <q-toggle
    v-model="toggleValue"
    :disable="disable"
    :label="label"
  >
    <slot></slot>
  </q-toggle>
</template>

<script setup>
  import { computed } from 'vue';

  const props = defineProps({
    modelValue: {
      type: Boolean,
      default: false
    },
    disable: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: '20px'
    }
  });

  const emits = defineEmits(['update:modelValue']);

  const toggleValue = computed({
    get() {
      return props.modelValue;
    },
    set(value) {
      emits('update:modelValue', value);
    }
  });
</script>

<style lang="scss" scoped>
  .q-toggle {
    :deep(.q-toggle__label) {
      font-size: 0.875em;
      line-height: 1.25rem;
      flex-grow: 1;
    }

    :deep(.q-toggle__inner) {
      padding: 0;
      font-size: v-bind(size);
      width: 1.8em;
      height: 1em;
      margin-right: 8px;

      .q-toggle__track {
        height: 1em;
        border-radius: 1em;
        opacity: 1;
        background-color: $grey-100 !important;
        transition: backround-color 0.3s;
      }

      .q-toggle__thumb {
        top: 0.1em;
        left: 0.1em;
        width: 0.8em;
        height: 0.8em;

        &::after {
          box-shadow: 0px 1px 2px 0px rgba($grey-900, 0.06),
            0px 1px 3px 0px rgba($grey-900, 0.1);
        }
      }

      &.q-toggle__inner--truthy {
        .q-toggle__track {
          opacity: 1;
          background-color: $secondary !important;
        }

        .q-toggle__thumb {
          color: white;
          left: 0.9em;
        }
      }
    }
  }
</style>
