<script lang="ts">
  import { FeedbackStore } from '../stores/feedbacks'

  import Button from './Button.svelte'
  import RatingSelect from './RatingSelect.svelte'

  const min = 10
  let feedbackText = ''
  let disabled = true
  let message = ''
  let rating = 10

  const validateText = () => {
    if (feedbackText.trim().length >= min) {
      message = null
      disabled = false
      return true
    } else {
      message = `Message must be at least ${min} characters long.`
      disabled = true
      return false
    }
  }
  const setRatingValue = (e: CustomEvent) => {
    rating = e.detail
  }
  const addFeedback = () => {
    if (!validateText()) return
    FeedbackStore.update((currentFeedbacks) => [
      { id: currentFeedbacks.length + 1, text: feedbackText, rating },
      ...currentFeedbacks,
    ])
    feedbackText = ''
    rating = 10
    localStorage.setItem('feedbacks', JSON.stringify($FeedbackStore))
  }
</script>

<form on:submit|preventDefault={addFeedback}>
  <h1>How would you rate us?</h1>
  <RatingSelect on:get-rating-value={setRatingValue} {rating} />
  <div class="input-group">
    <input
      type="text"
      placeholder="Tell us something that keeps you coming back"
      bind:value={feedbackText}
      on:input={validateText}
    />
    <Button type="submit" {disabled}>Send</Button>
  </div>
  {#if message}
    <p class="message">{message}</p>
  {/if}
</form>

<style lang="scss">
  form {
    margin-bottom: 2rem;
    background-color: #fff;
    padding: 1rem 3rem;
    border-radius: 1rem;
  }
  h1 {
    color: #333;
    margin: 0 auto;
    margin-bottom: 1.8rem;
    text-align: center;
  }
  .input-group {
    display: flex;
    align-items: center;
    padding: 0.3rem 0.8rem;
    border: 1px solid #bbb;
    background-color: #fff;
    border-radius: 1rem;
    margin-bottom: 1rem;

    input {
      padding: 1rem;
      width: 100%;
      background-color: inherit;
      border: none;
      font-size: inherit;
      outline: none;
    }
  }
  .message {
    margin-bottom: 1rem;
    text-align: center;
    color: rgb(112, 30, 0);
  }
</style>
