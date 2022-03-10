class Category:
    def __init__(self, name=''):
        self.name = name
        self.balance = 0
        self.ledger = []
        self.spent = 0
        self.percent = 0
        self.chart = ''

    def __str__(self):
        lines = ''
        for operation in self.ledger:
            lines += (operation['description'][:23] + ' ' * 30)[:23]
            amount = '{:.02f}'.format(float(operation['amount']))
            lines += ('{}{}'.format(' ' * 30, amount[:7]))[-7:] + '\n'
        output = '{}\n{}{}'.format(self.name.center(30, '*'), lines, ('Total: {:.02f}'.format(self.balance)))
        return output

    def deposit(self, amount, description=''):
        self.ledger.append({"amount": amount, "description": description})
        self.balance += amount

    def withdraw(self, amount, description=''):
        if self.check_funds(amount) == False:
            return False
        else:
            self.balance = self.balance - amount
            self.spent += amount
            self.ledger.append({"amount": amount * -1, "description": description})
            return True

    def get_balance(self):
        return self.balance

    def transfer(self, amount, category):
        if self.check_funds(amount) == False:
            return False
        else:
            self.withdraw(amount, 'Transfer to {}'.format(category.name))
            category.deposit(amount, 'Transfer from {}'.format(self.name))
            return True
    def check_funds(self, amount):
        if amount > self.balance:
            return False
        else:
            return True

def create_spend_chart(categories):
    output = 'Percentage spent by category\n'
    labels = ''
    whole = 0
    longest_cat = []
    for category in categories:
        whole += category.spent
        longest_cat.append(len(category.name))
    longest_cat = sorted(longest_cat)[-1]
    for i in range(101)[::-10]:
        labels += '{:3d}{}'.format(i, '| \n')
    labels += '    -'
    for i in range(longest_cat):
        labels += '\n     '
    for category in categories:
        category.percent = int(category.spent * 10 // whole * 10)
    for category in categories:
        for i in range(101)[::-10]:
            if category.percent >= i:
                category.chart += 'o  \n'
            else:
                category.chart += '   \n'
        category.chart += '---\n'
        for letter in category.name:
            category.chart += letter + '  \n'
        category.chart = category.chart[:-1]
        if longest_cat - len(category.name) > 0:
            category.chart += '\n   ' * (longest_cat - len(category.name))

    for count, line in enumerate(labels.split('\n')):
        output += line
        for category in categories:
            output += category.chart.split('\n')[count]
        output += '\n'
    return output[:-1]
