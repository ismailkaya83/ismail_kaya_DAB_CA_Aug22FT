async function addTemperament(url) {
    let name = prompt("Add temperament")
    let response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            Name: name
        }),
    })
        .then((response) => {
            if (response.ok) {
                const resData = "Added temperament";
                location.reload();
                return Promise.resolve(resData);
            }
            return Promise.reject(response);
        })
        .catch((error) => {
            alert(response.statusText);
        });
}