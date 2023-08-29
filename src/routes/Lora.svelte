<script lang="ts">
	import Section from "$lib/components/Section.svelte";
    import {config} from '$lib/config'

    let lora_config = [
        [
            {
                name: 'Rank',
                field: 'lora_r',
                type: 'number',
                min: 1,
            },
            {
                name: 'Alpha',
                field: 'lora_alpha',
                type: 'number',
                min: 1
            },
        ],
        {
            name: 'Dropout',
            field: 'lora_dropout',
            type: 'number',
            min: 0,
            step: 0.01
        },
    ]
</script>

{#if $config.adapter }
    <Section name="LoRA Config" ui_config={lora_config}/>
{/if}