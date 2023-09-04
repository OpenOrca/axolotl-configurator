<script lang="ts">
    import { AccordionItem } from '@skeletonlabs/skeleton';
	import FormItem from '$lib/components/FormItem.svelte';
    export let config: any
    export let ui_config: any = [];
    export let name: string
    export let open = false
    export let description = ''
</script>

<AccordionItem {open}>
    <!--Sets the title-->
    <svelte:fragment slot="summary">
        <div class="text-xl font-bold">
            {name}
        </div>
        <div class="opacity-70 text-sm">
            {description}
        </div>
    </svelte:fragment>
    <svelte:fragment slot="content">
        <slot/>
        {#each ui_config as ui }
            <!--Puts multiple form elements into a single row-->
            {#if Array.isArray(ui)}
                <div class="flex space-x-5">
                    {#each ui as ui_el }
                        <FormItem ui={ui_el} bind:config={config}/>
                    {/each}
                </div>
            {:else}
                <!--One form element per row-->
                <FormItem {ui} bind:config={config}/>
            {/if}
        {/each}
    </svelte:fragment>
</AccordionItem>