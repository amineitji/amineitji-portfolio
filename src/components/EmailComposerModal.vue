<template>
  <teleport to="body">
    <transition name="composer-fade">
      <div
        v-if="visible"
        class="composer-overlay"
        @click.self="emitClose"
      >
        <div
          class="composer-panel"
          role="dialog"
          aria-modal="true"
          aria-labelledby="email-composer-title"
        >
          <button class="composer-close" type="button" :aria-label="copy.closeLabel" @click="emitClose">
            <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          <div class="composer-head">
            <span class="composer-kicker">{{ copy.kicker }}</span>
            <h2 id="email-composer-title">{{ heading }}</h2>
            <p>{{ copy.subtitle }}</p>
          </div>

          <div v-if="contextBadges.length" class="composer-badges">
            <div v-for="badge in contextBadges" :key="`${badge.label}-${badge.value}`" class="composer-badge">
              <span class="badge-label">{{ badge.label }}</span>
              <span class="badge-value">{{ badge.value }}</span>
            </div>
          </div>

          <form class="composer-form" @submit.prevent="openMailClient">
            <div class="composer-grid">
              <label class="field">
                <span>{{ copy.labels.fullName }}</span>
                <input
                  ref="firstInput"
                  v-model.trim="form.fullName"
                  type="text"
                  :placeholder="copy.placeholders.fullName"
                  maxlength="80"
                />
              </label>

              <label class="field">
                <span>{{ copy.labels.company }}</span>
                <input
                  v-model.trim="form.company"
                  type="text"
                  :placeholder="copy.placeholders.company"
                  maxlength="80"
                />
              </label>

              <label class="field">
                <span>{{ copy.labels.senderEmail }}</span>
                <input
                  v-model.trim="form.senderEmail"
                  type="email"
                  :placeholder="copy.placeholders.senderEmail"
                  maxlength="120"
                />
              </label>

              <label class="field">
                <span>{{ copy.labels.phone }}</span>
                <input
                  v-model.trim="form.phone"
                  type="tel"
                  :placeholder="copy.placeholders.phone"
                  maxlength="40"
                />
              </label>

              <label class="field">
                <span>{{ copy.labels.service }}</span>
                <select v-model="form.service">
                  <option v-for="service in copy.services" :key="service.value" :value="service.value">
                    {{ service.label }}
                  </option>
                </select>
              </label>

              <label class="field">
                <span>{{ copy.labels.budget }}</span>
                <select v-model="form.budget">
                  <option v-for="budget in copy.budgets" :key="budget.value" :value="budget.value">
                    {{ budget.label }}
                  </option>
                </select>
              </label>

              <label class="field">
                <span>{{ copy.labels.timeline }}</span>
                <select v-model="form.timeline">
                  <option v-for="timeline in copy.timelines" :key="timeline.value" :value="timeline.value">
                    {{ timeline.label }}
                  </option>
                </select>
              </label>
            </div>

            <div class="priority-block">
              <div class="priority-head">
                <span>{{ copy.priorities }}</span>
                <small>{{ copy.emptyPriority }}</small>
              </div>
              <div class="priority-chips">
                <button
                  v-for="priority in copy.prioritiesList"
                  :key="priority.value"
                  type="button"
                  class="priority-chip"
                  :class="{ active: form.priorities.includes(priority.value) }"
                  @click="togglePriority(priority.value)"
                >
                  {{ priority.label }}
                </button>
              </div>
            </div>

            <label class="field field-full">
              <span>{{ copy.labels.objective }}</span>
              <textarea
                v-model.trim="form.objective"
                :placeholder="copy.placeholders.objective"
                rows="3"
                maxlength="320"
              ></textarea>
            </label>

            <label class="field field-full">
              <span>{{ copy.labels.details }}</span>
              <textarea
                v-model.trim="form.details"
                :placeholder="copy.placeholders.details"
                rows="3"
                maxlength="360"
              ></textarea>
            </label>

            <label class="field field-full">
              <span>{{ copy.labels.constraints }}</span>
              <textarea
                v-model.trim="form.constraints"
                :placeholder="copy.placeholders.constraints"
                rows="3"
                maxlength="320"
              ></textarea>
            </label>

            <label class="field field-full">
              <span>{{ copy.labels.availability }}</span>
              <textarea
                v-model.trim="form.availability"
                :placeholder="copy.placeholders.availability"
                rows="2"
                maxlength="220"
              ></textarea>
            </label>

            <div class="preview-box">
              <div class="preview-head">
                <span>{{ copy.preview }}</span>
                <strong>{{ copy.subject }}: {{ draft.subject }}</strong>
              </div>
              <pre>{{ draft.body }}</pre>
            </div>

            <div class="composer-actions">
              <button type="button" class="btn btn-outline" @click="resetForm">
                {{ copy.reset }}
              </button>
              <button type="submit" class="btn btn-dark">
                {{ copy.submit }}
              </button>
            </div>

            <p class="composer-note">{{ copy.note }}</p>
          </form>
        </div>
      </div>
    </transition>
  </teleport>
