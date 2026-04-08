<script lang="ts">
  import { categories, categoryLabels, getCategoryCount } from '$lib/data/flows';
  import { LayoutGrid, Activity, Star, GraduationCap, Clapperboard, Radio, Building2 } from 'lucide-svelte';
  import DiscordIcon from './DiscordIcon.svelte';

  const categoryIcons: Record<string, typeof LayoutGrid> = {
    workflow: Activity,
    feature: Star,
    tutorial: GraduationCap,
    'tutorial-series': Clapperboard,
    live: Radio,
    architecture: Building2,
  };

  function getIcon(cat: string) {
    return categoryIcons[cat] ?? LayoutGrid;
  }

  let {
    activeCategory = null,
    onCategoryChange,
  }: {
    activeCategory?: string | null;
    onCategoryChange?: (category: string | null) => void;
  } = $props();

  function select(cat: string | null) {
    onCategoryChange?.(cat);
  }
</script>

<aside class="sidebar">
  <div class="sidebar-top">
    <!-- Brand -->
    <div class="brand-section">
      <a class="brand" href="/">
        <img src="/assets/android-chrome-192x192.png" alt="Weavy" class="brand-icon" />
        <div>
          <div class="brand-title">Weavy Flow Gallery</div>
        </div>
      </a>
    </div>

    <!-- Category Navigation -->
    <nav class="nav-list">
      <div class="nav-section-label">Categories</div>

      <button
        class="nav-item"
        class:active={activeCategory === null}
        onclick={() => select(null)}
      >
        <div class="nav-icon">
          <LayoutGrid size={18} strokeWidth={1.5} />
        </div>
        <span class="nav-label">All</span>
        <span class="nav-badge">{getCategoryCount(null)}</span>
      </button>

      {#each categories as cat}
        <button
          class="nav-item"
          class:active={activeCategory === cat}
          onclick={() => select(cat)}
        >
          <div class="nav-icon">
            {#if cat === 'workflow'}<Activity size={18} strokeWidth={1.5} />
            {:else if cat === 'feature'}<Star size={18} strokeWidth={1.5} />
            {:else if cat === 'tutorial'}<GraduationCap size={18} strokeWidth={1.5} />
            {:else if cat === 'tutorial-series'}<Clapperboard size={18} strokeWidth={1.5} />
            {:else if cat === 'live'}<Radio size={18} strokeWidth={1.5} />
            {:else if cat === 'architecture'}<Building2 size={18} strokeWidth={1.5} />
            {:else}<LayoutGrid size={18} strokeWidth={1.5} />
            {/if}
          </div>
          <span class="nav-label">{categoryLabels[cat] ?? cat}</span>
          <span class="nav-badge">{getCategoryCount(cat)}</span>
        </button>
      {/each}
    </nav>
  </div>

  <!-- Bottom -->
  <div class="sidebar-bottom">
    <a href="https://discord.gg" class="nav-item" target="_blank" rel="noopener">
      <div class="nav-icon">
        <span class="discord-icon"><DiscordIcon /></span>
      </div>
      <span class="nav-label">Discord</span>
    </a>
  </div>
</aside>

<style>
  .sidebar {
    width: var(--sidebar-width);
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-right: 1px solid var(--color-sidebar-border);
    overflow-y: auto;
    overflow-x: hidden;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 10;
    animation: slideInLeft 0.4s ease-out both;
  }

  .sidebar-top {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-xs);
    padding-bottom: 24px;
  }

  /* ── Brand ── */
  .brand-section {
    padding: var(--spacing-s) var(--spacing-s) var(--spacing-xs);
  }

  .brand {
    display: flex;
    align-items: center;
    gap: 10px;
    text-decoration: none;
    color: var(--color-text);
  }

  .brand-icon {
    width: 28px;
    height: 28px;
    border-radius: var(--radius-sm);
    flex-shrink: 0;
  }

  .brand-title {
    font-size: var(--font-size-sm);
    font-weight: 600;
    letter-spacing: -0.02em;
  }


  /* ── Navigation ── */
  .nav-list {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-xxxs);
    padding: var(--spacing-xs) var(--spacing-xs);
  }

  .nav-section-label {
    font-size: 10px;
    font-weight: var(--font-weight-medium);
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: var(--color-text-secondary);
    padding: var(--spacing-xs) var(--spacing-s) var(--spacing-xxs);
  }

  .nav-item {
    display: flex;
    align-items: center;
    height: 40px;
    padding: var(--spacing-xs) var(--spacing-s);
    border-radius: var(--radius-sm);
    font-size: var(--font-size-sm);
    transition: background 0.15s ease;
    color: var(--color-text);
    width: 100%;
    text-align: left;
  }

  .nav-item:hover {
    background: var(--color-hover);
  }

  .nav-item.active {
    background: var(--color-surface);
    font-weight: var(--font-weight-medium);
  }

  .nav-icon {
    display: flex;
    align-items: center;
    min-width: 28px;
    padding-right: var(--spacing-xs);
    flex-shrink: 0;
    color: var(--color-text-secondary);
  }

  .nav-item.active .nav-icon {
    color: var(--color-accent);
  }

  .nav-label {
    flex: 1;
    white-space: nowrap;
  }

  .nav-badge {
    flex-shrink: 0;
    font-size: 10px;
    font-weight: var(--font-weight-medium);
    color: var(--color-text-secondary);
    background: var(--color-card-alt);
    padding: 2px 7px;
    border-radius: 999px;
    min-width: 22px;
    text-align: center;
  }

  .nav-item.active .nav-badge {
    background: var(--color-accent-dim);
    color: var(--color-accent);
  }

  /* ── Bottom ── */
  .sidebar-bottom {
    padding: var(--spacing-s) var(--spacing-xs);
  }

  .sidebar-bottom .nav-item {
    width: 100%;
  }

  .discord-icon {
    display: flex;
    width: 18px;
    height: 14px;
  }

  .discord-icon :global(svg) {
    width: 100%;
    height: 100%;
  }
</style>
