//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/

document.querySelector("button").addEventListener("click", getImage);

function getImage() {
  let picDate = document.querySelector("input").value.replace(" ", "-");

  let url = `https://api.nasa.gov/planetary/apod?api_key=u0mqosBTRA22eFnLvIs2cbDOUdRq6cMMchtbz4ny&date=${picDate}`;

  fetch(url).then((res) =>
    res.json().then((data) => {
      document.querySelector("h3").innerText = data.explanation;
      document.querySelector("h2").innerText = data.title;
      document.querySelector("img").src = data.hdurl;
      // 2021-12-12
    })
  );
}
