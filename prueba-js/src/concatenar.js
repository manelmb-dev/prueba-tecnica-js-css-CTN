export default (json) => {
  const capitalize = (text) =>
    (text || "")
      .toLowerCase()
      .trim()
      .split(" ")
      .map((word) => word[0].toUpperCase() + word.slice(1))
      .join(" ");

  return json
    .map((person) => {
      const fullName = [capitalize(person.nombre), capitalize(person.apellido)];
      if (person.apellido2) fullName.push(capitalize(person.apellido2));
      return fullName.join(" ") + ".";
    })
    .join("<br>");
};