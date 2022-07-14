import csv
from models.customer import Customer
from models.recommend import Recommend

def load_data_recommend():
    file = open("models/data/recommend.csv", "r")
    csvreader = csv.reader(file)

    header = next(csvreader)
    
    lst = []
    for row in csvreader: 
        item = Recommend(row[1], row[2], row[3], row[4], row[5], row[6])
        lst.append(item)
    
    return header, lst

def load_data_customers():
    file = open("models/data/customers.csv", "r")
    csvreader = csv.reader(file)

    header = next(csvreader)

    lst = []
    for row in csvreader: 
        item = Customer(row[0], row[1], row[2], row[3], row[4], row[5], row[6], 
                            row[7], row[8], row[9], row[10], row[11], row[12], row[13])
        lst.append(item)
    
    return header, lst