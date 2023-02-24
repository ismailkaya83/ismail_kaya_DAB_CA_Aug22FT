async function updateSpecie(url, specieId) {
    let name = prompt("Update specie")
    let response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            id : specieId,
            Name: name
        }),
    })
        .then((response) => {
            if (response.ok) {
                const resData = "Updated specie";
                location.reload();
                return Promise.resolve(resData);
            }
            return Promise.reject(response);
        })
        .catch((error) => {
            alert(response.statusText);
        });
}