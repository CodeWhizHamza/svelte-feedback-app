<script>
  import { FeedbackStore } from '../stores/feedbacks'
  import { fade, scale } from 'svelte/transition'
  import FeedbackItem from './FeedbackItem.svelte'
</script>

{#each $FeedbackStore as feedback (feedback.id)}
  <div in:scale out:fade>
    <FeedbackItem {feedback} />
  </div>
{/each}
