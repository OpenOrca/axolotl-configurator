const adapter_validation = (config: any) => {
    if (config.adapter == 'lora') {
        config.load_in_8bit = true
        config.load_in_4bit = false
        if (config.lora_r = null) {
            config.lora_r = 8
            config.lora_alpha = 16
            config.lora_dropout = 0.05
            config.lora_target_linear = true
        }
    } else if (config.adapter == 'qlora') {
        config.load_in_8bit = false
        config.load_in_4bit = true
        if (config.lora_r = null) {
            config.lora_r = 8
            config.lora_alpha = 16
            config.lora_dropout = 0.05
            config.lora_target_linear = true
        }
    } else {
        config.load_in_8bit = false
        config.load_in_4bit = false
        for (const key in config) {
            if (key.startsWith('lora')) {
                config[key] = null;
            }
        }
    }
    return config
}

const distribution_validation = (config: any) => {
    if (config.gpu_qty > 1 && config.adapter == '') {
        if (config._distributed_training == 'fsdp') {
            config.fsdp = [
                "full_shard",
                "auto_wrap"
              ],
              config.fsdp_config = {
                "fsdp_sync_module_states": true,
                "fsdp_offload_params": true,
                "fsdp_state_dict_type": "FULL_STATE_DICT",
                "fsdp_transformer_layer_cls_to_wrap": "LlamaDecoderLayer"
              }
            config.deepspeed = null
        } else if (config._distributed_training == 'deepspeed') {
            config.deepspeed = 'deepspeed/zero3.json'
            config.fsdp = null
            config.fsd_config = null
        }
    } else {
        config._distributed_training = "none"
    }
    return config
}

export const validate_config = (config: any) => {
    config = adapter_validation(config)
    config = distribution_validation(config)
    return config
}