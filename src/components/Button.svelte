<script lang="ts">
  export let style = 'block'
  export let type = 'button'
  export let disabled = false
</script>

<button {disabled} {type} class={style}>
  <slot />
</button>

<style lang="scss">
  button {
    padding: 0.6rem 1rem;
    background-color: inherit;
    border: none;
    font-size: inherit;
    outline: none;
    background: dodgerblue;
    cursor: pointer;
    color: #fff;
    border-radius: 0.4rem;

    &:disabled {
      background-color: #666;
      color: #aaa;
      cursor: not-allowed;
      pointer-events: none;
    }

    &:hover,
    &:focus {
      background: darken(dodgerblue, 10%);
    }
    &:active {
      transform: translateY(1px);
    }

    &.outline {
      background: #fff;
      color: dodgerblue;
      border: 2px solid dodgerblue;
      transition: all 300ms ease-in;

      &:disabled {
        background-color: #666;
        color: #aaa;
        cursor: not-allowed;
        pointer-events: none;
        border: 2px transparent;
      }

      &:hover,
      &:focus {
        background: dodgerblue;
        color: #f1f1f1;
      }
    }
  }
</style>
