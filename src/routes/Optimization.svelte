<script>

	import Section from "$lib/components/Section.svelte";
    let optimization_config = [
        [
            {
                name: 'Attention Method',
                field: '_attention_method',
                type: 'select',
                options: ['flash_attention_2','xformers', 'none'],
                description: 'Improves training speed and reduces memory usage.'
            },
            {
                name: 'Distributed Training',
                field: '_distributed_training',
                type: 'select',
                when: ['gpu_qty', '>', 1],
                options: ['fsdp', 'deepspeed', 'none']
            },
        ],
    ]
</script>
<Section name="Optimization" ui_config={optimization_config}/>