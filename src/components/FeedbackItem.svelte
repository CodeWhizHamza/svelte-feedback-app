<script lang="ts">
  import { FeedbackStore } from '../stores/feedbacks'
  import Card from './Card.svelte'

  export let feedback: {
    id: number
    rating: number
    text: string
  }

  const deleteFeedback = (feedbackId: number) => {
    FeedbackStore.update((currentFeedback) =>
      currentFeedback.filter(
        (fb: { id: number; rating: number; text: string }) =>
          fb.id !== feedbackId,
      ),
    )
    localStorage.setItem('feedbacks', JSON.stringify($FeedbackStore))
  }
</script>

<Card>
  <div class="num-display">{feedback.rating}</div>
  <button class="close" on:click={() => deleteFeedback(feedback.id)}
    >&times;</button
  >
  <div class="text-display">{feedback.text}</div>
</Card>

<style lang="scss">
  .num-display {
    position: absolute;
    top: -10px;
    left: -10px;
    width: 50px;
    height: 50px;
    background: #ff6a95;
    color: #fff;
    border: 1px #eee solid;
    border-radius: 50%;
    padding: 10px;
    text-align: center;
    font-size: 1.2rem;
  }
  .close {
    position: absolute;
    top: 10px;
    right: 20px;
    cursor: pointer;
    font-size: 1.6rem;
    background: none;
    border: none;
  }
</style>
