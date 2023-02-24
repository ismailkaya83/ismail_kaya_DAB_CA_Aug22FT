async function deleteSpecie(url, specieId) {
    let response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            id: specieId
        }),
    })
        .then((response) => {
            if (response.ok) {
                const resData = "Deleted specie";
                location.reload();
                return Promise.resolve(resData);
            }
            return Promise.reject(response);
        })
        .catch((error) => {
            alert(response.statusText);
        });
}