def arithmetic_arranger(problems, condition=False):
    arranged_problems = ""
    outputs = []
    if len(problems) > 5:
        return 'Error: Too many problems.'
    for problem in problems:
        problem = problem.split()
        if problem[1] != '+' and problem[1] != '-':
            return "Error: Operator must be '+' or '-'."
        try:
            problem[0] = int(problem[0])
            problem[2] = int(problem[2])
            problem[0] = str(problem[0])
            problem[2] = str(problem[2])
        except:
            return "Error: Numbers must only contain digits."
        if len(problem[0]) > 4 or len(problem[2]) > 4:
            return "Error: Numbers cannot be more than four digits."
        if condition == True:
            if len(problem[0]) >= len(problem[2]):
                outputs.append("  {}\n{} {}{}\n{}\n{}{}".format(problem[0], problem[1],
                                                          (len(problem[0]) - len(problem[2])) * " ", problem[2],
                                                          (len(problem[0]) + 2) * "-", ((len(problem[0]) + 2) - len(
                        str(eval(problem[0] + problem[1] + problem[2])))) * " ",
                                                          eval(problem[0] + problem[1] + problem[2])))
            else:
                outputs.append("  {}{}\n{} {}\n{}\n{}{}".format((len(problem[2]) - (len(problem[0]))) * " ", problem[0],
                                                          problem[1],
                                                          problem[2], (len(problem[2]) + 2) * "-",
                                                          ((len(problem[2]) + 2) - len(
                                                              str(eval(problem[0] + problem[1] + problem[2])))) * " ",
                                                          eval(problem[0] + problem[1] + problem[2])))
        else:
            if len(problem[0]) >= len(problem[2]):
                outputs.append("  {}\n{} {}{}\n{}".format(problem[0], problem[1], (len(problem[0]) - len(problem[2])) * " ", problem[2], (len(problem[0]) + 2) * "-"))
            else:
                outputs.append("  {}{}\n{} {}\n{}".format((len(problem[2]) - (len(problem[0]))) * " ", problem[0], problem[1], problem[2], (len(problem[2]) + 2) * "-"))
    if condition == True:
        for i in range(4):
            for output in outputs:
                lines = output.split('\n')
                arranged_problems += lines[i] + '    '
            arranged_problems = arranged_problems.rstrip()
            if i < 3:
                arranged_problems += '\n'
    else:
        for i in range(3):
            for output in outputs:
                lines = output.split('\n')
                arranged_problems += lines[i] + '    '
            arranged_problems = arranged_problems.rstrip()
            if i < 2:
                arranged_problems += '\n'
    return arranged_problems
