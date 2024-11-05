<script setup>
import UiContainer from './UiContainer.vue'
import UiBlockTitle from './UiBlockTitle.vue'
import contactsData from '@/assets/data/contactsData'
import UiSection from './UiSection.vue'
</script>

<template>
  <UiSection class="contacts">
    <UiContainer class="contacts__content">
      <UiBlockTitle :width="'243px'" :title="'Контакты'" />
      <UiContainer class="contacts__contacts"
        ><h6 class="contacts__address">{{ contactsData.contacts.address }}</h6>
        <a
          class="contacts__button"
          :href="'tel:' + contactsData.contacts.telephone"
          >{{ contactsData.contacts.telephone }}</a
        >
      </UiContainer>
    </UiContainer>
    <UiContainer class="contacts__map">
      <div style="position: relative; overflow: hidden; width: 100%">
        <a
          href="https://yandex.ru/maps/2/saint-petersburg/?utm_medium=mapframe&utm_source=maps"
          style="color: #eee; font-size: 12px; position: absolute; top: 0px"
          >Санкт‑Петербург</a
        ><a
          href="https://yandex.ru/maps/2/saint-petersburg/house/chugunnaya_ulitsa_14zh/Z0kYdQFjT0EGQFtjfXV2d3xiZw==/?ll=30.363640%2C59.976011&utm_medium=mapframe&utm_source=maps&z=17"
          style="color: #eee; font-size: 12px; position: absolute; top: 14px"
          >Чугунная улица, 14Ж — Яндекс Карты</a
        ><iframe
          src="https://yandex.ru/map-widget/v1/?ll=30.363640%2C59.976011&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgoxNjE0NjU3MzE5Ek7QoNC-0YHRgdC40Y8sINCh0LDQvdC60YIt0J_QtdGC0LXRgNCx0YPRgNCzLCDQp9GD0LPRg9C90L3QsNGPINGD0LvQuNGG0LAsIDE00JYiCg266PJBFXDnb0I%2C&z=17&theme=dark"
          width="100%"
          height="450px"
          frameborder="0"
          allowfullscreen="true"
          style="position: relative"
        ></iframe>
      </div>
    </UiContainer>
  </UiSection>
</template>

<style scoped>
.contacts {
  background-color: #131313;
  background-image: url('@/assets/noise.png');
}
.contacts__content {
  max-width: 1440px;
  padding: 64px 100px 18px 100px;
  margin-left: auto;
  margin-right: auto;
}
.contacts__contacts {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 56px;
}
.contacts__address {
  font-size: 32px;
  font-weight: 400;
  line-height: 39.68px;
  letter-spacing: -1.5px;
  color: #ffffff;
}
.contacts__button {
  width: 400px;
  height: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-weight: 300;
  line-height: 22.32px;
  letter-spacing: -0.4px;
  border: 1px solid #ffac12;
  color: #ffffff;
  border-top-right-radius: 32px;
  border-bottom-left-radius: 32px;
  font-weight: 300;
  font-size: 18px;
  transition: 0.5s;
}
@media (hover: hover) {
  .contacts__button:hover {
    color: #ffac12;
  }
}
.contacts__map {
  max-width: 1440px;
  padding-top: 22px;
  margin-left: auto;
  margin-right: auto;
}
</style>
