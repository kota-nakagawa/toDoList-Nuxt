<template>
  <div>
    <div class="footer-top" />
    <div class="footer-second" />
    <div class="footer">
      <nuxt-link to="/">
        <div class="footer-contents">
          <img src="~/assets/footerImg/schedule.svg" alt="スケジュール" title="スケジュールアイコン">
        </div>
      </nuxt-link>
      <nuxt-link to="/list">
        <div class="footer-contents">
          <img src="~/assets/footerImg/list.svg" alt="リスト" title="リストアイコン">
        </div>
      </nuxt-link>
      <nuxt-link to="/settings">
        <div class="footer-contents">
          <img src="~/assets/footerImg/settings.svg" alt="設定" title="設定アイコン">
        </div>
      </nuxt-link>
    </div>
  </div>
</template>

<style scoped>
.footer-top {
  padding-top: 60px;
}
.footer-second {
  position: fixed;
  z-index: 10;
  bottom: 0;
  height: 50px;
  margin-bottom: 60px;
  width: 100%;
  max-width: 600px;
  background: linear-gradient(to bottom, rgba(245, 247, 250, 0), rgba(245, 247, 250, 1));
}
.footer {
  position: fixed;
  z-index: 10;
  bottom: 0;
  height: 60px;
  width: 100%;
  max-width: 600px;
  background-color: #F5F7FA;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.footer-contents {
  height: 40px;
  width: 40px;
}
img {
  height: 40px;
  width: 40px;
}
</style>
