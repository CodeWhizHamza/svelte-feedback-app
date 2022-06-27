<script lang="ts">
  import { FeedbackStore } from '../stores/feedbacks'
  $: count = $FeedbackStore.length
  $: averageRating =
    $FeedbackStore.reduce((total, current) => total + current.rating, 0) /
      $FeedbackStore.length || 0
</script>

<div class="feedback-stats">
  <h4>{count} Review{count > 1 ? 's' : ''}</h4>
  <h4>Ratings Average: {averageRating}</h4>
</div>

<style lang="scss">
  .feedback-stats {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.2rem;
  }
</style>
