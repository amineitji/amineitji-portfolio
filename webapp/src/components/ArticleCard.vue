<template>
    <div>
      <!-- Carte compacte -->
      <div class="card" @click="openModal">
        <img :src="imageSrc" class="card-img-top" alt="card image" />
        <div class="card-img-overlay d-flex align-items-end">
          <h5 class="card-title text-white">{{ title }}</h5>
          <span class="expand-arrow text-white ml-auto">▶</span>
        </div>
        <div class="card-footer bg-transparent">
          <span class="badge badge-primary">{{ tag }}</span>
        </div>
      </div>
  
      <!-- Modal pour l'article complet -->
      <div class="modal fade" id="articleModal" tabindex="-1" aria-labelledby="articleModalLabel" aria-hidden="true" ref="articleModal">
        <div class="modal-dialog modal-dialog-centered modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="articleModalLabel">{{ title }}</h5>
              <button type="button" class="btn-close text-danger" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <div v-for="(item, index) in content" :key="index">
                <p v-if="typeof item === 'string'">{{ item }}</p>
                <img v-else-if="typeof item === 'object'" :src="item.src" :alt="item.alt" class="img-fluid mb-3" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  // Assurez-vous d'importer Bootstrap Modal ici
  import { Modal } from 'bootstrap';
  
  export default {
    name: 'ArticleCard',
    props: {
      title: {
        type: String,
        required: true,
      },
      imageSrc: {
        type: String,
        required: true,
      },
      content: {
        type: Array,
        required: true,
      },
      tag: {
        type: String,
        required: true,
      },
    },
    methods: {
      openModal() {
        const modalElement = this.$refs.articleModal;
        const modal = new Modal(modalElement);
        modal.show();
      },
    },
  };
  </script>
  
  <style scoped>
  .card {
    cursor: pointer;
    position: relative;
  }
  
  .card-img-overlay {
    background: linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0));
  }
  
  .card-title {
    margin-bottom: 0;
  }
  
  .expand-arrow {
    font-size: 1.2rem;
  }
  
  .card-footer {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 5px;
  }
  
  .badge-primary {
    background-color: #007bff;
    color: white;
  }
  
  .btn-close {
    border: none;
    background-color: transparent;
    font-size: 1.5rem;
    line-height: 1;
    cursor: pointer;
  }
  </style>
  