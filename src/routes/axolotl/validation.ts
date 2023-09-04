const adapter_validation = (config: any) => {
    if (config.adapter == 'lora') {
        config.load_in_8bit = true
        config.load_in_4bit = false
    } else if (config.adapter == 'qlora') {
        config.load_in_8bit = false
        config.load_in_4bit = true
    } else {
        config.load_in_8bit = false
        config.load_in_4bit = false
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
