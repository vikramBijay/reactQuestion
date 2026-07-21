import json
import re

with open(r'c:\Users\vikra\OneDrive\Desktop\react 100 Q interview\index.html', 'r', encoding='utf-8') as f:
    content = f.read()

match = re.search(r'(<script id="qa-data" type="application/json">)(.*?)(</script>)', content, re.DOTALL)
if match:
    json_str = match.group(2)
    try:
        data = json.loads(json_str)
        print("JSON parse successful. Count:", len(data))
    except Exception as e:
        print("JSON parse error:", e)
else:
    print("Not found.")
