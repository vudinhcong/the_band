//getElementById đi lấy cái header sử dụng js để nó lấy được cái thằng id bằng header
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
  //Lấy ra tất cả thẻ a có href chứ dấu thăng
  var menuItems = document.querySelectorAll('#nav li a[href*="#"]');
  //dùng vòng for lặp qua tất cả thẻ a đó
  for (var i = 0; i < menuItems.length; i++) {
    //menuIteam là cái thẻ a của chúng ta
    //lấy ra từng thẻ a
    var menuItem = menuItems[i];

    // console.log(menuItem.nextElementSibling);

    //lắng nghe click trên từng thẻ a
    //trong js khi click vào một đối tượng thì chính cái function trong ngoặc tròn sẽ trả lại một đối số thường gọi là event, khi click vào sự kiện nó sẽ trar về cho sự kiện click đó
    menuItem.onclick = function (event) {
      //   console.log(this);
      //khi click vào thẻ a thì thằng this sẽ trả về chính thẻ a đó
      //vì sao có cái điều kiện như vậy là vị cứ thằng nào là thẻ cha thì sau nó là thr ul có class là subnav
      var isParenMenu =
        //Nếu mà có anh chị em liền kề và anh chị em liền kề đó chứa cái lass là subnav thì chúng ta sẽ biết được đích thị thằng isParenMenu là menu cha
        //nextElementSibling anh chị em tiếp theo liền kề
        this.nextElementSibling &&
        this.nextElementSibling.classList.contains("subnav");
      //kiểm tra
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
//tạo ra một biết mới là buyBtn và cái biến mới này sẽ lưu lần lượt 3 cái nút
for (const buyBtn of buyBtns) {
  //khi click vào 3 cái nút thì cái hàm showBuyTickets được gọi
  buyBtn.addEventListener("click", showBuyTickets);
}

// nghe hành vi click vào button close
modalClose.addEventListener("click", hideBuyTickets);

modal.addEventListener("click", hideBuyTickets);

modalContainer.addEventListener("click", function (event) {
  event.stopPropagation();
});
