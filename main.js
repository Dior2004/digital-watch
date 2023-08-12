function currentTime() {
  let date = new Date();
  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();
  let period = "AM";

  if (hh > 12) {
    period = "PM";
    hh -= 12;
  }

  hh = hh < 10 ? "0" + hh : hh;
  mm = mm < 10 ? "0" + mm : mm;
  ss = ss < 10 ? "0" + ss : ss;

  let h1 = hh.toString().split("")[0];
  let h2 = hh.toString().split("")[1];
  let m1 = mm.toString().split("")[0];
  let m2 = mm.toString().split("")[1];
  let s1 = ss.toString().split("")[0];
  let s2 = ss.toString().split("")[1];

  firsthour.innerText = h1;
  secondhour.innerText = h2;
  firstmin.innerText = m1;
  secondmin.innerText = m2;
  firstsec.innerText = s1;
  secondsec.innerText = s2;

  document.querySelector("#periodDisplay").innerText = period;
  var t = setTimeout(function () {
    currentTime();
  }, 1000); // real time
}

currentTime();

// Mode

mode.addEventListener("click", darkMode);

function darkMode() {
  mode.classList.toggle("dark_mode");
  if (mode.classList.contains("dark_mode")) {
    document.body.style = "background: #000; transition: 0.3s";
    moon.style =
      "transform: rotate(720deg); opacity: 0;  position: absolute; transition: 0.5s;";
    sun.style =
      "transform: rotate(-180deg); opacity: 1;  position: absolute; transition: 0.5s";
    document.documentElement.style.setProperty("--background", "#171717");
    document.documentElement.style.setProperty("--main-font", "#0DFF17");
  } else {
    document.body.style = "background: #eee; transition: 0.3s";
    moon.style = "opacity: 1; position: absolute; transition: 0.5s;";
    sun.style = "opacity: 0; position: absolute; transition: 0.5s";
    document.documentElement.style.setProperty("--background", "#fff");
    document.documentElement.style.setProperty("--main-font", "#222");
  }
}
