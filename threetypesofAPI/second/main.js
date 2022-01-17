document.querySelector("button").addEventListener("click", search);

function search() {
  let url = "https://thatcopy.pw/catapi/rest/";

  fetch(url).then((res) =>
    res.json().then((data) => {
      document.querySelector("p").innerText = data.webpurl;
      document.querySelector("img").src = data.url;
    })
  );
}
