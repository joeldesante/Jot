<script>
  import Router, {location, link} from 'svelte-spa-router';
  import Home from './pages/Home.svelte';
  import Editor from './pages/Editor.svelte';
</script>

<main>
  <Router routes={{
    '/': Home,
    '/editor/:projectId/:documentId': Editor,
    '/editor/:projectId': Editor,
  }} />
  
  <hr>
  /#{$location}
</main>

<style>

</style>
