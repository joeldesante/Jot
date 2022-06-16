<script>
    import DocumentNodeElement from "./DocumentNodeElement.svelte";
    export let project;
</script>

<div>
    <h2>Overview</h2>
    <ul>
        <DocumentNodeElement projectId={project.id} documentNode={project.rootDocumentNode} />
    </ul>
</div>

<style>
    div {
        border-right: 1px solid #EEE;
    }
</style>