<script lang="ts">
	import { AccordionItem } from "@skeletonlabs/skeleton";
    import Dataset from "$lib/components/Dataset.svelte";
    import {config} from './config'


    const handleAddDataset = () => {
        $config.datasets.push({
            path: 'Open-Orca/OpenOrca',
            type: 'alpaca_w_system.load_open_orca_chatml',
            data_files: null,
            shards: null,
            name: null
        })

        $config.datasets = $config.datasets
    }
</script>

<AccordionItem open>
    <svelte:fragment slot="summary">
        <div class="text-xl font-bold">
            Datasets
        </div>
    </svelte:fragment>
    <svelte:fragment slot="content">
        <div class="pb-4">
            <div class="flex pb-2">
                <button type="button" on:click={handleAddDataset} class="btn btn-sm float-right variant-ghost-primary">Add Dataset</button>
            </div>
            <div>
                {#each $config.datasets as dataset }
                    <Dataset bind:config={$config} {dataset}/>
                {/each}
            </div>
            <div>
                <label class="font-bold" for="epoch">Epoch(s)</label>
                <input class="input" type="number" value={$config.num_epochs} min="1" max="100">
                <span class="text-sm opacity-80">The number of times the AI model will read through the dataset.</span>
            </div>
        </div>
    </svelte:fragment>
</AccordionItem>