<script lang="ts">
	import YamlViewer from '../../lib/components/YamlViewer.svelte';
	import Datasets from './Datasets.svelte';
    import { Accordion } from '@skeletonlabs/skeleton';
    import {config} from './config'
    import {validate_config} from './validation'
    import yaml from 'js-yaml'
	import Model from './Model.svelte';
	import Wandb from './Wandb.svelte';
	import Lora from './Lora.svelte';
	import Hyperparameters from './Hyperparameters.svelte';
	import Optimization from './Optimization.svelte';
	import Checkpoints from './Checkpoints.svelte';

    $: $config = validate_config($config) 

    function removeFields(obj: any) {
        for (const prop in obj) {
            if (obj[prop] === null || prop.startsWith('_')) {
                delete obj[prop];
            } else if (typeof obj[prop] === 'object') {
                removeFields(obj[prop]); // Recurse into nested objects
            if (Object.keys(obj[prop]).length === 0) {
                delete obj[prop]; // Remove the property if the nested object is now empty
            }
            }
        }
        return obj
    }

    const handleSubmit = async () => {
        const config_cleaned = removeFields($config)
        const yml_obj = yaml.dump(config_cleaned)
        const blob = new Blob([yml_obj], {type: 'application/yml'})
        let a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = 'config.yml';  // You can name your file here
        // Append the link to the document and trigger a click to start the download
        document.body.appendChild(a);
        a.click();
        // Cleanup: remove the link after the download starts
        document.body.removeChild(a);
    }
</script>

<form on:submit|preventDefault={handleSubmit} class="space-y-10 max-w-3xl mx-auto">
    <div class="flex space-x-4">
        <Accordion class="card p-4">
            <Model/>
            <Datasets/>
            <Hyperparameters/>
            <Wandb/>
            <Lora/>
            <Optimization/>
            <Checkpoints/>
            <YamlViewer {config}/>
        </Accordion>
    </div>
    <div>
        <button type="submit" class="btn variant-filled">Download YAML</button>
    </div>
</form>