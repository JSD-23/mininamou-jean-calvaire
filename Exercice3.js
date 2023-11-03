class LRUCache {
    constructor(capacite) {
        this.capacite = capacite;
        this.cache = new Map(); 
    }

    get(cle) {
        if (this.cache.has(cle)) {
            const valeur = this.cache.get(cle);
            this.cache.delete(cle);
            this.cache.set(cle, valeur);
            return valeur;
        } else {
            return -1; 
        }
    }

    put(cle, valeur) {
        if (this.cache.has(cle)) {
            this.cache.delete(cle);
        } else if (this.cache.size >= this.capacite) {
            const premiereCle = this.cache.keys().next().value;
            this.cache.delete(premiereCle);
        }

        this.cache.set(cle, valeur);
    }

    free() {
        this.cache.clear(); 
    }

}


