class Recommend:
    def __init__(self, customerId, customerBasket, recommendedProduct, productDescription, probability, priceEstimation):
        self.customerId = customerId
        self.customerBasket = customerBasket
        self.recommendedProduct = recommendedProduct
        self.productDescription = productDescription
        self.probability = probability
        self.priceEstimation = priceEstimation