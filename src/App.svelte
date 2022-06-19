<script>
  import Router, {location, link} from 'svelte-spa-router';
  import Home from './pages/Home.svelte';
  import Editor from './pages/Editor.svelte';
  import CreateProject from './pages/CreateProject.svelte';
</script>

<main>
  <Router routes={{
    '/': Home,
    '/create': CreateProject,
    '/editor/:projectId/:documentId': Editor,
    '/editor/:projectId': Editor
  }} />
  
  <hr>
  /#{$location}
</main>

<style>

</style>
