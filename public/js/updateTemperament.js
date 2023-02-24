async function updateTemperament(url, temperamentId) {
    let name = prompt("Update temperament")
    let response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            id : temperamentId,
            Name: name
        }),
    })
        .then((response) => {
            if (response.ok) {
                const resData = "Updated temperament";
                location.reload();
                return Promise.resolve(resData);
            }
            return Promise.reject(response);
        })
        .catch((error) => {
            alert(response.statusText);
        });
}