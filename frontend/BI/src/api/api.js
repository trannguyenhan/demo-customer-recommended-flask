import axios from 'axios';

export async function predict(id) {
    const headers = {
        "Content-Type": "application/json",
    };

    return new Promise(async resolve => {
        await axios.get("http://127.0.0.1:5000/api/predict?customer_id="+id, headers)
            .then(response => {
                // alert(JSON.stringify(response.data));
                return resolve({
                    success: true,
                    data: response.data,
                    error: null,
                });
            })
            .catch(error => {
                alert(JSON.stringify("Mã khách hàng không tồn tại"));
                return resolve({
                    success: false,
                    data: null,
                    error: error.response,
                });
            });
    });
}

