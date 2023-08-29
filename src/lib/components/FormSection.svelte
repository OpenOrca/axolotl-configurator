<script lang="ts">
	import { AccordionItem } from "@skeletonlabs/skeleton";
    export let name: string

</script>

<AccordionItem>
    <svelte:fragment slot="summary">
        <div class="text-xl font-bold">
            {name}
        </div>
    </svelte:fragment>
    <svelte:fragment slot="content">
        <slot/>
    </svelte:fragment>
</AccordionItem>