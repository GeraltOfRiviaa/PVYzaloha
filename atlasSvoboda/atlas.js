async function getData() {
    const url = "https://restcountries.com/v3.1/all";
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const json = await response.json();
        
        console.log(json);
    } catch (error) {
        console.error(error.message);
    }
}

getData();