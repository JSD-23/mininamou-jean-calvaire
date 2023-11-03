function maxProfit(prix, prix_size) {
    // Votre code ici
    let profitMax = 0;
    let prixMinimum = prix[0];

    for (let i = 1; i < prix_size; i++) {
        profitMax = Math.max(profitMax, prix[i] - prixMinimum);
        prixMinimum = Math.min(prixMinimum, prix[i]);
    }

    return profitMax;
}


