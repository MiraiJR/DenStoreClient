<template>
  <header id="app__footer">
    <div class="container">
      <div id="contact-1">
        <div class="contact-item">
          <img
            src="https://denstore.vn/wp-content/uploads/2021/09/i-message.svg"
            alt=""
          />
          <div>
            <div>Hỗ trợ khách hàng</div>
            <div>0931.20.2222</div>
          </div>
        </div>
        <div class="contact-item">
          <img
            src="https://denstore.vn/wp-content/uploads/2021/09/messenger.svg"
            alt=""
          />
          <div>
            <div>Liên hệ facebook</div>
            <a href="https://www.facebook.com/">@DENSTORE</a>
          </div>
        </div>
      </div>
      <div id="contact-2">
        <div class="row">
          <div class="col-3 contact-2-item">
            <h1>Địa chỉ</h1>
            <ul>
              <li>
                <span>Chi Nhánh 1:</span>
                <span>122B Nguyễn Thái Học, TP Quy Nhơn</span>
              </li>
              <li>
                <span>Chi Nhánh 2:</span>
                <span>122B Nguyễn Thái Học, TP Quy Nhơn</span>
              </li>
            </ul>
          </div>
          <div class="col-3 contact-2-item">
            <h1>Hỗ trợ khách hàng</h1>
            <ul>
              <li>Chính sách bảo hành</li>
              <li>Thông tin thanh toán</li>
              <li>Chính sách trả góp</li>
              <li>Trade-in thu cũ lên đời</li>
            </ul>
          </div>
          <div class="col-3 contact-2-item">
            <h1>Thông tin nhanh</h1>
            <ul>
              <li>Tin tức</li>
              <li>Khuyến mãi</li>
            </ul>
          </div>
        </div>
      </div>
      <div id="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1937.5451646001075!2d109.21996!3d13.773426!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x80cff4a62bf9368b!2sDENstore%20-%20Iphone%20Quy%20Nh%C6%A1n!5e0!3m2!1svi!2sus!4v1665762007426!5m2!1svi!2sus"
          width="100%"
          height="300px"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <hr :style="{ marginTop: '2rem' }" class="line" />
      <div id="commit">
        <img
          src="https://denstore.vn/wp-content/uploads/2021/08/logo-Den-Store-Quy-Nhon-1024x844.png"
          alt=""
        />
        <div class="fs-15">
          DENstore - Iphone Quy Nhơn với nhiều năm kinh doanh trong lĩnh vực mua
          bán iphone likenew - newseal , kèm đội ngũ nhân viên tester + kĩ thuật
          nhiều năm kinh nghiệm phong phú trong nghề sẽ mang đến quý khách những
          sản phẩm chất lượng nhất !
        </div>
      </div>
    </div>
    <div id="footer">
      <div class="container">
        <div>Copyright 2022 © DEN STORE.</div>
      </div>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style lang="css" scoped>
ul > li {
  list-style: circle;
}
</style>
