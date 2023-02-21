<template>
  <q-option-group
    v-model="model"
    :disable="disable"
    :options="options"
    :type="type"
  />
</template>

<script setup>
  import { computed } from 'vue';

  const props = defineProps({
    modelValue: {
      required: true
    },
    options: {
      type: Array,
      default: () => []
    },
    type: {
      type: String,
      default: 'radio'
    },
    size: {
      type: String,
      default: '20px'
    },
    disable: {
      type: Boolean,
      default: false
    }
  });

  const emit = defineEmits(['update:modelValue']);

  const model = computed({
    get() {
      return props.modelValue;
    },
    set(value) {
      emit('update:modelValue', value);
    }
  });
</script>

<style lang="scss" scoped>
  .q-option-group {
    :deep(.q-radio) {
      .q-radio__inner {
        font-size: v-bind(size);
        width: 1.4em;
        min-width: 1.4em;
        max-width: 1.4em;
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

      .q-radio__label {
        margin-left: 4px;
      }
    }
  }

  .q-option-group {
    :deep(.q-toggle) {
      margin: 0 0 16px 0;

      .q-toggle__label {
        font-size: 0.875em;
        line-height: 1.25rem;
      }

      .q-toggle__inner {
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
  }
</style>
