import re

with open(r'c:\Users\vikra\OneDrive\Desktop\react 100 Q interview\index.html', 'r', encoding='utf-8') as f:
    content = f.read()

match = re.search(r'<script>(.*?)</script>', content, re.DOTALL)
if match:
    with open('test.js', 'w', encoding='utf-8') as f:
        f.write(match.group(1))
    print("JS extracted.")
else:
    print("No <script> found.")
