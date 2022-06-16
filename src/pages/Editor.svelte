<script>
export let params;

import Sidebar from "../lib/editor/sidebar/Sidebar.svelte";
import { saveProject, loadProject }  from "../lib/editor/classes/Project.js";
import DocumentPage from "../lib/editor/page/DocumentPage.svelte";
import { onMount } from "svelte";

let project;

onMount(async () => {
    project = await loadProject();
});

function getDocumentId(params) {
    if(params.documentId === undefined || params.documentId === null) {
        console.log(project.rootDocumentNode)
        return project.rootDocumentNode.id;
    }
    return params.documentId;
}

function _saveProject() {
    saveProject(project);
}


</script>

{#if project}
<main>
    <button on:click={_saveProject}>Save</button>
    <section>
        <aside>
            <Sidebar project={project} />
        </aside>
        <article>
            <DocumentPage documentNode={ project.findDocumentById(getDocumentId(params)) } />
        </article>
    </section>
    <footer>
        Saving
    </footer>
</main>

{/if}

<style>
    main > section {
        display: grid;
        grid-template-columns: 4fr 8fr;
    }

    main > section > article > div {
        width: 100%;
        height: 100%;
    }
</style>