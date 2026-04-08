<script lang="ts">
  import type { Flow } from '$lib/data/flows';
  import { categoryLabels } from '$lib/data/flows';
  import { ExternalLink, Copy, Check, ArrowUpRight } from 'lucide-svelte';
  import YoutubeIcon from './YoutubeIcon.svelte';

  let { flow, delay = 0 }: { flow: Flow; delay?: number } = $props();

  let activeTab = $state(0);
  let copyFeedback = $state(false);

  const activeLink = $derived(flow.links[activeTab]);
  const shortId = $derived(
    activeLink.url.split('/flow/')[1]?.replace(/\/$/, '').slice(0, 12) + '…'
  );

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(activeLink.url);
      copyFeedback = true;
      setTimeout(() => (copyFeedback = false), 1500);
    } catch {
      /* clipboard may not be available */
    }
  }
</script>

<article class="card" style="animation-delay: {delay}ms">
  <!-- Preview (hero area first for visual impact) -->
  <a class="preview" href={activeLink.url} target="_blank" rel="noopener noreferrer">
    <img class="preview-img" src={activeLink.thumb} alt={flow.title} />
    <div class="preview-overlay">
      <span class="preview-cta">
        <ArrowUpRight size={14} strokeWidth={2} />
        Open in Weavy
      </span>
    </div>
    <span class="preview-id">{shortId}</span>
    <span class="card-number">{flow.id}</span>
  </a>

  <!-- Content -->
  <div class="card-body">
    <div class="card-meta">
      <span class="card-category">{categoryLabels[flow.category] ?? flow.category}</span>
      {#if flow.links.length > 1}
        <div class="card-tabs">
          {#each flow.links as link, i}
            <button
              class="tab"
              class:active={i === activeTab}
              onclick={() => (activeTab = i)}
            >
              {link.label}
            </button>
          {/each}
        </div>
      {/if}
    </div>

    <h2 class="card-title">{flow.title}</h2>

    <div class="card-actions">
      <a class="btn btn-primary" href={activeLink.url} target="_blank" rel="noopener noreferrer">
        <ExternalLink size={13} />
        Flow öffnen
      </a>
      {#if flow.youtube}
        <a class="btn btn-youtube" href={flow.youtube} target="_blank" rel="noopener noreferrer">
          <span class="yt-icon"><YoutubeIcon /></span>
          Video
        </a>
      {/if}
      <button class="btn btn-ghost btn-copy" class:copied={copyFeedback} onclick={copyLink}>
        {#if copyFeedback}
          <Check size={13} />
        {:else}
          <Copy size={13} />
        {/if}
      </button>
    </div>
  </div>
</article>

<style>
  a {
    cursor: pointer;
  }

  .card {
    background: var(--color-card);
    border: 1px solid rgba(255, 255, 255, 0.06);
    border-radius: 12px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
    animation: fadeSlideIn 0.45s ease-out both;
  }

  .card:hover {
    transform: translateY(-3px);
    border-color: rgba(255, 255, 255, 0.1);
    box-shadow:
      0 12px 40px rgba(0, 0, 0, 0.4),
      0 0 0 1px rgba(255, 255, 255, 0.06);
  }

  /* ── Preview (hero, top of card) ── */
  .preview {
    position: relative;
    width: 100%;
    aspect-ratio: 16 / 9;
    background: var(--color-bg);
    overflow: hidden;
    display: block;
    cursor: pointer;
  }

  .preview-img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center 55%;
    transition: transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94), filter 0.4s ease;
    filter: brightness(0.82) saturate(0.95);
  }

  .preview:hover .preview-img {
    transform: scale(1.05);
    filter: brightness(1) saturate(1);
  }

  /* Soft bottom fade into card body */
  .preview::after {
    content: '';
    position: absolute;
    inset: 0;
    z-index: 1;
    pointer-events: none;
    background: linear-gradient(
      to top,
      var(--color-card) 0%,
      rgba(33, 33, 38, 0.4) 30%,
      transparent 60%
    );
    transition: opacity 0.35s ease;
  }

  /* Hover overlay */
  .preview-overlay {
    position: absolute;
    inset: 0;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    background: rgba(14, 14, 19, 0.5);
    backdrop-filter: blur(6px);
    transition: opacity 0.3s ease;
  }

  .preview:hover .preview-overlay {
    opacity: 1;
  }

  .preview-cta {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 8px 16px;
    font-family: var(--font-family);
    font-size: var(--font-size-xs);
    font-weight: var(--font-weight-medium);
    color: var(--color-accent-text);
    background: var(--color-accent);
    border-radius: 6px;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }

  .preview-cta :global(svg) {
    width: 14px;
    height: 14px;
  }

  .preview:hover .preview-cta {
    transform: scale(1.03);
    box-shadow: 0 4px 20px rgba(247, 255, 168, 0.25);
  }

  .preview-id {
    position: absolute;
    z-index: 3;
    bottom: 10px;
    right: 12px;
    font-family: 'DM Sans', sans-serif;
    font-size: 10px;
    font-variant-numeric: tabular-nums;
    color: rgba(255, 255, 255, 0.4);
    background: rgba(14, 14, 19, 0.65);
    padding: 3px 8px;
    border-radius: 6px;
    backdrop-filter: blur(4px);
  }

  .card-number {
    position: absolute;
    z-index: 3;
    top: 12px;
    left: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    font-size: 11px;
    font-weight: 600;
    color: var(--color-accent);
    background: rgba(14, 14, 19, 0.7);
    border: 1px solid rgba(247, 255, 168, 0.2);
    border-radius: 8px;
    backdrop-filter: blur(4px);
  }

  /* ── Body ── */
  .card-body {
    display: flex;
    flex-direction: column;
    flex: 1;
    gap: 14px;
    padding: 20px 20px 18px;
  }

  .card-meta {
    display: flex;
    align-items: center;
    gap: var(--spacing-xs);
  }

  .card-category {
    font-size: 10px;
    font-weight: var(--font-weight-medium);
    text-transform: uppercase;
    letter-spacing: 0.06em;
    color: var(--color-text-secondary);
    background: rgba(255, 255, 255, 0.06);
    padding: 4px 10px;
    border-radius: 6px;
  }

  .card-title {
    font-size: 15px;
    font-weight: 500;
    line-height: 1.5;
    letter-spacing: -0.01em;
    color: var(--color-text);
    text-wrap: balance;
    text-wrap: pretty;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    min-height: 3em;
  }

  /* ── Tabs ── */
  .card-tabs {
    display: flex;
    gap: 3px;
    margin-left: auto;
  }

  .tab {
    font-size: 10px;
    font-weight: var(--font-weight-medium);
    padding: 4px 10px;
    border-radius: 6px;
    color: var(--color-text-secondary);
    background: transparent;
    border: 1px solid rgba(255, 255, 255, 0.08);
    transition: all 0.15s ease;
  }

  .tab:hover {
    color: var(--color-text);
    background: rgba(255, 255, 255, 0.04);
    border-color: rgba(255, 255, 255, 0.12);
  }

  .tab.active {
    background: var(--color-accent-dim);
    border-color: rgba(247, 255, 168, 0.3);
    color: var(--color-accent);
  }

  /* ── Actions ── */
  .card-actions {
    display: flex;
    align-items: center;
    gap: var(--spacing-xs);
    padding-top: 2px;
    margin-top: auto;
  }

  .btn {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 7px 14px;
    font-family: var(--font-family);
    font-size: var(--font-size-xs);
    font-weight: var(--font-weight-medium);
    text-decoration: none;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.2s ease;
    border: none;
  }

  .btn :global(svg) {
    width: 13px;
    height: 13px;
    flex-shrink: 0;
  }

  .yt-icon {
    display: flex;
    width: 18px;
    height: 13px;
  }

  .yt-icon :global(svg) {
    width: 100%;
    height: 100%;
  }

  .btn-primary {
    background: var(--color-accent);
    color: var(--color-accent-text);
  }

  .btn-primary:hover {
    background: var(--color-accent-hover);
    box-shadow: 0 2px 12px rgba(247, 255, 168, 0.2);
  }

  .btn-youtube {
    background: rgba(255, 0, 0, 0.15);
    color: #fff;
  }

  .btn-youtube:hover {
    background: rgba(255, 0, 0, 0.25);
  }

  .btn-youtube :global(svg) {
    width: 14px;
    height: 14px;
  }

  .btn-ghost {
    background: transparent;
    color: var(--color-text-secondary);
    padding: 7px 9px;
  }

  .btn-ghost:hover {
    color: var(--color-text);
    background: rgba(255, 255, 255, 0.06);
  }

  .btn-copy {
    margin-left: auto;
  }

  .btn-copy.copied {
    color: var(--color-accent);
  }
</style>
