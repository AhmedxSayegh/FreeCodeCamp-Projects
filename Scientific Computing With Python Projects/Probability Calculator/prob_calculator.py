import copy
import random


class Hat:

    def __init__(self, **balls):
        self.contents = []
        for ball, count in balls.items():
            for i in range(count):
                self.contents.append(ball)
        self.main_contents = copy.deepcopy(self.contents)

    def draw(self, count):
        drawn_balls = []
        if count > len(self.contents):
            return self.contents
        for i in range(count):
            ball = self.contents[random.randint(0, len(self.contents) - 1)]
            self.contents.remove(ball)
            drawn_balls.append(ball)
        return drawn_balls


def experiment(hat, expected_balls, num_balls_drawn, num_experiments):
    true_count = 0
    for i in range(num_experiments):
        hat.contents = copy.deepcopy(hat.main_contents)
        checker = 0
        drawn_balls = hat.draw(num_balls_drawn)
        for ball, count in expected_balls.items():
            if drawn_balls.count(ball) >= count:
                checker += 1
        if checker == len(expected_balls):
            true_count += 1
    return true_count / num_experiments
