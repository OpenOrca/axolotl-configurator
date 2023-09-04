<script>

	import Section from "$lib/components/Section.svelte";
    import {config} from './config'
    let checkpoint_configs = [
        [
            {
                name: 'Save Steps',
                field: 'save_steps',
                type: 'number',
                description: 'Leave blank to save every epoch'
            },
            {
                name: 'Save Limit',
                field: 'save_total_limit',
                type: 'number',
                description: 'Max number of saves to store'
            },
        ],
        [
            {
                name: 'Eval Steps',
                field: 'evals_steps',
                type: 'number',
                description: 'Leave blank run eval every epoch.'
            },
            {
                name: 'Eval Size',
                field: 'val_set_size',
                type: 'number',
                min: 0,
                max: 1,
                step: 0.01,
                description: '% of dataset to run eval on'
            },
        ]
    ]
</script>

<Section name="Checkpoints" config={$config} ui_config={checkpoint_configs}/>