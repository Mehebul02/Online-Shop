export const getData = async (endPoint: string) => {
    const response = await fetch(endPoint, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json"
        }
    });
    const data = await response.json();
    return data;

}