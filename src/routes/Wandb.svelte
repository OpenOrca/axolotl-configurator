<script>
	import Section from "$lib/components/Section.svelte";
    let wandb_config = [
        [
            {
                name: 'Project',
                field: 'wandb_project',
                type: 'text',
                description: 'The project to put the run under.'
            },
            {
                name: 'Entity',
                field: 'wandb_entity',
                type: 'text',
                description: 'The organization to put the run under.'
            },
        ],
        [
            {
                name: 'Run Id',
                field: 'wandb_run_id',
                type: 'text',
                description: 'An Id will be automatically be generated if none is provided.'
            },
        ]
    ]
</script>

<Section name="Weights & Bias" ui_config={wandb_config}/>