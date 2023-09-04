<script>

	import Section from "$lib/components/Section.svelte";
    import {config} from './config'
    let hyper_param_config = [
        [
            {
                name: 'Sequence Length',
                field: 'sequence_len',
                type: 'select',
                options: [512, 1024, 2048, 4096, 8192, 16384, 32768]
            },
            {
                name: 'Microbatch Size',
                field: 'micro_batch_size',
                type: 'number',
                min: 1
            },
        ],
        [
            {
                name: 'Learning Rate',
                field: 'learning_rate',
                type: 'number',
                min: 0,
                max: 1,
                step: 0.0000001
            },
            {
                name: 'Gradient Accum',
                field: 'gradient_accumulation_steps',
                type: 'number',
                min: 1
            },
        ],
        [
            {
                name: 'LR Scheduler',
                field: 'lr_scheduler',
                type: 'select',
                options: ['cosine', 'linear', 'cosine_with_restarts', 'polynomial', 'constant', 'constant_with_warmup', 'inverse_sqrt', 'reduce_lr_on_plateau']
            },
            {
                name: 'Optimizer',
                field: 'optimizer',
                type: 'select',
                options: ['paged_adamw_8bit','paged_adamw_32bit', 'adamw_bnb_8bit', 'adamw_torch']
            },
        ],
        [
            {
                name: 'Weight Decay',
                field: 'weight_decay',
                type: 'number',
                min: 0,
                max: 1,
                step: 0.01
            },
            {
                name: 'Max Grad Norm',
                field: 'max_grad_norm',
                type: 'number',
                min: 0,
                max: 1,
                step: 0.01
            },
        ],
        [
            {
                name: 'Adam Beta 2',
                field: 'adam_beta2',
                type: 'number',
                when: ['adamw', 'in', 'optimizer'],
                min: 0,
                max: 1,
                step: 0.01
            },
            {
                name: 'Adam Beta 1',
                field: 'adam_beta1',
                type: 'number',
                when: ['adamw', 'in', 'optimizer'],
                min: 0,
                max: 1,
                step: 0.01
            },
        ]
    ]
</script>
<Section config={$config} open name="Hyperparameters" ui_config={hyper_param_config}/>