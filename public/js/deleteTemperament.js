async function deleteTemperament(url, temperamentId) {
    let response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            id: temperamentId
        }),
    })
        .then((response) => {
            if (response.ok) {
                const resData = "Deleted temperament";
                location.reload();
                return Promise.resolve(resData);
            }
            return Promise.reject(response);
        })
        .catch((error) => {
            alert(response.statusText);
        });
}