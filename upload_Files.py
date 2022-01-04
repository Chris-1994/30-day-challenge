import subprocess
import os

import schedule

def push_daily_code_to_github():
    token = os.getenv("github_token")
    subprocess.call(['git', 'add', '-A'])
    subprocess.call(['git', 'commit', '-m', '{}'.format("Daily code")])
    subprocess.call(
        ['git', 'push', 'https://{}@github.com/Chris-1994/30-day-challenge'.format(token)])


schedule.every(1).days.do(push_daily_code_to_github)


while True:
    schedule.run_pending()