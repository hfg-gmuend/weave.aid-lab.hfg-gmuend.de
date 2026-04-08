<script lang="ts">
  import Sidebar from '$lib/components/Sidebar.svelte';
  import FlowCard from '$lib/components/FlowCard.svelte';
  import { flows, categoryLabels } from '$lib/data/flows';
  import { Search } from 'lucide-svelte';

  let activeCategory: string | null = $state(null);
  let searchQuery = $state('');

  const filteredFlows = $derived.by(() => {
    let list = flows;
    if (activeCategory) {
      list = list.filter((f) => f.category === activeCategory);
    }
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      list = list.filter((f) => f.title.toLowerCase().includes(q));
    }
    return list;
  });

  const heading = $derived(
    activeCategory ? (categoryLabels[activeCategory] ?? activeCategory) : 'All Flows'
  );
</script>

<div class="app-shell">
  <Sidebar
    {activeCategory}
    onCategoryChange={(cat) => (activeCategory = cat)}
  />

  <main class="main">
    <!-- Header -->
    <header class="header">
      <div class="header-left">
        <h1 class="page-title">{heading}</h1>
        <span class="flow-count">{filteredFlows.length} Flows</span>
      </div>
    </header>

    <!-- Search -->
    <div class="search">
      <div class="search-field">
        <Search size={15} strokeWidth={1.5} class="search-icon" />
        <input
          class="search-input"
          type="search"
          placeholder="Search flows…"
          bind:value={searchQuery}
          aria-label="Search flows"
        />
      </div>
    </div>

    <!-- Grid -->
    {#if filteredFlows.length > 0}
      <div class="grid">
        {#each filteredFlows as flow, i (flow.id)}
          <FlowCard {flow} delay={i * 40} />
        {/each}
      </div>
    {:else}
      <div class="empty">
        <div class="empty-icon">🔍</div>
        <p class="empty-text">No flows match your search.</p>
      </div>
    {/if}
  </main>
</div>

<style>
  .app-shell {
    display: flex;
    min-height: 100vh;
    background: var(--color-bg);
  }

  .main {
    flex: 1;
    margin-left: var(--sidebar-width);
    display: flex;
    flex-direction: column;
    padding: 24px;
    height: 100vh;
    overflow-y: auto;
    overflow-x: hidden;
  }

  /* ── Header ── */
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-shrink: 0;
    margin-bottom: var(--spacing-s);
    animation: fadeIn 0.4s ease-out both;
  }

  .header-left {
    display: flex;
    align-items: center;
    gap: var(--spacing-s);
  }

  .page-title {
    font-size: 18px;
    font-weight: 600;
    letter-spacing: -0.02em;
  }

  .flow-count {
    font-size: var(--font-size-xs);
    color: var(--color-text-secondary);
    background: var(--color-card);
    padding: 4px 12px;
    border-radius: 999px;
  }

  /* ── Search ── */
  .search {
    flex-shrink: 0;
    margin-bottom: 20px;
    animation: fadeIn 0.4s ease-out 0.05s both;
  }

  .search-field {
    display: flex;
    align-items: center;
    gap: var(--spacing-xs);
    max-width: 400px;
    padding: 10px 14px;
    background: var(--color-card);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-md);
    transition: border-color 0.15s ease;
  }

  .search-field:focus-within {
    border-color: var(--color-accent);
  }

  .search-field :global(.search-icon) {
    flex-shrink: 0;
    color: var(--color-text-secondary);
  }

  .search-input {
    flex: 1;
    padding: 0;
    font-size: var(--font-size-sm);
    font-family: var(--font-family);
    color: var(--color-text);
    background: transparent;
    border: none;
    outline: none;
  }

  .search-input::placeholder {
    color: var(--color-text-secondary);
  }

  /* ── Grid ── */
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(460px, 1fr));
    gap: 20px;
    padding-bottom: 40px;
  }

  @media (max-width: 560px) {
    .grid {
      grid-template-columns: 1fr;
    }
  }

  /* ── Empty ── */
  .empty {
    text-align: center;
    padding: 80px 24px;
    color: var(--color-text-secondary);
  }

  .empty-icon {
    font-size: 2.5rem;
    margin-bottom: 12px;
    opacity: 0.4;
  }

  .empty-text {
    font-size: var(--font-size-sm);
  }
</style>
