<script lang="ts">
	import FormInput from "./FormInput.svelte";

    export let config: any
    export let dataset: any
    let features = []
    let firstRow = {}
    let fields = {}

    $: fields = {
        instruction: dataset.field_instruction,
        input: dataset.field_input,
        output: dataset.field_output,
        system: dataset.field_system,
        "": ""
    }
    const  handleRemoveDataset =  (rm_dataset: any)  =>  {
        config.datasets = config.datasets.filter((dataset: any) => dataset != rm_dataset)
    }

    const getIsValidDataset = async () => {
        const API_URL = `https://datasets-server.huggingface.co/is-valid?dataset=${dataset.path}`
        const response = await fetch(API_URL, {method: 'GET'})
        const result = await response.json()
        console.log(result)
        if (result.preview) {
            getDatasetFeatures()
            getFirstDatasetRow()
        }

    }

    const getFirstDatasetRow = async () => {
        const API_URL = `https://datasets-server.huggingface.co/rows?dataset=${dataset.path}&config=default&split=train&length=1`
        const response = await fetch(API_URL, {method: 'GET'})
        const result = await response.json()
        const row = result['rows'][0]['row']
        firstRow  = row
    }

    let isFirstCustomType = true
    $: if (dataset.type == 'custom' && isFirstCustomType) {
        dataset.format = 'System: {system}\n### Instruction: {instruction}\n### Output: {output}'
        console.log("set to custom dataset type")
        handleUpdateFormat()
        isFirstCustomType = false
    }

    $: if (dataset.format) {
        replacedString = dataset.format.replace(/\{(\w+)\}/g, (_, key) => {
            const fieldName = fields[key]
            if (fieldName) {
                return firstRow[fieldName];
            } else {
                return ""
            }
                
        });
    }

    const handleUpdateFormat = () => {
        if (dataset.format) {
            replacedString = dataset.format.replace(/\{(\w+)\}/g, (_, key) => {
                const fieldName = fields[key]
                return firstRow[fieldName];
            });
        }
    }

    const getDatasetFeatures = async () => {
        const API_URL = `https://datasets-server.huggingface.co/info?dataset=${dataset.path}`
        const response = await fetch(API_URL, {method: 'GET'})
        const result = await response.json()
        const feat = result['dataset_info']['default']['features']
        const keys = Object.keys(feat)
        console.log(keys)
        features = keys
    }
    let replacedString = ''
    getIsValidDataset()
    const datasetTypes = ['custom', 'alpaca', 'sharegpt:chat', 'completion', 'oasst', 'gpteacher', 'reflection', 'explainchoice', 'concisechoice', 'summarizetldr', 'alpaca_chat', 'alpaca_chat.load_qa','alpaca_chat.load_concise',
    'alpaca_chat.load_camel_ai', 'alpaca_w_system.load_open_orca', 'context_qa', 'context_qa.load_404', 'creative_acr.load_answer', 'creative_acr.load_critique', 'creative_acr.load_revise', 'pygmalion', 'sharegpt_simple.load_role', 'sharegpt_simple.load_guanaco', 'sharegpt_jokes']
</script>

<div class="py-2">
    <div class="w-full">
        <label class="font-bold" for={`dataset_path_${dataset.path}`}>Dataset Path<button type="button" on:click={() => handleRemoveDataset(dataset)} class="float-right">X</button></label>
        <input type="text" name={`dataset_path_${dataset.path}`} on:change={() => getIsValidDataset()} class="input" bind:value={dataset.path}>
        <span class="text-sm opacity-50">The dataset you want to train on. A dataset name from HuggingFace, or a relative path.</span>
    </div>
    <div>
        <div class="flex w-max space-x-2">
            <b>Features:</b>
            {#each features as feature }
                <span class="badge variant-ghost-primary">{feature}</span>
            {/each}
        </div>
    </div>
    <div class="w-full">
        <label class="font-bold" for={`dataset_type_${dataset.type}`}>Prompt Type</label> 
        <select name={`dataset_type_${dataset.type}`} class="input" bind:value={dataset.type}>
            {#each datasetTypes as datasetType }
                <option value={datasetType}>{datasetType}</option>
            {/each}
        </select>
        <span class="text-sm opacity-50">The prompt format the dataset will use. See <span><a class="anchor" href="https://github.com/OpenAccess-AI-Collective/axolotl#dataset">Axolotl Docs</a></span> for more information.</span>
    </div>
    {#if dataset.type == 'custom' }
        <div class="flex space-x-5">
            <FormInput name="System Field" fieldName="field_system">
                <select bind:value={dataset.field_system} class="input" name="field_system">
                    <option></option>
                    {#each features as feature }
                        <option value={feature}>{feature}</option>
                    {/each}
                </select>
            </FormInput>
            <FormInput name="Instruction Field" fieldName="field_instruction">
                <select bind:value={dataset.field_instruction} class="input" name="field_instruction">
                    <option></option>
                    {#each features as feature }
                        <option value={feature}>{feature}</option>
                    {/each}
                </select>
            </FormInput>
        </div>
        <div class="flex space-x-5">
            <FormInput name="Input Field" fieldName="field_input">
                <select bind:value={dataset.field_input} class="input" name="field_input">
                    <option></option>
                    {#each features as feature }
                        <option value={feature}>{feature}</option>
                    {/each}
                </select>
            </FormInput>
            <FormInput name="Output Field" fieldName="field_output">
                <select bind:value={dataset.field_output} class="input" name="field_output">
                    <option></option>
                    {#each features as feature }
                        <option value={feature}>{feature}</option>
                    {/each}
                </select>
            </FormInput>
        </div>
        <FormInput name="Prompt Format" fieldName="format">
            <textarea bind:value={dataset.format} on:change={handleUpdateFormat} class="textarea h-24"></textarea>
        </FormInput>
        <div class="whitespace-pre-line">
            <b>Example:</b> {replacedString}
        </div>
    {/if}
</div>