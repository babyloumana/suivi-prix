console.log("Le site de suivi des prix est chargé !");

const db = firebase.firestore();

document.getElementById("add-product-form").addEventListener("submit", async (e) => {
    e.preventDefault();

    const productName = document.getElementById("product-name").value;
    const productUrl = document.getElementById("product-url").value;

    await db.collection("products").add({
        name: productName,
        url: productUrl,
        createdAt: new Date()
    });

    alert("Produit ajouté !");
    document.getElementById("add-product-form").reset();
});

