async function adopt(url, animalId) {
    let response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            id: animalId
        }),
    })
        .then((response) => {
            if (response.ok) {
                const resData = "Adopted";
                location.reload();
                return Promise.resolve(resData);
            }
            return Promise.reject(response);
        })
        .catch((error) => {
            alert(response.statusText);
        });
}

async function cancelAdoption(url, animalId) {
    let response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            id: animalId
        }),
    })
        .then((response) => {
            if (response.ok) {
                const resData = "Deleted";
                location.reload();
                return Promise.resolve(resData);
            }
            return Promise.reject(response);
        })
        .catch((error) => {
            alert(response.statusText);
        });
}