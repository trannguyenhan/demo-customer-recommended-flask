class Customer: 
    def __init__(self, customerId, count, min, max, mean, sum, categ0, categ1, categ2, categ3, categ4, min_recency, max_recency, cluster):
        self.customerId = customerId
        self.count = count
        self.min = min
        self.max = max
        self.mean = mean
        self.sum = sum
        self.categ0 = categ0
        self.categ1 = categ1
        self.categ2 = categ2
        self.categ3 = categ3 
        self.categ4 = categ4
        self.min_recency = min_recency
        self.max_recency = max_recency
        self.cluster = self.toRootCluster(int(cluster))

    def getCluster(self):
        clusterMapping = {
            0: "Đã mua hàng từ rất lâu, chi tiêu và tần suất mua hàng ít",
            1: "Bắt đầu mua hàng khoảng thời gian gần đây",
            2: "Đã mua hàng trong một khoảng thời gian khá dài, nhưng chi tiêu và tần suất mua hàng ít",
            3: "Đã không mua hàng trong khoảng thời gian khá dài, tuy nhiên chi tiêu trung bình khá lớn",
            4: "Đã không mua hàng trong khoảng thời gian khá dài, tuy nhiên chi tiêu trung bình khá lớn",
            5: "Đã mua hàng trong một khoảng thời gian khá dài, nhưng chi tiêu và tần suất mua hàng ít",
            6: "Nhóm khách hàng trung thành, tần suất mua hàng khá đều đặn, nhưng chi tiêu không quá nhiều",
            7: "Nhóm khách hàng trung thành, tần suất mua hàng rất đều đặn nhưng chi tiêu không quá nhiều",
            8: "Nhóm khách hàng trung thành, chi tiêu nhiều, tần suất mua hàng đều đặn",
            9: "Nhóm khách hàng trung thành, chi tiêu nhiều, tần suất mua hàng đều đặn",
            10: "Nhóm khách hàng trung thành, chi tiêu nhiều, tần suất mua hàng đều đặn"
        }

        return clusterMapping[self.cluster]
    
    def toRootCluster(self, cluster):
        clusterRoot = {
            3: 0,
            1: 1,
            5: 2,
            7: 3,
            6: 4,
            0: 5,
            2: 6,
            8: 7,
            10: 8,
            4: 9,
            9: 10
        }

        return clusterRoot[cluster]