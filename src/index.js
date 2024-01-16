function displayPoem(response) {
  console.log("Poem generated");
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 50,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let promptInput = document.querySelector("#user-instructions");
  let apiKey = "feat836b3fcca8a0oba283a48d9a8f94";
  let context =
    "You are an AI Assistant that loves to write short poetry. Your mission is to generate a 4-line poem. Make sure to follow the user instructions.";
  let prompt = `Generate a poem about ${promptInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `Generating. . .  &nbsp;<span class="spin"> ⌛</span `;

  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
