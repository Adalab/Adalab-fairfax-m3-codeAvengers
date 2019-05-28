const fetchData = card => {
return (
    fetch('https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/', {
        method: 'POST',
        body: JSON.stringify(card),
        headers: {
            'content-type': 'application/json'
        },
        })
    .then(response => response.json())
)
}

export {fetchData};
