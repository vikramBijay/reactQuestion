import re

with open("python_qa.md", "r", encoding="utf-8") as f:
    content = f.read()

lines = content.split('\n')
questions = []
current_q = None
current_a = []

for line in lines:
    stripped = line.strip()
    is_q = False
    if re.match(r'^(@\w+\s*)?>{1,3}\s*(.*)', stripped):
        is_q = True
        q_text = re.sub(r'^(@\w+\s*)?>{1,3}\s*', '', stripped)
    elif stripped.lower() in [
        "what is the difference between a script and a module?",
        "what is none and how is it used?",
        "are strings mutable in python?",
        "what is a nested list?",
        "what is a dictionary in python?",
        "can dictionary keys be any data type?",
        "what is exception handling?",
        "why is the with statement used for file handling?",
        "what does the import statement do?",
        "what is the difference between an iterator and an iterable?"
    ]:
        is_q = True
        q_text = stripped
        
    if is_q and not stripped.startswith("> **"):
        if current_q:
            questions.append({
                "question_en": current_q['q'],
                "answer_en": '\n'.join(current_a).strip()
            })
        current_q = {'q': q_text.replace(' ›', '').strip()}
        current_a = []
    else:
        if current_q:
            current_a.append(line)
            
if current_q:
    questions.append({
        "question_en": current_q['q'],
        "answer_en": '\n'.join(current_a).strip()
    })

print(questions[0])
