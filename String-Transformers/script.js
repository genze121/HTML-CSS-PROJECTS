const inputElement = document.querySelector(".transformer");
const displayContainer = document.querySelector(".display-container");
const lowercaseBoxElement = document.querySelector(".lowercase-box");
const uppercaseBoxElement = document.querySelector(".uppercase-box");
const trimBoxElement = document.querySelector(".trim-box");
const snakeBoxElement = document.querySelector(".snake-box");
const pascalBoxElement = document.querySelector(".pascal-box");
const kebabBoxElement = document.querySelector(".kebab-box");
const camelBoxElement = document.querySelector(".camel-box");
const lowercaseTag = document.querySelector(".lowercase-tag");
const uppercaseTag = document.querySelector(".uppercase-tag");
const trimTag = document.querySelector(".trim-tag");
const pascalTag = document.querySelector(".pascal-tag");
const snakeTag = document.querySelector(".snake-tag");
const kebabTag = document.querySelector(".kebab-tag");
const camelTag = document.querySelector(".camel-tag");

inputElement.value = "this is a normal sentence to transform";

const stringTransformerArrayData = [
  {
    type: "Lowercase",
    value: inputElement.value
  },
  {
    type: "Uppercase",
    value: inputElement.value
  },
  {
    type: "Trim",
    value: inputElement.value
  },
  {
    type: "PascalCase",
    value: inputElement.value
  },
  {
    type: "SnakeCase",
    value: inputElement.value
  },
  {
    type: "KebabCase",
    value: inputElement.value
  },
  {
    type: "CamelCase",
    value: inputElement.value
  }
];

const stringTransformer = () => {
  const transformerArray = stringTransformerArrayData.map(transformer => {
    if (transformer.type === "Lowercase") {
      lowercaseBoxElement.innerHTML = transformer.value.toLowerCase();
    } else if (transformer.type === "Uppercase") {
      uppercaseBoxElement.innerHTML = transformer.value.toUpperCase();
    } else if (transformer.type === "Trim") {
      const arr = transformer.value.split(" ");
      const trimArray = arr.map(item => item.trim());
      trimBoxElement.innerHTML = trimArray.join("");
    } else if (transformer.type === "PascalCase") {
      const arr = transformer.value.split(" ");
      const pascalArray = arr.map(
        item => item[0].toUpperCase() + item.slice(1).toLowerCase()
      );
      pascalBoxElement.innerHTML = pascalArray.join("");
    } else if (transformer.type === "SnakeCase") {
      const arr = transformer.value.split(" ");
      const snakeArray = arr.map(item => item.toLowerCase());
      snakeBoxElement.innerHTML = snakeArray.join("_");
    } else if (transformer.type === "KebabCase") {
      const arr = transformer.value.split(" ");
      const kebabArray = arr.map(item => item.toLowerCase());
      kebabBoxElement.innerHTML = kebabArray.join("-");
    } else {
      const arr = transformer.value.split(" ");
      const camelArray = arr.map((item, index) => {
        if (index === 0) {
          return item.toLowerCase();
        } else {
          return item[0].toUpperCase() + item.slice(1).toLowerCase();
        }
      });

      camelBoxElement.innerHTML = camelArray.join("");
    }
  });

  lowercaseBoxElement.appendChild(lowercaseTag);
  uppercaseBoxElement.appendChild(uppercaseTag);
  trimBoxElement.appendChild(trimTag);
  pascalBoxElement.appendChild(pascalTag);
  snakeBoxElement.appendChild(snakeTag);
  kebabBoxElement.appendChild(kebabTag);
  camelBoxElement.appendChild(camelTag);
  displayContainer.appendChild(lowercaseBoxElement);
  displayContainer.appendChild(uppercaseBoxElement);
  displayContainer.appendChild(trimBoxElement);
  displayContainer.appendChild(pascalBoxElement);
  displayContainer.appendChild(snakeBoxElement);
  displayContainer.appendChild(kebabBoxElement);
  displayContainer.appendChild(camelBoxElement);

  return transformerArray;
};

// function caller
stringTransformer();
