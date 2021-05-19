<template>
  <div class="vc-select">
    <select v-bind="$attrs" @change="$emit('input', $event.target.value)">
      <option
        v-for="option in options"
        :key="option.value"
        :value="option.value"
        :disabled="option.disabled"
        >{{ option.label }}</option
      >
    </select>
    <div class="vc-select-arrow">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
        <path
          d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
        />
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    options: Array,
  },
};
</script>

<style lang="postcss" scoped>
.vc-select {
  position: relative;
  & select {
    flex-grow: 1;
    display: block;
    appearance: none;
    width: 52px;
    height: 30px;
    font-size: 16px;
    font-weight: 500;
    text-align: left;
    background-color: #edf2f7;
    border: 2px solid;
    border-color: #edf2f7;
    color: #1a202c;
    padding: 0 20px 0 8px;
    border-radius: 0.25rem;
    line-height: var(--leading-tight);
    text-indent: 0px;
    cursor: pointer;
    -moz-padding-start: 3px;
    &:hover {
      color: #718096;
    }
    &:focus {
      outline: 0;
      border-color: var(--accent-400);
      background-color: #ffffff;
    }
  }
}
.vc-select-arrow {
  display: flex;
  align-items: center;
  pointer-events: none;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  padding: 0 4px 0 0;
  color: #a0aec0;
  & svg {
    width: 16px;
    height: 16px;
    fill: currentColor;
  }
}
.vc-is-dark {
  & select {
    background: #4a5568;
    color: #f7fafc;
    border-color: #4a5568;
    &:hover {
      color: #cbd5e0;
    }
    &:focus {
      border-color: var(--accent-500);
      background-color: #2d3748;
    }
  }
}
</style>
