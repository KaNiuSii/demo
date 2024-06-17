# Bazaar riddle
#
# Snakey is going to Bazaar, to do some shopping. Every shop has the same products but different prices.
#
#
# 1. Find the lowest price you will pay for all the products on the shopping list assuming you can buy infinite amount
#    of products in every shop.
#
#    #  Shopping List eg:   #
#    |----------------------|
#    |orange:1              |
#    |apple:2               |
#    |...                   |
#    |----------------------|
#
#    Meaning that Snakey has to buy one orange and two apples.
#
#    #  Shops Input eg:     #
#    |----------------------|
#    |#23                   |
#    |orange:25             |
#    |apple:15              |
#    |                      |
#    |#24                   |
#    |orange:50             |
#    |apple:35              |
#    |...                   |
#    |----------------------|
#
#    Meaning that shop of index 23 has oranges that costs 25 each and apples costing 15 each.
#    And shop of index 24 has oranges that costs 50 each and apples costing 35 each.
#    So the answer (if these are only 2 shops) is 1 * 25 + 2 * 15 = 55
#                                                   ^        ^
#                                                 orange   apples
#    because they are cheapest in store nr.23.
#
# 2. And number of shops you'll need to visit to buy all of them.
#
#    So if shopping list is:
#
#    |----------------------|
#    |orange:1              |
#    |apple:2               |
#    |...                   |
#    |----------------------|
#
#    And shops are:
#
#    #  Shops Input eg:     #
#    |----------------------|
#    |#0                    |
#    |orange:25             |
#    |apple:90              |
#    |                      |
#    |#1                    |
#    |orange:50             |
#    |apple:35              |
#    |                      |
#    |#2                    |
#    |orange:105            |
#    |apple:110             |
#    |----------------------|
#
#    The answer is 2 because you want to buy orange at shop nr.0 and apples at shop nr.1
#
# !  Every shop has every product available

import random

products = [
    'orange', 'apple', 'banana', 'grape', 'watermelon', 'blueberry', 'strawberry', 'pear', 'pineapple', 'kiwi',
    'mango', 'peach', 'plum', 'cherry', 'apricot', 'nectarine', 'grapefruit', 'lemon', 'lime', 'pomegranate',
    'tangerine', 'blackberry', 'raspberry', 'cranberry', 'papaya', 'fig', 'date', 'guava', 'lychee', 'coconut',
    'cantaloupe', 'honeydew', 'persimmon', 'quince', 'starfruit', 'dragonfruit', 'jackfruit', 'durian',
    'kumquat', 'mulberry', 'boysenberry', 'gooseberry', 'elderberry', 'loganberry', 'soursop', 'yuzu', 'plantain',
    'mandarin', 'breadfruit', 'rambutan', 'tamarind'
]


class Shop:
    def __init__(self, index):
        self.index = index
        self.product_prices = {product: random.randint(1, 640000) for product in products}

    def get_product_prices(self):
        return self.product_prices

    def __str__(self):
        res = f'#{self.index}\n'
        for product, price in self.product_prices.items():
            res += f'{product}:{price}\n'
        return res


class BazaarRiddle:
    def __init__(self):
        self.shops = []
        self.shopping_list = {}

    def create_an_input(self, shops_count):
        self.create_shops(shops_count)
        self.create_shopping_list()
        return self.str_shops(), self.str_shopping_list()

    def str_shopping_list(self):
        res = ''
        for product, price in self.shopping_list.items():
            res += f'{product}:{price}\n'
        return res

    def str_shops(self):
        res = ''
        for s in self.shops:
            res += str(s)
        return res

    def create_shops(self, shops_count):
        self.shops = [Shop(i) for i in range(shops_count)]

    def create_shopping_list(self):
        pr = random.sample(products, k=random.randint(15, 20))
        self.shopping_list = {product: random.randint(1, 5) for product in pr}

    def part1(self):
        total_cost = 0

        for product, quantity in self.shopping_list.items():
            min_price = float('inf')

            for shop in self.shops:
                price = shop.get_product_prices()[product]
                if price < min_price:
                    min_price = price

            total_cost += min_price * quantity

        return total_cost

    def part2(self):
        visited_shops = set()

        for product, _ in self.shopping_list.items():
            min_price = float('inf')
            best_shop = None

            for shop in self.shops:
                price = shop.get_product_prices()[product]
                if price < min_price:
                    min_price = price
                    best_shop = shop

            visited_shops.add(best_shop.index)

        num_shops_to_visit = len(visited_shops)
        return num_shops_to_visit
