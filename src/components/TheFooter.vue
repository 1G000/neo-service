<script setup>
import UiContainer from './UiContainer.vue'
</script>

<template>
  <footer class="footer">
    <UiContainer class="footer__wrapper">
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
          height="400px"
          frameborder="1"
          allowfullscreen="true"
          style="position: relative"
        ></iframe>
      </div>
      <div class="footer__items">
        <div>
          <a href="/"
            ><img class="logo" src="../assets/logo.png" alt="logo"
          /></a>
        </div>
        <div class="footer__phone-number">+7 (981) 841-21-08</div>
        <div class="footer__right-side">
          <div class="footer__btn-container">
            <button class="footer__btn">
              <img src="/src/assets/XMLID_468_.png" alt="" />
              <span class="footer__btn-textcontent">WhatsApp</span></button
            ><button class="footer__btn">
              <img src="/src/assets/Layer2.png" alt="" />
              <span class="footer__btn-textcontent">Написать</span>
            </button>
          </div>
          <h3 class="footer__title">
            Ваша машина
            <span class="footer__title-accent">в надежных руках</span>
          </h3>
        </div>
      </div>
    </UiContainer>
  </footer>
</template>

<style scoped>
.footer {
  background-color: #1b1f26f0;
}
.footer__wrapper {
  max-width: 1440px;
  padding: 10px 80px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 60px;
}

.footer__items {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.logo {
  width: 160px;
  height: 183;
}

.footer__phone-number {
  font-family: Jockey One, serif;
  color: white;
  font-weight: 400;
  font-size: 64px;
}

.footer__right-side {
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
  justify-content: end;
}

.footer__title {
  font-family: Inter, serif;
  color: white;
  font-weight: 700;
  font-size: 40px;
  letter-spacing: -0.38px;
}

.footer__title-accent {
  color: #ffac12;
  font-weight: 700;
}

.footer__btn-container {
  background-color: #fcad1b;
  border-top-left-radius: 18px;
  border-top-right-radius: 18px;
  width: 504.25px;
  height: 58px;
  display: flex;
}

.footer__btn {
  width: 50%;
  height: 100%;
  display: flex;
  gap: 20px;
  background-color: transparent;
  align-items: center;
  justify-content: center;
  border: none;
  border-top-left-radius: 18px;
}

.footer__btn:nth-child(2) {
  border-top-left-radius: 0px;
  border-top-right-radius: 18px;
}

.footer__btn:hover {
  cursor: pointer;
  background-color: red;
}

.footer__btn-textcontent {
  font-family: Inter, serif;
  color: black;
  font-weight: 700;
  font-size: 20px;
}

/* .header__button {
  padding: 5px 20px;
  color: #000000;
  font-size: 36px;
  background-color: #fcad1b;
  border: none;
  border-top-right-radius: 24px;
  border-bottom-left-radius: 24px;
  font-family: 'Jockey One', sans-serif;
  font-weight: 400;
  transition: 0.5s;
  cursor: pointer;
}
.header__button:hover {
  color: #ffffff;
}
.navigation {
  display: flex;
  flex-direction: row;
  gap: 36px;
} */
</style>
