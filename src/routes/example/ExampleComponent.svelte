<script lang="ts">
	import Section from "$lib/components/Section.svelte";
    import {config} from './config'

    let ui_config = [
        [
        // Wrapping the fields into an array puts them in the same row
            {
                name: 'Number',
                field: 'number',
                type: 'number',
                min: 1,
                step: 0.5,
                max: 15,
                description: "An example description"
            },
            {
                name: 'Text',
                field: 'text',
                type: 'text',
            },
        ],
        {
                name: 'Select Field',
                field: 'select',
                type: 'select',
                options: ['cosine', 'linear', 'cosine_with_restarts', 'polynomial', 'constant', 'constant_with_warmup', 'inverse_sqrt', 'reduce_lr_on_plateau'],
                description: "Options can either be a list of strings, or a list of objects with name/value strings."
            },
    ]
</script>


<Section open name="Example Section" config={$config} {ui_config}/>
<Section name="Default Closed Section" config={$config} {ui_config}/>