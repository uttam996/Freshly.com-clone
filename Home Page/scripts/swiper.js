var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


  let login_showData = JSON.parse(localStorage.getItem("Login_details"));
  console.log('login_showData:', login_showData);

  let login = document.querySelector(".login");
  let signup = document.querySelector(".signup>button");
  if (login_showData!=null) {
    login.innerHTML = login_showData.name;
    signup.innerText = 'Log Out'; 
    signup.setAttribute('class','logout');
  }
  let logout = document.querySelector('.logout');
  logout.addEventListener("click",(event) => {
    // event.preventDefault();
    localStorage.setItem('Login_details',JSON.stringify(null));
    window.location.href = 'signup.html';
  });

