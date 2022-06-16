<script>
    export let documentNode;
    export let projectId;

    import DocumentNode from '../classes/DocumentNode';
    import {Icon} from '@steeze-ui/svelte-icon';
    import { ChevronLeft, ChevronDown, DocumentAdd } from '@steeze-ui/heroicons';
    import { link } from "svelte-spa-router";

    let isOpen = false;

    function toggleOpen() {
        isOpen = !isOpen;
    }

    function addDocument() {
        // This strange syntax is due to quirks with how reactivity works in most frontend 
        // frameworks... See https://svelte.dev/tutorial/updating-arrays-and-objects for details.
        documentNode.childDocuments = [...documentNode.childDocuments, new DocumentNode()];
        isOpen = true;
    }
</script>

<!-- This is intented to be used withing the context of a UL or OL element -->
<li>
    <div>
        <a href={`/editor/${projectId}/${documentNode.id}`} use:link>
            { documentNode.title }
        </a>
        <span on:click={addDocument}>
            <Icon src={DocumentAdd} theme="outline" width="16px" height="16px" />
        </span>
        {#if documentNode.childDocuments.length > 0}
            <span on:click={toggleOpen}>
                {#if isOpen}
                    <Icon src={ChevronDown} theme='solid' width="20px" height="20px"/>
                {:else}
                    <Icon src={ChevronLeft} theme='solid' width="20px" height="20px"/>
                {/if}
            </span>
        {/if}
    </div>
    <ul>
        {#if isOpen}
            {#each documentNode.childDocuments as childDocument }
                <svelte:self projectId={projectId} documentNode={childDocument} /> 
            {/each}
        {/if}
    </ul>
</li>