import json
from unittest import result
from models.get_data import load_data_customers, load_data_recommend

from flask_cors import CORS, cross_origin
from flask import Flask, request, jsonify

app = Flask(__name__)
CORS(app)

@app.route("/api/predict")
@cross_origin()
def predict():
    customer_id = request.args.get('customer_id', type=str)
    customer = get_customer(customer_id)
    product_recommended = get_product_recommended(customer_id)

    return jsonify({
        "cluster": customer.getCluster(), 
        "product_recommended": product_recommended,
        "customer": {
            "customer_id": customer.customerId,
            "count": customer.count,
            "min": customer.min,
            "max": customer.max,
            "mean": customer.mean,
            "sum": customer.sum,
            "categ0": customer.categ0,
            "categ1": customer.categ1,
            "categ2": customer.categ2,
            "categ3": customer.categ3,
            "categ4": customer.categ4,
            "min_recency": customer.min_recency,
            "max_recency": customer.max_recency
        }
    })

def get_customer(customer_id):
    header, lst = load_data_customers()
    del header

    for itm in lst: 
        if itm.customerId == customer_id:
            return itm
    
    return None

def get_product_recommended(customer_id): 
    header, lst = load_data_recommend()
    del header

    result = []
    for itm in lst: 
        if itm.customerId == customer_id: 
            result.append(itm.productDescription)

    return result
    
if __name__ == "__main__":
    app.run(debug=True)