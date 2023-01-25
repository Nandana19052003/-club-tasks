n, m, a = map(int, input().split())
flagstones_needed = ((n + a - 1) // a) * ((m + a - 1) // a)
print(flagstones_needed)

