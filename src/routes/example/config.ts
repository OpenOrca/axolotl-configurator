import { writable } from 'svelte/store';

export const config = writable({
    number: 10,
    text: "Hello World",
    select: "linear"

})