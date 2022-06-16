<script>
    export let documentNode;

</script>
{#if documentNode}
<input type="text" bind:value={documentNode.title}/>
<div contenteditable="true" bind:innerHTML={ documentNode.content }>
    Hello
</div>
{:else}
    <h2>Invalid Document. Please try again.</h2>
{/if}

<style>
    div {
        width: 100%;
        height: 100%;
        background-color: #CCCCCC;
    }
</style>