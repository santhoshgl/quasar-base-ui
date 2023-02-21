<template>
  <q-checkbox
    v-model="checkValue"
    :disable="disable"
    :label="label"
  >
    <slot></slot>
  </q-checkbox>
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

  const checkValue = computed({
    get() {
      return props.modelValue;
    },
    set(value) {
      emits('update:modelValue', value);
    }
  });
</script>

<style
  lang="scss"
  scoped
>
  .q-checkbox {
    :deep(.q-checkbox__inner) {
      font-size: v-bind(size);
      margin-right: 8px;

      &::before {
        border-radius: 6px !important;
      }

      &.q-checkbox__inner--truthy {
        .q-checkbox__bg {
          border: 2px solid $secondary !important;
          background-color: $secondary-50 !important;
        }

        .q-checkbox__svg {
          color: $secondary;

          .q-checkbox__truthy {
            stroke-width: 4;
            stroke-dasharray: 29;
            stroke-linecap: round;
            stroke-linejoin: round;
          }
        }
      }

      .q-checkbox__bg {
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        border-radius: 6px !important;
        border: 2px solid $grey-200 !important;
        transition: background 0.22s cubic-bezier(0, 0, 0.2, 1) 0ms,
          border 0.22s cubic-bezier(0, 0, 0.2, 1) 0ms;

        .q-checkbox__svg {
          padding: 3px;
        }
      }
    }
  }
</style>
