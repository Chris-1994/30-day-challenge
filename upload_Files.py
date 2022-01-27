import subprocess

token = ""

subprocess.call(['git', 'add', '-A'])
subprocess.call(['git', 'commit', '-m', '{}'.format("U")])
subprocess.call(['git', 'push', 'https://{}@github.com/Chris-1994/30-day-challenge'.format(token)])