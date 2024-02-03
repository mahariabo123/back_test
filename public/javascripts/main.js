function supprimerVehicule(vehiculeId) {
    // Envoyer la requête de suppression avec AJAX
    fetch('/users/delete_vehicule', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ id: vehiculeId })
    })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        console.log(data.message);
        // Actualiser la page ou effectuer d'autres actions si nécessaire
        window.location.reload();
      } else {
        console.error(data.message);
        // Gérer les erreurs côté client si nécessaire
      }
    })
    .catch(error => {
      console.error('Erreur lors de la requête de suppression :', error);
      // Gérer les erreurs côté client si nécessaire
    });
  }