</template>

<script>
import {
  buildEmailDraft,
  createEmailComposerForm,
  getEmailComposerContent,
} from '../utils/emailComposer';

export default {
  name: 'EmailComposerModal',

  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    context: {
      type: Object,
      default: () => ({}),
    },
    lang: {
      type: String,
      default: 'fr',
    },
    contactEmail: {
      type: String,
      required: true,
    },
  },

  emits: ['close'],

  data() {
    return {
      form: createEmailComposerForm(),
    };
  },

  computed: {
    copy() {
      const content = getEmailComposerContent(this.lang);

      return {
        ...content,
        closeLabel: this.lang === 'en' ? 'Close email composer' : "Fermer le composeur d'email",
      };
    },

    heading() {
      if (this.context.offerName) {
        return this.lang === 'en'
          ? `Prepare your email for ${this.context.offerName}`
          : `Préparer votre email pour ${this.context.offerName}`;
      }

      return this.copy.title;
    },

    contextBadges() {
      const badges = [];

      if (this.context.source) {
        badges.push({ label: this.copy.badges.source, value: this.context.source });
      }

      if (this.context.offerName) {
        badges.push({ label: this.copy.badges.offer, value: this.context.offerName });
      }

      if (this.context.priceHint) {
        badges.push({ label: this.copy.badges.price, value: this.context.priceHint });
      }

      if (this.context.timelineHint) {
        badges.push({ label: this.copy.badges.timeline, value: this.context.timelineHint });
      }

      return badges;
    },

    draft() {
      return buildEmailDraft({
        lang: this.lang,
        context: this.context,
        form: this.form,
        contactEmail: this.contactEmail,
      });
    },
  },

  watch: {
    visible: {
      immediate: true,
      handler(isVisible) {
        if (isVisible) {
          this.resetForm();
          window.addEventListener('keydown', this.handleKeydown);
          this.$nextTick(() => {
            if (this.$refs.firstInput) {
              this.$refs.firstInput.focus();
            }
          });
          return;
        }

        window.removeEventListener('keydown', this.handleKeydown);
      },
    },

    context: {
      deep: true,
      handler() {
        if (this.visible) {
          this.resetForm();
        }
      },
    },
  },

  beforeUnmount() {
    window.removeEventListener('keydown', this.handleKeydown);
  },

  methods: {
    emitClose() {
      this.$emit('close');
    },

    handleKeydown(event) {
      if (event.key === 'Escape') {
        this.emitClose();
      }
    },

    resetForm() {
      this.form = createEmailComposerForm(this.context);
    },

    togglePriority(value) {
      if (this.form.priorities.includes(value)) {
        this.form.priorities = this.form.priorities.filter((item) => item !== value);
        return;
      }

      this.form.priorities = [...this.form.priorities, value];
    },

    openMailClient() {
      window.location.href = this.draft.href;
      this.emitClose();
    },
  },
};
</script>

<style scoped>
.composer-fade-enter-active,
.composer-fade-leave-active {
  transition: opacity 0.22s ease;
}

.composer-fade-enter-from,
.composer-fade-leave-to {
  opacity: 0;
}

.composer-overlay {
  position: fixed;
  inset: 0;
  z-index: 800;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background: rgba(17, 17, 24, 0.56);
  backdrop-filter: blur(6px);
}

.composer-panel {
  position: relative;
  width: min(920px, 100%);
  max-height: calc(100vh - 40px);
  overflow-y: auto;
  border: 1px solid var(--border);
  border-radius: 24px;
  background: var(--bg);
  box-shadow: var(--shadow-xl);
  padding: 28px;
}

