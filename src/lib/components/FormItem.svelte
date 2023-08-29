<script lang="ts">
	import FormInput from "$lib/components/FormInput.svelte";
    export let ui: any
    export let config: any
    let show = true;

    //Conditionally show the element
    $: if (ui.when) {
        const arg1 = ui.when[0]
        const comparison = ui.when[1]
        const arg2 = ui.when[2]
        if (comparison == 'in') {
            show = config[arg2].includes(arg1)
        }
        else if (comparison == '>') {
            show = config[arg1] > arg2
        }
    }
</script>

{#if show }
    <FormInput name={ui.name} fieldName={ui.field}>
        {#if ui.type == 'text'}
            <input type=text class="input" bind:value={config[ui.field]}>
        {/if}
        {#if ui.type == 'number'}
            <input type="number" class="input" max={ui.max} min={ui.min} bind:value={config[ui.field]}>
        {/if}
        {#if ui.type == 'select'}
            <select class="select" bind:value={config[ui.field]} name={ui.name}>
                {#each ui.options as option }
                    {#if option.name }
                        <option value={option.value}>{option.name}</option>
                    {:else}
                        <option value={option}>{option}</option>
                    {/if}
                {/each}
            </select>
        {/if}
        <svelte:fragment slot="description">
            {#if ui.description }
                {@html ui.description}
            {/if}
        </svelte:fragment>
    </FormInput>
{/if}
