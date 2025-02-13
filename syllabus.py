api_key = "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"
from bs4 import BeautifulSoup
import PyPDF2
import openai
import json
openai.api_key = api_key
def get_html(file_path):
    try:
        with open(file_path, 'r', encoding='utf-8') as file:
            html_content = file.read()
        
        # Parse HTML and extract text
        soup = BeautifulSoup(html_content, 'html.parser')
        text = soup.get_text(separator="\n")
        return text.strip()
    except Exception as e:
        return f"Error reading file: {e}"

def get_pdf(file_path):
    try:
        with open(file_path, 'rb') as pdf_file:
            reader = PyPDF2.PdfReader(pdf_file)
            text = ""
            for page in reader.pages:
                text += page.extract_text()
            return text.strip()
    except Exception as e:
        return f"Error reading PDF: {e}"

def get_response(syllabus):
    prompt = """
    Refer to the whole syllabus. Your response format should be the json format below. Don't add any other comments I will use json.parse to create a variable with it.
    {"course title":"~~","course code":"~~","important dates": {"YYYY/MM/DD": "event1", "YYYY/MM/DD": "event2" ...},"course overview":"~~","course email":"~~","marking scheme":{"percentage": "what", "percentage": "what" ...},"required materials":"~~","attendance policy":"~~","late submission policies":"~~"}
    """+syllabus
    completion = openai.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=[
            {"role": "system", "content": "You are my university course assistant. Please follow the format I've given you."},
            {
                "role": "user",
                "content":prompt,
            }
        ]
    )

    return(completion.choices[0].message.content)


syllabus = get_pdf("syllabus/pol.pdf")
json_variable = json.loads(get_response(syllabus))
print(json_variable["course title"])