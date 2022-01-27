import subprocess

token = "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"

subprocess.call(['git', 'add', '-A'])
subprocess.call(['git', 'commit', '-m', '{}'.format("U")])
subprocess.call(['git', 'push', 'https://{}@github.com/Chris-1994/30-day-challenge'.format(token)])