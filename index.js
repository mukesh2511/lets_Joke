const jokes = document.querySelector("#jokes");
const jokebtn = document.querySelector("#jokebtn");

const generatejokes = async () => {
  try {
    const res = await fetch(" https://icanhazdadjoke.com/slack");

    const data = await res.json();
    console.log(data.attachments[0].fallback);

    jokes.innerHTML = data.attachments[0].fallback;
    console.log(data.attachments[0].fallback);
  } catch (err) {
    console.log(`the error is ${err}`);
  }
};
jokebtn.addEventListener("click", generatejokes);
generatejokes();