.composer-close {
  position: absolute;
  top: 16px;
  right: 16px;
  width: 36px;
  height: 36px;
  border: 1px solid var(--border);
  border-radius: 12px;
  background: var(--surface);
  color: var(--text-muted);
  cursor: pointer;
  transition: all 0.2s ease;
}

.composer-close:hover {
  color: var(--ink);
  border-color: var(--border-dark);
  transform: translateY(-1px);
}

.composer-head {
  max-width: 640px;
  margin-bottom: 22px;
}

.composer-kicker {
  display: inline-flex;
  margin-bottom: 8px;
  padding: 5px 10px;
  border-radius: 999px;
  background: rgba(197, 154, 69, 0.12);
  color: var(--gold);
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.composer-head h2 {
  font-size: clamp(1.5rem, 2.4vw, 2.1rem);
  line-height: 1.06;
  letter-spacing: -0.04em;
  color: var(--ink);
  margin-bottom: 10px;
}

.composer-head p {
  color: var(--text-muted);
  line-height: 1.65;
  max-width: 60ch;
}

.composer-badges {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 12px;
  margin-bottom: 22px;
}

.composer-badge {
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 14px;
  border: 1px solid var(--border);
  border-radius: 16px;
  background: var(--surface);
}

.badge-label {
  font-size: 0.72rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--text-muted);
}

.badge-value {
  font-size: 0.92rem;
  font-weight: 600;
  color: var(--ink);
  line-height: 1.45;
}

.composer-form {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.composer-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 14px;
}

.field {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.field span,
.priority-head span {
  font-size: 0.82rem;
  font-weight: 700;
  color: var(--ink);
}

.field input,
.field select,
.field textarea {
  width: 100%;
  border: 1px solid var(--border);
  border-radius: 14px;
  padding: 12px 14px;
  background: var(--white);
  color: var(--ink);
  font: inherit;
  resize: vertical;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.field input:focus,
.field select:focus,
.field textarea:focus {
  border-color: rgba(197, 154, 69, 0.8);
  box-shadow: 0 0 0 3px rgba(197, 154, 69, 0.12);
  outline: none;
}

.field-full {
  width: 100%;
}

.priority-block {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 18px;
  border: 1px solid var(--border);
  border-radius: 18px;
  background: var(--surface);
}

.priority-head {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 12px;
  flex-wrap: wrap;
}

.priority-head small {
  color: var(--text-muted);
  line-height: 1.5;
}

.priority-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.priority-chip {
  border: 1px solid var(--border);
  border-radius: 999px;
  padding: 9px 14px;
  background: var(--white);
  color: var(--gray-700);
  font: inherit;
  font-size: 0.82rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
}

.priority-chip:hover,
.priority-chip.active {
  border-color: var(--gold);
  background: rgba(197, 154, 69, 0.12);
  color: var(--ink);
}

.preview-box {
  border: 1px solid var(--border);
  border-radius: 18px;
  background: #fffaf1;
  padding: 18px;
}

.preview-head {
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 12px;
}

.preview-head span {
  font-size: 0.78rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--text-muted);
}

.preview-head strong {
  color: var(--ink);
  line-height: 1.45;
}

.preview-box pre {
  margin: 0;
  white-space: pre-wrap;
  word-break: break-word;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', monospace;
  font-size: 0.82rem;
  line-height: 1.6;
  color: var(--gray-800);
}

.composer-actions {
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  flex-wrap: wrap;
}

.composer-note {
  color: var(--text-muted);
  font-size: 0.78rem;
  line-height: 1.6;
}

@media (max-width: 900px) {
  .composer-badges,
  .composer-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 640px) {
  .composer-overlay {
    padding: 12px;
  }

  .composer-panel {
    padding: 20px 16px 18px;
    border-radius: 20px;
  }

  .composer-badges,
  .composer-grid {
    grid-template-columns: 1fr;
  }

  .priority-head {
    flex-direction: column;
    align-items: flex-start;
  }

  .composer-actions {
    justify-content: stretch;
  }

  .composer-actions .btn {
    width: 100%;
    justify-content: center;
  }
}
</style>
