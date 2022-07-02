var header = document.getElementById("header");
var mobileMenu = document.getElementById("mobile-menu");
var headerHeight = header.clientHeight;

// Đóng/ mở mobile menu
mobileMenu.onclick = function () {
  // console.log(header.clientHeight);
  var isClosed = header.clientHeight === headerHeight;
  if (isClosed) {
    //nếu đang đóng bẫm vào nó sẽ thành auto
    header.style.height = "auto";
  } else {
    header.style.height = null;
  }

  //tự động đóng khi chọn menu
  var menuItems = document.querySelectorAll('#nav li a[href*="#"]');
  for (var i = 0; i < menuItems.length; i++) {
    //lấy ra từng thẻ a
    var menuItem = menuItems[i];

    // console.log(menuItem.nextElementSibling);

    //lắng nghe click trên từng thẻ a
    menuItem.onclick = function (event) {
      //   console.log(this);
      var isParenMenu =
        this.nextElementSibling &&
        this.nextElementSibling.classList.contains("subnav");
      if (isParenMenu) {
        //preventDefault là bỏ qua cái mặc định
        event.preventDefault();
      } else {
        // khi click vào thẻ a ấn menu đi
        header.style.height = null;
      }
    };
  }
};

const buyBtns = document.querySelectorAll(".js-buy-tikets");
const modal = document.querySelector(".js-modal");
const modalContainer = document.querySelector(".js-modal-container");
const modalClose = document.querySelector(".js-modal-close");

//Hàm hiển thị modal mua vẹ́ (thêm class open vào modal )
function showBuyTickets() {
  modal.classList.add("open");
}

//Hàm ẩn modal mua vẹ́ (gỡ bỏ class open của modal)
function hideBuyTickets() {
  modal.classList.remove("open");
}

// Lặp qua từng thẻ button và nghe hành vi click
for (const buyBtn of buyBtns) {
  buyBtn.addEventListener("click", showBuyTickets);
}

// nghe hành vi click vào button close
modalClose.addEventListener("click", hideBuyTickets);

modal.addEventListener("click", hideBuyTickets);

modalContainer.addEventListener("click", function (event) {
  event.stopPropagation();
});
