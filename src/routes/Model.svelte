<script>
	import Section from "$lib/components/Section.svelte";
    let training_config = [
        {
            name: 'Model',
            field: 'base_model',
            type: 'text',
            description: '<span class="text-sm opacity-50">Pick the base model you want to do your fine tuning on top of.</span> <a target="_blank" class="anchor text-sm" href="https://huggingface.co/models">View models of HF</a>'
        },
        {
            name: 'Training Type',
            field: 'adapter',
            type: 'select',
            options: [
                { name: 'QLoRA', value: 'qlora'},
                { name: 'LoRA', value: 'lora' },
                { name: 'Full Fine Tune', value: ''}
            ],
            description: ''
        },
        [
            {
            name: 'GPU',
            field: 'gpu',
            type: 'select',
            options: [
                { name: 'RTX 3090', value: 'rtx_3090', vram_gb: 24},
                { name: 'RTX 3080', value: 'rtx_3080', vram_gb: 10},
                { name: 'RTX 3070', value: 'rtx_3070', vram_gb: 8},
                { name: 'RTX 4070', value: 'rtx_4070', vram_gb: 12},
                { name: 'RTX 4080', value: 'rtx_4080', vram_gb: 16},
                { name: 'RTX 4090', value: 'rtx_4090', vram_gb: 24},
                { name: 'A6000', value: 'a6000', vram_gb: 48},
                { name: 'A100 40GB', value: 'a100_40gb', vram_gb: 40 },
                { name: 'A100 80GB', value: 'a100_80gb', vram_gb: 80 },
                { name: 'H100', value: 'h100', vram_gb: 80},
                { name: 'L40', value: 'l40', vram_gb: 48},
                { name: 'A40', value: 'a40', vram_gb: 48},
                { name: 'RTX A5000', value: 'rtx_a5000', vram_gb: 24},
                { name: 'RTX A4500', value: 'rtx_a4500', vram_gb: 20},
                { name: 'RTX A4000', value: 'rtx_a4000', vram_gb: 16},
            ],
            description: ''
            },
            {
            name: 'GPU Quantity',
            field: 'gpu_qty',
            type: 'number',
            min: 1,
            max: 8,
        },
        ]
    ]
</script>

<Section name="Axolotl Training Config" description="All settings required to update a training are shown by default." open ui_config={training_config}/>