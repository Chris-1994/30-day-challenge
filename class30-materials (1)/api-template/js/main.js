//Make an api request using async await
async function getACuteDogPhoto() {
  try {
    const res = await fetch("https://dog.ceo/api/breeds/image/random");
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}

getACuteDogPhoto();
