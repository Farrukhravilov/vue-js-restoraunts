<script>
export default {
  name: "Modal",
  props: {
    size: String,
  },
  emits: ["open", "close"],
  data() {
    return {
      open: false,
      timeout: null,
    };
  },
  computed: {
    modal_size() {
      return String(this.$props.size || "md").toLowerCase();
    },
  },
  methods: {
    toggleModal() {
      if (this.open) this.closeModal();
      else this.openModal();
    },
    openModal() {
      this.open = true;
      this.$emit("open");
    },
    closeModal() {
      this.open = false;
      this.$emit("close");
    },
  },
  mounted() {
    window.addEventListener("click", (event) => {
      const element = event.target;
      if (element.className == "v-backdrop")
        if (element.closest(".v-backdrop") == this.$el) this.open = false;
    });
  },
};
</script>

<template>
  <Transition name="v-toggle-modal">
    <div class="v-backdrop" v-if="open">
      <div class="v-modal" :class="modal_size">
        <div class="worket-under-btns" @click="closeModal()">
          <button>
            <!-- <img src="@/assets/images/svg/x-icon.svg" alt="" /> -->
          </button>
        </div>
        <!-- <button class="v-close" @click="closeModal()">&#10006;</button> -->
        <div class="v-modal-header">
          <slot name="header"></slot>
        </div>
        <div class="v-modal-body">
          <slot name="body"></slot>
        </div>
        <div class="v-modal-footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style lang="scss">
.v-backdrop {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(5px);
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
}

.v-modal {
  background: #fff;
  padding: 27px 28px;
  border-radius: 5px;
  height: 850px;
  width: 700px;
  /* animation: crd-anid-del 0.5s forwards; */
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 15;
  /* animation: del-anim-modal 0.8s forwards; */
}

.v-modal.sm {
  width: 320px;
}

.v-modal.md {
  background: #f9fff3 !important;
  width: 583px;
}

.v-modal.lg {
  width: 768px;
}

.v-close {
  position: absolute;
  top: 0;
  right: -100px;
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.v-modal-header {
  padding: 1rem 1rem 0 1rem;
}

.v-modal-body {
  padding: 1rem 1rem 1rem 1rem;
}

.v-modal-footer {
  padding: 0 1rem 1rem 1rem;
  text-align: end;
}

.v-toggle-modal-enter-active {
  animation: toggleBackdrop 0.3s;
}

.v-toggle-modal-leave-active {
  animation: toggleBackdrop 0.3s reverse;
}

.v-toggle-modal-enter-active .v-modal {
  animation: toggleModal 0.3s;
}

.v-toggle-modal-leave-active .v-modal {
  animation: toggleModal 0.3s reverse;
}

@keyframes toggleBackdrop {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@keyframes toggleModal {
  from {
    opacity: 0;
    translate: 0 -30px;
  }

  to {
    opacity: 1;
    translate: 0 0;
  }
}

@media (max-width: 320px) {
  .v-modal.sm,
  .v-modal.md,
  .v-modal.lg {
    width: 90%;
  }
}

@media (max-width: 425px) {
  .v-modal.md,
  .v-modal.lg {
    width: 90%;
  }
}

@media (max-width: 768px) {
  .v-modal.lg {
    width: 90%;
  }
}
</style>
