<script lang="ts">
  import FeedbackForm from './components/FeedbackForm.svelte'
  import FeedbackList from './components/FeedbackList.svelte'
  import FeedbackStats from './components/FeedbackStats.svelte'
</script>

<main class="container">
  <FeedbackForm />
  <FeedbackStats />
  <FeedbackList />
</main>

<style lang="scss">
  :global(:root) {
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');
  }
  :global(*) {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: inherit;
  }
  :global(body) {
    font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI',
      Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
      sans-serif;
    background-color: #202142;
    color: #f1f1f1;
    line-height: 1.6;
  }
  :global(ul) {
    list-style: none;
  }
  .container {
    max-width: 768px;
    margin: 100px auto;
    padding: 0 1rem;
  }
</style>
