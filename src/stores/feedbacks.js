import { writable } from 'svelte/store'

const feedbacks = JSON.parse(localStorage.getItem('feedbacks')) || []
export const FeedbackStore = writable(feedbacks)

