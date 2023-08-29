// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client/core/index.js";

declare namespace App {
	interface Locals {
		wandb_execute: any,

	}
	// interface PageData {}
	// interface Error {}
	// interface Platform {}
}
