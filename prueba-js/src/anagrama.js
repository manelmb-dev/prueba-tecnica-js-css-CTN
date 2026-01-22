export default (word1, word2) => {
  const formatWord = (word) =>
    (word || "")
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[\W_]/g, "")
      .split("")
      .sort()
      .join("");

  return formatWord(word1) === formatWord(word2);
};

// Entiendo que los casos en los que hay signos (por ejemplo, una coma) como "[Anagrama]" y "[Amar, gana]" también deben considerarse anagramas.