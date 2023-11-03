function lengthOfLastWord(s) {
    // Votre code ici
    chaine= s.trim();
    if (chaine === "") {
      return 0;
    } else {
      const mots = chaine.split(" ");
      return mots[mots.length - 1].length;
    }
   
}
