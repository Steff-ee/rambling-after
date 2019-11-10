import { POST_00100 } from './store/POST_00100'
import { POST_00102 } from './store/POST_00102'
import { POST_00104 } from './store/POST_00104'
import { POST_00106 } from './store/POST_00106'

/* GAMES LINKED LIST */

// head & tail
export const gamesLatestPost = POST_00102
export const gamesFirstPost = POST_00100

// links
POST_00100.nextPostByRoute = POST_00102
POST_00102.prevPostByRoute = POST_00100

/* STORIES LINKED LIST */

// head & tail
export const storiesFirstPost = POST_00104
export const storiesLatestPost = POST_00106

// links
POST_00104.nextPostByRoute = POST_00106
POST_00106.prevPostByRoute = POST_00104

/* MATH & SCIENCE LINKED LIST */

/* ALL POSTS */

// ordered reverse chronologically
export const allPosts = [POST_00106, POST_00104, POST_00102, POST_00100]
