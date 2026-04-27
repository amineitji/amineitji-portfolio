<template>
  <transition name="modal-fade">
    <div v-if="visible" class="modal-overlay" @click.self="$emit('close')" role="dialog" aria-modal="true">
      <div class="modal-box">
        <div class="modal-header">
          <div class="modal-title-wrap">
            <span class="modal-tag">{{ tag }}</span>
            <h3 class="modal-title">{{ title }}</h3>
          </div>
          <button class="modal-close" @click="$emit('close')" aria-label="Fermer">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>
        <div class="modal-video">
          <iframe
            v-if="visible"
            :src="`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`"
            title="Démo vidéo"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div v-if="description" class="modal-desc">
          <p>{{ description }}</p>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'VideoModal',
  emits: ['close'],
  props: {
    visible: { type: Boolean, default: false },
    videoId: { type: String, required: true },
    title:   { type: String, default: '' },
    tag:     { type: String, default: 'Démo' },
    description: { type: String, default: '' },
  },
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(17, 24, 39, 0.7);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.modal-box {
  background: var(--surface);
  border-radius: 12px;
  width: 100%;
  max-width: 800px;
  box-shadow: 0 24px 64px rgba(17, 24, 39, 0.2);
  overflow: hidden;
}

.modal-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
  padding: 20px 20px 16px;
  border-bottom: 1px solid var(--border);
}

.modal-title-wrap {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.modal-tag {
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--forest-md);
}

.modal-title {
  font-size: 1rem;
  font-weight: 700;
  color: var(--ink);
  line-height: 1.3;
}

.modal-close {
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: 6px;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: var(--muted);
  flex-shrink: 0;
  transition: all 0.18s ease;
}
.modal-close:hover {
  background: var(--forest-lt);
  border-color: var(--forest-border);
  color: var(--forest);
}

.modal-video {
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
  background: #000;
}
.modal-video iframe {
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
}

.modal-desc {
  padding: 14px 20px 18px;
  border-top: 1px solid var(--border);
}
.modal-desc p {
  font-size: 0.82rem;
  color: var(--muted);
  line-height: 1.65;
}

/* Transitions */
.modal-fade-enter-active, .modal-fade-leave-active {
  transition: opacity 0.25s ease;
}
.modal-fade-enter-active .modal-box, .modal-fade-leave-active .modal-box {
  transition: transform 0.25s var(--ease);
}
.modal-fade-enter-from, .modal-fade-leave-to { opacity: 0; }
.modal-fade-enter-from .modal-box { transform: scale(0.96) translateY(10px); }
.modal-fade-leave-to .modal-box { transform: scale(0.96) translateY(10px); }

@media (max-width: 600px) {
  .modal-overlay { padding: 12px; align-items: flex-end; }
  .modal-box { border-radius: 12px 12px 0 0; max-width: 100%; }
}
</style>
