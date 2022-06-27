<script lang="ts">
  import { createEventDispatcher } from 'svelte'

  export let rating = 10
  const dispatch = createEventDispatcher()

  const onChange = (e) => {
    const target = e.target as HTMLInputElement
    rating = Number(target.value)

    dispatch('get-rating-value', rating)
  }
</script>

<ul>
  <li>
    <input
      type="radio"
      name="rating"
      id="num1"
      value="1"
      checked={rating === 1}
      on:input={onChange}
    />
    <label for="num1">1</label>
  </li>

  <li>
    <input
      type="radio"
      name="rating"
      id="num2"
      value="2"
      checked={rating === 2}
      on:input={onChange}
    />
    <label for="num9">2</label>
  </li>
  <li>
    <input
      type="radio"
      name="rating"
      id="num3"
      value="3"
      checked={rating === 3}
      on:input={onChange}
    />
    <label for="num3">3</label>
  </li>

  <li>
    <input
      type="radio"
      name="rating"
      id="num4"
      value="4"
      checked={rating === 4}
      on:input={onChange}
    />
    <label for="num4">4</label>
  </li>
  <li>
    <input
      type="radio"
      name="rating"
      id="num5"
      value="5"
      checked={rating === 5}
      on:input={onChange}
    />
    <label for="num5">5</label>
  </li>
  <li>
    <input
      type="radio"
      name="rating"
      id="num6"
      value="6"
      checked={rating === 6}
      on:input={onChange}
    />
    <label for="num6">6</label>
  </li>
  <li>
    <input
      type="radio"
      name="rating"
      id="num7"
      value="7"
      checked={rating === 7}
      on:input={onChange}
    />
    <label for="num7">7</label>
  </li>
  <li>
    <input
      type="radio"
      name="rating"
      id="num8"
      value="8"
      checked={rating === 8}
      on:input={onChange}
    />
    <label for="num8">8</label>
  </li>

  <li>
    <input
      type="radio"
      name="rating"
      id="num9"
      value="9"
      checked={rating === 9}
      on:input={onChange}
    />
    <label for="num9">9</label>
  </li>
  <li>
    <input
      type="radio"
      name="rating"
      id="num10"
      value="10"
      checked={rating === 10}
      on:input={onChange}
    />
    <label for="num10">10</label>
  </li>
</ul>

<style lang="scss">
  ul {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;
  }
  li {
    color: #333;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: relative;
  }
  input {
    visibility: hidden;
    position: absolute;
    top: -500px;
    left: -500px;
  }
  label {
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 999rem;
    font-size: 1.4rem;
    cursor: pointer;
    background-color: rgb(225, 225, 225);
    transition: all 0.3s ease;

    &:hover {
      background-color: dodgerblue;
      color: white;
    }
  }
  input:checked + label {
    background-color: dodgerblue;
    color: #fff;
  }
</style>
