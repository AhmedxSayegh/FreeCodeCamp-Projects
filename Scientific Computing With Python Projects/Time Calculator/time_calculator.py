def add_time(start, duration, day=None):
    start_hour = int(start[:start.index(":")])
    start_min = int(start[start.index(':') + 1:start.index(" ")])
    day_period = start.split()[-1].lower()
    dur_hour = int(duration.split(":")[0])
    dur_min = int(duration.split(":")[-1])
    periods = ['am', 'pm']
    week_days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']
    hours = 0
    mins = 0
    semi_days = 0

    mins += start_min + dur_min
    if mins >= 60:
        mins = mins - 60
        hours += 1

    hours += start_hour + dur_hour
    if hours >= 12:
        semi_days = hours // 12
        hours = hours % 12
    if day_period == 'am':
        count = 0
    else:
        count = 1
    days_passed = (count + semi_days) // 2
    period = periods[(periods.index(day_period) + semi_days) % 2]
    if day is not None:
        day = ', ' + (week_days[(week_days.index(day.lower()) + days_passed) % 7]).capitalize()
    else:
        day = ''
    if hours == 0:
        hours = 12
    if days_passed == 0:
        return ('{}:{:02d} {}{}'.format(hours, mins, period.upper(), day))
    elif days_passed == 1:
        return ('{}:{:02d} {}{} (next day)'.format(hours, mins, period.upper(), day))
    else:
        return ('{}:{:02d} {}{} ({} days later)'.format(hours, mins, period.upper(), day, days_passed))
        
