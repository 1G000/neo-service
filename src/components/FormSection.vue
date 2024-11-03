<script setup>
import formData from '@/assets/data/formData.js'
import UiContainer from './UiContainer.vue'
</script>

<template>
  <UiContainer class="form-section">
    <form class="form">
      <h3 class="form__title">{{ formData.form.title }}</h3>
      <p class="form__text">{{ formData.form.subtitle }}</p>
      <UiContainer class="form__inputs-wrapper">
        <input
          :type="item.type"
          v-for="item in formData.form.formItems"
          :key="item.key"
          :class="'form__inputs form__input-' + item.key"
          :placeholder="item.placeholder"
          required
        />
        <button type="submit" class="form__button">
          {{ formData.form.buttonText }}
        </button>
      </UiContainer>
    </form>
  </UiContainer>
</template>

<style scoped>
.form-section {
  max-width: 1440px;
  padding: 100px 80px;
  margin-left: auto;
  margin-right: auto;
}
.form {
  padding: 55px 15px;
  background-color: #ffffff;
  border: 8px solid #ffac12;
}
.form__title {
  font-size: 32px;
  font-weight: 400;
  line-height: 42.56px;
  text-align: center;
}
.form__text {
  font-size: 16px;
  font-weight: 400;
  line-height: 22.88px;
  letter-spacing: -0.2px;
  text-align: center;
  padding-top: 24px;
  padding-bottom: 50px;
}
.form__inputs-wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

.form__inputs {
  width: 250px;
  height: 64px;
  background-color: #f2f6fa;
  border: none;
  border-radius: 8px;
  padding-left: 15px;
  font-family: 'Unbounded', sans-serif;
}

.form__input-0::placeholder,
.form__input-1::placeholder,
.form__input-2::placeholder {
  background-position: 15px center;
  background-repeat: no-repeat;
  padding: 45px;
  font-family: 'Unbounded', sans-serif;
  color: #7e868e;
}
.form__input-0::placeholder {
  background-image: url('../assets/user.png');
}
.form__input-1::placeholder {
  background-image: url('../assets/phone.png');
}
.form__input-2::placeholder {
  background-image: url('../assets/wrench.png');
}
.form__inputs:focus,
.form__inputs:active {
  background-image: none;
  outline: #ffac12;
  border-color: #ffac12;
}
.form__button {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: 400;
  line-height: 32px;
  color: #ffffff;
  background-color: #ffac12;
  width: 279px;
  height: 64px;
  border-bottom-left-radius: 32px;
  border-top-right-radius: 32px;
  transition: 0.5s;
}
@media (hover: hover) {
  .form__button:hover {
    background-color: #2b2d2e;
    color: #ffac12;
  }
}
</style>
