<script lang="ts">
    export let name: string
    export let fieldName: string
</script>

<div class="w-full">
    <label class="font-bold" for={fieldName}>
        {name}
        <slot name="label"/>
    </label>
    
    <slot/>

    <span class="text-sm opacity-80">
        <slot name="description"/>
    </span>
</div>