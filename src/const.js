 export function convertHTMLEntity(text) {
  const span = document.createElement("span");

  return text.replace(/&[#A-Za-z0-9]+;/gi, (entity, position, text) => {
    span.innerHTML = entity;
    return span.innerText;
  });
}
